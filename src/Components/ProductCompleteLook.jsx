import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProductCompleteLook.css';

const ProductCompleteLook = (product) => {

    return (
        <motion.div className='container-cardComplement'>

            <div className='container-imageComplement'>

                <figure className='container-imageBigComplement'>
                    <img src={require(`../assets/Images/${product.url}`)} alt='Shoe' />
                </figure>

                <figure className='container-imageLittlesComplement'>
                    <img src={require(`../assets/Images/${product.url}`)} alt='Shoe' />
                    <img src={require(`../assets/Images/${product.url}`)} alt='Shoe' />
                    <img src={require(`../assets/Images/${product.url}`)} alt='Shoe' />
                </figure>
            </div>

            <div className='container-textComplement'>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button type='submit' >AGREGAR AL CARRITO</button>
            </div>

        </motion.div>
    )
}

export default ProductCompleteLook;
