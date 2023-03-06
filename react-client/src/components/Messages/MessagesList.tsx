import { List } from "@chakra-ui/react";
import { Message } from "./Message";

export function MessagesList() {
  return (
    <List padding='2'>
      <Message />
    </List>
  )
}
