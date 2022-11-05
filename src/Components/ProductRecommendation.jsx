import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProductRecommendation.css';

const ProductRecommendation = (product) => {
    return (
        <motion.div className='container-cardRecommendation'>

            <div className='container-imageRecommendation'>

                <figure className='container-imageBigRecommendation'>
                    <img src={product.url} alt='Shoe1' />
                </figure>

                <figure className='container-imageLittlesRecommendation'>
                    <img src={product.url} alt='Shoe2' />
                    <img src={product.url} alt='Shoe3' />
                    <img src={product.url} alt='Shoe4' />
                </figure>
            </div>

            <div className='container-textRecommendation'>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <hr className='line-textRecommendation' />
            </div>

        </motion.div>
    )
}

export default ProductRecommendation;
