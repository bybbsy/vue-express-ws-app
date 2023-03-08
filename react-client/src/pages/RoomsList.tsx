import { CloseIcon } from "@chakra-ui/icons";
import { Box, IconButton, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RoomLits } from "../components/Rooms/RoomList";

export function RoomsList() {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const handleInputClearing = () => {
    setSearchValue('');
    inputRef.current?.focus()
  };

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
        <RoomLits />
      </Stack>
    </Box>
  )
}
