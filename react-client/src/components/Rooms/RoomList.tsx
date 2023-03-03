import React, { useState } from 'react';
import { RoomItem } from "./RoomItem";
import { List } from '@chakra-ui/react';

export interface IRoomItem {
  _id: string | number,
  description: string,
  name: string,
  size: number,
  users: string[]
}

export function RoomLits() {
  const rooms: IRoomItem[] = [
    {
      _id: 1,
      name: "Jeff's room",
      description: '',
      users: [],
      size: 10
    },
    {
      _id: 2,
      name: "Senla Chat Tula",
      description: '',
      users: [],
      size: 100
    }
  ];

  return (
    <div>
      <List>
        {rooms.map(room =>
          <RoomItem
            key={room._id}
            room={room}
          />)}
      </List>
    </div>
  )
}
