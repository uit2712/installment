import * as paymentTypes from "./../module-types/payment-types"
import { PRODUCT_MODULE_NAME } from "./../module-types/product-types"
export const payment = {
    namespaced: true,
    state() {
        return {
            banks: [
                {
                    bankId: "e213",
                    name: "Ngân hàng ACB",
                    imageUrl: "https://thuviendohoa.vn/2020/upload/images/items/logo-ngan-hang-acb-vector-1774.jpg?t=20160616_065700",
                    isActive: false,
                    isHidden: false,
                    credits: [
                        {
                            creditId: "c131",
                            detailPayment: [
                                {
                                    detailPaymentId: 'afc2',
                                    numberOfMonth: 6,
                                    prepaidPrice: 33490000,
                                    installmentPerMonth: 5665000,
                                    totalInstallment: 34400000,
                                    difference: 1000000, //chenh lech
                                    musPay: 0,
                                    isActive: false,
                                },
                                {
                                    detailPaymentId: 'afc3',
                                    numberOfMonth: 9,
                                    prepaidPrice: 33490000,
                                    installmentPerMonth: 3665000,
                                    totalInstallment: 35400000,
                                    difference: 3000000, //chenh lech
                                    musPay: 0,
                                    isActive: false,
                                },
                                {
                                    detailPaymentId: 'afc4',
                                    numberOfMonth: 12,
                                    prepaidPrice: 33490000,
                                    installmentPerMonth: 2955000,
                                    totalInstallment: 36400000,
                                    difference: 4000000, //chenh lech
                                    musPay: 0,
                                    isActive: false,
                                }
                            ],
                            name: "Visa",
                            imageUrl: "https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png",
                            isActive: false,
                            isHidden: false
                        },
                        {
                            creditId: "c132",
                            detailPayment: [
                                {
                                    detailPaymentId: 'afc2',
                                    numberOfMonth: 6,
                                    prepaidPrice: 33490000,
                                    installmentPerMonth: 5665000,
                                    totalInstallment: 34400000,
                                    difference: 1000000, //chenh lech
                                    musPay: 0,
                                    isActive: false,
                                },
                                {
                                    detailPaymentId: 'afc3',
                                    numberOfMonth: 9,
                                    prepaidPrice: 33490000,
                                    installmentPerMonth: 3665000,
                                    totalInstallment: 35400000,
                                    difference: 3000000, //chenh lech
                                    musPay: 0,
                                    isActive: false,
                                },
                                {
                                    detailPaymentId: 'afc4',
                                    numberOfMonth: 12,
                                    prepaidPrice: 33490000,
                                    installmentPerMonth: 2955000,
                                    totalInstallment: 36400000,
                                    difference: 4000000, //chenh lech
                                    musPay: 0,
                                    isActive: false,
                                }
                            ],
                            name: "MasterCard",
                            imageUrl: "https://cdn.iconscout.com/icon/free/png-512/mastercard-10-226450.png",
                            isActive: false,
                            isHidden: false
                        },
                        {
                            creditId: "c133",
                            detailPayment: [
                                {
                                    detailPaymentId: 'afc2',
                                    numberOfMonth: 6,
                                    prepaidPrice: 33490000,
                                    installmentPerMonth: 5665000,
                                    totalInstallment: 34400000,
                                    difference: 1000000, //chenh lech
                                    musPay: 0,
                                    isActive: false,
                                },
                                {
                                    detailPaymentId: 'afc3',
                                    numberOfMonth: 9,
                                    prepaidPrice: 33490000,
                                    installmentPerMonth: 3665000,
                                    totalInstallment: 35400000,
                                    difference: 3000000, //chenh lech
                                    musPay: 0,
                                    isActive: false,
                                },
                                {
                                    detailPaymentId: 'afc4',
                                    numberOfMonth: 12,
                                    prepaidPrice: 33490000,
                                    installmentPerMonth: 2955000,
                                    totalInstallment: 36400000,
                                    difference: 4000000, //chenh lech
                                    musPay: 0,
                                    isActive: false,
                                }
                            ],
                            name: "JCB",
                            imageUrl: "https://cdn3.iconfinder.com/data/icons/payment-method/480/jcb_card_payment-512.png",
                            isActive: false,
                            isHidden: false
                        },
                    ],
                },
                {
                    bankId: "e214",
                    name: "Ngân hàng Eximbank",
                    imageUrl: "https://eximbank.com.vn/web/image/1200/LogoEximbank4.jpg",
                    isActive: false,
                    isHidden: false,
                    credits: [
                        {
                            creditId: "c131",
                            detailPayment: [{
                                detailPaymentId: 'afc2',
                                numberOfMonth: 6,
                                prepaidPrice: 33490000,
                                installmentPerMonth: 5665000,
                                totalInstallment: 34400000,
                                difference: 1000000, //chenh lech
                                musPay: 0,
                                isActive: false,
                            },
                            {
                                detailPaymentId: 'afc3',
                                numberOfMonth: 9,
                                prepaidPrice: 33490000,
                                installmentPerMonth: 3665000,
                                totalInstallment: 35400000,
                                difference: 3000000, //chenh lech
                                musPay: 0,
                                isActive: false,
                            },
                            {
                                detailPaymentId: 'afc4',
                                numberOfMonth: 12,
                                prepaidPrice: 33490000,
                                installmentPerMonth: 2955000,
                                totalInstallment: 36400000,
                                difference: 4000000, //chenh lech
                                musPay: 0,
                                isActive: false,
                            }],
                            name: "Visa",
                            imageUrl: "https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png",
                            isActive: false,
                            isHidden: false
                        },
                        {
                            creditId: "c132",
                            detailPayment: [],
                            name: "MasterCard",
                            imageUrl: "https://cdn.iconscout.com/icon/free/png-512/mastercard-10-226450.png",
                            isActive: false,
                            isHidden: false
                        },
                    ],
                },
                {
                    bankId: "e215",
                    name: "Ngân hàng HSBC",
                    imageUrl: "https://m.thebank.vn/uploads/2020/05/10/thebank_logonganhanghsbc_1589090950.png",
                    isActive: false,
                    isHidden: false,
                    credits: [
                        {
                            creditId: "c131",
                            detailPayment: [],
                            name: "Visa",
                            imageUrl: "https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png",
                            isActive: false,
                            isHidden: false
                        },
                    ],
                },
                {
                    bankId: "e216",
                    name: "Ngân hàng OCB",
                    imageUrl: "https://cdn.viectotnhat.com/asset/home/img/employer/2018/02/01/1517464701_cd4062e4-b85e-11e7-a3fc-2e995a9a3302.jpg",
                    isActive: false,
                    isHidden: false,
                    credits: [
                        {
                            creditId: "c131",
                            detailPayment: [],
                            name: "Visa",
                            imageUrl: "https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png",
                            isActive: false,
                            isHidden: false
                        },
                        {
                            creditId: "c132",
                            detailPayment: [],
                            name: "MasterCard",
                            imageUrl: "https://cdn.iconscout.com/icon/free/png-512/mastercard-10-226450.png",
                            isActive: false,
                            isHidden: false
                        },
                        {
                            creditId: "c133",
                            detailPayment: [],
                            name: "JCB",
                            imageUrl: "https://cdn3.iconfinder.com/data/icons/payment-method/480/jcb_card_payment-512.png",
                            isActive: false,
                            isHidden: false
                        },
                    ],
                },
                {
                    bankId: "e217",
                    name: "Ngân hàng Techcombank",
                    imageUrl: "https://hoc11.vn/wp-content/uploads/2020/07/5-2-1.jpg",
                    isActive: false,
                    isHidden: false,
                    credits: [

                        {
                            creditId: "c132",
                            detailPayment: [],
                            name: "MasterCard",
                            imageUrl: "https://cdn.iconscout.com/icon/free/png-512/mastercard-10-226450.png",
                            isActive: false,
                            isHidden: false
                        },
                        {
                            creditId: "c133",
                            detailPayment: [],
                            name: "JCB",
                            imageUrl: "https://cdn3.iconfinder.com/data/icons/payment-method/480/jcb_card_payment-512.png",
                            isActive: false,
                            isHidden: false
                        },
                    ],
                },
                {
                    bankId: "e218",
                    name: "Ngân hàng TP Bank",
                    imageUrl: "https://m.thebank.vn/uploads/2020/05/02/thebank_logotpbank_1588408748.jpg",
                    isActive: false,
                    isHidden: false,
                    credits: [

                        {
                            creditId: "c132",
                            detailPayment: [],
                            name: "MasterCard",
                            imageUrl: "https://cdn.iconscout.com/icon/free/png-512/mastercard-10-226450.png",
                            isActive: false,
                            isHidden: false
                        },
                    ],
                },
                {
                    bankId: "e219",
                    name: "Ngân hàng Vietcombank",
                    imageUrl: "https://webrt.vn/wp-content/uploads/2018/01/logo-vietcombank.jpg",
                    isActive: false,
                    isHidden: false,
                    credits: [
                        {
                            creditId: "c131",
                            detailPayment: [],
                            name: "Visa",
                            imageUrl: "https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png",
                            isActive: false,
                            isHidden: false
                        },
                        {
                            creditId: "c132",
                            detailPayment: [],
                            name: "MasterCard",
                            imageUrl: "https://cdn.iconscout.com/icon/free/png-512/mastercard-10-226450.png",
                            isActive: false,
                            isHidden: false
                        },
                        {
                            creditId: "c133",
                            detailPayment: [],
                            name: "JCB",
                            imageUrl: "https://cdn3.iconfinder.com/data/icons/payment-method/480/jcb_card_payment-512.png",
                            isActive: false,
                            isHidden: false
                        },
                    ],
                },
                {
                    bankId: "e220",
                    name: "Ngân hàng Vietinbank",
                    imageUrl: "https://xuanhieu.org/wp-content/uploads/2019/11/ngan-hang-cong-thuong-viet-nam-vietinbank.png",
                    isActive: false,
                    isHidden: false,
                    credits: [
                        {
                            creditId: "c131",
                            detailPayment: [],
                            name: "Visa",
                            imageUrl: "https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png",
                            isActive: false,
                            isHidden: false
                        },
                        {
                            creditId: "c133",
                            detailPayment: [],
                            name: "JCB",
                            imageUrl: "https://cdn3.iconfinder.com/data/icons/payment-method/480/jcb_card_payment-512.png",
                            isActive: false,
                            isHidden: false
                        },
                    ],
                },
                {
                    bankId: "e221",
                    name: "Ngân hàng VP Bank",
                    imageUrl: "https://logoart.vn/blog/wp-content/uploads/2011/08/thiet-ke-lo-go-sao-kim-15.png",
                    isActive: false,
                    isHidden: false,
                    credits: [
                        {
                            creditId: "c132",
                            detailPayment: [],
                            name: "MasterCard",
                            imageUrl: "https://cdn.iconscout.com/icon/free/png-512/mastercard-10-226450.png",
                            isActive: false,
                            isHidden: false
                        },
                        {
                            creditId: "c133",
                            detailPayment: [],
                            name: "JCB",
                            imageUrl: "https://cdn3.iconfinder.com/data/icons/payment-method/480/jcb_card_payment-512.png",
                            isActive: false,
                            isHidden: false
                        },
                    ],
                },
            ],
            credits: [
                {
                    creditId: "c131",
                    detailPayment: [],
                    name: "Visa",
                    imageUrl: "https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png",
                    isActive: false,
                    isHidden: false
                },
                {
                    creditId: "c132",
                    detailPayment: [],
                    name: "MasterCard",
                    imageUrl: "https://cdn.iconscout.com/icon/free/png-512/mastercard-10-226450.png",
                    isActive: false,
                    isHidden: false
                },
                {
                    creditId: "c133",
                    detailPayment: [],
                    name: "JCB",
                    imageUrl: "https://cdn3.iconfinder.com/data/icons/payment-method/480/jcb_card_payment-512.png",
                    isActive: false,
                    isHidden: false
                },
            ],
            prepaids: [
                {
                    prepaidId: "pe2",
                    prepaidPrice: 3000000,
                },
                {
                    prepaidId: "pe3",
                    prepaidPrice: 6000000,
                },
                {
                    prepaidId: "pe4",
                    prepaidPrice: 9000000,
                },
                {
                    prepaidId: "pe5",
                    prepaidPrice: 12000000,
                },
            ],
            paymentDetails: [],
            resultPayment: {
                bankId: '',
                name: '',
                imageUrl: '',
                credit: {
                    creditId: '',
                    name: '',
                    imageUrl: '',
                    detailPayment: {
                        detailPaymentId: '',
                        numberOfMonth: 0,
                        prepaidPrice: 0,
                        installmentPerMonth: 0,
                        totalInstallment: 0,
                        difference: 0, //chenh lech
                        mustPay: 0,
                        isActive: false,
                    },
                    isActive: false,
                    isHidden: false
                },
                isActive: false,
                isHidden: false,
            },
        }
    },
    getters: {
        [paymentTypes.GET_LIST_BANK]: function (state, getters, rootState, rootGetters) {
            return state.banks
        },
        [paymentTypes.GET_LIST_CREDIT]: function (state) {
            return state.credits
        },
        [paymentTypes.GET_PAYMENT_DETAILS]: function (state) {
            return state.paymentDetails
        },
        [paymentTypes.GET_NAME_BANK_AND_NAME_CREDIT]: function (state) {
            return state.resultPayment
        },
        [paymentTypes.GET_LIST_PREPAID]: function (state) {
            return state.prepaids
        },
        [paymentTypes.GET_SINGLE_PREPAID]: function (state) {
            return state.resultPayment.credit.detailPayment.prepaidPrice
        }

    },
    mutations: {
        [paymentTypes.PICK_UP_BANK]: function (state, payload) {
            if (payload.bank.isActive == true) return;
            state.banks.forEach(el => {
                //Set credit item in each bank isActive to false
                el.credits.forEach(item => {
                    item.isActive = false
                });
                if (el.bankId == payload.bank.bankId) {
                    el.isActive = true;
                    state.credits = [...el.credits];

                    state.resultPayment.bankId = el.bankId;
                    state.resultPayment.imageUrl = el.imageUrl;
                    state.resultPayment.isActive = el.isActive;
                    state.resultPayment.isHidden = el.isHidden;
                    state.resultPayment.name = el.name;
                }
                else {
                    el.isActive = false
                }
            });
        },
        [paymentTypes.PICK_UP_CREDIT]: function (state, payload) {
            if (payload.credit.isActive == true) return;
            state.credits.forEach(el => {
                if (el.creditId == payload.credit.creditId) {
                    el.isActive = true;
                    state.paymentDetails = el.detailPayment;

                    state.resultPayment.credit.creditId = el.creditId;
                    state.resultPayment.credit.imageUrl = el.imageUrl;
                    state.resultPayment.credit.isActive = el.imageUrl;
                    state.resultPayment.credit.isHidden = el.isHidden;
                    state.resultPayment.credit.name = el.name;
                }
                else {
                    el.isActive = false
                }
            })
        },
        [paymentTypes.PICK_UP_PAYMENT_DETAILS]: function (state, payload) {
            state.paymentDetails.forEach(el => {
                if (el.detailPaymentId == payload.paymentDetails.detailPaymentId) {
                    el.isActive = true;
                    state.resultPayment.credit.detailPayment = { ...el };
                }
                else {
                    el.isActive = false;
                }
            })
        },
        [paymentTypes.SET_PREPAID_PRODUCT]: function (state, payload) {
            state.resultPayment.credit.detailPayment.prepaidPrice = payload.prepaid.prepaidPrice;
            state.paymentDetails.forEach(el => {
                el.prepaidPrice = payload.prepaid.prepaidPrice
            })
        }
    },

}