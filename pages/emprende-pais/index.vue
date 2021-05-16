<template>
  <main>
    <section class="aflora-bnr-se position-relative after-po">
      <div class="img-prt position-absolute">
        <img
          src="/images/programa-emprende-pais/1-home-emprende-pais/encabezado_emprende_pais.jpg"
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
              src="/images/logos/Logo-Emprede-País_Blanco.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="wow bounceInUp" data-wow-duration="2s">
            <p>
              Emprende País es un programa de la Fundación Bolívar Davivienda,
              que acompaña a todos aquellos líderes emprendedores  que buscan
              multiplicar su propósito de empresa y abrir oportunidades de
              trabajo convirtiéndose en motores de desarrollo para el país. Las
              empresas que hacen parte de este programa tienen un alto potencial
              de crecimiento y a través de mentorías empresariales con la guía
              de altos ejecutivos del Grupo Bolívar y de una red de exitosos
              empresarios a nivel regional, les brindamos las herramientas que
              les permitan apalancar su desarrollo hacia la rentabilidad y
              sostenibilidad en el tiempo.
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
          <NuxtLink to="/emprende-pais/conozcanos" class="linkse text-center"
            >Conózcanos</NuxtLink
          >
          <NuxtLink
            to="/emprende-pais/desarrollamos-talento"
            class="linkse text-center"
            >Desarrollamos talento</NuxtLink
          >
          <NuxtLink to="/emprende-pais/convocatorias" class="linkse text-center"
            >Convocatorias</NuxtLink
          >
          <NuxtLink
            to="/emprende-pais/presencia-en-el-pais"
            class="linkse text-center"
            >Presencia en el Pais</NuxtLink
          >
        </div>
      </div>
    </section>

    <section
      class="bg-white what-we-do position-relative ig-tx-zing-zag emp-pais"
    >
      <div class="container">
        <div class="d-flex align-items-start flex-wrap-991">
          <div
            class="two-div-in-one-left position-relative wow bounceInLeft"
            data-wow-duration="2s"
          >
            <div class="txt-bx-wht position-relative order-2-991">
              <h2 class="ff-sans-b">El programa</h2>
              <div class="pra-p ff-nunito">
                <p>
                  “Emprende País es un espacio donde se gana experiencia, se
                  encuentra conocimiento en los mejores y se construyen
                  relaciones que acompañan cada proceso”
                </p>
              </div>
            </div>
            <div class="extra-div position-relative order-2-991">
              <h3 class="ff-sans-b">
                Fortalecemos empresas con alto potencial de crecimiento
              </h3>
            </div>
          </div>
          <div
            class="img-rrt-pr order-1-991 wow bounceInRight"
            data-wow-duration="2s"
          >
            <img
              src="/images/programa-emprende-pais/1-home-emprende-pais/home_bloque1.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="howwedo">
      <div class="container">
        <div class="d-flex justify-content-center howwedoheight">
          <div class="align-self-center howwedotext">
            <h2>¿Cómo lo hacemos?</h2>
            <p>
              Ofrecemos una ruta de formación para emprendedores, que aporta
              herramientas prácticas y aplicables al día a día de las empresas
              de acuerdo con las necesidades particulares del negocio, para que
              logren alcanzar su máximo potencial a través de un plan
              estratégico empresarial acorde a cada mercado.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="ig-tx-zing-zag autodiag-pg bg-white our-methodology">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
            <div
              class="img-points order-1-991 wow bounceInLeft"
              data-wow-duration="2s"
            >
              <img
                src="/images/programa-emprende-pais/1-home-emprende-pais/home_bloque2_fondo.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
            <div
              class="txt-points position-relative order-2-991 wow bounceInRight"
              data-wow-duration="2s"
            >
              <div class="pra-p for-bgcol">
                <h2 class="ff-sans-b">Nuestra metodología</h2>
                <p>
                  El acompañamiento se basa en el desarrollo de una ruta
                  práctica y adaptada a la realidad de la empresa y del
                  emprendedor. Realizamos capacitaciones a profundidad en temas
                  como estrategia, finanzas, sostenibilidad y alta gerencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="ig-tx-zing-zag autodiag-pg desarrollamos-section">
      <div class="container">
        <div class="d-flex justify-content-center">
          <div class="align-self-center calls">
            <h2>Convocatorias 2021</h2>
            <p>
              Buscamos y seleccionamos empresas en Colombia, con alto potencial
              de crecimiento, para acompañarlas durante 8 meses con consultorías
              empresariales estratégicas y aspectos financieros, para aumentar
              la rentabilidad y búsqueda de nuevos mercados en su ruta de
              crecimiento, con un plan de apalancamiento y metas.
            </p>
            <div class="for-btn">
              <a
                :href="$emprendePaisData.emprendePais.convocatoriasLink"
                class="btn-tell-more"
                >Conozca más</a
              >
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
              :href="$emprendePaisData.emprendePais.desarrollamosTalentoLink"
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
        this.$emprendePaisData.emprendePais.meta.title +
        ' - ' +
        this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            this.$emprendePaisData.emprendePais.meta.metaTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$emprendePaisData.emprendePais.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$emprendePaisData.emprendePais.meta.ogTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$emprendePaisData.emprendePais.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$emprendePaisData.emprendePais.meta.ogImage,
        },
      ],
    }
  },
}
</script>