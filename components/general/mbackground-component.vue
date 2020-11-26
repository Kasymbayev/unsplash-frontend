<template>
  <div class="main-wrapper">
    <div class="main-wrapper__background">
      <div class="main-wrapper__info">
        <div class="info_wrapper">
          <h3>Unsplash</h3>
          <p>
            The internet’s source of <a href="#">freely-usable images</a>. <br>
            Powered by creators everywhere.
          </p>
        </div>
        <form>
          <button title="Search Unsplash" class="_2VoZY _3d86A" type="submit"
                  data-test="homepage-header-search-form-button">
            <svg width="32" height="32" class="_2-tlh _1azRR _18QGm" version="1.1" viewBox="0 0 32 32"
                 aria-hidden="false">
              <path
                d="M21.9 20.1c1.3-1.7 2-3.8 2-6.1 0-5.5-4.5-10-10-10C8.5 4 4 8.5 4 14s4.5 10 10 10c2.3 0 4.4-.8 6.1-2l6.1 6.1 1.9-1.9-6.2-6.1zM14 21.3c-4.1 0-7.3-3.3-7.3-7.3S9.9 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
            </svg>
          </button>
          <div style="width: 100%">
            <input type="text" required placeholder="Search free high-resolution photos" title="Search Unsplash">
          </div>
        </form>
        <div class="trending_block">
          <ul>
            <li>Trending:</li>
            <li><a href="#">flower</a>,</li>
            <li><a href="#">wallpapers</a>,</li>
            <li><a href="#">backgrounds</a>,</li>
            <li><a href="#">happy</a>,</li>
            <li><a href="#">love</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mbackground-component",
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";

  .main-wrapper__info {
    width: 100%;

    .trending_block {
      ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        font-size: 14px;
        li {
          &:first-child {
            margin-right: 5px;
          }
          margin-right: 3px;
          a {
            color: $m-gray;
            text-decoration: none;

            &:hover {
              color: $white;
            }
          }
        }
      }
    }
  }

  .main-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    &__background {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: url("../../assets/images/main.jpg") no-repeat;
      background-size: cover;

      &:before {
        width: 100%;
        height: 100%;
        content: '';
        opacity: 0.5;
        z-index: 1;
        position: absolute;
        background: $black;
      }
    }

    &__info {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      width: 60%;
      height: 85vh;
      position: relative;
      z-index: 3;
      color: $white;

      h3 {
        font-size: 46px;
        margin-bottom: 0;
      }

      p {
        margin-top: 16px;
        line-height: 28px;
        font-size: 18px;
        color: $white;
      }

      a {
        color: $gray;
      }
      form {
        display: flex;
        align-items: center;
        width: 100%;
        height: 54px;
        background: $gray;
        border-radius: 4px;
        margin-top: 24px;

        button {
          border: none;
          outline: none;
          background: none;
          cursor: pointer;
          svg {
            width: 24px;
            height: 24px;
            margin-left: 14px;
            margin-right: 5px;
            fill: $dark-gray;

            &:hover {
              fill: $black;
            }
          }
        }

        input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: none;
        }
      }
    }
  }
</style>
