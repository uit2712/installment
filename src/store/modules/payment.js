import { GET_LIST_BANK, GET_LIST_CREDIT, PICK_UP_BANK } from "./../module-types/payment-types"
export const payment = {
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
                    bankId: "e214",
                    name: "Ngân hàng Eximbank",
                    imageUrl: "https://eximbank.com.vn/web/image/1200/LogoEximbank4.jpg",
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
        }
    },
    getters: {
        [GET_LIST_BANK]: function (state) {
            return state.banks
        },
        [GET_LIST_CREDIT]: function (state) {
            return state.credits
        }
    },
    mutations: {
        [PICK_UP_BANK]: function (state, payload) {
            if (payload.bank.isActive == false) {
                state.banks.forEach(el => {
                    el.isActive = false
                });
            }
            payload.bank.isActive = true;
        }
    },

}