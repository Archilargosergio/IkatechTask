import React from 'react';
import { motion } from 'framer-motion';
import '../styles/RecommendationProductsSlider.css';
import ProductRecommendation from '../Components/ProductRecommendation';
import data from '../zapato.json';

const RecommendationProductsSlider = () => {
    return (
        <div className='container-generalRecommendation'>
            <h4>PRODUCTOS RECOMENDADOS</h4>
            <hr className='line-titleRecommendation' />

            <motion.div className='container-subGeneralRecommendation' drag='x' dragConstraints={{ right: 0, left: 1.70 }}>
                {data.map(product =>
                    < ProductRecommendation
                        url={`/src/assets/Images/${product.foto}`}
                        name={product.nombre}
                        price={product.precio}
                    />
                )}
            </motion.div>
        </div>
    )
}

export default RecommendationProductsSlider;