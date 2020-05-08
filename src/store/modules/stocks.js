import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    setStock (state, stocks) {
        state.stocks = stocks;
    },
    randomStock (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.startPrice * (1 + Math.random() - 0.7));
            console.log('stocks prices ' + JSON.stringify(stocks));
        });
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit('buyStock', order);
    },
    initStocks: ({commit}) => {
        commit('setStock', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('randomStock');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};