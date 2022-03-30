<template>
  <main>
        <ul
            v-for="film in arrFilms"
            :key="film.id"
        >
            <li><strong>{{film.title}}</strong></li>
            <li>{{film.originalTitle}}</li>
            <li>{{film.language}}</li>
            <li>{{film.rating}}</li>
        </ul>
        <ul
            v-for="serie in arrSeries"
            :key="serie.id"
        >
            <li><strong>{{serie.title}}</strong></li>
            <li>{{serie.originalTitle}}</li>
            <li>{{serie.language}}</li>
            <li>{{serie.rating}}</li>
        </ul>
        <!-- <div class="card"
          v-for="film in arrFilms"
          :key="film.id"
        >
          <h1>{{film.title}}</h1>
          <h2></h2>
        </div> -->
  </main>
</template>

<script>
export default {
  name: 'MainBoolflix',
  props: {
    arrFilms: Array,
    arrSeries: Array,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  ul {
      list-style-type: none;
      margin-top: 4rem;
  }
}
</style>
