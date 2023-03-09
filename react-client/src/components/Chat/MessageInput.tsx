import React, { useState } from "react";
import { Textarea } from '@chakra-ui/react';

export function MessageInput () {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value);

  return (
    <Textarea
      resize='none'
      value={inputValue}
      onInput={handleInputChange}
    />
  )
}
