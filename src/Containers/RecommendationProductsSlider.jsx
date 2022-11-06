import React from 'react';
// import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import '../styles/RecommendationProductsSlider.css';
import ProductRecommendation from '../Components/ProductRecommendation';
import data from '../zapato.json';
// import { getAll } from '../Services/dataImages';
// import { setImage } from '../Utils/reducers/loadReducers';

const RecommendationProductsSlider = () => {
    //Redux Logic, didn't used
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     getAll().then(product => {
    //         dispatch(setImage(product))
    //     })
    // }, [dispatch])
    // }, [dispatch])
    // const dispatch = useDispatch();
    // const { foto, nombre, precio } = useSelector(state => state.foto)

    return (
        <div className='container-generalRecommendation'>
            <h4>PRODUCTOS RECOMENDADOS</h4>
            <hr className='line-titleRecommendation' />

            <motion.div className='container-subGeneralRecommendation' drag='x' dragConstraints={{ right: 0, left: 1.70 }}>
                {data && data.map(product =>
                    < ProductRecommendation
                        key={product.id}
                        product={product}
                    />
                )
                }
            </motion.div>
        </div>
    )
}

export default RecommendationProductsSlider;