<template>
  <header>
      <label for="id">TITOLO
        <input
            type="text"
            placeholder="Cerca un film"
            v-model="filmName"
        >
      </label>
      <button @click="searchFilm">Search</button>
  </header>
</template>

<script>
export default {
  name: 'HeaderBoolflix',
  data() {
    return {
      filmName: '',
    };
  },
  methods: {
    searchFilm() {
      this.$emit('film-inserted', this.filmName);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
