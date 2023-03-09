import React from "react";
import { SocketService, useSocketService } from "../services/websocket.service";

export const WebsocketsContext = React.createContext<SocketService>(useSocketService);
