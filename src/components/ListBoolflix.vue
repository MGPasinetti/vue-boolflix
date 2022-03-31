<template>
  <div class="sec-results">
      <h2>{{ secTitle }}</h2>
      <card-boolflix
        v-for="card in listFormatted"
        :key="card.id"
        :card-data="card"
      />
  </div>
</template>

<script>
import CardBoolflix from './CardBoolflix.vue';

export default {
  name: 'ListBoolflix',
  components: {
    CardBoolflix,
  },
};
</script>

<style>

</style>
