<template>
  <main>
    <div class="container position-relative innerpage">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item to="/filarmonica-joven-de-colombia"
          >Filarmónica joven de colombia</b-breadcrumb-item
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
          src="/images/conozcanos_header_desktop.jpg"
          alt=""
          class="object-fit-cover"
        />
      </div>
      <div class="pg-tit-inner position-absolute text-center">
        <h1 class="ff-sans-b">Filarmónica Joven de Colombia</h1>
      </div>
    </section>

    <section
      class="ig-tx-zing-zag bg-white position-relative what-we-do connoz-filamr-mpg"
    >
      <HomeDots></HomeDots>
      <div class="container">
        <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
          <div class="txt-points position-relative">
            <h3 class="ff-nunito">Nuestro Alcance</h3>
            <div class="pra-p">
              <p>
                En su trayectoria, #LaJoven ha realizado más de 150 conciertos
                en Colombia, Brasil, Centro América, Estados Unidos, Alemania y
                Austria.
              </p>
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/rectangle_g.jpg"
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
              src="/images/rectangle_f.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
          <div class="txt-points position-relative order-1-991">
            <div class="pra-p">
              <ul>
                <li class="position-relative after-po">
                  Sus giras nacionales han cubierto más de 20 ciudades del país.
                </li>
                <li class="position-relative after-po">
                  Han deleitado a más de 145.000 espectadores en sus
                  presentaciones.
                </li>
                <li class="position-relative after-po">
                  Sus músicos, se han preparado a través de 30 residencias
                  artísticas, con más de 110 maestros de talla internacional
                  para cada una de las familias de instrumentos.
                </li>
                <li class="position-relative after-po">
                  En los 10 años de trabajo en Colombia, se han vinculado XXXX
                  jóvenes talentos impulsando sus carreras profesionales
                  nacional e internacionalmente.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="six-statetic-box-e">
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
                <h4 class="ff-sans-b">123</h4>
                <p class="ff-nunito">Conciertos Nacionales</p>
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
                <h4 class="ff-sans-b">24</h4>
                <p class="ff-nunito">Conciertos Internacionales</p>
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
                <h4 class="ff-sans-b">19</h4>
                <p class="ff-nunito">Facultades De música</p>
              </div>
            </div>
          </div>
        </div>

        <div class="nd-three-bex-sm margin-0-auto com-stu d-flex flex-wrap-767">
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
                <h4 class="ff-sans-b">450</h4>
                <p class="ff-nunito">
                  Músicos De 68 municipios en 21 departamentos de Colombia
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
                <h4 class="ff-sans-b">3'000.000</h4>
                <p class="ff-nunito">
                  De personas en 25 países diferentes, han escuchado cómo suena
                  el talento joven de Colombia.
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
                <h4 class="ff-sans-b">10</h4>
                <p class="ff-nunito">
                  Instituciones Musicales Colombianas representadas
                </p>
              </div>
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

    <section class="wid-support-of bg-white">
      <div class="container">
        <div class="two-row-l">
          <h4 class="ff-sans-b">En alianza con:</h4>
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
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img src="/images/gell_logo.svg" alt="" />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
          </div>
        </div>
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
  methods: {
    goBack() {
      window.history.back()
    },
  },
  head() {
    return {
      title: this.$constants.filarmonicaJovenDeColombiaConozcanos.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.filarmonicaJovenDeColombiaConozcanos.meta
            .metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.filarmonicaJovenDeColombiaConozcanos.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.filarmonicaJovenDeColombiaConozcanos.meta
            .ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.filarmonicaJovenDeColombiaConozcanos.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants.filarmonicaJovenDeColombiaConozcanos.meta.ogImage,
        },
      ],
    }
  },
}
</script>