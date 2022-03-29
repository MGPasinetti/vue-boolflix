<template>
  <main>
      <ul>
          <li>titolo</li>
          <li>titolo originale</li>
          <li>lingua</li>
          <li>voto</li>
      </ul>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MainBoolflix',
  data() {
    return {
      arrFilm: null,
    };
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
