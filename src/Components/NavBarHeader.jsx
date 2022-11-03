import React from 'react';
import '../styles/NavBarHeader.css';
import CompanyLogo from '../assets/Logos/Hush-Puppies-logo-logotype-1024x768.png';
import ArrowIcon from '../assets/Icons/chevron_right_FILL0_wght400_GRAD0_opsz48.png';
import CartIcon from '../assets/Icons/shopping_bag_FILL0_wght400_GRAD0_opsz48.png';

const NavBarHeader = () => {
    return (
        <nav className='container-general'>
            <section className='container-left'>
                <img src={CompanyLogo} alt="companyLogo" />
                <ul>
                    <li>HOMBRE</li>
                    <li>MUJER</li>
                    <li>BLOG</li>
                    <li>HISTORIA</li>
                    <li>TIENDAS</li>
                </ul>
            </section>
            <section className='container-right'>
                <div className='container-navBar'>
                    <input type="text" name="" id="" placeholder='BUSCAR' />
                    <img src={ArrowIcon} alt="" />
                </div>
                <p>ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000</p>
                <div className='container-cart'>
                    <img src={CartIcon} alt="" />
                    Carrito 0
                </div>
            </section>
        </nav>
    )
}

export default NavBarHeader;