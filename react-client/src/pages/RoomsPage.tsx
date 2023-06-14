import { Badge, Box, Button, Code, IconButton, Stack, Text } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CreateRoomModal } from "../components/CreateRoomModal";
import { RoomInput } from "../components/Rooms/Input";
import { IRoomItem, RoomList } from "../components/Rooms/RoomList";
import { WebsocketsContext } from "../contexts/websocket.context";
import { AddIcon, CloseIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleModal } from "../store/modal/reducers";
import { setEmail } from "../store/user/reducers";

export function RoomsPage() {
  const ws = useContext(WebsocketsContext);
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
  const handleInputClear = () => setSearchValue('');

  const handleToggleModal = () => {
    dispatch(toggleModal())
  }

  const [rooms, setRooms] = useState<IRoomItem[] | []>([]);

  const email = localStorage.getItem('email') || null;

  const handleOnMessageEvent = (evt: any) => {
    const data = JSON.parse(evt.data);

    if (data.rooms) {
      setRooms(data.rooms)
    }
  }

  const memo = useMemo(() => [...rooms].sort((a, b) => (b.users.length - a.users.length)), [rooms])

  const handleSearchRoom = () => {
    alert('🛠️ [WIP] A search feautre will be implemented soon')
  }

  useEffect(() => {

    if (email) {
      dispatch(setEmail(email));
    }

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
      minHeight='95%'
      py='2'
      bg='gray.100'
    >
      <Stack
        spacing={3}
        py='2'
        px='2'
        bg='white'
        rounded='md'
        width='850px'
      >
        <Box>
          <Box
            display='flex'
            alignItems='center'
            my='2'>
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
            paddingY='2'
            display='flex'
            alignItems='center'
            gap='2'
          >
            <RoomInput
              searchValue={searchValue}
              onChange={handleInputChange}
              onClear={handleInputClear}
            />
            <Button
              colorScheme='teal'
              type='submit'
              onClick={handleSearchRoom}
            >
              Search
            </Button>
            <Button
              colorScheme='green'
              type='submit'
              onClick={handleToggleModal}
            >
              Create room
            </Button>
            {/* <IconButton

              rounded='3xl'
              colorScheme='green'
              aria-label="toggle modal button"
              onClick={handleToggleModal}
              icon={<AddIcon />}
            /> */}
          </Box>

          <Box>
            <Text as='p'>Rooms list</Text>
          </Box>
        </Box>
        <RoomList rooms={memo as IRoomItem[]} />
      </Stack>

      {<CreateRoomModal handleToggleModal={handleToggleModal} />}
    </Box>
  )
}
