import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import '../styles/ComplementProducts.css';
import ProductCompleteLook from '../Components/ProductCompleteLook';
import data from '../zapato.json';

const ComplementProductsSlider = () => {
    const dispatch = useDispatch();
    const { foto, nombre, precio } = useSelector(state => state.image)
    return (
        <div className='container-generalComplement'>
            <h4>COMPLETA TU LOOK</h4>

            <motion.div className='container-subGeneralComplement' drag='x' dragConstraints={{ right: 0, left: 1.70 }}>
                {data.map(product =>
                    < ProductCompleteLook
                        key={product.id}
                        url={`/src/assets/Images/${product.foto}`}
                        name={product.nombre}
                        price={product.precio}
                    />
                )}
            </motion.div>
        </div>
    )
}

export default ComplementProductsSlider;