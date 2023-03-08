import React from "react";
import { SocketService } from "../services/websocket.service";

export const WebsocketsContext = React.createContext<SocketService | null>(null);
