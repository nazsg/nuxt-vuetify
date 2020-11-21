export const state = () => ({
  test: 'hi from root store',
  starters: [],
  soups: [],
  all_main_menus: [],
  show_home: false
})

export const getters = {
  getTest: (state) => {
    return state.test
  },
  getStarters: (state) => {
    return state.starters
  },
  getShowHome: state => {
    return state.show_home
  }
}

export const mutations = {
  set_starters(state, arg) {
    // state.starters = arg[1].starter
  },
  set_soups(state, arg) {
    // state.soups = arg[0].soups
  },
  set_all_main_menus(state, arg) {
    // state.all_main_menus = arg
  },
  set_show_home(state) {
    state.show_home = true
  }
}

export const actions = {
  async nuxtServerInit(store, context) {
    try {
      const response = await context.$axios.get('orders_2020.php')
      store.commit('restaurant/set_orders', response.data)
    } catch (error) {
      
    }
  }
}

// {{ $store.state.starters }} (state)  <hr />
// <!-- {{ $store.state.soups }} (state)  <hr /> -->
// {{ $store.getters.getStarters }} (getters)  <hr /> -->
// {{ $store.state.main_menu.starters }} (state) <hr /> -->
// {{ $store.getters['main_menu/getStarters'] }} (getters) <hr /> -->