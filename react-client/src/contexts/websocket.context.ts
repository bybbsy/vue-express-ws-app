import React from "react";
import { useSocketService } from "../services/websocket.service";
import { SocketServiceInterface } from "../services/interfaces";

export const WebsocketsContext = React.createContext(useSocketService);
