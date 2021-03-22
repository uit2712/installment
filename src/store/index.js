import { createStore } from 'vuex';
import { product } from './modules/product';
import { payment } from './modules/payment';

export const store = createStore({
    modules: {
        product,
        payment
    }
})