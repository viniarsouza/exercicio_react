import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Logo da Aluraflix' />
            </a>

            <Button as ='a' className='ButtonLink' href='/'>
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;