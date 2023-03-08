import { IRoomItem } from "./RoomList"
import { Badge, Box, Button, ListItem, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface RoomItemProps {
  room: IRoomItem
}

export function RoomItem({
  room,
}: RoomItemProps) {
  const isJoinedRoom = true;

  return (
    <ListItem
      height='auto'
      paddingX='5'
      paddingY='1'
      _hover={{
        bg: '#dce1e6'
      }}
      borderBottom="1px solid #dce1e6">
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='flex-start'
          textAlign='left'
        >
          <Text
            fontSize='larger'
          >
            {room.name}
          </Text>
          <Box
            marginY='2'>
            <Badge
              variant='solid'
              colorScheme='blue'
              fontSize='sm'
              >
              {room.users.length} / {room.size}
            </Badge>
          </Box>
        </Box>
        <Stack direction='row'>
          {isJoinedRoom &&
            <Link
              to={'/rooms/' + room._id}

            >
              <Button colorScheme='blue'>Перейти</Button>
            </Link>}
          {isJoinedRoom
            ? <Button
              colorScheme='red'>
              Выйти
            </Button>
            : <Button
              colorScheme='green'>
              Присоединиться
            </Button>
          }
        </Stack>
      </Stack>
    </ListItem>
  )
}
