interface AuthDataState {
  email: null | string,
  password: null | string,
}


type AuthDataActions = 'setEmail' | 'setPassword'

type ActionType = {
  type: AuthDataActions,
  payload: string
}

export const initialState: AuthDataState = {
  email: null,
  password: null
}

export const authReducer =
  (state: AuthDataState, action: ActionType): AuthDataState => {
    if (action.type === 'setEmail') {
      return {
        ...state,
        email: action.payload
      }
    }
    return state;
}
