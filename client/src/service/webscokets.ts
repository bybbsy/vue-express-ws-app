// export const socketService = new WebSocket('ws://localhost:6100');

export type ActionTypes = 'create-room' | 'visit-room' | 'join-room' | 'leave-room' | 'send-message' | 'receive-message' | 'receive-chat' | 'receive-rooms'


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
      this.client.onmessage = callback
    } catch (e) {
      console.log(e)
    }
  }
}

export const useSocketService = new SocketService()
