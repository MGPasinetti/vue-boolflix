<template>
  <main>
    <list-boolflix
      v-show="arrMovies.length !== 0"
      section-title="FILM"
      :list-cards="arrMovies"
      list-type="movie"
    />
    <list-boolflix
      v-show="arrSeries.length !== 0"
      section-title="SERIE"
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

</style>
