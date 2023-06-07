import {io} from 'socket.io-client';

export const socket = io(
    'ws://localhost:8000/ws/chat/room_name/',{
        autoConnect:false
    })