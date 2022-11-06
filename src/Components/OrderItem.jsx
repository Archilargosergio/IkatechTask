import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.css';

import closeIcon from '../assets/Icons/icon_close.png';

const OrderItem = ({ product, index }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (product) => {
		removeFromCart(product.id, index);
	}

	return (
		<div className="container-generalOrderItem">
			<figure>
				<img src={require(`../assets/Images/${product.foto}`)} alt='Shoe' />
			</figure>
			<p>{product.nombre}</p>
			<p>${product.precio}</p>
			<img src={closeIcon} alt="close" onClick={() => handleRemove(product.id)} />
		</div>
	);
}

export default OrderItem;