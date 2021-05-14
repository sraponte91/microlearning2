<template>
  <section class="proximos-eventos">
    <div class="container position-relative">
      <client-only>
        <carousel ref="carousel" :per-page="1">
          <slide v-for="(ev, i) of latestEvents" :key="i">
            <div class="slider-desing position-relative">
              <h3
                class="ff-sans-b d-none-ni d-block-767i mob-title position-absolute"
              >
                Próximos Eventos
              </h3>
              <div class="img-part wow flipInX" data-wow-duration="2s">
                <img
                  :src="ev.imgURL"
                  :alt="ev.title"
                  class="object-fit-cover"
                />
              </div>
              <div class="text-part-title position-absolute v-center">
                <h3
                  class="ff-sans-b d-none-767i wow bounceInDown"
                  data-wow-duration="2s"
                >
                  Próximos Eventos
                </h3>
                <div
                  class="inner-bx-info wow bounceInUp"
                  data-wow-duration="2s"
                >
                  <h4 class="ff-sans-b">{{ ev.title }}</h4>
                  <div class="pra-p ff-nunito">
                    <div class="three-line-fixed-tx">
                      <p>
                        {{ ev.shortDescription }}
                      </p>
                    </div>
                    <div class="into-part ff-sans-r">
                      <div class="d-flex">
                        <p>Lugar</p>
                        <p>{{ ev.place }}</p>
                      </div>
                      <div class="d-flex">
                        <p>Fecha</p>
                        <p>{{ ev.date }}</p>
                      </div>
                      <div class="d-flex">
                        <p>Hora</p>
                        <p>{{ ev.time }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
      <div class="position-absolute set-to-bottom2">
        <div class="banner-arro wow slideInLeft" data-wow-duration="2s">
          <a
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
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    latestEvents() {
      return this.$eventosData.eventos.events
        .sort(function (a, b) {
          return new Date(b.date) - new Date(a.date)
        })
        .slice(0, 3)
    },
  },
  methods: {
    goNext() {
      this.$refs.carousel.goToPage(
        this.$refs.carousel.currentPage === this.latestEvents.length - 1
          ? 0
          : this.$refs.carousel.currentPage + 1
      )
    },
    goPrev() {
      this.$refs.carousel.goToPage(
        this.$refs.carousel.currentPage === 0
          ? this.latestEvents.length - 1
          : this.$refs.carousel.currentPage - 1
      )
    },
  },
}
</script>