import { Button } from "@chakra-ui/react"
import React from "react"

interface SendMessageButtonProps {
  handleSendMessage: () => void
}

export const SendMessageButton = React.memo(({
  handleSendMessage
}: SendMessageButtonProps) => {
  return (
    <Button
      colorScheme='blue'
      onClick={handleSendMessage}
    >
      Отправить
    </Button>
  )
})
