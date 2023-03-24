import { List } from "@chakra-ui/react";
import { Message } from "./Message";
import React, {useEffect} from "react";
import { IChatMessage } from "../../blocks/ChatBlock/CenterBlock";

interface IMessageListProps {
  messages: IChatMessage[]
}

export const MessagesList = React.memo(({
  messages
}: IMessageListProps) => {
  let listRef = React.useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if(listRef.current && messages.length > 0) {
      const children = listRef.current?.children;
      children[children?.length - 1]?.scrollIntoView({ behavior: 'smooth'});
    }
  }, [messages])

  return (
    <List
      ref={listRef}
      roundedTop='md'
      padding='2'>
      {messages && messages.map(msg => <Message key={msg._id} message={msg}/>)}
    </List>
  )
})
