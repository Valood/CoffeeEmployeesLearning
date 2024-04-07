import './Navbar.scss'
import {Link} from "react-router-dom";
import {Flex} from "@mantine/core";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Flex direction='column' gap='mdd'>
                <Link to='/'>Мой профиль</Link>
                <Link to='/lectures'>Лекции</Link>
                <Link to='/tests'>Тесты</Link>
            </Flex>
        </nav>
    );
};

export default Navbar;
