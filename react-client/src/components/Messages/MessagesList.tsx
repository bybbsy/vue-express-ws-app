import { List } from "@chakra-ui/react";
import { IChatMessage } from "../../pages/ChatPage";
import { Message } from "./Message";
import React, {useEffect} from "react";

interface IMessageListProps {
  messages: IChatMessage[]
}

export function MessagesList({
  messages
}: IMessageListProps) {
  // const messages: MessageType[] = [
  //   {
  //     id: '1',
  //     isMy: false,
  //     text: 'Hey dude',
  //     author: 'Jeff the boi',
  //     datetimeSend: '17:00',
  //   },
  //   {
  //     id: '2',
  //     isMy: true,
  //     text: 'Hey',
  //     author: 'Me',
  //     datetimeSend: '17:01',
  //   },
  //   {
  //     id: '3',
  //     isMy: false,
  //     text: 'How are you doing? How are you doingHow are you doing How are you doing How are you doing',
  //     author: 'Jeff the boi',
  //     datetimeSend: '17:02',
  //   },
  //   {
  //     id: '4',
  //     isMy: false,
  //     text: 'Hey dude',
  //     author: 'Jeff the boi',
  //     datetimeSend: '17:00',
  //   },
  //   {
  //     id: '5',
  //     isMy: true,
  //     text: 'Hey',
  //     author: 'Me',
  //     datetimeSend: '17:01',
  //   },
  //   {
  //     id: '6',
  //     isMy: false,
  //     text: 'How are you doing? How are you doingHow are you doing How are you doing How are you doing',
  //     author: 'Jeff the boi',
  //     datetimeSend: '17:02',
  //   },
  //   {
  //     id: '7',
  //     isMy: false,
  //     text: 'Hey dude',
  //     author: 'Jeff the boi',
  //     datetimeSend: '17:00',
  //   },
  //   {
  //     id: '8',
  //     isMy: true,
  //     text: 'Hey',
  //     author: 'Me',
  //     datetimeSend: '17:01',
  //   },
  //   {
  //     id: '9',
  //     isMy: false,
  //     text: 'How are you doing? How are you doingHow are you doing How are you doing How are you doing',
  //     author: 'Jeff the boi',
  //     datetimeSend: '17:02',
  //   },
  //   {
  //     id: '10',
  //     isMy: false,
  //     text: 'Hey dude',
  //     author: 'Jeff the boi',
  //     datetimeSend: '17:00',
  //   },
  //   {
  //     id: '11',
  //     isMy: true,
  //     text: 'Hey',
  //     author: 'Me',
  //     datetimeSend: '17:01',
  //   },
  //   {
  //     id: '12',
  //     isMy: false,
  //     text: 'How are you doing? How are you doingHow are you doing How are you doing How are you doing',
  //     author: 'Jeff the boi',
  //     datetimeSend: '17:02',
  //   },
  //   {
  //     id: '13',
  //     isMy: false,
  //     text: 'Hey dude',
  //     author: 'Jeff the boi',
  //     datetimeSend: '17:00',
  //   },
  //   {
  //     id: '14',
  //     isMy: true,
  //     text: 'Hey',
  //     author: 'Me',
  //     datetimeSend: '17:01',
  //   },
  //   {
  //     id: '15',
  //     isMy: false,
  //     text: 'How are you doing? How are you doingHow are you doing How are you doing How are you doing',
  //     author: 'Jeff the boi',
  //     datetimeSend: '17:02',
  //   }
  // ]

  let listRef = React.useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if(listRef.current) {
      const children = listRef.current?.children;

      children[children?.length - 1]?.scrollIntoView({ behavior: 'smooth'});
    }
  }, [messages])

  console.log("here")
  return (
    <List
      ref={listRef}
      roundedTop='md'
      padding='2'>
      {messages && messages.map(msg => <Message key={msg._id} message={msg}/>)}
    </List>
  )
}
