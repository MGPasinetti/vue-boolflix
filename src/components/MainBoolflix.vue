<template>
  <main>
    <h1>FILM</h1>
    <div>
      <card-boolflix
        v-for="film in arrFilms"
        :key="film.id"
        :card-data="film"
      />
    </div>

    <h1>SERIES</h1>
    <div>
      <card-boolflix
        v-for="serie in arrSeries"
        :key="serie.id"
        :card-data="serie"
      />
    </div>
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
div {
  display: flex;
  flex-wrap: wrap;
}
</style>
