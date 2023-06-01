import React from "react";
import { Grid } from "@chakra-ui/react";
import { LeftBlock } from "../blocks/ChatBlock/LeftBlock";
import { RightBlock } from "../blocks/ChatBlock/RightBlock";
import { CenterBlock } from "../blocks/ChatBlock/CenterBlock";

export function ChatPage() {
  return (
    <Grid
      py='2'
      width='full'
      height='95%'
      templateRows='1fr'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      paddingX='5'
      bg='gray.100'
    >
      <LeftBlock />
      <CenterBlock />
      <RightBlock />
    </Grid>
  )
}
