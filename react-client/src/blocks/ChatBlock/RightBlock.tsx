import { CheckIcon } from "@chakra-ui/icons";
import { Box, GridItem, List, ListItem, Text } from "@chakra-ui/react";

export function RightBlock() {
  return (
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
  )
}
