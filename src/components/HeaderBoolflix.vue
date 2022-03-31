<template>
  <header>
    <h1 class="brand">
      Boolflix
    </h1>
    <form @submit.prevent="$emit('search', strSearch)">
      <label for="search">
        <input
          id="search"
          v-model="strSearch"
          type="text"
          name="search"
          placeholder="Cerca film ..."
        >
      </label>
      <button class="btn btn-search">
        Cerca
      </button>
    </form>
  </header>
</template>

<script>
export default {
  name: 'HeaderBoolflix',
  data() {
    return {
      strSearch: '',
    };
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
