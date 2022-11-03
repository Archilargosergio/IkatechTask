import React from 'react';
import '../styles/TopHeader.css';

const TopHeader = () => {
    return (
        <nav className='topHeader-container'>
            <div className='general-tittle'>
                <h1>HOT SALE -30% EN SANDALIAS</h1>
            </div>
            <div className='list'>
                <ul>
                    <li>DIRECTORIO DE TIENDAS</li>
                    <li>SERVICIO AL CLIENTE</li>
                    <li>MI CUENTA</li>
                </ul>
            </div>
        </nav>
    )
}

export default TopHeader;