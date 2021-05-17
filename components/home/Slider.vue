<template>
  <section class="main-slider-at-top position-relative">
    <client-only>
      <carousel ref="carousel" :per-page="1">
        <slide v-for="(item, i) of $constants.home.slides" :key="i">
          <div class="img-prt position-relative">
            <img
              :src="item.imgURL"
              :alt="item.title"
              class="object-fit-cover"
            />
            <div class="container position-absolute set-to-bottom">
              <div class="banner-txt text-white">
                <div class="orange-bg wow bounceInDown" data-wow-duration="2s">
                  <h1 class="ff-sans-b">{{ item.title }}</h1>
                </div>
                <div class="black-bg wow bounceInUp" data-wow-duration="2s">
                  <p class="ff-nunito">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </client-only>
    <div class="container position-absolute set-to-bottom2 d-none-767">
      <div class="banner-arro">
        <a
          id="go-prev"
          href="javascript:void(0)"
          class="ic-arrow arrow-lft"
          @click="goPrev()"
        >
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            overflow="visible"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="44"
            height="44"
          >
            <g>
              <path
                xmlns:default="http://www.w3.org/2000/svg"
                d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                style="fill: rgb(255, 255, 255)"
                vector-effect="non-scaling-stroke"
              />
            </g>
          </svg>
        </a>
        <a
          id="go-next"
          href="javascript:void(0)"
          class="ic-arrow arrow-rit"
          @click="goNext()"
        >
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            overflow="visible"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="44"
            height="44"
          >
            <g>
              <path
                xmlns:default="http://www.w3.org/2000/svg"
                d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                style="fill: rgb(255, 255, 255)"
                vector-effect="non-scaling-stroke"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="four-line position-absolute v-center d-none-767">
      <a
        id="change-slide"
        href="javascript:void(0)"
        class="sign-line"
        :class="{ active: $refs.carousel && i === $refs.carousel.currentPage }"
        v-for="(item, i) of $constants.home.slides"
        :key="i"
        @click="changeSlide(i)"
      ></a>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    changeSlide(page) {
      this.$refs.carousel.goToPage(page)
    },
    goNext() {
      this.$refs.carousel.goToPage(
        this.$refs.carousel.currentPage ===
          this.$constants.home.slides.length - 1
          ? 0
          : this.$refs.carousel.currentPage + 1
      )
    },
    goPrev() {
      this.$refs.carousel.goToPage(
        this.$refs.carousel.currentPage === 0
          ? this.$constants.home.slides.length - 1
          : this.$refs.carousel.currentPage - 1
      )
    },
  },
}
</script>