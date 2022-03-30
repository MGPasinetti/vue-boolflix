<template>
  <div class="card">
      <div class="card-front">
        <img :src="`https://image.tmdb.org/t/p/w500${CardData.cover}`" :alt="CardData.title">
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
        <h5 class="rating">{{CardData.rating}}</h5>
      </div>
  </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
  name: 'CardBoolflix',
  props: {
    CardData: Object,
  },
  components: {
    LangFlag,
  },
};
</script>

<style lang="scss" scoped>
.card {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    .card-back {
        padding: 1rem;
        display: none;
        .flag-icon.flag-icon-undefined {
            display: none;
        }
    }
}
</style>
