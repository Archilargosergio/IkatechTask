import React from 'react';
import '../styles/TopHeader.css';

const TopHeader = () => {
    return (
        <nav className='topHeader-container'>
            <div className='general-tittle'>
                <h1>HOT SALE -30% EN SANDALIAS</h1>
            </div>
            <div className='container-listTop'>
                <ul>
                    <li><a href="/">DIRECTORIO DE TIENDAS</a></li>
                    <li><a href="/">SERVICIO AL CLIENTE</a></li>
                    <li><a href="/">MI CUENTA</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default TopHeader;