<template>
  <main>
        <div
            v-if="arrFilm === null"
        >
          Dati in caricamento...
        </div>
        <ul
            v-else
            v-for="film in arrFilteredFilm"
            :key="film.id"
        >
            <li><strong>{{film.title}}</strong></li>
            <li>{{film.original_title}}</li>
            <li>{{film.original_language}}</li>
            <li>{{film.vote_average}}</li>
        </ul>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MainBoolflix',
  props: {
    searchFilm: String,
  },
  data() {
    return {
      arrFilm: null,
    };
  },
  computed: {
    arrFilteredFilm() {
      const arrFilteredFilm = this.arrFilm.filter((film) => film.title.toLowerCase()
        .includes(this.searchFilm.toLowerCase()));
      console.log(arrFilteredFilm);
      return arrFilteredFilm;
    },
  },
  created() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=ee5b77738346c62ee27442c62159b69d&query=ritorno+al+futuro&language=it-IT')
      .then((axiosResponse) => {
        this.arrFilm = axiosResponse.data.results;
        this.$emit('data-arrived', this.arrFilm);
        console.log(this.arrFilm);
      });
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    margin-top: 4rem;
}
</style>
