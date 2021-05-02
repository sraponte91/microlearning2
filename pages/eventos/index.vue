<template>
  <main>
    <div class="container position-relative">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item active>Eventos</b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <section class="main-slider-at-top actualidad-pg">
      <div class="img-prt position-relative">
        <img src="/images/evento_banner.jpg" alt="" class="object-fit-cover" />
        <div class="container position-absolute set-to-bottom">
          <div class="banner-txt text-white">
            <div class="orange-bg">
              <h1 class="ff-sans-b">Eventos</h1>
            </div>
            <div class="black-bg">
              <p class="ff-nunito">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="what-looking-for">
      <div class="container">
        <div class="innper-bx margin-0-auto">
          <div
            class="d-flex align-items-center justify-content-between flex-wrap-767"
          >
            <p class="ff-nunito text-white">¿Qué estas buscando?</p>
            <b-form-input placeholder="Eventos"></b-form-input>
          </div>
        </div>
      </div>
    </section>

    <section class="only-boxes-section">
      <div class="container">
        <div class="d-flex flex-wrap for-mar-setmet">
          <div
            class="only-one-bx"
            v-for="(ev, i) of $constants.eventos.events"
            :key="i"
          >
            <h3 class="ff-sans-b text-uppercase">{{ ev.title }}</h3>
            <div class="im-bxe">
              <img :src="ev.imgURL" :alt="ev.title" class="object-fit-cover" />
            </div>
            <div class="dt-tx-info position-relative after-po ff-nunito">
              <div class="d-flex">
                <div class="dat-bx position-relative after-po">
                  <p>{{ ev.date }}</p>
                  <p>{{ ev.time }}</p>
                </div>
                <div class="bx-nam">
                  <div class="d-flex justify-content-between">
                    <div class="lft">
                      <h4>Lugar del evento</h4>
                      <p>Nombre del encargado</p>
                    </div>
                    <p>{{ ev.place }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="for-btn">
              <NuxtLink
                :to="'/eventos/' + ev.slug"
                class="btn-ver-evento ff-nunito position-relative"
              >
                Ver Evento
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- <div class="text-center">
          <div class="btn-redrect">
            <a href="javascript:void(0)" class="btn-carge-mars ff-nunito"
              >Cargar Más</a
            >
          </div>
        </div> -->
      </div>
    </section>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: this.$constants.eventos.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.eventos.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.eventos.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.eventos.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.eventos.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$constants.baseURL + this.$constants.eventos.meta.ogImage,
        },
      ],
    }
  },
}
</script>