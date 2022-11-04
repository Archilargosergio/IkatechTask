import React from 'react';
import ProductInfo from '../Components/ProductInfo';
import '../styles/MainProduct.css';

const MainProduct = () => {
    return (
        <div>
            < ProductInfo />
            <section className='container-generalProductDetail'>
                <article className='container-detail'>
                    <h4>DETALLES DE PRODUCTO</h4>
                    <hr className='container-line productDetail' />
                    <p>
                        Lorem ipsum dolor sit amet, concecutor adipiscing elit. Etiam finibus dictum mi, a aliquet ante. Fusce vitae felis ac ante aliquet viverra id nec dolor. Praesent sodales auge ligue, ut euismod tortor lacinia non. Ethiam trstique quam quis rutrum aliquam. Vestibulim in phaertra sem. Etiam scelerisque accumsan suscipit. Praesent fermentum orci orci, vitae dignissim turpis faucibus ac. Aenean dictum feugiat metus, id maximus mauris consecteur ac.
                    </p>
                </article>
                <article className='container-technology'>
                    <h4>TECNOLOGÍAS</h4>
                    <hr className='container-line technology' />
                    <p>
                        Quisque tellus odio, varius consequat interdum at, molestie viverra lacus. Donec nec tempus enim, nec pallentesque magna. Vestibulum dignissim, nunc id interdum dignissim, orci ex cursus metus, ut interdum tellus arcu at lorem.
                    </p>
                </article>
            </section>
        </div>
    )
}

export default MainProduct;