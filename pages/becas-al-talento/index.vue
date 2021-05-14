<template>
  <main>
    <section class="aflora-bnr-se position-relative after-po">
      <div class="img-prt position-absolute">
        <img src="/images/becas-banner.jpg" alt="" class="object-fit-cover" />
      </div>
      <div
        class="d-flex align-items-center some-txt-logo justify-content-center-767 align-items-start-767 position-relative ff-nunito text-white"
      >
        <div>
          <div class="log-prt wow bounceInDown" data-wow-duration="2s">
            <img src="/images/becas-banner-logo.png" alt="" class="img-fluid" />
          </div>
          <div class="wow bounceInUp" data-wow-duration="2s">
            <p>
              Becas al Talento es un programa de la Fundación Bolívar
              Davivienda, que busca apoyar a estudiantes con un alto desempeño
              académico, de diferentes instituciones de educación superior para
              culminar sus estudios en caso de dificultades económicas. º
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white only-links-to">
      <div class="container">
        <div
          class="d-flex flex-wrap for-mg justify-content-center ff-nunito justify-content-start-767"
        >
          <NuxtLink to="/becas-al-talento/conozcanos" class="linkse text-center"
            >Conózcanos</NuxtLink
          >
          <NuxtLink
            to="/becas-al-talento/desarrollamos-talento"
            class="linkse text-center"
          >
            Desarrollamos talento
          </NuxtLink>
          <NuxtLink to="/becas-al-talento/requisitos" class="linkse text-center"
            >Requisitos</NuxtLink
          >
        </div>
      </div>
    </section>

    <section
      class="ig-tx-zing-zag desarrolla bg-white des-filarmonic-main desarroll-te-empre cultivat-main"
    >
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div
            class="d-flex multiple-reapt align-items-end flex-wrap-991 nd-wave-of-div text-points-sie"
          >
            <div
              class="img-points order-1-991 wow bounceInLeft"
              data-wow-duration="2s"
            >
              <img
                src="/images/programa-becas-al-talento/1-home-becas/home_bloque1.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
            <div
              class="txt-points desesesae position-relative order-2-991 wow bounceInRight"
              data-wow-duration="2s"
            >
              <div class="pra-p for-bgcol">
                <h2 class="ff-sans-b">Sobre Becas</h2>
                <p>
                  En el programa apoyamos el talento y la excelencia de los
                  estudiantes de nuestras universidades aliadas, con el fin de
                  garantizar que terminen sus estudios profesionales de manera
                  exitosa. Este beneficio se otorga como una beca-crédito para
                  estudiantes que estén cursando entre 5to y 8vo semestre y está
                  ligado a las políticas y procesos internos de las
                  instituciones universitarias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="desarrollamos-section aflora-pg position-relative before-po"
    >
      <HomeDots></HomeDots>
      <div class="inner-section margin-0-auto position-relative z-index-5">
        <div class="text-center text-white">
          <small class="ff-nunito">Sobre nosotros</small>
          <h2 class="ff-sans-b">Desarrollamos Talento</h2>
          <p class="ff-nunito margin-0-auto">
            Somos un equipo que une. Que invita a explorar con creatividad y a
            nunca dejar de innovar. A encontrar el éxito en cada esfuerzo. Que
            ayuda a conectar el talento con el cambio.
          </p>
          <div class="for-btn">
            <a
              :href="$becasAlTalentoData.becasAlTalento.cuentameMasLink"
              class="btn-tell-more"
            >
              Conozca más</a
            >
          </div>
        </div>
      </div>
      <HomeDotsbottoms></HomeDotsbottoms>
    </section>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title:
        this.$becasAlTalentoData.becasAlTalento.meta.title +
        ' - ' +
        this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            this.$becasAlTalentoData.becasAlTalento.meta.metaTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$becasAlTalentoData.becasAlTalento.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$becasAlTalentoData.becasAlTalento.meta.ogTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$becasAlTalentoData.becasAlTalento.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$becasAlTalentoData.becasAlTalento.meta.ogImage,
        },
      ],
    }
  },
}
</script>


