import { CloseIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef, useState } from "react";

interface RoomInputProps {
  searchValue: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClear: () => void
}

export function RoomInput({ searchValue, onChange, onClear }: RoomInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputClearing = () => {
    onClear();
    inputRef.current?.focus()
  };

  return (
    <InputGroup>
      <Input
        ref={inputRef}
        value={searchValue}
        onChange={onChange}
        pr='4.5rem'
        type='text'
        placeholder='Search for a room'
      />
      <InputRightElement top='unset'>
        <IconButton
          size='sm'
          aria-label='Clear room search input'
          icon={<CloseIcon />}
          onClick={handleInputClearing}
        />
      </InputRightElement>
    </InputGroup>
  )
}
