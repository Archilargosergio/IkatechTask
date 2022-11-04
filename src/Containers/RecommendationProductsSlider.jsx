import React from 'react';
import '../styles/RecommendationProductsSlider.css';
import ProductRecommendation from '../Components/ProductRecommendation';

const RecommendationProductsSlider = () => {
    return (
        <div className='container-generalRecommendation'>
            <h4>PRODUCTOS RECOMENDADOS</h4>
            <hr className='line-titleRecommendation' />

            <div className='container-subGeneralRecommendation'>
                < ProductRecommendation />
            </div>
        </div>
    )
}

export default RecommendationProductsSlider;