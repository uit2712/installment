import * as productTypes from '../module-types/product-types'
export const product = {
    namespaced: true,
    state() {
        return {
            productInfo: {
                productId: "a123",
                name: "IPhone 12 Pro 256GB",
                price: 34990000,
                imageUrl:
                    "https://cdn.tgdd.vn/Products/Images/42/228738/iphone-12-pro-xam-new-600x600-200x200.jpg",
                link: "",
                priceSale: 33490000,
                discount: 5,
                promotionDetails: [
                    {
                        promotionDetailsId: "a321",
                        name: "Giảm giá 1.000.000₫",
                        linkDetails: null
                    },
                    {
                        promotionDetailsId: "a322",
                        name: "Giảm giá 500.000₫",
                        linkDetails: null
                    },
                    {
                        promotionDetailsId: "a323",
                        name: "Giảm 50% giá mua gói bảo hiểm rơi vỡ 6 tháng",
                        linkDetails: "https://www.thegioididong.com/tin-tuc/duoc-giam-gia-goi-bao-hiem-roi-vo-khi-mua-kem-iphone-1331129"
                    },
                ],
                colorProduct: [
                    {
                        colorId: "b123",
                        name: "Xanh"
                    }, {
                        colorId: "b1213",
                        name: "Đỏ"
                    }
                ],
            },
            resultColor: {
                colorId: '',
                name: '',
            },
        }
    },
    getters: {
        [productTypes.GET_PRODUCT_INFO_BASIC]: function (state) {
            return state.productInfo
        },
        [productTypes.GET_PRODUCT_PROMOTION]: function (state) {
            return state.productInfo.promotionDetails
        },
        [productTypes.GET_PRODUCT_COLOR]: function (state) {
            return state.productInfo.colorProduct
        },
        [productTypes.GET_PRODUCT_COLOR_RESULT]: function (state) {
            return state.resultColor
        }
    },
    mutations: {
        [productTypes.SET_PRODUCT_COLOR]: function (state, payload) {
            state.resultColor = payload.color
        }
    }
}