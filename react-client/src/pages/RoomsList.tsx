import { CloseIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RoomLits } from "../components/Rooms/RoomList";

export function RoomsList() {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // const handleRoomSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => inputRef = event.target.value;

  const handleInputClearing = () => {
    setSearchValue('');
    inputRef.current?.focus()
  };

  return (
    <main className='main'>
      <section className='room__section'>
        <div className="main__container">
          <Stack spacing={3}>
            <InputGroup paddingY='2'>
              <Input
                ref={inputRef}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
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
        </div>
      </section>
    </main>
  )
}
