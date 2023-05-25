import { IWebsocketBody, SocketServiceInterface } from "./interfaces";
import { Socket, io } from "socket.io-client";

export class SocketIoService {
  client: Socket;

  constructor() {
    this.client = io('ws://localhost:6100');
  }


  // send (body: IWebsocketBody) {
  //   try {
  //     const payload = body.payload || {};
  //     body.payload = payload;

  //     this.client.send(JSON.stringify(body))

  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // onMessage(callback: (evt: MessageEvent<any>) => any) {
  //   try {
  //     this.client.on('message', callback)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // off<T extends keyof WebSocketEventMap>(type: T, callback: (evt: MessageEvent<any>) => any) {
  //   try {
  //     this.client.off(type, callback);
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // get isReady(): boolean {
  //   return this.client.readyState === 1
  // }
}
