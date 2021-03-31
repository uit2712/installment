import * as addressTypes from "./../module-types/address-types";
export const address = {
    namespaced: true,
    state() {
        return {
            addressList: [
                {
                    provinceOrCityId: 'gh1',
                    name: 'Hồ Chí Minh',
                    districts: [
                        {
                            districtId: 'dst1',
                            name: 'Quận 1',
                            wardsOrCommunes: [
                                {
                                    wardsOrCommunesId: 'ph1',
                                    name: 'Phường 1'
                                },
                                {
                                    wardsOrCommunesId: 'ph2',
                                    name: 'Phường 2'
                                },
                                {
                                    wardsOrCommunesId: 'ph3',
                                    name: 'Phường 3'
                                }
                            ]
                        },
                        {
                            districtId: 'dst2',
                            name: 'Quận 2',
                            wardsOrCommunes: [
                                {
                                    wardsOrCommunesId: 'ph1',
                                    name: 'Phường 1'
                                },
                                {
                                    wardsOrCommunesId: 'ph2',
                                    name: 'Phường 2'
                                },
                                {
                                    wardsOrCommunesId: 'ph3',
                                    name: 'Phường 3'
                                }
                            ]
                        },
                        {
                            districtId: 'dst3',
                            name: 'Quận 3',
                            wardsOrComunes: [
                                {
                                    wardsOrCommunesId: 'ph1',
                                    name: 'Phường 1'
                                },
                                {
                                    wardsOrCommunesId: 'ph2',
                                    name: 'Phường 2'
                                },
                                {
                                    wardsOrCommunesId: 'ph3',
                                    name: 'Phường 3'
                                }
                            ]
                        },
                    ]
                },
                {
                    provinceOrCityId: 'gh2',
                    name: 'Đồng Nai',
                    districts: [
                        {
                            districtId: 'dst1',
                            name: 'Xuân Lộc',
                            wardsOrCommunes: [
                                {
                                    wardsOrCommunesId: 'ph1',
                                    name: 'Xuân Thọ'
                                },
                                {
                                    wardsOrCommunesId: 'ph2',
                                    name: 'Xuân Bắc'
                                },
                                {
                                    wardsOrCommunesId: 'ph3',
                                    name: 'Xuân Thành'
                                }
                            ]
                        },
                        {
                            districtId: 'dst2',
                            name: 'Long Khánh',
                            wardsOrCommunes: [
                                {
                                    wardsOrCommunesId: 'ph1',
                                    name: 'Xuân Thanh'
                                },
                                {
                                    wardsOrCommunesId: 'ph2',
                                    name: 'Xuân Hòa'
                                },
                                {
                                    wardsOrCommunesId: 'ph3',
                                    name: 'Bảo Vinh'
                                }
                            ]
                        },
                    ]
                }
            ],
            districtList: [],
            wardsOrCommunesList: [],
            resultAddress: {
                provinceOrCityId: '',
                name: '',
                district: {
                    districtId: '',
                    name: '',
                    wardsOrCommunes: {
                        wardsOrCommunesId: '',
                        name: ''
                    }
                }
            }
        }
    },
    getters: {
        [addressTypes.GET_LIST_CITY]: function (state) {
            return state.addressList;
        },
        [addressTypes.GET_LIST_DISTRICT]: function (state) {
            return state.districtList;
        },
        [addressTypes.GET_LIST_WARD]: function (state) {
            return state.wardsOrCommunesList;
        },
        [addressTypes.GET_SINGLE_CITY]: function (state) {
            return state.resultAddress.name;
        },
        [addressTypes.GET_SINGLE_DISTRICT]: function (state) {
            return state.resultAddress.district.name;
        },
        [addressTypes.GET_SINGLE_WARD]: function (state) {
            return state.resultAddress.district.wardsOrCommunes.name;
        },
    },
    mutations: {
        [addressTypes.PICK_UP_CITY]: function (state, payload) {
            state.addressList.forEach(el => {
                if (el.provinceOrCityId == payload.provinceOrCity.provinceOrCityId) {
                    state.districtList = [...el.districts];

                    state.resultAddress.provinceOrCityId = el.provinceOrCityId;
                    state.resultAddress.name = el.name;

                    state.resultAddress.district.districtId = '';
                    state.resultAddress.district.name = '';
                    state.resultAddress.district.wardsOrCommunes.wardsOrCommunesId = '';
                    state.resultAddress.district.wardsOrCommunes.name = '';
                }
            });
        },
        [addressTypes.PICK_UP_DISTRICT]: function (state, payload) {
            state.districtList.forEach(el => {
                if (el.districtId == payload.district.districtId) {
                    state.wardsOrCommunesList = [...el.wardsOrCommunes];

                    state.resultAddress.district.districtId = el.districtId;
                    state.resultAddress.district.name = el.name;

                    state.resultAddress.district.wardsOrCommunes.wardsOrCommunesId = '';
                    state.resultAddress.district.wardsOrCommunes.name = '';

                }
            })
        },
        [addressTypes.PICK_UP_WARD]: function (state, payload) {
            state.wardsOrCommunesList.forEach(el => {
                if (el.wardsOrCommunesId == payload.wardsOrCommunes.wardsOrCommunesId) {
                    state.resultAddress.district.wardsOrCommunes.wardsOrCommunesId = el.wardsOrCommunesId
                    state.resultAddress.district.wardsOrCommunes.name = el.name;
                    console.log(state.resultAddress)
                }
            })
        }

    }
}