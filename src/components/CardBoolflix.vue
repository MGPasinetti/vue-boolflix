<template>
  <div class="card">
      <div class="card-front">
        <img :src="CardData.srcPoster" :alt="CardData.title">
      </div>
      <div class="card-back">
        <h2 class="title">{{CardData.title}}</h2>
        <h3 class="original-title">{{CardData.originalTitle}}</h3>
        <div class="language">
            <lang-flag
                :iso="CardData.language"
                :squared="false"
            />
            <h4 class="str-lang">{{CardData.language}}</h4>
        </div>
        <h5 class="rating">
            {{CardData.rating}}
        </h5>
        <div class="rating">
          <font-awesome-icon
            v-for="i in cardData.rating"
            :key="'starsFull' + i"
            icon="fas fa-star star-solid"
          />
          <font-awesome-icon
            v-for="i in (cardData.maxRating - cardData.rating)"
            :key="'starsEmpty' + i"
            icon="fa-regular fa-star star-empty"
          />
        </div>
      </div>
      <!-- :class="'flag-icon flag-icon-'+ mioDato" -->
  </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
  name: 'CardBoolflix',
  props: {
    cardData: Object,
  },
  components: {
    LangFlag,
  },
};
</script>

<style lang="scss" scoped>
.card {
    margin: 2rem;
    width: 342px;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    .card-back {
        padding: 1rem;
        overflow-wrap: break-word;
        .flag-icon.flag-icon-undefined {
            display: none;
        }
    }
}
</style>
