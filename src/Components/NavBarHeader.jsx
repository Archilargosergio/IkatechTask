import React, { useState } from 'react';
import '../styles/NavBarHeader.css';
import MyOrder from '../Containers/MyOrder';
import CompanyLogo from '../assets/Logos/Hush-Puppies-logo-logotype-1024x768.png';
import ArrowIcon from '../assets/Icons/chevron_right_FILL0_wght400_GRAD0_opsz48.png';
import CartIcon from '../assets/Icons/shopping_bag_FILL0_wght400_GRAD0_opsz48.png';

const NavBarHeader = () => {
    //useContext logic
    const [toggleCart, setToggleCart] = useState(false);

    const handleToggleCart = () => {
        setToggleCart(!toggleCart)
    };
    return (
        <nav className='container-generalNav'>
            <menu className='container-leftNav'>
                <img src={CompanyLogo} alt="companyLogo" />
                <ul>
                    <li><a href="/">HOMBRE</a></li>
                    <li><a href="/">MUJER</a></li>
                    <li><a href="/">BLOG</a></li>
                    <li><a href="/">HISTORIA</a></li>
                    <li><a href="/">TIENDAS</a></li>
                </ul>
            </menu>
            <section className='container-rightNav'>
                <div className='container-navBar'>
                    <input type="text" name="" id="" placeholder='BUSCAR' />
                    <img src={ArrowIcon} alt="" />
                </div>
                <p>ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000</p>
                <div className='container-cart'>
                    <img src={CartIcon} alt="" onClick={handleToggleCart} />
                    <a href="/">Carrito 0</a>
                </div>
            </section>
            {toggleCart && <MyOrder />}
        </nav>
    )
}

export default NavBarHeader;