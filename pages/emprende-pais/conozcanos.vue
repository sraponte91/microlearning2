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
        <img
          src="/images/programa-emprende-pais/2-conozcanos/conozcanos_header_desktop.jpg"
          alt=""
          class="object-fit-cover"
        />
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
              src="/images/programa-emprende-pais/2-conozcanos/conozcanos_bloque1_impacto.jpg"
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
              src="/images/programa-emprende-pais/2-conozcanos/conozcanos_bloque2.jpg"
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
                <img
                  src="/images/programa-emprende-pais/2-conozcanos/iconos-cifras/empresas.png"
                  alt=""
                  class="img-fluid"
                />
              </i>
              <div class="tx-i">
                <h4 class="ff-sans-b" id="empresas-counter"></h4>
                <p class="ff-nunito">
                  Empresas han participado de manera exitosa en el programa
                </p>
              </div>
            </div>
          </div>
          <div class="sigl-bx">
            <div class="d-flex">
              <i class="icon">
                <img
                  src="/images/programa-emprende-pais/2-conozcanos/iconos-cifras/ciudades.png"
                  alt=""
                  class="img-fluid"
                />
              </i>
              <div class="tx-i">
                <h4 class="ff-sans-b" id="ciudades-principales-counter"></h4>
                <p class="ff-nunito">
                  ciudades principales: <br />
                  BOGOTÁ, BUCARAMANGA, SANTA MARTA Y CALI
                </p>
              </div>
            </div>
          </div>
          <div class="sigl-bx">
            <div class="d-flex">
              <i class="icon">
                <img
                  src="/images/programa-emprende-pais/2-conozcanos/iconos-cifras/mentorias.png"
                  alt=""
                  class="img-fluid"
                />
              </i>
              <div class="tx-i">
                <h4 class="ff-sans-b">
                  <span id="mentorias-counter"></span> h
                </h4>
                <p class="ff-nunito">
                  de mentorías, con la <br />
                  Red de Mentores del Programa.
                </p>
              </div>
            </div>
          </div>
          <div class="sigl-bx">
            <div class="d-flex">
              <i class="icon">
                <img
                  src="/images/programa-emprende-pais/2-conozcanos/iconos-cifras/consultores.png"
                  alt=""
                  class="img-fluid"
                />
              </i>
              <div class="tx-i">
                <h4 class="ff-sans-b">
                  <span id="consultores-expertos-counter"></span> h
                </h4>
                <p class="ff-nunito">
                  de formación y acompañamiento, por <br />
                  parte de consultores expertos
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
                <a
                  :href="
                    $emprendePaisData.emprendePaisPresenciaEnElPais
                      .presenciaEnElPais
                  "
                  class="ff-sans-b"
                  >Conozca más >
                </a>
              </div>
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/programa-emprende-pais/2-conozcanos/conozcanos_bloque3_presenciapais.jpg"
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
                  v-for="(item, i) of $emprendePaisData.emprendePaisConozcanos
                    .testimonios"
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
                src="/images/programa-emprende-pais/2-conozcanos/conozcanos_bloque4_alianza.jpg"
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
                <img
                  src="/images/programa-emprende-pais/2-conozcanos/proyectos-en-alianza-logos/alianza_oxelerator.png"
                  alt=""
                />
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

            <div class="d-flex align-itmes-center flex-wrap-767">
              <div class="img-prt d-flex align-items-center">
                <img
                  src="/images/programa-emprende-pais/2-conozcanos/proyectos-en-alianza-logos/alianza_eit.png"
                  alt=""
                />
              </div>
              <div class="txt-part">
                <p>
                  Es una aceleradora de empresas que ayuda a startups de
                  Cleantech a acelerar su comercialización en el mercado y crear
                  negocios invertibles.
                </p>
              </div>
            </div>
            <div class="d-flex align-itmes-center flex-wrap-767">
              <div class="img-prt d-flex align-items-center">
                <img
                  src="/images/programa-emprende-pais/2-conozcanos/proyectos-en-alianza-logos/alianza_rockstart_impact.png"
                  alt=""
                />
              </div>
              <div class="txt-part">
                <p>
                  Es una aceleradora de start-ups que apoya a emprendedores que
                  usen la tecnología para generar impacto social y/o ambiental
                </p>
              </div>
            </div>

            <div class="d-flex align-itmes-center flex-wrap-767">
              <div class="img-prt d-flex align-items-center">
                <img
                  src="/images/programa-emprende-pais/2-conozcanos/proyectos-en-alianza-logos/alianza_social_skin.png"
                  alt=""
                />
              </div>
              <div class="txt-part">
                <p>
                  Social Skin es un movimiento de innovación que apoya a jóvenes
                  universitarios para que sus proyectos sociales crezcan
                  sosteniblemente. Emprende País busca ofrecerles una ruta de
                  formación a estos proyectos, con el fin de proporcionarles un
                  panorama de buenas prácticas y los conocimientos necesarios
                  para rentabilizar una empresa y que sea sostenible en el
                  tiempo.
                </p>
              </div>
            </div>

            <div class="d-flex align-itmes-center flex-wrap-767">
              <div class="img-prt d-flex align-items-center">
                <img
                  src="/images/programa-emprende-pais/2-conozcanos/proyectos-en-alianza-logos/alianza_valleimpacta.png"
                  alt=""
                />
              </div>
              <div class="txt-part">
                <p>
                  Valle Impacta es un programa de escalamiento empresarial
                  liderado por la Cámara de Comercio de Cali y la Fundación
                  Bolívar Davivienda, que transforma empresas al más alto nivel
                  en sus diferentes sectores económicos, a través del
                  acompañamiento para el crecimiento extraordinario, con el fin
                  de impulsar el desarrollo económico y social de la región.
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
  mounted() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.counter('empresas-counter', 0, '+340', 1)
        this.counter('ciudades-principales-counter', 0, 4, 0.5)
        this.counter('mentorias-counter', 0, 10, 0.5)
        this.counter('consultores-expertos-counter', 0, 158, 1)
        observer.unobserve(document.querySelector('#empresas-counter'))
      }
    })
    observer.observe(document.querySelector('#empresas-counter'))
  },
  head() {
    return {
      title:
        this.$emprendePaisData.emprendePaisConozcanos.meta.title +
        ' - ' +
        this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            this.$emprendePaisData.emprendePaisConozcanos.meta.metaTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$emprendePaisData.emprendePaisConozcanos.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$emprendePaisData.emprendePaisConozcanos.meta.ogTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$emprendePaisData.emprendePaisConozcanos.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$emprendePaisData.emprendePaisConozcanos.meta.ogImage,
        },
      ],
    }
  },
}
</script>
