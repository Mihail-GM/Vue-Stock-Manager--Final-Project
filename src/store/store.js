import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        totalAmountCash: 10000,
        bmwData: {
            price: 81,
        },
        googleData: {
            price: 44,
        },
        appleData: {
            price: 280,
        },
        twitterData: {
            price: 20,
        },
        userPortfolio: {
            bmwStock: {price: 0, quantity: 0},
            googleStock: {price: 0, quantity: 0},
            appleStock: {price: 0, quantity: 0},
            twitterStock: {price: 0, quantity: 0}

        }
    },
    getters: { 
        showMeTheMoney: state => {
            return state.totalAmountCash;
        },
        showBmwPrice: state => {
            return state.bmwData.price;
        },
        showGooglePrice: state => {
            return state.googleData.price;
        },
        showApplePrice: state => {
            return state.appleData.price;
        },
        showTwitterrice: state => {
            return state.twitterData.price;
        },

        showPortfolioBmwPrice: state => {
            return state.userPortfolio.bmwStock.price;
        },

        showPortfolioBmwQuantity: state => {
            return state.userPortfolio.bmwStock.quantity;
        },
        showPortfolioGoogleQuantity: state => {
            return state.userPortfolio.googleStock.quantity;
        },
        showPortfolioAppleQuantity: state => {
            return state.userPortfolio.appleStock.quantity;
        },
        showPortfolioTwitterQuantity: state => {
            return state.userPortfolio.twitterStock.quantity;
        }


    },
    mutations: {
        buyStock: (state, payload) => {
            
            switch (payload.stockType) {
                
                case 'Twitter':
                    if(state.totalAmountCash < state.twitterData.price * payload.quantity){
                        break;
                    }
                    state.totalAmountCash -= state.twitterData.price * payload.quantity;

                    console.log("Price stock : " + state.twitterData.price + " q: " + payload.quantity ); 

                    state.userPortfolio.twitterStock.price = state.twitterData.price;
                    state.userPortfolio.twitterStock.quantity += parseInt(payload.quantity);

                    console.log("Porfolio stock : " + state.userPortfolio.twitterStock.quantity);
                    break;

                case 'Google':
                    
                    if(state.totalAmountCash < state.googleData.price * payload.quantity){
                        break;
                    }

                    state.totalAmountCash -= state.googleData.price * payload.quantity;
                    console.log("Price stock : " + state.googleData.price + " q: " + payload.quantity ); 

                    state.userPortfolio.googleStock.price = state.googleData.price;
                    state.userPortfolio.googleStock.quantity += parseInt(payload.quantity);
                    console.log("Porfolio stock : " + state.userPortfolio.googleStock.quantity);
                    break;

                case 'Apple':
                    if(state.totalAmountCash < state.appleData.price * payload.quantity){
                        break;
                    }
                    state.totalAmountCash -= state.appleData.price * payload.quantity;
                    console.log("Price stock : " + state.appleData.price + " q: " + payload.quantity ); 

                    state.userPortfolio.appleStock.price = state.appleData.price;
                    state.userPortfolio.appleStock.quantity += parseInt(payload.quantity);
                    
                    console.log("Porfolio stock : " + state.userPortfolio.appleStock.quantity);
                    break;

                case 'Bmw':
                    let spend = state.bmwData.price * payload.quantity;
                    if(state.totalAmountCash < spend){
                        break;
                    }
                    state.totalAmountCash -= state.bmwData.price * payload.quantity;
                    console.log("Price stock : " + state.bmwData.price + " q: " + payload.quantity ); 

                    state.userPortfolio.bmwStock.price = state.bmwData.price;
                    state.userPortfolio.bmwStock.quantity += parseInt(payload.quantity);
                    
                    console.log("Porfolio stock : " + state.userPortfolio.bmwStock.quantity);
                    break;
                       
                default:
                    break;
            }
           
            console.log("Buy stock: " +   state.userPortfolio.twitterStock.price + 
                        " | " + state.userPortfolio.twitterStock.quantity);
        },

        sellStock: (state, payload) => {

            switch (payload) {
                
                case 'Twitter':
                    state.totalAmountCash += state.twitterData.price * state.userPortfolio.twitterStock.quantity;
                    state.userPortfolio.twitterStock.price = 0;
                    state.userPortfolio.twitterStock.quantity = 0;
                   
                break;

                case 'Google':
                    state.totalAmountCash += state.googleData.price * state.userPortfolio.googleStock.quantity;
                    state.userPortfolio.googleStock.price = 0;
                    state.userPortfolio.googleStock.quantity = 0;
                   
                break;

                case 'Apple':
                    state.totalAmountCash += state.appleData.price * state.userPortfolio.appleStock.quantity;
                    state.userPortfolio.appleStock.price = 0;
                    state.userPortfolio.appleStock.quantity = 0;
                   
                break;

                case 'Bmw':
                    state.totalAmountCash += state.bmwData.price * state.userPortfolio.bmwStock.quantity;
                    state.userPortfolio.bmwStock.price = 0;
                    state.userPortfolio.bmwStock.quantity = 0;
                   
                break;

                default:
                    break;
            }

         },
       
         changePrice: (state, payload) => {
            state.twitterData.price = Math.round(Math.random() * (30 - 18) + 18);
            state.googleData.price = Math.round(Math.random() * (66 - 35) + 35);
            state.appleData.price = Math.round(Math.random() * (320 - 260) + 260);
            state.bmwData.price = Math.round(Math.random() * (95 - 75) + 75);
        },

        saveData: (state, payload) => {
            const formData = {
                state: state
              }

           axios.post('/saves.json', formData)
          .then(res => console.log(res))
          .catch(error => console.log(error))
        },



        loadData: (state, payload) => {
            const saves = [];
            var self = this;

            const response = axios.get('/saves.json')
            .then(res =>{
              console.log(res);
              const data = res.data;
              
  
              for (let key in data) {
                const user = data[key];
                user.id = key;
                saves.push(user);
              }

              self.commit('setState', saves[0])
              console.log('saves: ' + JSON.stringify(saves[0].state));
              
            } )
            .catch(err => console.log(err));

        },

        setState: (state, payload) => {
            console.log('setState : ' + payload.totalAmountCash);
            state.totalAmountCash = payload.totalAmountCash;
        }
    },
    actions: {
        changePrice: ({ commit }, payload) => {
            commit('changePrice');
        },

        saveData: ({ commit }, payload) => {
            commit('saveData');
        },

        loadData: ({ commit }, payload) => {
            const response = axios.get('/saves.json')
            .then(res =>{
              console.log(res);
              
            

           
              console.log('saves: ' + JSON.stringify(res.data.state));
              commit('setState', res.data.state);
              console.log('Done:' );
            } )
            .catch(err => console.log(err));

        
        }


    }

});