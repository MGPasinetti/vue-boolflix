<template>
  <div class="card">
      <h2 class="title">{{CardData.title}}</h2>
      <h3 class="original-title">{{CardData.originalTitle}}</h3>
      <h4 class="language">{{CardData.language}}</h4>
      <h5 class="rating">{{CardData.rating}}</h5>
  </div>
</template>

<script>
export default {
  name: 'CardBoolflix',
  props: {
    CardData: Object,
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
}
</style>
