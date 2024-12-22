import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      const timeId = new Date().getTime();
      state.cartItems.push({
        id: timeId,
        flowerId: action.payload.flower.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity * action.payload.flower.price
      });

      // Speichern des neuen Warenkorbs im localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.cartItemId
      );

      // Warenkorb im localStorage nach dem Entfernen eines Artikels aktualisieren
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const { cartItemId, quantity } = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === cartItemId);
    
      if (cartItem && quantity > 0) {
        cartItem.totalPrice = (cartItem.totalPrice / cartItem.quantity) * quantity; // Preis aktualisieren
        cartItem.quantity = quantity; // Menge aktualisieren
      }

      // Warenkorb im localStorage nach der Mengenänderung aktualisieren
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  }
});

// Abrufen des Warenkorbs aus dem localStorage
export const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cartItems');
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  return [];
};

export const getTotalAmount = (state) => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.quantity + total
  }, 0)
};

export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total
  }, 0)
};

export const getCartItems = (state) => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;