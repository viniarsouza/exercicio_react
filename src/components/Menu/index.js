import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

import Logo from '../../assets/img/LogoMain.png';
import Button from '../Button';

function Menu() {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='Logo da Aluraflix' />
            </Link>

            <Button as = {Link} className='ButtonLink' to='/cadastro/video'>
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;