import { Box, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { RoomInput } from "../components/Rooms/Input";
import { IRoomItem, RoomLits } from "../components/Rooms/RoomList";
import { WebsocketsContext } from "../contexts/websocket.context";

export function RoomsPage() {
  const ws = useContext(WebsocketsContext);
  const [searchValue, setSearchValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
  const handleInputClear = () => setSearchValue('');

  const [rooms, setRooms] = useState<IRoomItem[] | []>([]);

  const handleOnMessageEvent = (evt: any) => {
    const data = JSON.parse(evt.data);

    if (data.rooms) {
      setRooms(data.rooms)
    }
  }

  useEffect(() => {
    if (ws.isReady) {
      ws.send({ action: 'receive-rooms' })
    }

    ws.onMessage(handleOnMessageEvent)

    return () => {
      ws.off('message', handleOnMessageEvent);
    }
  }, [])

  return (
    <Box
      display='flex'
      justifyContent='center'
      height='95%'
      py='2'
    >
      <Stack
        spacing={3}
        py='2'
        px='2'
        bg='white'
        rounded='md'
        width='850px'
      >
        <RoomInput
          searchValue={searchValue}
          onChange={handleInputChange}
          onClear={handleInputClear}
          />
        <RoomLits rooms={rooms as IRoomItem[]} />
      </Stack>
    </Box>
  )
}
