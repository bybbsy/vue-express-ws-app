import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export function MainPage() {
  return (
    <Box className="App" bg='gray.100'>
      <header>
        <h1>A-Chat</h1>
      </header>
      <Outlet/>
    </Box>
  )
}
