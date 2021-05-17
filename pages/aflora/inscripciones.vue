<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/aflora">Aflora</b-breadcrumb-item>
          <b-breadcrumb-item active>Inscripciones</b-breadcrumb-item>
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
            <h2
              class="ff-sans-b ss d-block-991 d-none-n wow bounceInLeft"
              data-wow-duration="2s"
            >
              Inscripciones
            </h2>
            <h3
              class="ff-sans-b ss d-block-991 d-none-n wow bounceInLeft"
              data-wow-duration="2s"
            >
              ¿Cómo inscribirse <br />
              a Aflora?
            </h3>
            <div
              class="txt-points position-relative order-2-991 wow bounceInLeft"
              data-wow-duration="2s"
            >
              <h2 class="ff-sans-b d-none-991">Inscripciones</h2>
              <h3 class="ff-sans-b d-none-991">
                ¿Cómo inscribirse <br />
                a Aflora?
              </h3>
              <div class="pra-p for-bgcol">
                <p>
                  La inscripción a nuestro programa de fortalecimiento virtual,
                  será el inicio de un sendero lleno de historias y conocimiento
                  que le brindará a su organización todas las herramientas para
                  mejorar y lograr los objetivos planteados.
                </p>
              </div>
            </div>
            <div
              class="img-points order-1-991 wow bounceInRight"
              data-wow-duration="2s"
            >
              <img
                src="/images/programa-aflora/6-inscripciones/inscripciones_bloque1.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </div>
          <!--this request was made by the customer. 

          <div class="four-boxes">
            <div class="d-flex flex-wrap">
              <div class="one-box text-center position-relative">
                <div class="round-bx position-relative margin-0-auto d-flex align-items-center justify-content-center">
                  <div
                    class="numbr text-white ff-sans-b d-flex align-items-center justify-content-center position-absolute">
                    1
                  </div>
                  <p class="ff-sans-sb">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div class="one-box text-center position-relative">
                <div class="round-bx position-relative margin-0-auto d-flex align-items-center justify-content-center">
                  <div
                    class="numbr text-white ff-sans-b d-flex align-items-center justify-content-center position-absolute">
                    2
                  </div>
                  <p class="ff-sans-sb">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div class="one-box text-center position-relative">
                <div class="round-bx position-relative margin-0-auto d-flex align-items-center justify-content-center">
                  <div
                    class="numbr text-white ff-sans-b d-flex align-items-center justify-content-center position-absolute">
                    3
                  </div>
                  <p class="ff-sans-sb">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div class="one-box text-center position-relative">
                <div class="round-bx position-relative margin-0-auto d-flex align-items-center justify-content-center">
                  <div
                    class="numbr text-white ff-sans-b d-flex align-items-center justify-content-center position-absolute">
                    4
                  </div>
                  <p class="ff-sans-sb">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          -->

          <div class="txt-info-m margin-0-auto text-center">
            <h4 class="ff-sans-b">Reglamento de inscripción</h4>
            <div class="pra-p ff-nunito">
              <p>
                Para Fundación Bolívar Davivienda es muy importante que todos
                los interesados, aspirantes y beneficiarios, conozcan con
                detalle las políticas detrás de cada programa. Por eso, le
                invitamos a leer con detenimiento el reglamento del programa
                Aflora. Allí encontrará los requisitos y condiciones para ser
                parte.
              </p>
            </div>
            <div
              class="two-btn d-flex justify-content-between ff-sans-b flex-wrap"
            >
              <a
                :href="$afloraData.afloraInscripciones.reglamentoLink"
                class="btn-sm btn-line-btn text-center"
                >Lee el reglamento de inscripción</a
              >
              <a
                target="_blank"
                :href="$afloraData.afloraInscripciones.inscribaseLink"
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
      title:
        this.$afloraData.afloraInscripciones.meta.title +
        ' - ' +
        this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            this.$afloraData.afloraInscripciones.meta.metaTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$afloraData.afloraInscripciones.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$afloraData.afloraInscripciones.meta.ogTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$afloraData.afloraInscripciones.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$afloraData.afloraInscripciones.meta.ogImage,
        },
      ],
    }
  },
}
</script>
