import { Button, GridItem, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function LeftBlock() {
  return (
    <GridItem
      colStart={1}
      colEnd={2}
      paddingTop={6}>
      <Stack
        direction='row'
        justifyContent='flex-end'
      >
        <Button
          colorScheme='red'>
          Выйти
        </Button>
        <Link to='/rooms'>
          <Button
            colorScheme='blue'>
            Назад
          </Button>
        </Link>
      </Stack>
    </GridItem>
  )
}
