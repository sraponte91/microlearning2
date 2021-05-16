<template>
  <main>
    <section class="aflora-bnr-se position-relative after-po">
      <div class="img-prt position-absolute">
        <img
          src="/images/programa-voluntariado/1-home-voluntariado/encabezado_voluntariado_familia_bolivar.jpg"
          alt=""
          class="object-fit-cover"
        />
      </div>
      <div
        class="d-flex align-items-center some-txt-logo justify-content-center-767 align-items-start-767 position-relative ff-nunito text-white"
      >
        <div>
          <div class="log-prt wow bounceInDown" data-wow-duration="2s">
            <img
              src="/images/logos/Logo-Voluntariado_Blanco.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="wow bounceInUp" data-wow-duration="2s">
            <p>
              El Voluntariado del Grupo Bolívar es el camino para cumplir en
              equipo la apuesta social de la organización a través de la
              solidaridad, innovación y participación de colaboradores,
              familiares y pensionados de las diferentes compañías. Este
              programa logra la misión de unirnos para transformar y
              multiplicar. Nos cambia la forma en la que vemos el mundo y a
              nosotros mismos.
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
          <NuxtLink
            to="/voluntariado-fundacion-bolivar/conozcanos"
            class="linkse text-center"
            >Conózcanos</NuxtLink
          >
          <NuxtLink
            to="/voluntariado-fundacion-bolivar/desarrollamos-talento"
            class="linkse text-center"
            >Desarrollamos talento</NuxtLink
          >
          <NuxtLink
            to="/voluntariado-fundacion-bolivar/inscripciones"
            class="linkse text-center"
            >Inscripciones</NuxtLink
          >
        </div>
      </div>
    </section>

    <section class="bg-white what-we-do position-relative voluntaiad-main-se">
      <HomeDots></HomeDots>
      <div class="container">
        <div class="d-flex align-items-start flex-wrap-991">
          <div
            class="txt-bx-wht position-relative order-2-991 wow bounceInLeft"
            data-wow-duration="2s"
          >
            <h2 class="ff-sans-b">
              Sobre nuestro <br />
              Voluntariado
            </h2>
            <div class="pra-p ff-nunito">
              <p>
                Voluntariado Familia Bolívar está enfocado en crear una red de
                voluntarios en diferentes áreas de conocimiento, para lograr
                construir una sociedad justa y equitativa.
              </p>

              <p>
                Los voluntarios que hacen parte del programa donan tiempo y
                conocimientos para fortalecer competencias ciudadanas en
                comunidades como: educación financiera, seguridad vial,
                promoción de lectura, educación ambiental, resolución de
                conflictos, y muchos más.
              </p>
            </div>
          </div>
          <div
            class="img-rrt-pr order-1-991 wow bounceInRight"
            data-wow-duration="2s"
          >
            <img
              src="/images/programa-voluntariado/1-home-voluntariado/home_bloque1.jpg"
              alt=""
              class="object-fit-cover"
            />
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
              :href="
                $voluntariadoFundacionBolivarDaviviendaData
                  .voluntariadoFundacionBolivarDavivienda.cuentameMasLink
              "
              class="btn-tell-more"
              >Conozca más</a
            >
          </div>
        </div>
      </div>
      <HomeDotsbottoms></HomeDotsbottoms>
    </section>
  </main>
</template>
<script>
import HomeDots from '@/components/home/dots'
import HomeDotsbottoms from '@/components/home/dotsbottoms'

export default {
  components: {
    HomeDots,
    HomeDotsbottoms,
  },
  head() {
    return {
      title:
        this.$voluntariadoFundacionBolivarDaviviendaData
          .voluntariadoFundacionBolivarDavivienda.meta.title +
        ' - ' +
        this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            this.$voluntariadoFundacionBolivarDaviviendaData
              .voluntariadoFundacionBolivarDavivienda.meta.metaTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$voluntariadoFundacionBolivarDaviviendaData
            .voluntariadoFundacionBolivarDavivienda.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$voluntariadoFundacionBolivarDaviviendaData
              .voluntariadoFundacionBolivarDavivienda.meta.ogTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$voluntariadoFundacionBolivarDaviviendaData
            .voluntariadoFundacionBolivarDavivienda.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$voluntariadoFundacionBolivarDaviviendaData
              .voluntariadoFundacionBolivarDavivienda.meta.ogImage,
        },
      ],
    }
  },
}
</script>