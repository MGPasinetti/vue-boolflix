<template>
  <main>
    <list-boolflix
      v-show="arrFilms.lenght !== 0"
      sec-title="Film"
      :list-cards="arrFilms"
      list-type="film"
    />
    <list-boolflix
      v-show="arrSeries.lenght !== 0"
      sec-title="Serie"
      :list-cards="arrSeries"
      list-type="serie"
    />
  </main>
</template>

<script>
import ListBoolflix from './ListBoolflix.vue';

export default {
  name: 'MainBoolflix',
  components: {
    ListBoolflix,
  },
  props: {
    arrFilms: Array,
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
