<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/emprender-pais"
            >Emprender país
          </b-breadcrumb-item>
          <b-breadcrumb-item to="/emprender-pais/desarrollamos-talento"
            >Desarrollamos talento
          </b-breadcrumb-item>
          <b-breadcrumb-item active>Consultores</b-breadcrumb-item>
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
            <h2 class="ff-sans-b ss d-block-991 d-none-n">Consultores</h2>
            <div class="txt-points position-relative order-2-991">
              <h2 class="ff-sans-b d-none-991">Consultores</h2>
              <div class="pra-p for-bgcol">
                <h3 class="ff-sans-b">
                  Trabajamos por los grandes <br />
                  emprendedores del país
                </h3>
                <p>
                  Mentores padrinos, son los más altos ejecutivos de las
                  empresas del Grupo Bolívar, que tienen la capacidad de
                  analizar el negocio del emprendedor desde una perspectiva
                  general, evaluándola como un todo, para entender la
                  profundidad de su negocio y priorizar sus necesidades, dando
                  acompañamiento a los temas más estratégicos. Los mentores
                  expertos realizan un proceso de acompañamiento puntual a los
                  empresarios de acuerdo a su plan de trabajo para facilitarle
                  la implementación de sus proyectos.
                </p>
              </div>
            </div>
            <div class="img-points order-1-991">
              <img
                src="/images/rectangle_ad.jpg"
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
      title: this.$constants.emprenderPaisDesarrollamosTalentoConsultores.meta
        .title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.emprenderPaisDesarrollamosTalentoConsultores
            .meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.emprenderPaisDesarrollamosTalentoConsultores
            .meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.emprenderPaisDesarrollamosTalentoConsultores
            .meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.emprenderPaisDesarrollamosTalentoConsultores
            .meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants.emprenderPaisDesarrollamosTalentoConsultores.meta
              .ogImage,
        },
      ],
    }
  },
}
</script>