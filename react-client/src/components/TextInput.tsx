import { Input } from "@chakra-ui/react";
import { useRef, useState } from "react";

export function TextInput() {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);


  return (
    <Input
      ref={inputRef}
      value={searchValue}
      onChange={handleInputChange}
      pr='4.5rem'
      type='text'
      placeholder='Search for a room'
    />
  )
}
