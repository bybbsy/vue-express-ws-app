import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/shared/Header";
export function MainPage() {

  return (
    <Box className="App">
      <Header />
      <Outlet />
    </Box>
  )
}
