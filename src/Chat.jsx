import { useEffect, useState } from 'react'
import SocketComponent from './SocketComponent'
import Message from './Message'
import { HOST } from './HOST'
const Chat = ({ user }) => {

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    async function getMessages() {
        await fetch(`https://${HOST}/api/posts/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => { setMessages(data) })
            .catch(e => console.log('error', e))
    }

    useEffect(() => {
        getMessages()
    }, [])

    const sendMessage = () => {
        fetch(`http://${HOST}/api/posts/`, {
            method: 'POST',
            body: JSON.stringify({
                'message': message,
                'author': user
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log('message sended'))
            .finally(() => setMessage(''))
    }

    return (
        <>
            <div className="messages">
                {messages.map((msg, index) =>
                    <Message
                        key={'M' + index}
                        data={msg}
                        own={msg.author === user}
                    />
                )
                }
            </div>
            <div className="inp-container">

                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='text-area' type="text" name="" id="" />
                <button
                    onClick={sendMessage}
                >
                    {">"}
                </button>

            </div>
            <SocketComponent
                setMessages={setMessages}
            />
        </>)
}

export default Chat