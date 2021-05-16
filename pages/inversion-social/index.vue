<template>
  <main>
    <section class="aflora-bnr-se position-relative after-po">
      <div class="img-prt position-absolute">
        <img
          src="/images/header_is_b_062_cef_537_s.jpg"
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
              src="/images/logos/Logo-Inversión-Social_Blanco.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="wow bounceInUp" data-wow-duration="2s">
            <p>
              Inversión Social, un programa de la Fundación Bolívar Davivienda,
              es un camino para apoyar iniciativas de impacto social. Un espacio
              donde impulsamos proyectos que transforman historias con
              soluciones sostenibles. En equipo con nuestros aliados
              multiplicamos nuestro resultado en: Proyecto de Vida y Prevención
              de Embarazo Adolescente, Desarrollo Económico en comunidades
              rurales, Fortalecimiento Familiar e Inclusión Educativa.
            </p>
            <p>
              Tenemos presencia en más de 18 departamentos a lo largo del
              territorio Nacional, con más de 17.000 beneficiarios directos en
              nuestros diferentes programas.
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
          <NuxtLink to="/inversion-social/conozcanos" class="linkse text-center"
            >Conózcanos</NuxtLink
          >
          <NuxtLink
            to="/inversion-social/desarrollamos-talento"
            class="linkse text-center"
            >Desarrollamos talento</NuxtLink
          >
          <NuxtLink
            to="/inversion-social/convocatorias"
            class="linkse text-center"
            >Convocatorias</NuxtLink
          >
        </div>
      </div>
    </section>

    <section class="bg-white what-we-do position-relative filamonica-pg-main">
      <HomeDots></HomeDots>
      <div class="container">
        <div class="d-flex align-items-start flex-wrap-991">
          <div
            class="txt-bx-wht position-relative order-2-991 wow bounceInLeft"
            data-wow-duration="2s"
          >
            <h2 class="ff-sans-b">¿Qué hacemos?</h2>
            <div class="pra-p ff-nunito">
              <p>
                Impulsamos iniciativas que logran cambios significativos a
                mediano y largo plazo. En Inversión Social queremos fortalecer
                proyectos con propuestas y métodos de trabajo participativos,
                con un alto potencial de impacto.
              </p>
            </div>
          </div>
          <div
            class="img-rrt-pr order-1-991 wow bounceInRight"
            data-wow-duration="2s"
          >
            <img
              src="/images/rectangle_l.jpg"
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
                $inversionSocialData.inversionSocial.desarrollamosTalentoLink
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
        this.$inversionSocialData.inversionSocial.meta.title +
        ' - ' +
        this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            this.$inversionSocialData.inversionSocial.meta.metaTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$inversionSocialData.inversionSocial.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$inversionSocialData.inversionSocial.meta.ogTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$inversionSocialData.inversionSocial.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$inversionSocialData.inversionSocial.meta.ogImage,
        },
      ],
    }
  },
}
</script>