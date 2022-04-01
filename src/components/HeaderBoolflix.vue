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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: black;
  .brand {
    color: #FF0000;
    text-transform: uppercase;
    font-size: 60px;
  }

  input {
    padding: .2rem;
    border-radius: 5px;
  }

  button {
    margin-left: 1rem;
    background-color: white;
    border-radius: 5px;
    padding: .2rem;
  }
}
</style>
