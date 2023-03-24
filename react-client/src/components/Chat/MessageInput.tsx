import React, { useState } from "react";
import { Textarea } from '@chakra-ui/react';


type MessageInputProps = {
  inputValue: string,
  onInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

// export function MessageInput ({
//   inputValue,
//   onInput
// }: MessageInputProps) {
//   return (
//     <Textarea
//       resize='none'
//       value={inputValue}
//       onInput={onInput}
//     />
//   )
// }

export const MessageInput = React.memo(({
  inputValue,
  onInput
}: MessageInputProps) => {
  return (
    <Textarea
      resize='none'
      value={inputValue}
      onInput={onInput}
    />
  )
})
