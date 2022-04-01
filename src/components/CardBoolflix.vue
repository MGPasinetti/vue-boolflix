<template>
  <div class="card">
    <div class="card-front">
      <img
        :src="cardData.srcPoster"
        alt="cardData.originalTitle"
      >
    </div>
    <div class="card-back">
      <span class="title">
        <strong>Titolo:</strong> {{ cardData.title }}
      </span>
      <span class="title-original">
        <strong>Titolo originale:</strong> {{ cardData.originalTitle }}
      </span>
      <span class="language">
        <strong>Lingua originale:</strong>
        <lang-flag :iso="cardData.language" :squared="false" />
      </span>
      <div class="rating">
        <strong>Voto:</strong>
        <font-awesome-icon
          v-for="i in cardData.rating"
          :key="'pieni' + i"
          icon="fas fa-star star-solid"
          style="color: yellow"
        />
        <font-awesome-icon
          v-for="i in (cardData.maxRating - cardData.rating)"
          :key="'vuoti' + i"
          icon="fa-regular fa-star star-empty"
        />
      </div>
      <span class="overview">
        <strong>Overview:</strong> {{ cardData.overview }}
      </span>
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
  position: relative;

  .card-front,
  .card-back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: 1s;
    backface-visibility: hidden;
    background-color: #302f2f;
    color: white;
    border: 1px solid white;
  }

  .card-back {
    padding: 3rem 1rem;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    line-height: 2;
    overflow: scroll;
  }

  &:hover .card-back {
    transform: rotateY(0deg);
  }

  &:hover .card-front {
    transform: rotateY(-180deg);
  }
}
</style>
