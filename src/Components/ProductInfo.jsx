import React from 'react';
import '../styles/ProductInfo.css';
import Shoe11 from '../assets/Images/11.jpg';
import Shoe13 from '../assets/Images/13.jpg';
import Shoe5 from '../assets/Images/5.jpg';
import Shoe20 from '../assets/Images/20.jpg';
import Shoe2 from '../assets/Images/2.jpg';
import Shoe18 from '../assets/Images/18.jpg';
import Shoe15 from '../assets/Images/15.jpg';
import HeartIcon from '../assets/Icons/favorite_FILL1_wght400_GRAD0_opsz48.png';



const ProductInfo = () => {
    return (
        <div className='container-generalProduct'>
            <section className='container-leftProduct'>
                <h5>HUSHPUPPIESCO / CALZADO / CAPATILLA HOMBRE PELIKAN</h5>
                <div className='container-leftImage'>
                    <figure className='container-imageBig'>
                        <img src={Shoe11} alt='Shoe1' />
                    </figure>
                    <hr className='line-leftImage' />
                    <figure className='container-imageLittles'>
                        <img src={Shoe2} alt='Shoe2' />
                        <img src={Shoe13} alt='Shoe3' />
                        <img src={Shoe5} alt='Shoe4' />
                        <img src={Shoe20} alt='Shoe5' />
                        <img src={Shoe18} alt='Shoe6' />
                        <img src={Shoe15} alt='Shoe7' />
                    </figure>
                </div>

            </section>
            <section className='container-rightProduct'>
                <div className='container-titleProduct'>
                    <h1>ZAPATILLA HOMBRE PELIKAN</h1>
                    <p>$00.000</p>
                    <p>Cod. de producto zap-005</p>
                </div>
                <div className='container-rightLittleImage'>
                    <p>COLOR</p>
                    <img src={Shoe11} alt="Shoe1" />
                </div>
                <div className='container-size'>
                    <p>TALLA</p>
                    <div className='container-sizeBox'>
                        <p> <span>5</span></p>
                        <p> <span>5.5</span></p>
                        <p> <span>6</span></p>
                        <p> <span>6.5</span></p>
                        <p> <span>7</span></p>
                        <p> <span>7.5</span></p>
                        <p> <span>8</span></p>
                        <p> <span>8.5</span></p>
                        <p> <span>9</span></p>
                        <p> <span>9.5</span></p>
                    </div>
                </div>
                <div className='container-cartProduct'>
                    <a href="/">GUÍA DE TALLAS</a>
                    <div className='container-buttonProduct'>
                        <button type='submit'>AÑADIR AL CARRITO</button>
                        <img src={HeartIcon} alt="heartIcon" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductInfo;