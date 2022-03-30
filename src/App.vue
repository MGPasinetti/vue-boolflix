<template>
  <div id="app">
    <HeaderBoolflix
      @title-inserted="fetchData($event)"
    />
    <MainBoolflix
      :arr-films="arrFilms"
      :arr-series="arrSeries"
    />
  </div>
</template>

<script>
import axios from 'axios';
import HeaderBoolflix from './components/HeaderBoolflix.vue';
import MainBoolflix from './components/MainBoolflix.vue';

export default {
  name: 'App',
  components: {
    HeaderBoolflix,
    MainBoolflix,
  },
  data() {
    return {
      apiUrl: 'https://api.themoviedb.org/3/',
      apiKey: 'ee5b77738346c62ee27442c62159b69d',
      arrFilms: [],
      arrSeries: [],
    };
  },
  methods: {
    fetchData(searchingTitle) {
      // chiamate Axios all'API
      if (searchingTitle !== '') {
        const objParams = {
          api_key: this.apiKey,
          language: 'it-IT',
          query: searchingTitle,
          include_image_language: 'en,null',
        };

        // ricerca movies
        this.axiosCall('movie', objParams);

        // ricerca serie-tv
        this.axiosCall('tv', objParams);
      } else {
        this.arrFilms = [];
        this.arrSeries = [];
      }
    },

    axiosCall(searchType, objParams) {
      axios.get(`${this.apiUrl}search/${searchType}`, { params: objParams })
        .then((response) => {
          console.log(response.data.results);
          if (searchType === 'movie') {
            this.arrFilms = response.data.results.map((film) => ({
              id: film.id,
              title: film.title,
              originalTitle: film.original_title,
              language: film.original_language,
              rating: film.vote_average,
            }));
          } else {
            this.arrSeries = response.data.results.map((serie) => ({
              id: serie.id,
              title: serie.name,
              originalTitle: serie.original_name,
              language: serie.original_language,
              rating: serie.vote_average,
            }));
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
}
</style>
