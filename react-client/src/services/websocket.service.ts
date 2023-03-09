export type ActionTypes =
  'create-room'
  | 'visit-room'
  | 'join-room'
  | 'leave-room'
  | 'send-message'
  | 'receive-message'
  | 'receive-chat'
  | 'receive-rooms'


export interface IWebsocketBody {
  action: ActionTypes,
  payload: any
}

export class SocketService {
  static client: WebSocket;

  constructor() {
    SocketService.client = new WebSocket('ws://localhost:6100')
  }


  send(body: IWebsocketBody) {
    try {
      SocketService.client.send(JSON.stringify(body))
    } catch (e) {
      console.log(e)
    }
  }

  onMessage(callback: (evt: MessageEvent<any>) => any) {
    try {
      SocketService.client.onmessage = callback
    } catch (e) {
      console.log(e)
    }
  }

  get isReady(): boolean {
    return SocketService.client.readyState === 1
  }
}

export const useSocketService = new SocketService()
