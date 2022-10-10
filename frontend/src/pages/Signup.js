import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [passoword, setPassword] = useState('')
    const  {signup, error, isLoading} = useSignup()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(name, email, passoword)
        console.log()
    }

    return ( 
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

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

            <button disabled={isLoading}>Sign up</button>

            {error && <div className='error'>{error}</div>}
        </form>
     );
}
 
export default Signup;