<template>
  <main>
        <ul
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
export default {
  name: 'MainBoolflix',
  props: {
    arrFilms: Array,
    arrSeries: Array,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  ul {
      list-style-type: none;
      margin-top: 4rem;
  }
}
</style>
