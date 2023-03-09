import { CloseIcon } from "@chakra-ui/icons";
import { Box, IconButton, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { IRoomItem, RoomLits } from "../components/Rooms/RoomList";
import { WebsocketsContext } from "../contexts/websocket.context";

export function RoomsPage() {
  const ws = useContext(WebsocketsContext);
  const [rooms, setRooms] = useState<IRoomItem[] | []>([]);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const handleInputClearing = () => {
    setSearchValue('');
    inputRef.current?.focus()
  };

  const handleOnMessageEvent = (evt: any) => {
    const data = JSON.parse(evt.data)
    console.log('data', data)
    if (data.rooms) {
      setRooms(data.rooms)
    }
  }

  useEffect(() => {
    if (ws.isReady) {
      ws.send({
        action: 'receive-rooms',
        payload: {}
      })
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
        <InputGroup paddingY='2'>
          <Input
            ref={inputRef}
            value={searchValue}
            onChange={handleInputChange}
            pr='4.5rem'
            type='text'
            placeholder='Search for a room'
          />
          <InputRightElement top='unset'>
            <IconButton
              size='sm'
              aria-label='Clear room search input'
              icon={<CloseIcon />}
              onClick={handleInputClearing} />
          </InputRightElement>
        </InputGroup>
        <RoomLits rooms={rooms as IRoomItem[]} />
      </Stack>
    </Box>
  )
}
