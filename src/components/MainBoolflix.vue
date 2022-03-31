<template>
  <main>
    <list-boolflix
      v-show="arrMovies.length !== 0"
      section-title="Risultati Film"
      :list-cards="arrMovies"
      list-type="movie"
    />
    <list-boolflix
      v-show="arrSeries.length !== 0"
      section-title="Risultati Serie"
      :list-cards="arrSeries"
      list-type="series"
    />
  </main>
</template>

<script>
import ListBoolflix from '@/components/ListBoolflix.vue';

export default {
  name: 'MainBoolflix',
  components: {
    ListBoolflix,
  },
  props: {
    arrMovies: Array,
    arrSeries: Array,
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-wrap: wrap;
}
</style>
