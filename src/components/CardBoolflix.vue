<template>
  <div class="card">
    <div class="card-front">
      <img
        :src="cardData.srcPoster"
        alt="cardData.originalTitle"
      >
    </div>
    <div class="card-back">
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
  margin: 2rem;
  width: 342px;
  height: 513px;
  transition: transform .7s ease-in-out;

  &:hover {
    transform: rotateY(180deg);
  }

  .card-back {
    display: none;
    .flag-icon-undefined {
      display: none;
    }
  }
}
</style>
