import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProductRecommendation.css';

const ProductRecommendation = ({ product }) => {

    return (
        <motion.div className='container-cardRecommendation'>

            <div className='container-imageRecommendation'>

                <figure className='container-imageBigRecommendation'>
                    <img src={require(`../assets/Images/${product.foto}`)} alt='Shoe' />
                </figure>

                <figure className='container-imageLittlesRecommendation'>
                    <img src={require(`../assets/Images/${product.foto}`)} alt='Shoe' />
                    <img src={require(`../assets/Images/${product.foto}`)} alt='Shoe' />
                    <img src={require(`../assets/Images/${product.foto}`)} alt='Shoe' />
                </figure>
            </div>

            <div className='container-textRecommendation'>
                <p>{product.nombre}</p>
                <p>{product.precio}</p>
                <hr className='line-textRecommendation' />
            </div>

        </motion.div>
    )
}

export default ProductRecommendation;
