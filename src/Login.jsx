import { useState } from "react"

const Login = ({ setUser }) => {

    const [userName, setUserName] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        if (userName.trim().length < 1) return

        sessionStorage.setItem('user', userName)
        setUser(userName)
    }

    return (
        <>
            <div className="login-container">
                <h2>
                    Bienvenido al Chat
                </h2>
                <div className="inp-container">
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        placeholder="Ingrese su nombre"
                        className="text-area" />
                </div>
                <button onClick={handleLogin}>
                    Ingresar
                </button>
            </div>
        </>
    )
}
export default Login