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
          src="/images/programa-filarmonica-joven/2-conozcanos/conozcanos_header_desktop.jpg"
          alt=""
          class="object-fit-cover"
        />
      </div>
      <div class="pg-tit-inner position-absolute text-center">
        <h1 class="ff-sans-b wow bounceInDown" data-wow-duration="2s">
          Filarmónica Joven de Colombia
        </h1>
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
              src="/images/programa-filarmonica-joven/2-conozcanos/conozcanos_bloque1_alcance.jpg"
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
              src="/images/programa-filarmonica-joven/2-conozcanos/conozcanos_bloque2.jpg"
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
                  En los 10 años de trabajo en Colombia, se han vinculado más de 600 
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
                <h4 class="ff-sans-b" id="conciertos-nacionales-counter"></h4>
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
                <h4
                  class="ff-sans-b"
                  id="conciertos-internacionales-counter"
                ></h4>
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
                <h4 class="ff-sans-b">
                  <span id="facultades-de-musica-counter"></span> +
                </h4>
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
                <h4 class="ff-sans-b">
                  <span id="musicos-de-counter"></span> +
                </h4>
                <p class="ff-nunito">
                  Músicos De 40 municipios en 12 departamentos de Colombia.
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
                <h4 class="ff-sans-b">
                  <span id="de-personas-counter"></span> +
                </h4>
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
                <h4 class="ff-sans-b">
                  <span id="instituciones-musicales-counter"></span> +
                </h4>
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
                  v-for="(item, i) of $filarmonicaJovenDeColombiaData
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
          <h5></h5>
          <h4 class="ff-sans-b">
            Filarmónica Joven de Colombia es un miembro de
          </h4>
          <div class="d-flex flex-wrap for-marg-1">
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila1-FJC-miembro-de/aliados-fjc_0001s_0003s_0000_OAG-horizontal4.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila1-FJC-miembro-de/aliados-fjc_0001s_0003s_0001_mincultura.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila1-FJC-miembro-de/aliados-fjc_0001s_0003s_0002_FMMN.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila1-FJC-miembro-de/aliados-fjc_0001s_0003s_0003_EU_flag_creative_europe_co_funded.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila1-FJC-miembro-de/aliados-fjc_0001s_0003s_0004_EFNYO_logo_blue.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila1-FJC-miembro-de/aliados-fjc_0001s_0003s_0005_classical_next_logo.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila1-FJC-miembro-de/aliados-fjc_0001s_0003s_0006_CCMC.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila1-FJC-miembro-de/aliados-fjc_0001s_0003s_0007_aeos.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
          </div>
        </div>
        <div class="two-row-l">
          <h4 class="ff-sans-b">Aliados artisticos:</h4>
          <div class="d-flex flex-wrap for-marg-1">
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila2-aliados-artisticos/aliados-fjc_0001s_0002s_0000_OA-Logo-stars.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila2-aliados-artisticos/aliados-fjc_0001s_0002s_0001_mco.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
          </div>
        </div>
        <div class="two-row-l">
          <h4 class="ff-sans-b">Aliados Academicos:</h4>
          <div class="d-flex flex-wrap for-marg-1">
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila3-aliados-academicos/aliados-fjc_0001s_0001s_0000_FCC.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila3-aliados-academicos/aliados-fjc_0001s_0001s_0001_TON.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila3-aliados-academicos/aliados-fjc_0001s_0001s_0002_javeriana.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila3-aliados-academicos/aliados-fjc_0001s_0001s_0003_reinasofia.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila3-aliados-academicos/aliados-fjc_0001s_0001s_0004_albeniz.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
          </div>
        </div>
        <div class="two-row-l">
          <h4 class="ff-sans-b">Aliados Proyeccion Social:</h4>
          <div class="d-flex flex-wrap for-marg-1">
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0000_cerrejon.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0001_Seminario-de-Clarinete.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0002_PASION-Y-CORAZON.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0003_notas_de_paz_logo.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0004_LOGOS_SILO_FIL-01.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0005_Logos-Batuta-Horizontal-(1).png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0006_unab.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>

            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0007_comfamiliar.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0008_FILARMONICAMETROPOLITANA.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0009_Fessme.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0010_emLuchoBermudez.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0011_EMBERACHAMI.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0012_cafeteritos.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0013_ASOFLAUTA.png"
                alt=""
              />
              <a
                href="javascript:void(0)"
                class="position-absolute full-box-link"
              ></a>
            </div>
            <div class="lgoes-bx d-flex align-items-center position-relative">
              <img
                src="/images/programa-filarmonica-joven/2-conozcanos/aliados/fila4-aliados-proyeccion-social/aliados-fjc_0001s_0000s_0014_fondecor.png"
                alt=""
              />
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
import HomeDots from '@/components/home/dots'

export default {
  components: {
    HomeDots,
  },
  mounted() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.counter('conciertos-nacionales-counter', 0, 123, 0.1)
        this.counter('conciertos-internacionales-counter', 0, 177, 0.1)
        this.counter('facultades-de-musica-counter', 0, 30, 0.1)
        this.counter('musicos-de-counter', 0, 600, 0.2)
        this.counter('de-personas-counter', 0, 3000000, 5000)
        this.counter('instituciones-musicales-counter', 0, 20, 0.1)
        observer.unobserve(
          document.querySelector('#conciertos-nacionales-counter')
        )
      }
    })
    observer.observe(document.querySelector('#conciertos-nacionales-counter'))
  },
  head() {
    return {
      title:
        this.$filarmonicaJovenDeColombiaData
          .filarmonicaJovenDeColombiaConozcanos.meta.title +
        ' - ' +
        this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            this.$filarmonicaJovenDeColombiaData
              .filarmonicaJovenDeColombiaConozcanos.meta.metaTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$filarmonicaJovenDeColombiaData
            .filarmonicaJovenDeColombiaConozcanos.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$filarmonicaJovenDeColombiaData
              .filarmonicaJovenDeColombiaConozcanos.meta.ogTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$filarmonicaJovenDeColombiaData
            .filarmonicaJovenDeColombiaConozcanos.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$filarmonicaJovenDeColombiaData
              .filarmonicaJovenDeColombiaConozcanos.meta.ogImage,
        },
      ],
    }
  },
}
</script>