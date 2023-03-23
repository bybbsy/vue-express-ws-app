import React, { useState } from "react";
import { Textarea } from '@chakra-ui/react';



export function MessageInput () {
  return (
    <Textarea
      resize='none'
      value={inputValue}
      onInput={handleInputChange}
    />
  )
}
