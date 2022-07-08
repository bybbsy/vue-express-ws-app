import { defineStore } from 'pinia'

export interface IUser {
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

