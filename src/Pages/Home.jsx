import React from 'react';
import Header from '../Containers/Header';
import MainProduct from '../Containers/MainProduct';
import OtherProducts from '../Containers/OtherProducts';
import Footer from '../Containers/Footer';
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='.App'>
            < Header />
            <hr className='line' />
            < MainProduct />
            < OtherProducts />
            < Footer />
        </div>
    )
}

export default Home;