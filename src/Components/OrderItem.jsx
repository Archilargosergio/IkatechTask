import React from 'react';
// import AppContext from '@context/AppContext.js';
import '../styles/OrderItem.css';

import closeIcon from '../assets/Icons/icon_close.png';

const OrderItem = (product) => {
	// const { removeFromCart } = useContext(AppContext);

	// const handleRemove = (product) => {
	// 	removeFromCart(product, index);
	// }

	return (
		<div className="container-generalOrderItem">
			<figure>
				<img src={require(`../assets/Images/${product.url}`)} alt='Shoe' />
			</figure>
			<p>{product.name}</p>
			<p>${product.price}</p>
			<img src={closeIcon} alt="close" />
			{/* onClick={() => handleRemove(item)} */}
		</div>
	);
}

export default OrderItem;