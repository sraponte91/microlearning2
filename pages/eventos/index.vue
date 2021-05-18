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
        <img
          src="/images/seccion-eventos/encabezado_eventos_desktop.jpg"
          alt=""
          class="object-fit-cover"
        />
        <div class="container position-absolute set-to-bottom">
          <div class="banner-txt text-white">
            <div class="orange-bg wow bounceInDown" data-wow-duration="2s">
              <h1 class="ff-sans-b">Eventos</h1>
            </div>
            <!--<div class="black-bg wow bounceInUp" ata-wow-duration="2s">
              <p class="ff-nunito">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem.
              </p>
            </div>-->
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
            <b-form-input placeholder="Eventos" v-model="search"></b-form-input>
          </div>
        </div>
      </div>
    </section>

    <section class="only-boxes-section">
      <div class="container">
        <div class="d-flex flex-wrap for-mar-setmet">
          <template v-if="events.length">
            <div class="only-one-bx" v-for="(ev, i) of events" :key="i">
              <h3 class="ff-sans-b text-uppercase">{{ ev.title }}</h3>
              <div class="im-bxe">
                <img
                  :src="ev.imgURL"
                  :alt="ev.title"
                  class="object-fit-cover"
                />
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
          </template>
          <h4 style="margin-left: 2%" v-else>No data found</h4>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  computed: {
    events() {
      return this.$eventosData.eventos.events.filter((i) => {
        return i.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  data() {
    return {
      search: '',
    }
  },
  head() {
    return {
      title: this.$eventosData.eventos.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$eventosData.eventos.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$eventosData.eventos.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$eventosData.eventos.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$eventosData.eventos.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL + this.$eventosData.eventos.meta.ogImage,
        },
      ],
    }
  },
}
</script>