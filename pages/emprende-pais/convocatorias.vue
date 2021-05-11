<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/emprende-pais"
            >Emprende país
          </b-breadcrumb-item>
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

    <section class="ig-tx-zing-zag desarrolla inscripci-pg bg-white">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
            <h2 class="ff-sans-b ss d-block-991 d-none-n">Convocatorias</h2>
            <div class="txt-points position-relative order-2-991">
              <h2 class="ff-sans-b d-none-991">Convocatorias</h2>
              <div class="pra-p for-bgcol">
                <p>
                  Queremos invitar a esas empresas consolidadas, con alto
                  potencial de crecimiento y que le aportan al aparato económico
                  del país, a formar parte de un programa que se encargará de
                  hacerles un acompañamiento formativo con énfasis en la parte
                  estratégica para ayudarles a potencializar el valor económico
                  de la organización.
                </p>
              </div>
            </div>
            <div class="img-points order-1-991">
              <img
                src="/images/programa-emprende-pais/6-convocatorias/convocatorias_bloque1.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </div>

          <div class="b-s-30"></div>

          <div class="txt-info-m margin-0-auto text-center">
            <h4 class="ff-sans-b">Reglamento de inscripción</h4>
            <div class="pra-p ff-nunito">
              <p>
                Para Fundación Bolívar Davivienda es muy importante que todos
                nuestro interesados, aspirantes y beneficiarios, conozcan con
                detalle las políticas detrás de cada programa. Lo invitamos a
                leer con detenimiento el reglamento de nuestro programa Emprende
                País para conocer los requisitos y condiciones para inscribirse.
              </p>
            </div>
            <div
              class="two-btn d-flex justify-content-between ff-sans-b flex-wrap"
            >
              <a
                :href="
                  $emprendePaisData.emprendePaisConvocatorias.reglamentoLink
                "
                class="btn-sm btn-line-btn text-center"
                >Lee el reglamento de inscripción</a
              >
              <a
                :href="
                  $emprendePaisData.emprendePaisConvocatorias.inscribaseLink
                "
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
  head() {
    return {
      title: this.$emprendePaisData.emprendePaisConvocatorias.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$emprendePaisData.emprendePaisConvocatorias.meta
            .metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$emprendePaisData.emprendePaisConvocatorias.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$emprendePaisData.emprendePaisConvocatorias.meta
            .ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$emprendePaisData.emprendePaisConvocatorias.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$emprendePaisData.emprendePaisConvocatorias.meta.ogImage,
        },
      ],
    }
  },
}
</script>