export interface ModalState {
  isOpen: boolean
}

export interface NewRoomFormState {
  name: string,
  size: number,
  description: string
}

type RootState = ModalState & NewRoomFormState;
type RootActions =
  'toggleModal'
  | 'setName'
  | 'setSize'
  | 'setDescription'

type ActionType = {
  type: RootActions,
  payload: any
}

export const initialState: RootState = {
  isOpen: false,
  name: '',
  size: 0,
  description: ''
}


export const modalReducer = (state: RootState, action: ActionType): RootState => {
  if (action.type === 'toggleModal') {
    return {
      ...state,
      isOpen: !state.isOpen
    }
  }

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
