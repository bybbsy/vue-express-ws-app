import { useSocketService } from "@/service/webscokets";
import { defineStore } from "pinia";

export interface IRoom {
  _id: string,
  description: string,
  name: string,
  size: number,
  users: string[]
}

export interface IChatState {
  currentRoom: IRoom | null
  joinedRooms: IRoom[]
  currentChat: ICurrentChat | null
}

export interface ICurrentChat {
  _id: string | null,
  messages: IChatMessage[]
}

export interface IChatMessage {
  dateSent: Date,
  text: string,
  _id: string
}

export const chatStore = defineStore('chat-store', {
  state: (): IChatState => {
    return {
      currentRoom: null,
      joinedRooms: [],
      currentChat: {
        _id: null,
        messages: []
      }
    }
  },
  actions: {
    setJoinedRooms(rooms: IRoom[]) {
      this.joinedRooms = rooms
    },
    visitRoom(room: IRoom) {
      try {
        this.currentRoom = room

        if(this.inSelectedRoom) {
          useSocketService.send({
            action: 'receive-chat',
            payload: {
              room: this.currentRoom
            }
          })
          return;
        }

        this.clearCurrentChat()

      } catch(e) {
        console.log(e)
      }
    },
    joinRoom() {
      try {

        useSocketService.send({
          action: 'join-room',
          payload: {
            room: this.currentRoom,
            username: localStorage.getItem('email')
          }
        })

        this.joinedRooms.push(this.currentRoom as IRoom)
      } catch (e) {
        console.log(e)
      }
    },
    leaveRoom() {
      try {
        this.joinedRooms = this.joinedRooms?.filter(room => room._id !== this.currentRoom?._id) as IRoom[]

        useSocketService.send({
          action: 'leave-room',
          payload: {
            room: this.currentRoom,
            username: localStorage.getItem('email')
          }
        })
        this.currentRoom = null

        this.currentChat = {
          _id: null,
          messages: []
        }
      } catch (e) {
        console.log(e)
      }
    },
    sendMessage() {
      try {
        this.joinedRooms = this.joinedRooms?.filter(room => room._id !== this.currentRoom?._id) as IRoom[]

        useSocketService.send({
          action: 'send-message',
          payload: {
            room: this.currentRoom,
            username: localStorage.getItem('email')
          }
        })
      } catch (e) {
        console.log(e)
      }
    },
    setCurrentChat(payload: ICurrentChat) {
      this.currentChat = payload
    },
    clearCurrentChat() {
      this.currentChat = {
        _id: null,
        messages: []
      }
    }
  },
  getters: {
    inSelectedRoom(): boolean | void {
      try {
        return this.joinedRooms.some(room => room._id === this.currentRoom?._id)
      } catch (e) {
        console.log(e)
      }
    }
  }
})
