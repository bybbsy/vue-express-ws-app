import React, { useContext, useEffect, useState } from 'react';
import { RoomItem } from "./RoomItem";
import { List } from '@chakra-ui/react';
import { WebsocketsContext } from '../../contexts/websocket.context';
import { SocketService } from '../../services/websocket.service';

export interface IRoomItem {
  _id: string | number,
  description: string,
  name: string,
  size: number,
  users: string[]
}

export function RoomLits({rooms}: {rooms: IRoomItem[]}) {
  console.log(rooms)
  const currentUser = localStorage.getItem('email') || '';
  const ws = useContext(WebsocketsContext)!;

  const handleJoinRoom = (room: IRoomItem) => {
    if (ws.isReady) {
      ws.send( {
        action: 'join-room',
        payload: {
          room: room,
          username: currentUser
        }
      })
    }
  };

  const handleLeaveRoom = (room: IRoomItem) => {
    if(ws.isReady) {
      ws.send({
        action: 'leave-room',
        payload: {
          room: room,
          username: currentUser
        }
      })
    }
  };


  return (
    <div>
      <List>
        {rooms && rooms.map(room =>
          <RoomItem
            key={room._id}
            room={room}
            isJoinedRoom={room.users.includes(currentUser)}
            handleJoinRoom={() => handleJoinRoom(room)}
            handleLeaveRoom={() => handleLeaveRoom(room)}
          />)}
      </List>
    </div>
  )
}
