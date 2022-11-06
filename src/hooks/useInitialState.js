import { useState } from 'react';

const initialStateCart = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialStateCart);

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload]
		});
	};

	const removeFromCart = (payload, indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (item, index) => item.id !== payload && index !== indexValue),
    });
  }; 

	return {
		state,
		addToCart,
		removeFromCart
	}
}

export default useInitialState;