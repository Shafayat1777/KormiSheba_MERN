import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Nav } from '../Styles/NavStyled'


const Navbar = () => {
    const [open, setOpen] = useState(false)
    console.log(open)
    return ( 
            <Nav open={open}>
                <Link className='TitleLink' to='/'>
                    KormiSheba
                </Link>
                
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><span className='material-symbols-outlined'>person</span></li>
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