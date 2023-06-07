import { useEffect, useState } from "react";
import { socket } from "./socket";
import { HOST } from "./HOST";

const SocketComponent = ({setMessages}) => {

    useEffect(() => {
        const socket = new WebSocket(`ws://${HOST}/ws/chat/room_name/`);
        // Connection opened
        socket.onopen = (e) => {
            socket.send(JSON.stringify({
                'message': 'Hola desde el cliente'
            }))
        }

        // Listen for messages from the server
        socket.onmessage = (e) => {

             console.log( 'Message listened: ', e.data )
            const {consumerMessage} = JSON.parse( e.data)
            if( consumerMessage )
                setMessages(prev => [...prev, consumerMessage])

        }

        // Connection closed
        socket.onclose = ( event => {
            console.log('WebSocket connection closed:', event.code, event.reason);
        });

        return () => {
            socket.close();
        };

    }, [])

    return (
        <>
        </>
    )
}
export default SocketComponent