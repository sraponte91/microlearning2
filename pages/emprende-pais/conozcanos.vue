<template>
  <main>
    <div class="container position-relative innerpage">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item to="/emprende-pais"
          >Emprende país
        </b-breadcrumb-item>
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
        <img src="/images/emprende_pa_bg.jpg" alt="" class="object-fit-cover" />
      </div>
      <div class="pg-tit-inner position-absolute text-center">
        <h1 class="ff-sans-b">Emprende país</h1>
      </div>
    </section>

    <section
      class="ig-tx-zing-zag bg-white position-relative what-we-do connoz-filamr-mpg conozca-empreder-parde"
    >
      <HomeDots></HomeDots>
      <div class="container">
        <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
          <div class="txt-points position-relative">
            <h3 class="ff-nunito">Nuestro Impacto</h3>
            <div class="pra-p">
              <p>
                Emprende País desde su nacimiento en 2011, cree que Colombia es
                un país en el que hay espacio para buenas ideas. El programa
                impulsa el desarrollo económico del país a través de la
                generación de competencias en empresas con altas tasas de
                crecimiento. Esto lo logramos apoyados en la experiencia de
                ejecutivos del Grupo Bolívar y expertos en diferentes regiones.
              </p>
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/conozcanos_bloque_1_impacto.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>

        <div
          class="d-flex multiple-reapt align-items-end flex-wrap-991 three-bx"
        >
          <div class="img-points order-2-991">
            <img
              src="/images/conozcanos_bloque_2_fb_caa2f4e.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
          <div class="txt-points position-relative order-1-991">
            <div class="pra-p">
              <p>
                El programa selecciona empresas, para que alcancen su máximo
                potencial, aseguren su rentabilidad financiera y sean
                sostenibles a corto, mediano y largo plazo. Somos actores
                activos del ecosistema de emprendimiento en Colombia apoyando,
                no sólo empresarios, sino iniciativas individuales como Fondo
                Inversor, Climate LaunchPad y Climate Kic, Valle Impacta,
                Rockstart Impact, Oxelerator y Social Skin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="six-statetic-box-e conozca-empreder-par full-wid">
      <div class="container">
        <div class="st-three-bex-sm margin-0-auto com-stu d-flex flex-wrap-767">
          <div class="sigl-bx">
            <div class="d-flex">
              <i class="icon">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 -10.002999400119977 50 50"
                  width="62"
                  height="62"
                >
                  <path
                    d="M39.1,0H11L0,10v20h50V10L39.1,0z M11.9,2h26.3l9.1,8H32c0,3.7-3.3,6.9-7,6.9s-7-3.2-7-6.9H2.7L11.9,2z M48,28H2V12l14.2,0  c1,3.8,4.6,7,8.8,7c4.2,0,7.8-3.2,8.8-7L48,12V28z"
                    style="fill: rgb(18, 18, 18)"
                    vector-effect="non-scaling-stroke"
                  />
                  <g />
                </svg>
              </i>
              <div class="tx-i">
                <h4 class="ff-sans-b">+340</h4>
                <p class="ff-nunito">Empresas</p>
              </div>
            </div>
          </div>
          <div class="sigl-bx">
            <div class="d-flex">
              <i class="icon">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 -10.002999400119977 50 50"
                  width="62"
                  height="62"
                >
                  <path
                    d="M39.1,0H11L0,10v20h50V10L39.1,0z M11.9,2h26.3l9.1,8H32c0,3.7-3.3,6.9-7,6.9s-7-3.2-7-6.9H2.7L11.9,2z M48,28H2V12l14.2,0  c1,3.8,4.6,7,8.8,7c4.2,0,7.8-3.2,8.8-7L48,12V28z"
                    style="fill: rgb(18, 18, 18)"
                    vector-effect="non-scaling-stroke"
                  />
                  <g />
                </svg>
              </i>
              <div class="tx-i">
                <h4 class="ff-sans-b">4</h4>
                <p class="ff-nunito">
                  Ciudades <br />
                  principales
                </p>
              </div>
            </div>
          </div>
          <div class="sigl-bx">
            <div class="d-flex">
              <i class="icon">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 -10.002999400119977 50 50"
                  width="62"
                  height="62"
                >
                  <path
                    d="M39.1,0H11L0,10v20h50V10L39.1,0z M11.9,2h26.3l9.1,8H32c0,3.7-3.3,6.9-7,6.9s-7-3.2-7-6.9H2.7L11.9,2z M48,28H2V12l14.2,0  c1,3.8,4.6,7,8.8,7c4.2,0,7.8-3.2,8.8-7L48,12V28z"
                    style="fill: rgb(18, 18, 18)"
                    vector-effect="non-scaling-stroke"
                  />
                  <g />
                </svg>
              </i>
              <div class="tx-i">
                <h4 class="ff-sans-b">10 h</h4>
                <p class="ff-nunito">Mentorias</p>
              </div>
            </div>
          </div>
          <div class="sigl-bx">
            <div class="d-flex">
              <i class="icon">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 -10.002999400119977 50 50"
                  width="62"
                  height="62"
                >
                  <path
                    d="M39.1,0H11L0,10v20h50V10L39.1,0z M11.9,2h26.3l9.1,8H32c0,3.7-3.3,6.9-7,6.9s-7-3.2-7-6.9H2.7L11.9,2z M48,28H2V12l14.2,0  c1,3.8,4.6,7,8.8,7c4.2,0,7.8-3.2,8.8-7L48,12V28z"
                    style="fill: rgb(18, 18, 18)"
                    vector-effect="non-scaling-stroke"
                  />
                  <g />
                </svg>
              </i>
              <div class="tx-i">
                <h4 class="ff-sans-b">158 h</h4>
                <p class="ff-nunito">
                  Consultores <br />
                  expertos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="ig-tx-zing-zag bg-white position-relative what-we-do connoz-filamr-mpg conozca-empreder-parde pt-2"
    >
      <div class="container">
        <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
          <div class="txt-points position-relative">
            <h3 class="ff-nunito">
              Presencia en <br />
              el país
            </h3>
            <div class="pra-p">
              <p>
                Hacemos parte del ecosistema de emprendimiento en Colombia, por
                lo que Emprende País tiene el interés de fortalecer las
                capacidades de los actores en cada región para que puedan gestar
                sus propios ecosistemas de emprendimiento, aportando a la
                generación de empleo.
              </p>
              <div class="linkto-re">
                <a href="javascript:void(0)" class="ff-sans-b"
                  >Quiero conocer más >
                </a>
              </div>
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/conozcanos_bloque_3_presenciapai.jpg"
              alt=""
              class="object-fit-cover"
            />
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
                  v-for="(item, i) of $constants
                    .filarmonicaJovenDeColombiaConozcanos.testimonios"
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

    <section class="ig-tx-zing-zag desarrolla bg-white des-filarmonic-main">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
            <h2 class="d-block-991 d-none-n dif-title">
              <span class="d-block ff-nunito">Nosotros</span>
              <span class="d-block ff-sans-b">Proyectos de alianza</span>
            </h2>
            <div class="txt-points position-relative order-2-991">
              <h2 class="d-none-991 dif-title">
                <span class="d-block ff-nunito">Nosotros</span>
                <span class="d-block ff-sans-b">Proyectos de alianza</span>
              </h2>
              <div class="pra-p for-bgcol">
                <h3 class="ff-sans-b ses">Alianzas estratégicas</h3>
                <p>
                  La Fundación Bolívar Davivienda, a través del programa
                  Emprende País, busca fortalecer el ecosistema de
                  emprendimiento, identificando a los actores claves en el
                  sector que promuevan estrategias para fomentar el crecimiento
                  y la adopción de mejores prácticas en los negocios. Para eso,
                  se plantean proyectos innovadores y estrategias para Pymes,
                  con el fin de brindarle diferentes oportunidades a todos los
                  tipos de emprendimiento.
                </p>
              </div>
            </div>
            <div class="img-points order-1-991">
              <img
                src="/images/rectangle_h.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="some-tabs-here bg-white">
      <div class="container">
        <div class="d-flex flex-wrap multi-btn justify-content-center">
          <a href="javascript:void(0)" class="btn-tbses ff-lato text-center"
            >Oxelerator</a
          >
          <a href="javascript:void(0)" class="btn-tbses ff-lato text-center"
            >Angel Ventures</a
          >
          <a href="javascript:void(0)" class="btn-tbses ff-lato text-center"
            >Social Skin</a
          >
          <a href="javascript:void(0)" class="btn-tbses ff-lato text-center"
            >Valle Impacta</a
          >
          <a href="javascript:void(0)" class="btn-tbses ff-lato text-center"
            >Climate Kic</a
          >
          <a href="javascript:void(0)" class="btn-tbses ff-lato text-center"
            >Rockstart Impact</a
          >
        </div>
        <div class="box-info-full">
          <div class="inner-bx margin-0-auto">
            <div class="d-flex align-itmes-center flex-wrap-767">
              <div class="img-prt d-flex align-items-center">
                <img src="/images/oxelerator_lg.png" alt="" />
              </div>
              <div class="txt-part">
                <p>
                  Promueve la inversión en proyectos de investigación de base
                  científica y tecnológica, con el interés de apoyar los
                  emprendimientos de esa categoría. El programa trabaja en ambos
                  frentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="wid-support-of bg-white">
      <div class="container">
        <div class="two-row-l">
          <h4 class="ff-sans-b">Con el apoyo de:</h4>
          <div class="d-flex flex-wrap for-marg-1">
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img src="/images/gell_logo.svg" alt="" />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img src="/images/gell_logo.svg" alt="" />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
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
      title: this.$constants.emprendePaisConozcanos.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.emprendePaisConozcanos.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.emprendePaisConozcanos.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.emprendePaisConozcanos.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.emprendePaisConozcanos.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants.emprendePaisConozcanos.meta.ogImage,
        },
      ],
    }
  },
}
</script>