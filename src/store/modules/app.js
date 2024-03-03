export default {

    state: {
        activePage: "Home",
        gradColors: "main",
        color_main_1: "rgb(215,154,96)",
        color_main_2: " rgb(106,87,192)",
    },


    getters: {
        getcolors(state) {
            return state.gradColors
        },
        getGradOne(state) {
            if (state.gradColors == 'main') {
                return state.color_main_1
            }
        },
        getGradTwo(state) {
            if (state.gradColors == 'main') {
                return state.color_main_2
            }
        },
        getActivePage(state) {
            return state.activePage
        },

    },
    mutations: {
        setActive(state, newdata) {
            state.activePage = newdata
        }
    },
  
}