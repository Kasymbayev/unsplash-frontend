<template>
  <div class="wrapper">
    <Header class="header-component"/>
    <MainBackground/>
    <GridLayout :photos="photos"/>
  </div>
</template>

<script>
    import Header from '../components/general/header-component'
    import MainBackground from '../components/general/mbackground-component'
    import GridLayout from '../components/general/grid-component'
    import { mapState } from 'vuex'
    export default {
        components: {
            Header,
            MainBackground,
            GridLayout
        },
        mounted() {
            this.$store.dispatch('photos/getPhotos');
        },
        computed: {
          ...mapState({
               photos: state => state.photos.list,
          }),
        }
    }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }

  .header-component {
    position: sticky;
    z-index: 100;
    top: 0;
    background: #fff;
  }
</style>
