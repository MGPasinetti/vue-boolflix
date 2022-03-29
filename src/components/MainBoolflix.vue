<template>
  <main>
      <ul
        v-for="film in arrFilm"
        :key="film.id"
      >
          <li>{{film.title}}</li>
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
    filmSearched: String,
  },
  data() {
    return {
      arrFilm: null,
    };
  },
  computed: {
    arrFilteredFilm() {
      return this.arrFilm.filter((film) => film.title.toLowerCase()
        .includes(this.filmSearched.toLowerCase()));
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
};
</script>

<style lang="scss" scoped>

</style>
