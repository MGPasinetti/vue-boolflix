<template>
  <div class="card">
    <img
      :src="cardData.srcPoster"
      alt="cardData.originalTitle"
    >
    <h2 class="title">
      {{ cardData.title }}
    </h2>
    <h3 class="title-original">
      {{ cardData.originalTitle }}
    </h3>
    <lang-flag
      :iso="cardData.language"
      :squared="false"
    />
    <div class="rating">
      <font-awesome-icon
        v-for="i in cardData.rating"
        :key="'pieni' + i"
        icon="fas fa-star star-solid"
      />
      <font-awesome-icon
        v-for="i in (cardData.maxRating - cardData.rating)"
        :key="'vuoti' + i"
        icon="fa-regular fa-star star-empty"
      />
    </div>
  </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
  name: 'CardBoolflix',
  components: {
    LangFlag,
  },
  props: {
    cardData: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 1rem;
  .flag-icon-undefined {
    display: none;
  }
}
</style>
