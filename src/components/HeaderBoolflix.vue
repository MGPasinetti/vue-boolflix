<template>
  <header>
      <label for="id">TITOLO:
        <input
            type="text"
            placeholder="Cerca un film"
            v-model="searchingTitle"
            @keyup.enter="searchTitle"
        >
      </label>
      <button @click="searchTitle">Search</button>
  </header>
</template>

<script>
export default {
  name: 'HeaderBoolflix',
  data() {
    return {
      searchingTitle: '',
    };
  },
  methods: {
    searchTitle() {
      this.$emit('title-inserted', this.searchingTitle);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
    height: 4rem;
    background-color: rgb(72, 72, 201);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
