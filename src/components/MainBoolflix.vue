<template>
  <main>
    <card-boolflix
      v-for="film in arrFilms"
      :key="film.id"
      :card-data="film"
    />
    <card-boolflix
      v-for="serie in arrSeries"
      :key="serie.id"
      :card-data="serie"
    />
  </main>
</template>

<script>
import CardBoolflix from './CardBoolflix.vue';

export default {
  name: 'MainBoolflix',
  components: {
    CardBoolflix,
  },
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
