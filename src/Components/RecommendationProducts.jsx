import React from 'react';
import '../styles/RecommendationProducts.css';
import Shoe1 from '../assets/Images/1.jpg';
import Shoe2 from '../assets/Images/2.jpg';
import Shoe3 from '../assets/Images/3.jpg';
import Shoe4 from '../assets/Images/4.jpg';

const RecommendationProducts = () => {
    return (
        <div className='container-generalRecommendation'>
            <h4>PRODUCTOS RECOMENDADOS</h4>
            <hr className='line-titleRecommendation' />

            <div className='container-subGeneralRecommendation'>

                <section className='container-cardRecommendation'>

                    <div className='container-imageRecommendation'>

                        <figure className='container-imageBigRecommendation'>
                            <img src={Shoe1} alt='Shoe1' />
                        </figure>

                        <figure className='container-imageLittlesRecommendation'>
                            <img src={Shoe2} alt='Shoe2' />
                            <img src={Shoe3} alt='Shoe3' />
                            <img src={Shoe4} alt='Shoe4' />
                        </figure>
                    </div>

                    <div className='container-textRecommendation'>
                        <p>Zapatilla Hombre Pelikan</p>
                        <p>$00.000</p>
                        <hr className='line-textRecommendation' />
                    </div>

                </section>
                <section className='container-cardRecommendation'>

                    <div className='container-imageRecommendation'>

                        <figure className='container-imageBigRecommendation'>
                            <img src={Shoe1} alt='Shoe1' />
                        </figure>

                        <figure className='container-imageLittlesRecommendation'>
                            <img src={Shoe2} alt='Shoe2' />
                            <img src={Shoe3} alt='Shoe3' />
                            <img src={Shoe4} alt='Shoe4' />
                        </figure>
                    </div>

                    <div className='container-textRecommendation'>
                        <p>Zapatilla Hombre Pelikan</p>
                        <p>$00.000</p>
                        <hr className='line-textRecommendation' />
                    </div>

                </section>
                <section className='container-cardRecommendation'>

                    <div className='container-imageRecommendation'>

                        <figure className='container-imageBigRecommendation'>
                            <img src={Shoe1} alt='Shoe1' />
                        </figure>

                        <figure className='container-imageLittlesRecommendation'>
                            <img src={Shoe2} alt='Shoe2' />
                            <img src={Shoe3} alt='Shoe3' />
                            <img src={Shoe4} alt='Shoe4' />
                        </figure>
                    </div>

                    <div className='container-textRecommendation'>
                        <p>Zapatilla Hombre Pelikan</p>
                        <p>$00.000</p>
                        <hr className='line-textRecommendation' />
                    </div>

                </section>
                <section className='container-cardRecommendation'>

                    <div className='container-imageRecommendation'>

                        <figure className='container-imageBigRecommendation'>
                            <img src={Shoe1} alt='Shoe1' />
                        </figure>

                        <figure className='container-imageLittlesRecommendation'>
                            <img src={Shoe2} alt='Shoe2' />
                            <img src={Shoe3} alt='Shoe3' />
                            <img src={Shoe4} alt='Shoe4' />
                        </figure>
                    </div>

                    <div className='container-textRecommendation'>
                        <p>Zapatilla Hombre Pelikan</p>
                        <p>$00.000</p>
                        <hr className='line-textRecommendation' />
                    </div>

                </section>
            </div>
        </div>
    )
}

export default RecommendationProducts;