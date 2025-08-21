import { createReducer, on } from '@ngrx/store';
import { addProductToCart } from './cart.actions';
import { initialCartState } from './cart.state';

export const cartReducer = createReducer(
    initialCartState,
    on(addProductToCart, (state, { product }) => {
        const newItems = [...state.items, product];
        return {
            ...state,
            items: newItems,
            total: newItems.reduce((sum, item) => sum + item.price, 0)
        };
    })
)