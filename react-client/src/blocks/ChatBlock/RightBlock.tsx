import { CheckIcon } from "@chakra-ui/icons";
import { Box, GridItem, List, ListItem, Text } from "@chakra-ui/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { WebsocketsContext } from "../../contexts/websocket.context";
import { useParams } from "react-router-dom";

export function RightBlock() {
  const [users, setUsers] = useState([]);
  const ws = useContext(WebsocketsContext);
  const email = localStorage.getItem('email');
  const { id } = useParams();

  const handleOnUsersResponse = (evt: any) => {
    const data = JSON.parse(evt.data);

    if (data.users) {
      console.log('hey');

      setUsers(data.users);
    }
  }

  const cachedUsersList = useMemo(() => users, [users])

  useEffect(() => {
    ws.send({
      action: 'receive-users',
      payload: { roomId: id, email }
    })

    ws.onMessage(handleOnUsersResponse);


    return () => {
      ws.off('message', handleOnUsersResponse);
    }
  }, [])

  return (
    <Box>
      <Text>Users in room</Text>
      <GridItem colSpan={1} bg='white' height='350px' rounded='md' padding='2' overflowY='scroll'>
        <List spacing='2'>
          {cachedUsersList.map(user => {
            return (
              <ListItem
                key={user}
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
                <Text>{user}</Text>
              </ListItem>
            )
          })}
        </List>
      </GridItem>
    </Box>
  )
}
