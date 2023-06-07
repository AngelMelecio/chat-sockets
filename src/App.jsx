import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './Chat'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)


  useEffect(() => {
    setUser(sessionStorage.getItem('user'))
  }, [])

  return (
    <>
      <div className="chat-container">
        {user ?
          <Chat
            user={user}
          />
          :
          <Login
            setUser={setUser}
          />
        }
      </div>
    </>
  )
}

export default App
