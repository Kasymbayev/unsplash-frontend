<template>
  <div class="container">
    <header class="header">
      <nav class="header__nav">
        <div class="header__nav__search">
          <a href="#" class="logo">
            <svg width="32" height="32" class="_1Jlgk" version="1.1" viewBox="0 0 32 32" aria-labelledby="unsplash-home"
                 aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
            <div class="xs-none sm-none logo_box">
              <span class="logo__title">Unsplash</span>
              <span class="logo__subtitle">Photos for everyone</span>
            </div>
          </a>
          <div class="header__nav__search-section">
            <form>
              <button>
                <svg width="32" height="32" class="_2-tlh _1azRR _1mPD6" version="1.1" viewBox="0 0 32 32"
                     aria-hidden="false">
                  <path
                    d="M21.9 20.1c1.3-1.7 2-3.8 2-6.1 0-5.5-4.5-10-10-10C8.5 4 4 8.5 4 14s4.5 10 10 10c2.3 0 4.4-.8 6.1-2l6.1 6.1 1.9-1.9-6.2-6.1zM14 21.3c-4.1 0-7.3-3.3-7.3-7.3S9.9 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
                </svg>
              </button>
              <div class="searchBox">
                <input type="text"
                       required
                       v-model="searchText"
                       v-on:keyup="search()"
                       placeholder="Search free high-resolution photos">
                <div class="searchBox__autocomplete" v-if="searchText">
                  <ul>
                    <li v-for="item in filtered"><a href="#">{{item.title}}</a></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="header__nav__control xs-none">
          <ul>
            <li><a href="#">
              Brands
              <span class="sticker">New</span>
            </a></li>
            <li><a href="#">
              Explore
            </a></li>
            <li>
              <div>
                <button>
                  <svg width="18" height="18" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
                    <path
                      d="M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"></path>
                  </svg>
                </button>
                <div class="menu-tooltip"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="header__nav__profile xs-none">
          <div class="submit_photo">
            <button>
              Submit
              <span>a photo</span>
            </button>
          </div>
          <div class="sign_system">
            <a href="#">Login</a>
            <a href="#">Join free</a>
          </div>
        </div>
      </nav>
      <div class="header__navigation">
        <div class="header__navigation-first">
          <ul>
            <li><a href=""><span>Editorial</span></a></li>
          </ul>
        </div>
        <div class="header__navigation-vertLine"></div>
        <swiper ref="navigation" :options="swiperOptions">
          <div class="swiper-button-prev control_btn" slot="button-prev" @click="prev()"></div>
          <swiper-slide v-for="item in menuItems" :key="item.id + 'menu'">
            <a href="#">{{item.name}}</a>
          </swiper-slide>
          <div class="swiper-button-next control_btn" slot="button-next" @click="next()"></div>
        </swiper>
        <div class="header__navigation-viewAll">
          <a href="#">View all</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css';
    import { mapState } from 'vuex'
    export default {
        name: "header-component",
        components: {
            Swiper,
            SwiperSlide,
        },
        directives: {
            swiper: directive
        },
        data() {
            return {
                activeIndex: null,
                searchText: '',
                menuItems: [
                    {
                        id: 1,
                        name: 'Wallpapers'
                    },
                    {
                        id: 2,
                        name: 'Nature'
                    },
                    {
                        id: 3,
                        name: 'People'
                    },
                    {
                        id: 4,
                        name: 'Architecture'
                    },
                    {
                        id: 5,
                        name: 'Current Events'
                    },
                    {
                        id: 6,
                        name: 'Experimental'
                    },
                    {
                        id: 7,
                        name: 'Fashion'
                    },
                    {
                        id: 8,
                        name: 'Film'
                    },
                    {
                        id: 9,
                        name: 'Health & Wellness'
                    },
                    {
                        id: 10,
                        name: 'Interiors'
                    },
                    {
                        id: 11,
                        name: 'Street Photography'
                    },
                    {
                        id: 12,
                        name: 'Technology'
                    },
                    {
                        id: 13,
                        name: 'Travel'
                    },
                    {
                        id: 14,
                        name: 'Textures & Patterns'
                    },
                    {
                        id: 15,
                        name: 'Business & Work'
                    },
                    {
                        id: 16,
                        name: 'Animals'
                    },
                    {
                        id: 17,
                        name: 'Food & Drink'
                    },
                    {
                        id: 18,
                        name: 'Athletics'
                    },
                    {
                        id: 19,
                        name: 'Spirituality'
                    },
                    {
                        id: 20,
                        name: 'Arts & Culture'
                    },
                    {
                        id: 21,
                        name: 'History'
                    }
                ],
                photos: [],
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    slidesPerView: 11.2,
                    spaceBetween: 32,
                    breakpoints: {},
                },
            }
        },
        computed: {
            ...mapState({
                searchCollection: state => state.photos.searchArray,
            }),
            filtered () {
                return this.searchCollection.filter(el => {
                    return el.title.toLowerCase().includes(this.searchText.toLowerCase())
                })
            },
        },
        methods: {
            search () {
                if (this.searchText) {
                    this.$store.dispatch('photos/getSearchPhotos', {query: this.searchText})
                }
            },
            prev() {
                this.$refs.navigation.$swiper.slidePrev()
            },
            next() {
                this.$refs.navigation.$swiper.slideNext()
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";

  .control_btn {
    width: 30px;
    position: absolute;
    z-index: 1;
    background: $white;
    opacity: 0.9;
  }

  .searchBox__autocomplete {
    width: 100%;
    height: auto;
    background: $white;
    position: absolute;
    z-index: 100;
    top: 48px;
    left: 0;
    border: 1px solid $gray;
    border-radius: 4px;
    ul {
      padding: 10px 0;
      margin: 0;
      list-style-type: none;
      li {
        width: 100%;
        padding: 5px 0;
        line-height: 30px;
        margin: 0;
        &:hover {
          background: $gray;
        }
        a {
          padding: 0 15px;
          text-decoration: none;
          color: $black;
        }
      }
    }
  }

  .swiper-button-prev, .swiper-button-next {
    &:after {
      color: $dark-gray;
      font-size: 15px;
      font-weight: bold;
    }
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  .header {
    &__nav {
      display: flex;
      align-items: center;
      height: 60px;

      &__search {
        display: flex;
        align-items: center;
        flex: 1;

        a.logo {
          display: flex;
          align-items: center;
          text-decoration: none;

          span.logo__title {
            font-weight: 700;
            font-size: 15px;
          }

          span.logo__subtitle {
            display: block;
            margin-top: 2px;
            font-size: 13px;
            color: #484848 !important;
          }

          .logo_box {
            display: flex;
            flex-direction: column;
            white-space: nowrap;
            margin-left: 12px;

            span {
              color: $black;
            }
          }
        }

        &-section {
          width: 100%;
          margin-left: 18px;

          form {
            position: relative;
            display: flex;
            align-items: center;
            height: 40px;
            border-radius: 24px;
            font-size: 14px;
            border: 1px solid transparent;
            background: $gray;
            transition: all .1s ease-in-out;

            button {
              display: flex;
              align-items: center;
              border: none;
              background: none;
              outline: none;

              svg {
                width: 20px;
                height: 20px;
                margin-left: 8px;
                fill: $dark-gray;
              }
            }

            .searchBox {
              width: 100%;
              flex-grow: 1;
              display: flex;

              input {
                flex-grow: 1;
                width: 100%;
                background: none;
                outline: none;
                border: none;
                color: #111;
                padding-left: 5px;
                padding-bottom: 2px;
              }
            }
          }
        }
      }

      &__control {
        padding-left: 36px;
        padding-right: 36px;

        ul {
          display: flex;
          align-items: center;
          margin-top: 0;
          margin-bottom: 0;
          padding-left: 0;

          li {
            list-style-type: none;

            button {
              cursor: pointer;
              padding-right: 12px;
              padding-left: 12px;
              line-height: 1;
              color: #767676;
              fill: currentColor;
              display: flex;
              align-items: center;
              border: none;
              outline: none;
              background: none;
              transition: all .1s ease-in-out;

              &:hover {
                fill: $black;
              }
            }

            a {
              font-size: 14px;
              font-weight: 500;
              text-decoration: none;
              padding: 20px 12px;
              color: $dark-gray;

              &:hover {
                color: $black;
              }

              span.sticker {
                position: relative;
                font-size: 10px;
                top: -10px;
                background: linear-gradient(94deg, #ff2a2a, #7074ff);
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
              }
            }
          }
        }
      }

      &__profile {
        display: flex;
        align-items: center;
        height: 32px;

        .submit_photo {
          margin-right: 48px;

          button {
            display: inline-block;
            border: 1px solid $m-gray;
            color: $dark-gray;
            border-radius: 4px;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .04);
            transition: all .1s ease-in-out;
            text-align: center;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background: none;
            outline: none;
            height: 32px;
            padding: 0 12px;
            font-size: 14px;
          }
        }

        .sign_system {
          display: flex;
          align-items: center;

          a {
            position: relative;
            margin-right: 30px;
            display: inline-block;
            border: 1px solid transparent;
            border-radius: 4px;
            text-decoration: none;
            color: $dark-gray;
            font-size: 14px;
            transition: all .1s ease-in-out;
            text-align: center;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;

            &:last-child {
              margin-right: 0;
            }

            &:first-child {
              &:before {
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                left: -18px;
                width: 1px;
                height: 32px;
                content: "";
                background-color: #d1d1d1;
              }
            }

            &:nth-child(2) {
              display: flex;
              align-items: center;
              padding: 0 12px;
              height: 32px;
              background: $green;
              color: $white;
            }
          }
        }
      }
    }

    &__navigation {
      display: flex;
      justify-content: space-between;

      ul {
        padding: 0 !important;
        list-style-type: none;
      }

      a {
        font-size: 14px;
        text-decoration: none;
        color: $dark-gray;
      }

      &-first {
        display: flex;
        align-items: center;
        padding-right: 20px;
      }


      &-vertLine {
        background-color: #d1d1d1;
        width: 1px;
        margin-top: 12px;
        margin-bottom: 12px;
        flex-shrink: 0;
      }

      &-viewAll {
        display: flex;
        align-items: center;
        white-space: nowrap;
        padding-left: 30px;
      }

      &-menu {
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;

          li {
            margin-right: 45px;
          }
        }
      }
    }
  }
</style>
