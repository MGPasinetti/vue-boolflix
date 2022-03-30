<template>
  <div class="card">
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
  data() {
    return {
      isUndefined: true,
    };
  },
  methods: {
    flagUndefined() {

    },
  },
};
</script>

<style lang="scss" scoped>
.card {
    margin: 2rem;
    width: 10rem;
    padding: 1rem;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    .flag-icon-undefined {
        display: none;
    }
}
</style>
