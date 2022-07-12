import { useSocketService } from "@/service/webscokets";
import { defineStore } from "pinia";
import { PropType } from "vue";

export interface IRoom {
  _id: string,
  name: string,
  size: number,
  users: string[]
}

export interface IChatState {
  currentRoom: IRoom | null
  joinedRooms: IRoom[]
  // rooms: IRoom[] | null
}

export const chatStore = defineStore('chat-store', {
  state: (): IChatState => {
    return {
      currentRoom: null,
      joinedRooms: []
      // rooms: null
    }
  },
  actions: {
    setJoinedRooms(rooms: IRoom[]) {
      this.joinedRooms = rooms
    },
    visitRoom(room: IRoom) {
      try {
        this.currentRoom = room
      } catch(e) {
        console.log(e)
      }
    },
    joinRoom() {
      try {
        this.joinedRooms?.push(this.currentRoom as IRoom)

        useSocketService.send({
          action: 'join-room',
          payload: {
            room: this.currentRoom,
            username: localStorage.getItem('email')
          }
        })
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

      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    inSelectedRoom(): boolean | void {
      try {
        return !!this.joinedRooms?.some(room => room._id === this.currentRoom?._id)
      } catch (e) {
        console.log(e)
      }
    }
  }
})
