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
  props: {
    secTitle: String,
    listCards: Array,
    listType: String,
  },
  data() {
    return {
      basePath: 'https://image.tmdb.org/t/p/w342',
      defaultImgUrl: 'https://picsum.pgotos/id/135/342/500',
      maxRating: 5,
    };
  },
  computed: {
    listFormatted() {
      switch (this.listType) {
        case 'film':
          return this.formatFilm();

        case 'serie':
          return this.formatSerie();

        default:
          return this.listCards;
      }
    },
  },
  methods: {
    formatFilm() {
      return this.listCards.map((card) => ({
        id: card.id,
        title: card.title,
        originalTitle: card.original_title,
        language: card.original_language,
        rating: this.normalizeRating(card.vote_average),
        maxRating: this.maxRating,
        srcPoster: this.getPosterUrl(this.basePath, card.poster_path),
      }));
    },
    formatSerie() {
      return this.listCards.map((card) => ({
        id: card.id,
        title: card.name,
        originalTitle: card.original_name,
        language: card.original_language,
        rating: this.normalizeRating(card.vote_average),
        maxRating: this.maxRating,
        srcPoste: this.getPosterUrl(this.basePath, card.poster_path),
      }));
    },
    getPosterUrl(basePath, pathOriginal) {
      if (pathOriginal === null) {
        return this.defaultImgUrl;
      }
      return (basePath + pathOriginal);
    },
    normalizeRating(ratingOriginal) {
      return Math.ceil((ratingOriginal * this.maxRating) / 10);
    },
  },
};
</script>

<style>

</style>
