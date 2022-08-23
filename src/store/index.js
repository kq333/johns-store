import { createStore } from "vuex";
import { getfilterCategory } from "./functions";

export default createStore({
  state: {
    productData: [
      {
        name: "The Cottage",
        category: "treehouse",
        id: 1,
        price: 240000,
        src: require("../assets/icon/treeHouseImg/treehouse1.jpg"),
      },
      {
        name: "Rose Cottage",
        category: "treehouse",
        id: 2,
        price: 540000,
        src: require("../assets/icon/treeHouseImg/treehouse2.jpg"),
      },
      {
        name: " The Coach House",
        category: "treehouse",
        id: 3,
        price: 740000,
        src: require("../assets/icon/treeHouseImg/treehouse3.jpg"),
      },
      {
        name: "Orchard House",
        category: "treehouse",
        id: 4,
        price: 240000,
        src: require("../assets/icon/treeHouseImg/treehouse4.jpg"),
      },
      {
        name: "The Lodge",
        category: "treehouse",
        id: 5,
        price: 940000,
        src: require("../assets/icon/treeHouseImg/treehouse5.jpg"),
      },
      {
        name: "Ivy Cottage",
        category: "treehouse",
        id: 6,
        price: 350000,
        src: require("../assets/icon/treeHouseImg/treehouse6.png"),
      },
      {
        name: "The Barn",
        category: "treehouse",
        id: 10,
        price: 770000,
        src: require("../assets/icon/treeHouseImg/treehouse7.jpg"),
      },
      {
        name: "The Willows",
        category: "treehouse",
        id: 11,
        price: 980000,
        src: require("../assets/icon/treeHouseImg/treehouse8.jpg"),
      },
      {
        name: "The Old Rectory",
        category: "treehouse",
        id: 12,
        price: 210000,
        src: require("../assets/icon/treeHouseImg/treehouse9.jpeg"),
      },

      {
        name: " Hillside",
        category: "groundhouse",
        id: 13,
        price: 540000,
        src: require("../assets/icon/houseImg/house1.jpg"),
      },
      {
        name: "Hillcrest",
        category: "groundhouse",
        id: 14,
        price: 2340000,
        src: require("../assets/icon/houseImg/house2.jpeg"),
      },
      {
        name: "The Old Vicarage",
        category: "groundhouse",
        id: 15,
        price: 4620000,
        src: require("../assets/icon/houseImg/house3.jpg"),
      },
      {
        name: "Sunnyside",
        category: "groundhouse",
        id: 16,
        price: 870000,
        src: require("../assets/icon/houseImg/house4.jpg"),
      },
      {
        name: "Orchard Cottage",
        category: "groundhouse",
        id: 17,
        price: 340000,
        src: require("../assets/icon/houseImg/house5.jpg"),
      },
      {
        name: "The Laurels",
        category: "groundhouse",
        id: 18,
        price: 3450000,
        src: require("../assets/icon/houseImg/house6.jpg"),
      },
      {
        name: "The Gables",
        category: "groundhouse",
        id: 19,
        price: 894000,
        src: require("../assets/icon/houseImg/house7.jpg"),
      },
      {
        name: "The Beeches",
        category: "groundhouse",
        id: 20,
        price: 123000,
        src: require("../assets/icon/houseImg/house8.jpg"),
      },
      {
        name: "The Firs",
        category: "groundhouse",
        id: 21,
        price: 3330000,
        src: require("../assets/icon/houseImg/house9.jpg"),
      },

      {
        name: "Ace",
        id: 22,
        price: 500,
        src: require("../assets/icon/catsImg/cat1.jpg"),
        category: "cats",
      },
      {
        name: "Balfour",
        id: 23,
        price: 350,
        src: require("../assets/icon/catsImg/cat2.jpg"),
        category: "cats",
      },
      {
        name: "Calder",
        id: 24,
        price: 650,
        src: require("../assets/icon/catsImg/cat3.jpg"),
        category: "cats",
      },
      {
        name: "Corbin",
        id: 25,
        price: 250,
        src: require("../assets/icon/catsImg/cat4.jpg"),
        category: "cats",
      },
      {
        name: "Duke",
        id: 26,
        price: 480,
        src: require("../assets/icon/catsImg/cat5.jpg"),
        category: "cats",
      },
      {
        name: "Finn",
        id: 27,
        price: 780,
        src: require("../assets/icon/catsImg/cat6.jpg"),
        category: "cats",
      },
      {
        name: "Lancelot",
        id: 28,
        price: 450,
        src: require("../assets/icon/catsImg/cat7.jpg"),
        category: "cats",
      },
      {
        name: "Scully",
        id: 29,
        price: 390,
        src: require("../assets/icon/catsImg/cat8.jpg"),
        category: "cats",
      },
      {
        name: "Wynn",
        id: 30,
        price: 530,
        src: require("../assets/icon/catsImg/cat9.jpg"),
        category: "cats",
      },
    ],
    productCategory: [
      { name: "Cats", value: "cats" },
      { name: "Tree House", value: "treehouse" },
      { name: "Ground House", value: "groundhouse" },
    ],
    imageFormatValidation: [
      "image/jpeg",
      "image/RW2",
      "image/svg",
      "image/png",
      "image/gif",
    ],
    currancy: [
      { name: "PLN", id: 1 },
      { name: "USD", id: 2 },
      { name: "EUR", id: 3 },
    ],
    categoryValue: "",
    nameValue: "",
    priceValue: null,
    imageBase64: "",
    isSubmiteBtnActive: false,
    inputImageFormat: "",
    isSortedCats: false,
    isSortedGroundhouse: false,
    isSortedTreehouse: false,
    searchedWord: "",
    isModalOpen: false,
    productCurrency: "PLN",
  },
  getters: {
    getCategoryValueLength: (state) => state.categoryValue.length > 0,
    getnameValueLength: (state) => state.nameValue.length,
    getPriceValue: (state) => state.priceValue > 0,
    getImageBase64Length: (state) => state.imageBase64.length > 0,

    getValidationInputValueByNumber: (state) => {
      const numbers = /^[0-9.,]+\.?[0-9]*$/;
      const validateInputValues = state.nameValue.match(numbers);
      return validateInputValues ? true : false;
    },

    getValidateFormReady: (state, getters) => {
      if (
        getters.getCategoryValueLength &&
        getters.getnameValueLength > 1 &&
        getters.getPriceValue &&
        getters.getImageBase64Length &&
        !getters.getValidationInputValueByNumber
      ) {
        return true;
      } else {
        return false;
      }
    },

    getPushNewDataToStore: (state, getters) => {
      if (getters.getValidateFormReady && state.isSubmiteBtnActive) {
        state.productData.push({
          name: state.nameValue,
          category: state.categoryValue,
          price: state.priceValue,
          src: state.imageBase64,
          id: Math.floor(Math.random() * 10000),
        });

        state.isAddToCategory = "";
        state.categoryValue = "";
        state.nameValue = "";
        state.priceValue = "";
        state.imageBase64 = "";
        state.isModalOpen = false;
        return true;
      } else {
        return false;
      }
    },

    getSearchedWordLength: (state) => state.searchedWord.length >= 1,

    getSortCats: (state) =>
      getfilterCategory(
        state.productData,
        state.isSortedCats,
        "cats",
        state.searchedWord
      ),

    getSortTreehouse: (state) =>
      getfilterCategory(
        state.productData,
        state.isSortedTreehouse,
        "treehouse",
        state.searchedWord
      ),

    getSortGroundhouse: (state) =>
      getfilterCategory(
        state.productData,
        state.isSortedGroundhouse,
        "groundhouse",
        state.searchedWord
      ),

    //////////////////////////////////////////////////////////////////

    // getUpdatePrice: (state) => {

    //     return state.productData = (state.productData.map(d => (
    //         Object.assign({}, d, {price: d.price * 2})
    //       )));
    //   }
  },
  mutations: {
    ADD_CATEGORY_VALUE(state, payload) {
      state.categoryValue = payload;
    },

    ADD_NAME_VALUE(state, payload) {
      state.nameValue = payload;
    },
    ADD_PRICE_VALUE(state, payload) {
      state.priceValue = payload;
    },

    SET_IMAGE_VALUE(state, payload) {
      const getCompareValue = state.imageFormatValidation.filter(
        (elem) => elem === payload.type
      );

      if (getCompareValue.length) {
        const file = payload;
        const reader = new FileReader();
        let rawImg;
        reader.onloadend = () => {
          rawImg = reader.result;
          state.imageBase64 = rawImg;
        };
        reader.readAsDataURL(file);
      } else {
        state.imageBase64 = "";
      }
    },

    ADD_SUBMITE_FORM(state, payload) {
      state.isSubmiteBtnActive = payload;
    },

    ADD_SEARCHED_INPUT_VALUE(state, payload) {
      state.searchedWord = payload;
    },

    SET_IS_MODAL_OPEN(state, payload) {
      state.isModalOpen === false
        ? (state.isModalOpen = payload)
        : (state.isModalOpen = payload);

      state.isAddToCategory = "";
      state.categoryValue = "";
      state.nameValue = "";
      state.priceValue = "";
      state.imageBase64 = "";
    },

    ADD_SORT_PRICE_CATS(state, payload) {
      state.isSortedCats = payload;
    },

    ADD_SORT_PRICE_TREEHOUSE(state, payload) {
      state.isSortedTreehouse = payload;
    },

    ADD_SORT_PRICE_GROUNDHOUSE(state, payload) {
      state.isSortedGroundhouse = payload;
    },

    ADD_CURRENCY_PRODUCT(state, payload) {
      state.productCurrency = payload;
    },
  },
  actions: {
    addSubmiteForm({ commit }, payload) {
      commit("ADD_SUBMITE_FORM", payload);
    },

    isModalOpen({ commit }, payload) {
      commit("SET_IS_MODAL_OPEN", payload);
    },
    addCategoryValue({ commit }, payload) {
      commit("ADD_CATEGORY_VALUE", payload);
    },

    addNameValue({ commit }, payload) {
      commit("ADD_NAME_VALUE", payload);
    },
    addPriceValue({commit}, payload){
      commit('ADD_PRICE_VALUE', payload)
    },

    addImageValue({commit}, payload){
      commit('SET_IMAGE_VALUE', payload)
    }


  },
  modules: {},
});
