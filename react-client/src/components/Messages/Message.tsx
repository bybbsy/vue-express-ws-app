import { Box, ListItem, Text } from "@chakra-ui/react";
import { IChatMessage } from "../../pages/ChatPage";

type MessageProps = {
  message: IChatMessage
}

export function Message({ message }: MessageProps) {
  return (
    <ListItem
      my='2'
      roundedTop='md'
      display='flex'
      height='auto'
      justifyContent={ message.isMy ? 'flex-end' : 'flex-start'}
      >
      <Box
        maxWidth='50%'
        bg='gray.100'
        boxShadow='md'
        paddingY='2'
        paddingX='2'
        rounded='md'
        cursor='pointer'
        >
        <Box display='flex' columnGap='2' alignItems='center'>
          <Text color='blue.400'>{message.authorName}</Text>
          <Text color='gray.400' fontSize='small'>{message.dateSent.toString()}</Text>
        </Box>
        <Box>
          <Text textAlign='left'>{message.text}</Text>
        </Box>
      </Box>
    </ListItem>
  )
}
