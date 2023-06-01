export interface NewRoomFormState {
  name: string,
  size: number,
  description: string
}

type RootState = NewRoomFormState;
type RootActions =
  | 'setName'
  | 'setSize'
  | 'setDescription'

type ActionType = {
  type: RootActions,
  payload: any
}

export const initialState: RootState = {
  name: '',
  size: 0,
  description: ''
}


export const modalReducer = (state: RootState, action: ActionType): RootState => {
  if (action.type === 'setName') {
    return {
      ...state,
      name: action.payload
    }
  }

  if ( action.type === 'setDescription') {
    return {
      ...state,
      description: action.payload
    }
  }

  if (action.type === 'setSize') {
    return {
      ...state,
      size: action.payload
    }
  }

  return {
    ...state
  }
}
