<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/aflora">Aflora</b-breadcrumb-item>
          <b-breadcrumb-item active>Autodiagnóstico</b-breadcrumb-item>
        </b-breadcrumb>
        <div class="back-to-home position-relative d-flex align-items-center small-size">
          <i class="ic-back" @click="goBack()"></i>
          <a class="ff-sans-b" href="javascript:void(0)" @click="goBack()">Volver</a>
        </div>
      </div>
    </div>

    <section class="ig-tx-zing-zag autodiag-pg bg-white">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="page-title-new text-center">
            <p class="ff-nunito">Autodiagnóstico</p>
            <h2 class="ff-sans-b">
              ¿Qué es y para qué sirve el autodiagnóstico?
            </h2>
          </div>

          <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
            <div class="img-points order-1-991">
              <img src="/images/programa-aflora/4-autodiagnostico/autodiagnostico_bloque1.jpg" alt=""
                class="object-fit-cover" />
            </div>
            <div class="txt-points position-relative order-2-991">
              <div class="pra-p for-bgcol">
                <p>
                  Las organizaciones interesadas en aprovechar los beneficios del programa, posterior a su inscripción,
                  diligencian un formulario de 34 preguntas necesarias para su crecimiento. Según las respuestas
                  otorgadas, el sistema clasificará la organización en un nivel, de acuerdo a las áreas y aspectos que tienen
                  por mejorar.
                </p>
                <p>
                  El autodiagnóstico es un requisito importante para su desarrollo, a través del cual se identifica la
                  ruta de formación que más se ajusta a las necesidades de cada una de las organizaciones, para que la
                  experiencia de crecimiento sea exitosa.
                </p>
              </div>
            </div>
          </div>

          <div class="some-points-autod-pg margin-0-auto">
            <div class="text-center">
              <h4 class="ff-sans-b">Información importante:</h4>
            </div>
            <div class="d-flex flex-wrap for-margin-1 align-items-start">
              <div v-for="(item, i) of $afloraData.afloraAutodiagnostico
                  .importantInformations" :key="i" class="one-bx-grey">
                <div class="info-tx position-relative after-po before-po ff-sans-r">
                  <p>
                    {{ item }}
                  </p>
                </div>
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
    head() {
      return {
        title: this.$afloraData.afloraAutodiagnostico.meta.title + ' - ' + this.$constants.home.meta.title,
        meta: [{
            hid: 'title',
            name: 'title',
            content: this.$afloraData.afloraAutodiagnostico.meta.metaTitle + ' - ' + this.$constants.home.meta.title,
          },
          {
            hid: 'description',
            name: 'description',
            content: this.$afloraData.afloraAutodiagnostico.meta.metaDescription,
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.$afloraData.afloraAutodiagnostico.meta.ogTitle + ' - ' + this.$constants.home.meta.title,
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: this.$afloraData.afloraAutodiagnostico.meta.ogDescription,
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: this.$constants.baseURL +
              this.$afloraData.afloraAutodiagnostico.meta.ogImage,
          },
        ],
      }
    },
  }

</script>
