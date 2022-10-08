import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Nav } from '../Styles/NavStyled'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return ( 
            <Nav open={open}>
                <Link className='TitleLink' to='/'>
                    KormiSheba
                </Link>
                
                <ul>
                    <li>{!user && <Link to='/login'>Login</Link>}</li>
                    <li>{!user && <Link to='/signup'>Signup</Link>}</li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>{user && <button onClick={handleClick}>Logout</button>}</li>
                    <li>{user && <span className='material-symbols-outlined'>person</span>}</li>
                </ul>

                <button className='HamBurg' onClick={() => setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </Nav>
     );
}
 
export default Navbar;