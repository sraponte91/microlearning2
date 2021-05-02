<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/voluntariado-fundacion-bolivar-davivienda"
            >Voluntariado fundación Bolivar</b-breadcrumb-item
          >
          <b-breadcrumb-item active>Desarrollamos talento</b-breadcrumb-item>
        </b-breadcrumb>
        <div
          class="back-to-home position-relative d-flex align-items-center small-size"
        >
          <i class="ic-back" @click="goBack()"></i>
          <a class="ff-sans-b" href="javascript:void(0)" @click="goBack()"
            >Volver</a
          >
        </div>
      </div>
    </div>

    <section class="ig-tx-zing-zag desarrolla bg-white">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
            <h2 class="ff-sans-b ss d-block-991 d-none-n">
              Desarrollamos <br />
              talento
            </h2>
            <div class="txt-points position-relative order-2-991">
              <h2 class="ff-sans-b d-none-991">
                Desarrollamos <br />
                talento
              </h2>
              <div class="pra-p for-bgcol">
                <p>
                  Mediante las jornadas de capacitación y formación
                  desarrollamos y cultivamos el talento de todos y todas las
                  participantes, para unirnos, transformar y multiplicar en cada
                  uno de los territorios donde Voluntariado Familia Bolívar
                  tiene presencia.
                </p>
                <p>
                  Adicionalmente, el programa brinda la oportunidad a sus
                  voluntarios de crecer como agentes de cambio, y por eso
                  impulsa y apoya campañas y proyectos sociales propuestos por
                  ellos. Buscamos formar más y mejores voluntarios para que cada
                  vez la red de intercambio de conocimiento sea mayor.
                </p>
              </div>
            </div>
            <div class="img-points order-1-991">
              <img
                src="/images/desarrollamostalento_bloque_1_eebda.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  methods: {
    goBack() {
      window.history.back()
    },
  },
  head() {
    return {
      title: this.$constants
        .voluntariadoFundacionBolivarDaviviendaDesarrollamosTalento.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants
            .voluntariadoFundacionBolivarDaviviendaDesarrollamosTalento.meta
            .metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants
            .voluntariadoFundacionBolivarDaviviendaDesarrollamosTalento.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants
            .voluntariadoFundacionBolivarDaviviendaDesarrollamosTalento.meta
            .ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants
            .voluntariadoFundacionBolivarDaviviendaDesarrollamosTalento.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants
              .voluntariadoFundacionBolivarDaviviendaDesarrollamosTalento.meta
              .ogImage,
        },
      ],
    }
  },
}
</script>