<template>
  <main>
    <section class="aflora-bnr-se position-relative after-po">
      <div class="img-prt position-absolute">
        <img
          src="/images/cultivarte-banner.png"
          alt=""
          class="object-fit-cover"
        />
      </div>
      <div
        class="d-flex align-items-center some-txt-logo justify-content-center-767 align-items-start-767 position-relative ff-nunito text-white"
      >
        <div>
          <div class="log-prt">
            <img src="/images/cultivarte.png" alt="" class="img-fluid" />
          </div>
          <p>
            Cultivarte está generando importantes transformaciones en la vida de
            más de 220 mil niños, niñas y adolescentes. Es un programa de la
            Fundación Bolívar Davivienda que potencia el desarrollo de talento
            creando espacios seguros, que trascienden al buen uso del tiempo
            libre de una manera constructiva. Nuestros principales aliados son
            las alcaldías locales, instituciones educativas y comunidades de más
            de 80 municipios del país.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white only-links-to">
      <div class="container">
        <div
          class="d-flex flex-wrap for-mg justify-content-center ff-nunito justify-content-start-767"
        >
          <NuxtLink to="/cultivarte/conozcanos" class="linkse text-center"
            >Conózcanos</NuxtLink
          >
          <NuxtLink
            to="/cultivarte/desarrollamos-talento"
            class="linkse text-center"
          >
            Desarrollamos talento
          </NuxtLink>
          <NuxtLink to="/cultivarte/zona-ludica" class="linkse text-center"
            >Zona lúdica</NuxtLink
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
            <div class="img-points order-1-991">
              <img
                src="/images/programa-cultivarte/1-home-cultivarte/home_bloque1.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
            <div class="txt-points adesea position-relative order-2-991">
              <div class="pra-p for-bgcol">
                <h2 class="ff-sans-b">Sobre Cultivarte</h2>
                <p>
                  Apoyamos y construimos espacios de aprendizaje lúdico, donde
                  los beneficiarios logran enriquecer sus talentos y
                  fortalecerlos, para inspirar a otros a lograr sus metas a
                  través del desarrollo de sus habilidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="howwedo custive-img">
      <div class="container">
        <div class="d-flex justify-content-center howwedoheight">
          <div class="align-self-center howwedotext">
            <h2>¿Cómo lo hacemos?</h2>
            <p>
              Apoyamos y construimos espacios de aprendizaje lúdico, donde los
              beneficiarios logran enriquecer sus talentos y fortalecerlos, para
              así, inspirar a otros a lograr sus metas a través del desarrollo
              de sus habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="ig-tx-zing-zag autodiag-pg bg-white our-methodology cultiwvat-main-pg"
    >
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
            <div class="txt-points position-relative order-2-991">
              <div class="pra-p for-bgcol">
                <h2 class="ff-sans-b">¿Por qué lo hacemos?</h2>
                <p>
                  Cultivarte nace de la necesidad de transformar la historia de
                  los niños, niñas y adolescentes colombianos, fomentando el
                  buen uso del tiempo libre a través de talleres de lectura,
                  arte, cultura, tecnología y educación financiera.
                </p>
                <p>
                  Hasta hoy, Cultivarte ha cambiado la realidad de sus
                  beneficiarios con una idea simple pero poderosa: transformar
                  su tiempo libre.
                </p>
              </div>
            </div>
            <div class="img-points order-1-991">
              <img
                src="/images/programa-cultivarte/1-home-cultivarte/home_bloque3.jpg"
                alt=""
                class="object-fit-cover"
              />
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
            <a :href="$cultivarteData.cultivarteHome.desarrollamosTalento"
             class="btn-tell-more">
             Conozca más</a>
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
      title: this.$cultivarteData.cultivarteHome.meta.title + ' - ' + this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$cultivarteData.cultivarteHome.meta.metaTitle + ' - ' + this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$cultivarteData.cultivarteHome.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$cultivarteData.cultivarteHome.meta.ogTitle + ' - ' + this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$cultivarteData.cultivarteHome.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$cultivarteData.cultivarteHome.meta.ogImage,
        },
      ],
    }
  },
}
</script>


