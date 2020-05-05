<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Stock Trader</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      

        <router-link to="/portfolio" class="nav-link" tag="li" active-class="active" ><a>Portfolio </a> </router-link>
  
   
        <router-link to="/stock" class="nav-link" tag="li" active-class="active" ><a>Stocks </a> </router-link>
 


    </ul>
    <div class="my-3 my-lg-0">
         <ul class="navbar-nav mr-auto">
            <li class="nav-item">
          <a  @click="changePrice" class="nav-link" tag="li" active-class="active">End Day </a> 
      </li>

      <li class="nav-item dropdown">
        <a
               class="nav-link dropdown-toggle"
               @click="isDropDownOpened = !isDropDownOpened"
               href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div 
              class="dropdown-menu" 
              :class="{show: isDropDownOpened}"
              aria-labelledby="navbarDropdown">
          <a class="dropdown-item" @click="saveData">Save Data</a>
          <a class="dropdown-item" @click="loadData" >Load Data</a>
        </div>
      </li>
                 <li class="nav-item">
        <router-link to="/stocks" class="nav-link" tag="li" ><a>Funds: $ {{ showMoney }}</a> </router-link>
      </li>
         </ul>
          

    </div>

  </div>
</nav>

</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import axios from 'axios'

export default {
  data() {
    return {
      isDropDownOpened: false
    }
  },
  methods: {
    ...mapActions([
      'changePrice',
      'saveData',
      'loadData'
    ])

  
  },
  computed: {


    showMoney() {
        return this.$store.getters.showMeTheMoney;
    }
  }
}
</script>

