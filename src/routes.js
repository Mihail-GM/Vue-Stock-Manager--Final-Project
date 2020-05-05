import Home from './components/Home.vue';
import Header from './components/header/Header.vue';
import Stock from './components/stock/Stock.vue';
import StockShowAll from './components/stock/StockShowAll.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import PortFolioShowAll from './components/portfolio/PortFolioShowAll.vue';


export const routes = [
    {
        path: '', name: 'homes', components: {
        default: Home,
        'header-top': Header
    }
    },
    


    {
        path: '/stock', name: 'stocks', components: {
        default: Stock,
        'header-top': Header
    }, children: [
        {path: '', component: StockShowAll}
    ]
    },

    {
        path: '/portfolio', name: 'portfolio', components: {
        default: Portfolio,
        'header-top': Header
    }, children: [
        {path: '', component: PortFolioShowAll}
    ]
    },

    {path: '/redirect-me', redirect: {name: 'homes'}},
    {path: '*', redirect: '/'}

];