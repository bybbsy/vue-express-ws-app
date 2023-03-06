import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, GridItem, List, ListItem, Textarea, Text } from "@chakra-ui/react";
import { MessagesList } from "../components/Messages/MessagesList";

export function Room() {
  return (
    <Grid
      width='full'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      paddingX='5'>
      <GridItem colStart={2} colEnd={5} border='1px solid red' rounded='md'>
        <Box height='100%' bg='white'>
          <MessagesList />
        </Box>
        <Box display='flex' alignItems='center' gap={2} bg="#fafbfc" padding='5' rounded='md'>
          <Textarea resize='none' />
          <Button
            colorScheme='blue'
          >
            Отправить
          </Button>
        </Box>
      </GridItem>
      <GridItem colSpan={1} bg='papayawhip' rounded='md' padding='2'>
        <List spacing='2'>
          <ListItem bg='white' padding='2' rounded='md' alignItems='center' display='flex' justifyContent='space-between'>
            <Text>User Jeff</Text>
            <Box>
              <CheckIcon />
            </Box>
          </ListItem>
          <ListItem bg='white' padding='2' rounded='md' alignItems='center' display='flex' justifyContent='space-between'>
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
