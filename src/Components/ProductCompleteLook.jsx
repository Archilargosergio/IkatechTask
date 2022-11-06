import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { motion } from 'framer-motion';
import '../styles/ProductCompleteLook.css';

const ProductCompleteLook = ({ product }) => {
    //useContext logic
    const { addToCart, removeFromCart, state } = useContext(AppContext);

    const itsProductAdded = () => state.cart.some((item) => item === product.id) ? true : false;

    const handleClick = (item) => {
        itsProductAdded() ? removeFromCart(item) : addToCart(item);
    };


    return (
        <motion.div className='container-cardComplement'>

            <div className='container-imageComplement'>

                <figure className='container-imageBigComplement'>
                    <img src={require(`../assets/Images/${product.foto}`)} alt='Shoe' />
                </figure>

                <figure className='container-imageLittlesComplement'>
                    <img src={require(`../assets/Images/${product.foto}`)} alt='Shoe' />
                    <img src={require(`../assets/Images/${product.foto}`)} alt='Shoe' />
                    <img src={require(`../assets/Images/${product.foto}`)} alt='Shoe' />
                </figure>
            </div>

            <div className='container-textComplement'>
                <p>{product.nombre}</p>
                <p>{product.precio}</p>
                <button type='submit' onClick={handleClick} >AGREGAR AL CARRITO</button>
            </div>

        </motion.div>
    )
}

export default ProductCompleteLook;
