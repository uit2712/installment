import { createStore } from 'vuex';
import { product } from './modules/product';
import { payment } from './modules/payment';
import { PRODUCT_MODULE_NAME } from './module-types/product-types';
import { PAYMENT_MODULE_NAME } from './module-types/payment-types';

export const store = createStore({
});
store.registerModule(PRODUCT_MODULE_NAME, product);
store.registerModule(PAYMENT_MODULE_NAME, payment);