<template>
  <main>
    <div class="container position-relative innerpage">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item to="/inversion-social"
          >Inversión Social</b-breadcrumb-item
        >
        <b-breadcrumb-item active>Conózcanos</b-breadcrumb-item>
      </b-breadcrumb>
      <div
        class="back-to-home position-absolute d-flex align-items-center small-size"
      >
        <i class="ic-back" @click="goBack()"></i>
        <a
          class="ff-sans-b text-white"
          href="javascript:void(0)"
          @click="goBack()"
          >Volver</a
        >
      </div>
    </div>
    <section class="main-slider-at-top aflora-pge position-relative after-po">
      <div class="img-prt position-relative">
        <img
          src="/images/inversion_social_bg.jpg"
          alt=""
          class="object-fit-cover"
        />
      </div>
      <div class="pg-tit-inner position-absolute text-center">
        <h1 class="ff-sans-b">Inversión Social</h1>
      </div>
    </section>

    <section
      class="ig-tx-zing-zag bg-white position-relative what-we-do connoz-filamr-mpg insocia-co"
    >
      <HomeDots></HomeDots>
      <div class="container">
        <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
          <div class="txt-points position-relative">
            <h3 class="ff-nunito">Nuestro Impacto</h3>
            <div class="pra-p">
              <p>
                Acompañamos procesos, que se convierten en caminos para cumplir
                nuestra misión y transformar el talento en oportunidades de
                desarrollo de niños, niñas, jóvenes y mujeres. Con nuestros
                aliados, ganamos experiencia y juntos trabajamos en los desafíos
                para superarlos y cumplir los objetivos.
              </p>
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/rectangle_n.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>

        <div
          class="d-flex multiple-reapt align-items-start flex-wrap-991 three-bx"
        >
          <div class="img-points order-2-991">
            <img
              src="/images/rectangle_m.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
          <div class="txt-points position-relative order-1-991">
            <div class="pra-p">
              <p>Enfocamos nuestros esfuerzos en 6 grandes áreas de trabajo:</p>
              <ul>
                <li class="position-relative after-po">
                  Proyecto de Vida y Prevención de embarazo adolescente.
                </li>
                <li class="position-relative after-po">
                  Fortalecimiento familiar.
                </li>
                <li class="position-relative after-po">Inclusión educativa.</li>
                <li class="position-relative after-po">
                  Desarrollo económico.
                </li>
                <li class="position-relative after-po">
                  Becas al Talento, programa dirigido a estudiantes
                  universitarios.
                </li>
                <li class="position-relative after-po">
                  Postulación de proyectos (Donaciones y Grants).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonios-sec">
      <div class="container-fluid">
        <div class="sec-title text-center">
          <h2 class="ff-nunito">Testimonios</h2>
          <p class="ff-sans-b">De nuestros integrantes</p>
        </div>
        <div class="testimo-slider">
          <div class="for-marg-1">
            <client-only>
              <carousel
                :perPageCustom="[
                  [575, 1],
                  [1024, 2],
                  [1200, 3],
                ]"
                :navigationEnabled="true"
                :paginationEnabled="true"
              >
                <slide
                  v-for="(item, i) of $inversionSocialData
                    .inversionSocialConozcanos.testimonios"
                  :key="i"
                >
                  <div class="position-relative testimo-bx bg-white">
                    <div class="text-center til ff-sans-b">
                      <h3>
                        {{ item.title }}
                      </h3>
                    </div>
                    <div
                      class="txt margin-0-auto position-relative after-po before-po quote-sign ff-sans-i"
                    >
                      <p>
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </slide>
              </carousel>
            </client-only>
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
      title: this.$inversionSocialData.inversionSocialConozcanos.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$inversionSocialData.inversionSocialConozcanos.meta
            .metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$inversionSocialData.inversionSocialConozcanos.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$inversionSocialData.inversionSocialConozcanos.meta
            .ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$inversionSocialData.inversionSocialConozcanos.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$inversionSocialData.inversionSocialConozcanos.meta.ogImage,
        },
      ],
    }
  },
}
</script>