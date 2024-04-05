import './Navbar.scss'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/profile'>Мой профиль</Link>
        </nav>
    );
};

export default Navbar;
