import { io, Socket } from "socket.io-client";

export type ActionTypes =
  'create-room'
  | 'visit-room'
  | 'join-room'
  | 'leave-room'
  | 'send-message'
  | 'receive-message'
  | 'receive-chat'
  | 'receive-rooms'

export type ResponeActionTypes =
  'create-room-accepted'
  | 'receive-chat-accepted'
  | 'receive-rooms-accepted'

export interface IWebsocketBody {
  action: ActionTypes,
  payload: any
}

export class SocketService {
  client: WebSocket;

  constructor() {
    this.client = new WebSocket('ws://localhost:6100')
  }

  send(body: IWebsocketBody) {
    try {
      this.client.send(JSON.stringify(body))
    } catch (e) {
      console.log(e)
    }
  }

  onMessage(callback: (evt: MessageEvent<any>) => any) {
    try {
      this.client.addEventListener('message', callback)
    } catch (e) {
      console.log(e)
    }
  }

  off<T extends keyof WebSocketEventMap>(type: T, callback: (this: WebSocket, ev: WebSocketEventMap[T]) => any) {
    try {
      this.client.removeEventListener(type, callback);
    } catch (e) {
      console.log(e)
    }
  }

  get isReady(): boolean {
    return this.client.readyState === 1
  }
}

export const useSocketService = new SocketService()
