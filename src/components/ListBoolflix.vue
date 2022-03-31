<template>
  <div class="section-results">
    <h2>{{ sectionTitle }}</h2>

    <div class="sec-cards">
        <card-boolflix
        v-for="card in listFormatted"
        :key="card.id"
        :card-data="card"
        />
    </div>
  </div>
</template>

<script>
import CardBoolflix from '@/components/CardBoolflix.vue';

export default {
  name: 'ListBoolflix',
  components: {
    CardBoolflix,
  },
  props: {
    sectionTitle: String,
    listCards: Array,
    listType: String,
  },
  data() {
    return {
      basePath: 'http://image.tmdb.org/t/p/w342/',
      defaultImageUrl: 'https://picsum.photos/id/135/300/300',
      maxRating: 5,
    };
  },
  computed: {
    listFormatted() {
      switch (this.listType) {
        case 'movie':
          return this.formatMovie();
        case 'series':
          return this.formatSeries();
        default:
          return this.listCards;
      }
    },
  },
  methods: {
    formatMovie() {
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
    formatSeries() {
      return this.listCards.map((card) => ({
        id: card.id,
        title: card.name,
        originalTitle: card.original_name,
        language: card.original_language,
        rating: this.normalizeRating(card.vote_average),
        maxRating: this.maxRating,
        srcPoster: this.getPosterUrl(this.basePath, card.poster_path),
      }));
    },
    getPosterUrl(basePath, pathOriginal) {
      if (pathOriginal === null) {
        return this.defaultImageUrl;
      }
      return (basePath + pathOriginal);
    },
    normalizeRating(ratingOriginal) {
      // normalizedRating : 5 = ratingOriginal : 10
      return Math.ceil((ratingOriginal * this.maxRating) / 10);
    },
  },
};
</script>

<style lang="scss" scoped>
.section-results {
  margin-top: 3rem;

    h2 {
        text-align: center;
        font-size: 50px;
        color: white;
        text-shadow: 6px 6px 6px black;
    }

    .sec-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
}
</style>
