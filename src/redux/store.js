import { configureStore } from '@reduxjs/toolkit';
import flowers from './flowersSlice';
import cart, { loadCartFromLocalStorage } from './cartSlice';

// Warenkorb aus localStorage laden und in den initialen Zustand setzen
const initialCartState = {
  cartItems: loadCartFromLocalStorage()
};

export const store = configureStore({
  reducer: {
    flowers,
    cart
  },
  preloadedState: {
    cart: initialCartState // Initialer Zustand für den Warenkorb
  }
});