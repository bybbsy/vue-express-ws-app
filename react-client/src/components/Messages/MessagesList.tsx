import { List } from "@chakra-ui/react";
import { Message, MessageType } from "./Message";

export function MessagesList() {
  const messages: MessageType[] = [
    {
      isMy: false,
      text: 'Hey dude',
      author: 'Jeff the boi',
      datetimeSend: '17:00',
    },
    {
      isMy: true,
      text: 'Hey',
      author: 'Me',
      datetimeSend: '17:01',
    },
    {
      isMy: false,
      text: 'How are you doing? How are you doingHow are you doing How are you doing How are you doing',
      author: 'Jeff the boi',
      datetimeSend: '17:02',
    },
    {
      isMy: false,
      text: 'Hey dude',
      author: 'Jeff the boi',
      datetimeSend: '17:00',
    },
    {
      isMy: true,
      text: 'Hey',
      author: 'Me',
      datetimeSend: '17:01',
    },
    {
      isMy: false,
      text: 'How are you doing? How are you doingHow are you doing How are you doing How are you doing',
      author: 'Jeff the boi',
      datetimeSend: '17:02',
    },
    {
      isMy: false,
      text: 'Hey dude',
      author: 'Jeff the boi',
      datetimeSend: '17:00',
    },
    {
      isMy: true,
      text: 'Hey',
      author: 'Me',
      datetimeSend: '17:01',
    },
    {
      isMy: false,
      text: 'How are you doing? How are you doingHow are you doing How are you doing How are you doing',
      author: 'Jeff the boi',
      datetimeSend: '17:02',
    },
    {
      isMy: false,
      text: 'Hey dude',
      author: 'Jeff the boi',
      datetimeSend: '17:00',
    },
    {
      isMy: true,
      text: 'Hey',
      author: 'Me',
      datetimeSend: '17:01',
    },
    {
      isMy: false,
      text: 'How are you doing? How are you doingHow are you doing How are you doing How are you doing',
      author: 'Jeff the boi',
      datetimeSend: '17:02',
    },
    {
      isMy: false,
      text: 'Hey dude',
      author: 'Jeff the boi',
      datetimeSend: '17:00',
    },
    {
      isMy: true,
      text: 'Hey',
      author: 'Me',
      datetimeSend: '17:01',
    },
    {
      isMy: false,
      text: 'How are you doing? How are you doingHow are you doing How are you doing How are you doing',
      author: 'Jeff the boi',
      datetimeSend: '17:02',
    }
  ]
  return (
    <List
      roundedTop='md'
      padding='2'>
      {messages.map(msg => <Message message={msg}/>)}
    </List>
  )
}
