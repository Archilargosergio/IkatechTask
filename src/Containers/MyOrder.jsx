import React from 'react';
import OrderItem from '../Components/OrderItem';
import data from '../zapato.json';
// import AppContext from '@context/AppContext.js';
import '../styles/MyOrder.css';


const MyOrder = () => {
	// const { state } = useContext(AppContext);

	// const sumTotal = () => {
	// 	const reducer = state.cart.reduce((accumalator, currentValue) => accumalator + currentValue.price, 0)
	// 	return reducer;
	// }

	return (
		<aside className="container-generalMyOrder">
			<div className="container-titleMyOrder">

				<p>Orden</p>
			</div>
			<div className="content-contentMyOrder">
				<div className='container-cartMyOrder'>
					{data.map(product => (
						<OrderItem
							key={product.id}
							url={product.foto}
							name={product.nombre}
							price={product.precio}
						/>
					))}
				</div>
				<div className="container-orderMyOrder">
					<p>
						<span>Total</span>
					</p>
					<p>
						100
						{/* ${sumTotal()} */}
					</p>
				</div>
				<button className="container-buttonMyOrder">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;