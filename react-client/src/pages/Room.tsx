import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, GridItem, List, ListItem, Textarea, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MessagesList } from "../components/Messages/MessagesList";

export function Room() {
  return (
    <Grid
      py='2'
      width='full'
      height='95%'
      templateRows='1fr'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      paddingX='5'
    >
      <GridItem
        colStart={1}
        colEnd={2}>
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
      <GridItem
        colStart={2}
        colEnd={5}
        rounded='md'
        display='flex'
        flexDirection='column'
        overflowY='hidden'
      >
        <Box
          bg='white'
          flex='1 1 100%'
          roundedTop='md'
          overflowY='scroll'
        >
          <MessagesList />
        </Box>
        <Box
          display='flex'
          alignItems='center'
          gap={2}
          bg="#fafbfc"
          padding='5'
          roundedBottom='md'
        >
          <Textarea resize='none' />
          <Button
            colorScheme='blue'
          >
            Отправить
          </Button>
        </Box>
      </GridItem>
      <GridItem colSpan={1} bg='white' height='350px' rounded='md' padding='2' overflowY='scroll'>
        <List spacing='2'>
          <ListItem
            cursor='pointer'
            padding='2'
            rounded='md'
            alignItems='center'
            display='flex'
            justifyContent='space-between'
            _hover={{
              bg: 'gray.100'
            }}
          >
            <Text>User Jeff</Text>
            <Box>
              <CheckIcon />
            </Box>
          </ListItem>
        </List>
      </GridItem>
    </Grid>
  )
}
