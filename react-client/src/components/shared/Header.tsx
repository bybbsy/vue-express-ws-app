import { Box, Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export function Header() {
  return (
    <Box as='header' display='flex' justifyContent='space-between' alignItems='center' paddingX='10'>
      <Text>A-Chat</Text>
      <Flex flexDirection='row' gap='5'>
        <Box>
          <Link as={RouterLink} to='/'>Main Page</Link>
        </Box>
        <Box>
          <Link as={RouterLink} to='/rooms'>Rooms</Link>
        </Box>
        <Box>

        </Box>
      </Flex>
    </Box>
  )
}
