import axios from 'axios'

export const loadData = ({commit}) => {
    axios.get('/saves.json')
        .then(res =>{
            console.log(res);
            if (res.data) {
                const stocks = res.data.stocks;
                const funds = res.data.funds;
                const stockPortfolio = res.data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };
                
                commit('setStock', stocks);
                commit('setPortfolio', portfolio);
            }
        })
        .catch(err => console.log(err));
};