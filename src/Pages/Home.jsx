import React from 'react';
import Header from '../Containers/Header';
import MainProduct from '../Containers/MainProduct';
import ComplementProductsSlider from '../Containers/ComplementProductsSlider';
import RecommendationProductSlider from '../Containers/RecommendationProductsSlider'
import Footer from '../Containers/Footer';
import '../styles/Home.css';

const Home = () => {
    return (
        <main className='.App'>
            < Header />
            <hr className='line' />
            < MainProduct />
            < ComplementProductsSlider />
            < RecommendationProductSlider />
            < Footer />
        </main>
    )
}

export default Home;
