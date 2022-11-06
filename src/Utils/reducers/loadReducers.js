import { createSlice } from '@reduxjs/toolkit';

const initialState = [ 
// "nombre": '',
    // "precio": '',
    // "referencia": '',
    // "foto": ''
]

export const loadReducer = createSlice({
  name: 'loadImages',
  initialState: initialState,
  reducers: {
    setImage: (state, action) => {
        return [ ...state, action.payload]
        // state.precio = action.payload.precio;
        // state.referencia = action.payload.referencia;
        // state.foto = action.payload.foto;
    }
    }
  
})

export const { setImage } = loadReducer.actions;

export default loadReducer.reducer;

 