<template>
  <main>
    <section class="aflora-bnr-se position-relative after-po">
      <div class="img-prt position-absolute">
        <img
          src="/images/programa-filarmonica-joven/1-home-filarmonica/encabezado_filarmonica_joven_colombia.jpg"
          alt=""
          class="object-fit-cover"
        />
      </div>
      <div
        class="d-flex align-items-center some-txt-logo justify-content-center-767 align-items-start-767 position-relative ff-nunito text-white"
      >
        <div>
          <div class="log-prt">
            <img
              src="/images/logo_joven_de_colombia.svg"
              alt=""
              class="img-fluid"
            />
          </div>
          <p>
            En Filarmónica Joven de Colombia, buscamos desarrollar el talento de
            los jóvenes apasionados por la música clásica del país, con el
            propósito de formar grandes intérpretes, capaces de inspirar la
            transformación a través de la cultura y la música.
          </p>

          <p>
            La formación dentro de la Filarmónica Joven de Colombia, se
            caracteriza por su calidad artística, la energía juvenil de sus
            músicos y su gran talento.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white only-links-to">
      <div class="container">
        <div
          class="d-flex flex-wrap for-mg justify-content-center ff-nunito justify-content-start-767"
        >
          <NuxtLink
            to="/filarmonica-joven-de-colombia/conozcanos"
            class="linkse text-center"
            >Conózcanos</NuxtLink
          >
          <NuxtLink
            to="/filarmonica-joven-de-colombia/desarrollamos-talento"
            class="linkse text-center"
            >Desarrollamos talento</NuxtLink
          >
          <NuxtLink
            to="/filarmonica-joven-de-colombia/orquesta"
            class="linkse text-center"
            >La orquesta</NuxtLink
          >
        </div>
      </div>
    </section>

    <section class="bg-white what-we-do position-relative filamonica-pg-main">
      <HomeDots></HomeDots>
      <div class="container">
        <div class="d-flex align-items-start flex-wrap-991">
          <div class="txt-bx-wht position-relative order-2-991">
            <h2 class="ff-sans-b">#LaJoven</h2>
            <div class="pra-p ff-nunito">
              <p>
                Despierta el amor de todo un país por la música sinfónica. En
                nuestra orquesta, los músicos han tenido la oportunidad de
                fortalecer su talento en la práctica orquestal de gran formato,
                alcanzando una calidad artística que ha merecido el
                reconocimiento del público internacional en Europa, Estados
                Unidos y Centroamérica.
              </p>
            </div>
            <div class="txt-bel-img d-block-991 d-none-n">
              <p>
                La Filarmónica Joven de Colombia es la orquesta juvenil más
                representativa del país y "quizás es una de las mejores
                orquestas de occidente" - Albert Milano, Vicepresidente
                Ejecutivo AT &amp; T Performing Arts Center, Dallas.
              </p>
            </div>
          </div>
          <div class="img-rrt-pr order-1-991">
            <img
              src="/images/programa-filarmonica-joven/1-home-filarmonica/home_bloque1.jpg"
              alt=""
              class="object-fit-cover"
            />
            <div class="txt-bel-img d-none-991">
              <p>
                La Filarmónica Joven de Colombia es la orquesta juvenil más
                representativa del país y "quizás es una de las mejores
                orquestas de occidente" - Albert Milano, Vicepresidente
                Ejecutivo AT &amp; T Performing Arts Center, Dallas.
              </p>
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
            Somos un equipo que une. Que invita a explorar con creatividad y a nunca dejar de innovar. A encontrar el éxito en cada esfuerzo. Que ayuda a conectar el
talento con el cambio.
          </p>
          <div class="for-btn">
            <a :href="$constants.cuentameMasLink" class="btn-tell-more"
              >Cuéntame más</a
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
      title: this.$constants.filarmonicaJovenDeColombia.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.filarmonicaJovenDeColombia.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.filarmonicaJovenDeColombia.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.filarmonicaJovenDeColombia.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.filarmonicaJovenDeColombia.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants.filarmonicaJovenDeColombia.meta.ogImage,
        },
      ],
    }
  },
}
</script>