import React from 'react';
import '../styles/ProductCompleteLook.css';
import Shoe1 from '../assets/Images/1.jpg';
import Shoe2 from '../assets/Images/2.jpg';
import Shoe3 from '../assets/Images/3.jpg';
import Shoe4 from '../assets/Images/4.jpg';

const ProductCompleteLook = () => {
    return (
        <section className='container-cardComplement'>

            <div className='container-imageComplement'>

                <figure className='container-imageBigComplement'>
                    <img src={Shoe1} alt='Shoe1' />
                </figure>

                <figure className='container-imageLittlesComplement'>
                    <img src={Shoe2} alt='Shoe2' />
                    <img src={Shoe3} alt='Shoe3' />
                    <img src={Shoe4} alt='Shoe4' />
                </figure>
            </div>

            <div className='container-textComplement'>
                <p>Zapatilla Hombre Pelikan</p>
                <p>$00.000</p>
                <button type='submit'>AGREGAR AL CARRITO</button>
            </div>

        </section>
    )
}

export default ProductCompleteLook;
