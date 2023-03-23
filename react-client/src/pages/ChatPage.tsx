import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, GridItem, List, ListItem, Textarea, Text, Stack } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MessagesList } from "../components/Messages/MessagesList";
import { IRoomItem } from "../components/Rooms/RoomList";
import { WebsocketsContext } from "../contexts/websocket.context";
import { MessageInput } from '../components/Chat/MessageInput';

export interface IChatState {
  currentRoom: IRoomItem | null
  joinedRooms: IRoomItem[]
  currentChat: ICurrentChat | null
}

export interface ICurrentChat {
  _id: string | null,
  messages: IChatMessage[]
}

export interface IChatMessage {
  isMy: boolean,
  authorName: string,
  dateSent: Date,
  text: string,
  _id: string
}


export function ChatPage () {
  const ws = useContext(WebsocketsContext)!;
  const { id } = useParams();
  const [chatMessages, setChatMessages] = useState<IChatMessage[] | []>([]);
  const currUser = localStorage.getItem('email') || '';

  const handleSendMessage = () => {
    ws.send({
      action: 'send-message',
      payload: {
        room: {
          '_id': id
        },
        message: {
          authorName: currUser,
          dateSent: new Date,
          text: 'asdas'
        }
      }
    })
  }

  const handleOnReceiveChatEvent = (evt: any) => {
    const data = JSON.parse(evt.data);
    console.log("created")
    if(data.chatMessages) {
      const chatMessages = data.chatMessages.messages.map((msg: IChatMessage) => ({
        ...msg,
        isMy: msg.authorName === currUser
      }))
      setChatMessages(chatMessages);
    }
  }

  useEffect(() => {
    if(ws.isReady) {
      ws.send( {
        action: 'receive-chat',
        payload: {
          room: {
            '_id': id
          }
        }
      })
    }

    ws.onMessage(handleOnReceiveChatEvent);

    return () => {
      ws.off('message', handleOnReceiveChatEvent);
    }
  }, [])

  return (
    <Grid
      py='2'
      width='full'
      height='95%'
      templateRows='1fr'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      paddingX='5'
    >
      <GridItem
        colStart={1}
        colEnd={2}>
        <Stack
          direction='row'
          justifyContent='flex-end'
        >
          <Button
            colorScheme='red'>
            Выйти
          </Button>
          <Link to='/rooms'>
            <Button
              colorScheme='blue'>
              Назад
            </Button>
          </Link>
        </Stack>
      </GridItem>
      <GridItem
        colStart={2}
        colEnd={5}
        rounded='md'
        display='flex'
        flexDirection='column'
        overflowY='hidden'
      >
        <Box>
          <p>Room id: {id}</p>
        </Box>
        <Box
          bg='white'
          flex='1 1 100%'
          roundedTop='md'
          overflowY='scroll'
        >
          <MessagesList messages={chatMessages} />
        </Box>
        <Box
          display='flex'
          alignItems='center'
          gap={2}
          bg="#fafbfc"
          padding='5'
          roundedBottom='md'
        >
          <MessageInput />
          <Button
            colorScheme='blue'
            onClick={handleSendMessage}
          >
            Отправить
          </Button>
        </Box>
      </GridItem>
      <GridItem colSpan={1} bg='white' height='350px' rounded='md' padding='2' overflowY='scroll'>
        <List spacing='2'>
          <ListItem
            cursor='pointer'
            padding='2'
            rounded='md'
            alignItems='center'
            display='flex'
            justifyContent='space-between'
            _hover={{
              bg: 'gray.100'
            }}
          >
            <Text>User Jeff</Text>
            <Box>
              <CheckIcon />
            </Box>
          </ListItem>
        </List>
      </GridItem>
    </Grid>
  )
}
