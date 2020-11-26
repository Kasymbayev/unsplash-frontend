<template>
  <div class="container">
    <div class="grid-gallery">
      <figure class="grid-gallery-item" v-for="photo in photos" :key="photo.id + 'photo'">
        <img :src="photo.cover_photo.urls.small">
      </figure>
    </div>
  </div>
</template>

<script>
    export default {
        name: "grid-component",
        props: {
            photos: Array
        },
        mounted() {
            console.log(this.photos)
        }
    }
</script>

<style lang="scss" scoped>

  img {
    max-width: 100%;
    height: auto;
  }

  .grid-gallery {
    margin-top: 20px;
  }

  .grid-gallery-item {
    padding: 0;
    margin: 0.5rem;
    max-width: 200px;
    display: inline-block;
  }

  @supports (display: grid) {
    .grid-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(100px, auto));
      grid-auto-rows: 100px;
      grid-gap: 1rem;
    }

    @media screen and (min-width: 420px) {
      .grid-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(200px, auto));
        grid-auto-rows: 200px;
        grid-gap: 1rem;
        grid-auto-flow: dense;
      }
    }

    .grid-gallery-item {
      margin: 0;
      max-width: none;
    }

    .grid-gallery-item:first-child {
      grid-row: span 2;
      grid-column: span 2;
    }

    .grid-gallery-item:nth-child(5) {
      grid-row: span 2;
    }

    .grid-gallery-item:nth-child(8) {
      grid-column: span 2;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
