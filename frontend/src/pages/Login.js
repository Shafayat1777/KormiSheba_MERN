import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [passoword, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        login(email, passoword)
    }

    return ( 
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Log in</h3>

            <label>Email:</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={passoword}
            />

            <button disabled={isLoading}>Log in</button>

            {error && <div className='error'>{error}</div>}
        </form>
     );
}
 
export default Login;