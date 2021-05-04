<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/inversion-social"
            >Inversión Social</b-breadcrumb-item
          >
          <b-breadcrumb-item active>Convocatorias</b-breadcrumb-item>
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

    <section class="ig-tx-zing-zag incoc-convoc bg-white position-relative">
      <div class="container">
        <div class="d-flex multiple-reapt align-items-start flex-wrap-991 ades">
          <h2 class="ff-sans-b d-block-767 d-none-n mob-tt">Convocatorias</h2>
          <div class="txt-points position-relative order-2-767">
            <h2 class="ff-sans-b d-none-767">Convocatorias</h2>
            <div class="bg-sliod">
              <div class="pra-p">
                <p class="ff-sans-b">
                  Las convocatorias al programa se realizan periódicamente y
                  están ligadas a la finalización exitosa de cada proyecto
                </p>
              </div>
            </div>
          </div>
          <div class="img-points order-1-767">
            <img
              src="/images/rectangle_p.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>

        <div
          class="d-flex multiple-reapt align-items-start flex-wrap-991 three-bx"
        >
          <div class="img-points order-1-991">
            <img
              src="/images/rectangle_o.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
          <div class="txt-points position-relative order-2-991">
            <div class="pra-p">
              <p>
                Cada proyecto que apoyamos en Inversión Social, tiene un tiempo
                de trabajo que varía según su alcance y magnitud. Generalmente
                las convocatorias se hacen de manera anual para proyectos e
                iniciativas regionales, y cada dos años se realiza una
                convocatoria nacional, según la cantidad de proyectos que se
                vayan finalizando.
              </p>
              <div class="text-right link-to-r-opg">
                <a
                  :href="
                    $constants.inversionSocialConvocatorias.quieroConocerMasLink
                  "
                  class="ff-sans-b"
                  >Quiero conocer más ></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ig-tx-zing-zag desarrolla inscripci-pg bg-white pt-2">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="txt-info-m margin-0-auto text-center pt-0">
            <h4 class="ff-sans-b">Reglamento de inscripción</h4>
            <div class="pra-p ff-nunito">
              <p>
                Para Fundación Bolívar Davivienda es muy importante que todos
                los interesados, aspirantes y beneficiarios, conozcan con
                detalle las políticas de cada programa. Por eso lo invitamos a
                leer con detenimiento el reglamento del programa Inversión
                Social, allí encontrará los requisitos y condiciones para ser
                parte.
              </p>
            </div>
            <div
              class="two-btn d-flex justify-content-between ff-sans-b flex-wrap"
            >
              <a
                :href="$constants.inversionSocialConvocatorias.reglamentoLink"
                class="btn-sm btn-line-btn text-center"
                >Lee el reglamento de inscripción</a
              >
              <a
                :href="$constants.inversionSocialConvocatorias.inscribaseLink"
                class="btn-sm btn-solid-btn text-center"
                >Inscribase aquí</a
              >
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
      title: this.$constants.inversionSocialConvocatorias.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.inversionSocialConvocatorias.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.inversionSocialConvocatorias.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.inversionSocialConvocatorias.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.inversionSocialConvocatorias.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants.inversionSocialConvocatorias.meta.ogImage,
        },
      ],
    }
  },
}
</script>