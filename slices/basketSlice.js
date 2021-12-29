import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let productIndex = null;
      let newBasket;

      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (index >= 0) {
        newBasket = [...state.items];
        newBasket[index] = {
          ...action.payload,
          quantity: action.payload.quantity + newBasket[index].quantity,
        };
        state.items = newBasket;
      } else {
        state.items = [...state.items, action.payload];
      }

      /* 
        My implementation before refactor
      
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          productIndex = i;
          newBasket = [...state.items];
          newBasket[productIndex] = {
            ...action.payload,
            quantity:
              action.payload.quantity + newBasket[productIndex].quantity,
          };
          break;
        }
      }

      productIndex === null
        ? (state.items = [...state.items, action.payload])
        : (state.items = newBasket); 
        
        */
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0 && newBasket[index].quantity > 1) {
        newBasket[index] = {
          ...newBasket[index],
          quantity: newBasket[index].quantity - 1,
        };
      } else if (index >= 0 && newBasket[index].quantity === 1) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it is not in the basket`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = state => state.basket.items;
export const selectTotalQty = state =>
  state.basket.items.reduce((total, item) => total + item.quantity, 0);
export const selectTotalPrice = state =>
  state.basket.items.reduce(
    (total, item) => item.quantity * item.price + total,
    0
  );

export default basketSlice.reducer;
