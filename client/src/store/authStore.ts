import { defineStore } from 'pinia'

export interface IUser {
  uid?: string | null
  email: string | null,
  password: string | null
}

export interface IAuth {
  user: IUser
}

export const authStore = defineStore('auth-store', {
  state: (): IAuth => {
    return {
      user: {
        uid: '62deaac7b7aec18bd3d4d9de',
        email: null,
        password: null
      }
    }
  },
  actions: {
    async authUser(user: IUser) {
      if(user.email) {
        this.user = user
        localStorage.setItem('email', user.email)
      }
    }
  }
})

