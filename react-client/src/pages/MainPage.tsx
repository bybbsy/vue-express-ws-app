import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/shared/Header";
import { WebsocketsContext } from "../contexts/websocket.context";
import { SocketService } from "../services/websocket.service";

export function MainPage() {

  return (
    <Box className="App" bg='gray.100'>
      <Header />
      <Outlet />
    </Box>
  )
}
