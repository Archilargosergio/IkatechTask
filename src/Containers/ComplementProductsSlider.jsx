import React from 'react';
import '../styles/ComplementProducts.css';
import ProductCompleteLook from '../Components/ProductCompleteLook';

const ComplementProductsSlider = () => {
    return (
        <div className='container-generalComplement'>
            <h4>COMPLETA TU LOOK</h4>

            <div className='container-subGeneralComplement'>
                < ProductCompleteLook />
            </div>
        </div>
    )
}

export default ComplementProductsSlider;