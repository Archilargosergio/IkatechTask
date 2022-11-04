import React from 'react';
import '../styles/NavBarFooter.css';
import ArrowIcon from '../assets/Icons/chevron_right_FILL0_wght400_GRAD0_opsz48.png';

const NavBarFooter = () => {
    return (
        <nav className='container-generalFooter'>
            <div className='container-listFooter'>
                <ul className='list customer'>
                    <p>SERVICIO AL CLIENTE</p>
                    <li><a href="/">CONTÁCTENOS</a></li>
                    <li><a href="/">CAMBIOS Y DEVOLUCIONES</a></li>
                    <li><a href="/">POLÍTICAS DE LA TIENDA</a></li>
                    <li><a href="/">POLÍTICAS DE DATOS</a></li>
                </ul>

                <ul className='list account'>
                    <p>MI CUENTA</p>
                    <li><a href="/">MIS PEDIDOS</a></li>
                    <li><a href="/">MIS DEVOLUCIONES</a></li>
                </ul>

                <ul className='list resources'>
                    <p>RECURSOS</p>
                    <li><a href="/">TIENDAS</a></li>
                    <li><a href="/">DEVOLUCIONES</a></li>
                </ul>
            </div>

            <ul className='container-newsletterFooter'>
                <p>NEWSLETTER</p>
                <span>Regístrate para ser el primero en recibir nuestra noticias</span>
                <div className='container-navBarFooter'>
                    <input type="text" name="" id="" placeholder='E-MAIL' />
                    <img src={ArrowIcon} alt="" />
                </div>
            </ul>

        </nav>
    )
}

export default NavBarFooter;