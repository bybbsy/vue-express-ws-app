import { Box, Code, GridItem } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageInput } from "../../components/Chat/MessageInput";
import { SendMessageButton } from "../../components/Chat/SendMessageButton";
import { MessagesList } from "../../components/Messages/MessagesList";
import { IRoomItem } from "../../components/Rooms/RoomList";
import { WebsocketsContext } from "../../contexts/websocket.context";


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


export function CenterBlock() {
  const ws = useContext(WebsocketsContext);
  const { id } = useParams();
  const [chatMessages, setChatMessages] = useState<IChatMessage[]>([]);
  const [inputValue, setInputvalue] = useState('');

  const email = localStorage.getItem('email') || '';

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputvalue(value);
  }, [inputValue]);

  const handleSendMessage = useCallback(() => {
    ws.send({
      action: 'send-message',
      payload: {
        room: {
          '_id': id
        },
        message: {
          authorName: email,
          dateSent: new Date,
          text: inputValue
        }
      }
    })
    setInputvalue('');
  }, [inputValue]);

  useEffect(() => {
    const handleOnReceiveChatEvent = (evt: any) => {
      const data = JSON.parse(evt.data);

      if (data.chatMessages) {
        const chatMessages = data.chatMessages.messages.map((msg: IChatMessage) => ({
          ...msg,
          isMy: msg.authorName === email
        }))
        setChatMessages(chatMessages);
      }
    }

    if (ws.isReady) {
      ws.send({
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
    <GridItem
      colStart={2}
      colEnd={5}
      rounded='md'
      display='flex'
      flexDirection='column'
      overflowY='hidden'
    >
      <Box
        display='flex'
        alignItems='center'>
        User:
        <Code
          ml='2'
          variant='solid'
          colorScheme='blue'

          fontSize='sm'
        >
          {email}
        </Code>
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
        <MessageInput
          inputValue={inputValue}
          onInput={handleInputChange}
        />
        <SendMessageButton
          handleSendMessage={handleSendMessage}
        />
      </Box>
    </GridItem>
  )
}
