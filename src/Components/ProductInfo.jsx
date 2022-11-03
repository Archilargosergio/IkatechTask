import React from 'react';
import '../styles/ProductInfo.css';
import Shoe1 from '../assets/Images/1.jpg';
import Shoe2 from '../assets/Images/2.jpg';
import Shoe3 from '../assets/Images/3.jpg';
import Shoe4 from '../assets/Images/4.jpg';
import Shoe5 from '../assets/Images/5.jpg';
import Shoe6 from '../assets/Images/6.jpg';
import Shoe7 from '../assets/Images/7.jpg';
import HeartIcon from '../assets/Icons/favorite_FILL0_wght400_GRAD0_opsz48.png';


const ProductInfo = () => {
    return (
        <div className='container-general'>
            <section className='container-left'>
                <h5>HUSHPUPPIESCO / CALZADO / CAPATILLA HOMBRE PELIKAN</h5>
                <div className='container-leftImage'>
                    <div className='container-imageBig'>
                        <img src={Shoe1} alt='Shoe1' />

                    </div>
                    <hr className='line-leftImage' />
                    <div className='container-imageLittles'>
                        <img src={Shoe2} alt='Shoe2' />
                        <img src={Shoe3} alt='Shoe3' />
                        <img src={Shoe4} alt='Shoe4' />
                        <img src={Shoe5} alt='Shoe5' />
                        <img src={Shoe6} alt='Shoe6' />
                        <img src={Shoe7} alt='Shoe7' />
                    </div>
                </div>

            </section>
            <section className='container-right'>
                <div className='continer-titleProduct'>
                    <h1>ZAPATILLA HOMBRE PELIKAN</h1>
                    <p>$00.000</p>
                    <p>Cod. de producto zap-005</p>
                </div>
                <div>
                    <p>COLOR</p>
                    <img src={Shoe1} alt="Shoe1" />
                </div>
                <div className='container-size'>
                    <p>TALLA</p>
                    <div className='container-sizeBox'>
                        <p>5</p>
                        <p>5.5</p>
                        <p>6</p>
                        <p>6.5</p>
                        <p>7</p>
                        <p>7.5</p>
                        <p>8</p>
                        <p>8.5</p>
                        <p>9</p>
                        <p>9.5</p>
                    </div>
                </div>
                <div>
                    <p>GUÍA DE TALLAS</p>
                    <div>
                        <button type='submit'>AÑADIR AL CARRITO</button>
                        <img src={HeartIcon} alt="heartIcon" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductInfo;