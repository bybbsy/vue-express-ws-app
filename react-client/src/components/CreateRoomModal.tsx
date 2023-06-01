import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack } from "@chakra-ui/react";
import React, { useContext, useDebugValue, useReducer } from "react";
import { WebsocketsContext } from "../contexts/websocket.context";
import { initialState, modalReducer } from "../reducers/modalReducer";
import { useAppSelector } from "../store/hooks";

type CreateRoomModalProps = {
  handleToggleModal: () => void
}

export function CreateRoomModal({
  handleToggleModal,
}: CreateRoomModalProps) {
  const isOpenedModal = useAppSelector(state => state.modal.isOpen);

  const ws = useContext(WebsocketsContext);
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const handleSubmit = () => {
    ws.send({
      action: 'create-room',
      payload: {
        ...state
      }
    })
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'setName', payload: e.target.value.trim() })
  }

  const handleChangeSize = (valueString: string, valueNumber: number) => {
    dispatch({type: 'setSize', payload: valueNumber })
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'setDescription', payload: e.target.value.trim() })
  }

  return (
    <Modal
      isOpen={isOpenedModal}
      onClose={handleToggleModal}>
      <ModalOverlay />
      <ModalContent py='2'>
        <ModalHeader>Новая комната</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired mb={4}>
            <FormLabel>Название</FormLabel>
            <Input onChange={handleChangeName}/>
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>Максимальное количество участников</FormLabel>
            <NumberInput
              defaultValue={2}
              min={2}
              max={20}
              onChange={handleChangeSize}
              >
              <NumberInputField/>
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Описание</FormLabel>
            <Input onChange={handleChangeDescription}/>
          </FormControl>
          <ModalFooter>
            <Button colorScheme='blue' mr={2} onClick={handleSubmit}>Сохранить</Button>
            <Button onClick={handleToggleModal}>Отмена</Button>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
