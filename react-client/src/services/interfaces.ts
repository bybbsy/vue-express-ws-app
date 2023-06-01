export type ActionTypes =
  'create-room'
  | 'visit-room'
  | 'join-room'
  | 'leave-room'
  | 'send-message'
  | 'receive-message'
  | 'receive-chat'
  | 'receive-rooms'
  | 'receive-users'

export interface IWebsocketBody {
  action: ActionTypes,
  payload?: any
}

export interface SocketServiceInterface {
  send: (body: IWebsocketBody) => void | never,
  onMessage: (callback: (evt: MessageEvent<any>) => any) => void | never,
  // off: <T extends keyof EventsMap>(type: T, callback: (evt: MessageEvent<any>) => any) => void | never,
  // off: (...args: any) => void
  isReady: boolean
}
