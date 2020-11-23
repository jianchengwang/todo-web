import {
  v4 as uuidv4
} from "uuid";

export const state = () => ({
  fooddata: [],
  cart: [],
})

export const getters = {
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.count, 0);
  },
  totalPrice: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0);
  }
};

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },

  addToCart: (state, data) => {
    data.id = uuidv4();
    state.cart.push(data);
  }
}

export const actions = {
  async getFoodData({ state, commit }) {
    if(state.fooddata.length) return
    try {
      await fetch(
        "https://service-oczols32-1300481504.gz.apigw.tencentcs.com/release/test-api-getFoodData", {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.AWS_API_KEY
        }
      }).then(response => response.json())
      .then(data => {
        console.log(data)
        commit("updateFoodData", data);
      });
    } catch (err) {
      console.log(err)
    }
  }
}
