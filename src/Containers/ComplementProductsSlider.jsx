import React from 'react';
// import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import '../styles/ComplementProducts.css';
import ProductCompleteLook from '../Components/ProductCompleteLook';
import data from '../zapato.json';
// import { getAll } from '../Services/dataImages';
// import { setImage } from '../Utils/reducers/loadReducers';

const ComplementProductsSlider = () => {
    //Redux Logic, didn't used
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     getAll().then(product => {
    //         dispatch(setImage(product))
    //     })
    // }, [dispatch])
    // const dispatch = useDispatch();
    // const { foto, nombre, precio } = useSelector(state => state.foto)

    return (
        <div className='container-generalComplement'>
            <h4>COMPLETA TU LOOK</h4>

            <motion.div className='container-subGeneralComplement' drag='x' dragConstraints={{ right: 0, left: 1.70 }}>
                {data && data.map(product =>
                    < ProductCompleteLook
                        key={product.id}
                        product={product}
                    />
                )}

            </motion.div>
        </div>
    )
}

export default ComplementProductsSlider;