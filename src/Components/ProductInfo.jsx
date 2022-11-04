import React from 'react';
import '../styles/ProductInfo.css';
import Shoe1 from '../assets/Images/1.jpg';
import Shoe2 from '../assets/Images/2.jpg';
import Shoe3 from '../assets/Images/3.jpg';
import Shoe4 from '../assets/Images/4.jpg';
import Shoe5 from '../assets/Images/5.jpg';
import Shoe6 from '../assets/Images/6.jpg';
import Shoe7 from '../assets/Images/7.jpg';
import HeartIcon from '../assets/Icons/favorite_FILL1_wght400_GRAD0_opsz48.png';


const ProductInfo = () => {
    return (
        <div className='container-generalProduct'>
            <section className='container-leftProduct'>
                <h5>HUSHPUPPIESCO / CALZADO / CAPATILLA HOMBRE PELIKAN</h5>
                <div className='container-leftImage'>
                    <figure className='container-imageBig'>
                        <img src={Shoe1} alt='Shoe1' />

                    </figure>
                    <hr className='line-leftImage' />
                    <figure className='container-imageLittles'>
                        <img src={Shoe2} alt='Shoe2' />
                        <img src={Shoe3} alt='Shoe3' />
                        <img src={Shoe4} alt='Shoe4' />
                        <img src={Shoe5} alt='Shoe5' />
                        <img src={Shoe6} alt='Shoe6' />
                        <img src={Shoe7} alt='Shoe7' />
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
                    <img src={Shoe1} alt="Shoe1" />
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
                    <p>GUÍA DE TALLAS</p>
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