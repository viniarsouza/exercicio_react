import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './menu.css';

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Logo da Aluraflix' />
            </a>
            <a className='ButtonLink' href='/'>Novo Video</a>
        </nav>
    );
}

export default Menu;