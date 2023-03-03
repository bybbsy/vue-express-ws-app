import { IRoomItem } from "./RoomList"
import { Box, ListItem, Text } from "@chakra-ui/react";

interface RoomItemProps {
  room: IRoomItem
}

export function RoomItem({
  room,
}: RoomItemProps) {
  return (
    <ListItem
      height='auto'
      paddingX='5'
      paddingY='1'
      _hover={{
        bg: '#dce1e6'
      }}
      borderBottom="1px solid #dce1e6">
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='flex-start'
        textAlign='left'
      >
        <Text
          fontSize='larger'
        >{room.name}</Text>
        <Text
          marginY='2'>{room.users.length}/{room.size}</Text>
      </Box>
    </ListItem>
  )
}
