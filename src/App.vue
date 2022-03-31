<template>
  <div id="app">
    <header-boolflix @search="fetchData" />
    <main-boolflix
      :arr-movies="arrMovies"
      :arr-series="arrSeries"
    />
  </div>
</template>

<script>
import axios from 'axios';
import HeaderBoolflix from '@/components/HeaderBoolflix.vue';
import MainBoolflix from '@/components/MainBoolflix.vue';

export default {
  name: 'App',
  components: {
    HeaderBoolflix,
    MainBoolflix,
  },
  data() {
    return {
      apiUrl: 'https://api.themoviedb.org/3/',
      apiKey: 'eddeb9cc139fc5540af4fe0bcd294c59',
      arrMovies: [],
      arrSeries: [],
    };
  },
  methods: {
    fetchData(strSearch) {
      // chiamate axios all'API
      if (strSearch !== '') {
        const objParams = {
          api_key: this.apiKey,
          language: 'it-IT',
          query: strSearch,
        };
        // ricerca movies
        this.axiosCall('movie', objParams);
        // ricerva serie tv
        this.axiosCall('tv', objParams);
      } else {
        this.arrMovies = [];
        this.arrSeries = [];
      }
    },
    axiosCall(searchType, objParams) {
      axios(`${this.apiUrl}search/${searchType}`, {
        params: objParams,
      })
        .then((response) => {
          if (searchType === 'movie') {
            this.arrMovies = response.data.results;
          } else {
            this.arrSeries = response.data.results;
          }
        });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  min-height: 100vh;
  background-color: #555555;
}
</style>
