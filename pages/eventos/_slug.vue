<template>
  <main>
    <section
      class="main-slider-at-top actualidad-pg evento-details after-po position-relative"
    >
      <div
        class="back-to-home position-absolute d-flex align-items-center position-relative-767"
      >
        <i class="ic-back" @click="goBack()"></i>
        <a
          class="ff-sans-b text-white"
          href="javascript:void(0)"
          @click="goBack()"
          >Volver</a
        >
      </div>
      <div class="img-prt position-relative">
        <img :src="evt.imgURL" alt="" class="object-fit-cover" />
        <div class="container position-absolute set-to-bottom d-none-767">
          <h1 class="text-white ff-sans-b">
            {{ evt.title }}
          </h1>
        </div>
      </div>
    </section>

    <section class="wht-abt-ent">
      <div class="container">
        <div class="in-container">
          <div class="d-flex flex-wrap justify-content-between">
            <div class="d-none-n d-block-767 mob-evnt-dta w-100">
              <h3 class="ff-sans-b">{{ evt.title }}</h3>
              <div class="d-flex justify-content-between">
                <div class="dt ff-nunito">
                  <p>{{ evt.date }}</p>
                  <p>{{ evt.time }}</p>
                </div>
                <h4 class="ff-sans-b">
                  {{ evt.shortDescription }}
                </h4>
                <div>
                  <div class="lbl-evnt evnt-active">Evento Activo</div>
                  <div class="lbl-evnt evnt-finalized">Evento Activo</div>
                </div>
              </div>
              <div class="tw-p ff-nunito">
                <p>{{ evt.direction1 }}</p>
                <p>{{ evt.direction2 }}</p>
                <p>{{ evt.direction3 }}</p>
              </div>
            </div>
            <div class="ifo-abt-evnt">
              <h2 class="ff-sans-b">¿De qué trata el evento?</h2>
              <div class="para-p ff-nunito" v-html="evt.description"></div>
              <div class="soical-media position-relative after-po d-none-767">
                <a
                  target="_blank"
                  :href="
                    'https://www.facebook.com/sharer/sharer.php?u=' +
                    $constants.baseURL +
                    $route.fullPath
                  "
                >
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    overflow="visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                  >
                    <g>
                      <path
                        xmlns:default="http://www.w3.org/2000/svg"
                        id="facebook"
                        d="M16.5,3.46c-0.79-0.09-1.58-0.13-2.37-0.12c-1.07-0.05-2.11,0.33-2.89,1.06c-0.76,0.81-1.15,1.89-1.08,3v2.28  H7.5v3.08h2.65v7.9h3.19v-7.9H16l0.41-3.08h-3.07v-2c-0.03-0.4,0.08-0.79,0.31-1.12c0.33-0.29,0.77-0.43,1.21-0.37h1.64V3.46  L16.5,3.46z"
                        style="fill: rgb(17, 24, 32)"
                        vector-effect="non-scaling-stroke"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  target="_blank"
                  :href="
                    'https://www.linkedin.com/sharing/share-offsite/?url=' +
                    $constants.baseURL +
                    $route.fullPath
                  "
                >
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    overflow="visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                  >
                    <g>
                      <path
                        xmlns:default="http://www.w3.org/2000/svg"
                        id="linkedin"
                        d="M4.19,9.32v10.32h3.44V9.32H4.19z M7.85,6.14C7.86,5.66,7.67,5.2,7.32,4.86c-0.37-0.34-0.87-0.52-1.38-0.5  c-0.51-0.02-1.01,0.16-1.4,0.5C4.18,5.19,3.98,5.65,3.99,6.14C3.98,6.62,4.17,7.08,4.51,7.41c0.37,0.35,0.86,0.53,1.37,0.51l0,0  C6.4,7.94,6.91,7.76,7.29,7.41c0.35-0.33,0.55-0.79,0.53-1.27l0,0H7.85z M19.99,13.73c0.09-1.25-0.3-2.48-1.08-3.46  c-0.74-0.79-1.78-1.22-2.86-1.18c-0.4,0-0.8,0.05-1.19,0.16c-0.32,0.1-0.61,0.25-0.87,0.45c-0.21,0.16-0.41,0.34-0.59,0.54  c-0.16,0.18-0.3,0.38-0.43,0.58l0,0v-1.5H9.52v0.5c0,0.33,0,1.36,0,3.08s0,3.97,0,6.74h3.47v-5.76c-0.03-0.3,0-0.59,0.07-0.88  c0.14-0.35,0.37-0.65,0.66-0.89c0.31-0.25,0.7-0.37,1.1-0.36c0.52-0.04,1.02,0.2,1.32,0.62c0.31,0.52,0.45,1.11,0.42,1.71v5.52h3.43  V13.73L19.99,13.73z"
                        style="fill: rgb(17, 24, 32)"
                        vector-effect="non-scaling-stroke"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  target="_blank"
                  :href="
                    'https://twitter.com/intent/tweet/?text=' +
                    evt.title +
                    '&url=' +
                    $constants.baseURL +
                    $route.fullPath
                  "
                >
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    overflow="visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                  >
                    <g>
                      <path
                        xmlns:default="http://www.w3.org/2000/svg"
                        id="twitter"
                        d="M20.2,6.92c-0.62,0.27-1.27,0.45-1.94,0.52c0.71-0.41,1.24-1.07,1.48-1.85c-0.66,0.39-1.38,0.67-2.13,0.81  c-1.27-1.36-3.41-1.43-4.76-0.15c-0.03,0.02-0.05,0.05-0.08,0.07c-0.65,0.62-1.01,1.48-1,2.38c0,0.26,0.03,0.52,0.08,0.77  C10.51,9.41,9.19,9.05,8,8.43C6.82,7.84,5.78,7.01,4.94,6C4.35,7.02,4.33,8.27,4.89,9.3C5.16,9.77,5.54,10.16,6,10.45  C5.46,10.43,4.93,10.27,4.46,10l0,0c-0.01,0.78,0.26,1.54,0.77,2.14c0.49,0.6,1.17,1.01,1.93,1.16c-0.29,0.07-0.58,0.11-0.88,0.11  c-0.21,0-0.43-0.02-0.64-0.05c0.44,1.37,1.7,2.3,3.14,2.33c-1.17,0.97-2.65,1.5-4.17,1.51c-0.27,0.02-0.54,0.02-0.81,0  c1.55,0.99,3.36,1.5,5.2,1.46c1.14,0.01,2.28-0.19,3.36-0.57c0.96-0.34,1.86-0.85,2.64-1.51c0.74-0.63,1.39-1.37,1.92-2.19  c0.52-0.8,0.93-1.67,1.2-2.59c0.26-0.88,0.4-1.79,0.4-2.7c0-0.19,0-0.34,0-0.44C19.18,8.18,19.75,7.59,20.2,6.92L20.2,6.92z"
                        style="fill: rgb(17, 24, 32)"
                        vector-effect="non-scaling-stroke"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div class="evnt-dta ff-nunito d-none-767">
              <div class="d-flex">
                <div class="lbl-evnt evnt-active">Evento Activo</div>
                <div class="lbl-evnt evnt-finalized">Evento Activo</div>
              </div>
              <div class="iner-evt-dta">
                <h3>Datos del evento</h3>
                <ul class="">
                  <li class="d-flex align-items-center">
                    <div class="lbl"><b>Fecha:</b></div>
                    <div class="i-txt">{{ evt.date }}</div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="lbl"><b>Hora:</b></div>
                    <div class="i-txt">{{ evt.time }}</div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="lbl"><b>Dirección:</b></div>
                    <div class="i-txt">{{ evt.direction1 }}</div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="i-txt">{{ evt.direction2 }}</div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="i-txt">{{ evt.direction3 }}</div>
                  </li>
                </ul>
                <div class="btn-gp">
                  <a :href="evt.attendURL" class="btn-attend text-center"
                    >Asistir</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="details-listing evto-pg">
      <div class="container full-con">
        <div class="slider-sec d-none-767">
          <h3 class="ff-sans-b">Otros eventos interesantes</h3>
          <div class="for-marg-1">
            <client-only>
              <carousel
                :per-page="4"
                :navigationEnabled="true"
                :paginationEnabled="false"
              >
                <slide v-for="(oEvt, i) of otherEvts" :key="i">
                  <div class="position-relative">
                    <div class="slid-img-bx">
                      <img
                        :src="oEvt.imgURL"
                        :alt="oEvt.title"
                        class="object-fit-cover"
                      />
                    </div>
                    <div class="blg-txt-info">
                      <NuxtLink :to="'/eventos/' + oEvt.slug">
                        <h4 class="ff-sans-b">{{ oEvt.title }}</h4>
                      </NuxtLink>
                      <div class="dates ff-sans-i">
                        {{ oEvt.date }} {{ oEvt.time }}
                      </div>
                      <p class="ff-sans-r">
                        {{ oEvt.shortDescription }}
                      </p>
                    </div>
                  </div>
                </slide>
              </carousel>
            </client-only>
          </div>
        </div>

        <div class="slider-sec d-block-767 d-none-n mob">
          <h3 class="ff-sans-b text-center">Otros eventos interesantes</h3>
          <div class="for-marg-1">
            <div
              class="position-relative for-m-t"
              v-for="(oEvt, i) of otherEvts"
              :key="i"
            >
              <div class="slid-img-bx">
                <img
                  :src="oEvt.imgURL"
                  :alt="oEvt.title"
                  class="object-fit-cover"
                />
              </div>
              <div class="blg-txt-info">
                <NuxtLink :to="'/eventos/' + oEvt.slug">
                  <h4 class="ff-sans-b">{{ oEvt.title }}</h4>
                </NuxtLink>
                <div class="dates ff-sans-i">
                  {{ oEvt.date }} {{ oEvt.time }}
                </div>
                <p class="ff-sans-r">
                  {{ oEvt.shortDescription }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  computed: {
    evt() {
      return this.$constants.eventos.events.find(
        (a) => a.slug === this.$route.params.slug
      )
    },
    otherEvts() {
      return this.$constants.eventos.events.filter(
        (a) => a.slug !== this.$route.params.slug
      )
    },
  },
  head() {
    return {
      title: this.evt.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.evt.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.evt.shortDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.evt.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.evt.shortDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$constants.baseURL + this.evt.imgURL,
        },
      ],
    }
  },
  methods: {
    goBack() {
      window.history.back()
    },
  },
}
</script>