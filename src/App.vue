<template>
  <div id="app">
    <HeaderBoolflix
      @film-inserted="setFilmSearch"
    />
    <MainBoolflix
      :search-film="filmToSearch"
      @data-arrived="setArrData"
    />
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
      filmToSearch: '',
      arrFilm: [],
    };
  },
  methods: {
    setArrData(arrPassedFilm) {
      this.arrFilm = arrPassedFilm;
    },
    setFilmSearch(filmArgument) {
      this.filmToSearch = filmArgument;
      console.log(this.filmToSearch);
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
