<template>
  <div id="app">
    <HeaderBoolflix @film-inserted="setFilmSearch" />
    <MainBoolflix :search-film="filmSearched" />
  </div>
</template>

<script>
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
      searchFilm: '',
    };
  },
  methods: {
    setFilmSearch(filmArgument) {
      this.searchFilm = filmArgument;
      console.log(this.searchFilm);
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
