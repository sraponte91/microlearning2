<template>
  <main>       
    <section class="school-directors bg-white">
      <div class="container">
        <div class="text-center pg-title">
          <h1 class="ff-sans-b">Escuela de directores</h1>
        </div>
        <div class="into-two-part-school">
          <div class="d-flex flex-wrap-991">
            <div
              class="txt-info position-relative d-flex align-items-center order-2-991"
            >
              <div class="inner-tx-bx ff-nunito">
                <p>
                  Escuela de Directores Aflora, es un proyecto de la Fundación
                  Bolívar Davivienda, que reúne a los líderes de organizaciones
                  sociales que están comprometidos en trabajar con pasión por su
                  causa. El proceso formativo se realiza con EDIME,la Unidad de
                  Gerencia Media del INALDE, Escuela de Negocios de la
                  Universidad de la Sábana, cuyo objetivo es formar de manera
                  integral a quienes ocupan cargos directivos dentro de las
                  organizaciones
                </p>
                <p>
                  Es este espacio damos herramientas para que el talento y la
                  disciplina ayuden a lograr el éxito de las causas que lideran,
                  tomando como fundamento el Método del Caso, donde exploramos 8
                  modelos nuevos a partir de experiencias organizacionales de
                  participantes en el programa.
                </p>
              </div>
            </div>
            <div class="meeting-img order-1-991">
              <img
                src="/images/school_directores.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="nuestros-expertos-id"></div>
    </section>    
    <section class="our-experts">
      <div class="container">
        <div class="text-center pg-title">
          <h2 class="ff-sans-b">Nuestros expertos</h2>
        </div>
        <div class="margin-0-auto expert-img position-relative">
          <img
            src="/images/expertors_img.jpg"
            alt=""
            class="object-fit-cover"
          />
          <div class="position-absolute set-to-bottom text-center">
            <a
              :href="$constants.escuelaDeDirectores.nuestrosBtnLink"
              class="btn-lear-more ff-nunito"
              >Conozca más</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="case-method bg-white">
      <div class="container">
        <div class="text-center pg-title">
          <h2 class="ff-sans-b">Método del caso</h2>
        </div>
        <div>
          <div class="nav pagination d-flex justify-content-center">
            <b-pagination
              v-model="currentPage"
              pills
              first-number
              last-number
              :per-page="1"
              :total-rows="$constants.escuelaDeDirectores.slides.length"
              :limit="$constants.escuelaDeDirectores.slides.length"
              size="lg"
              @change="changeSlide"
            >
            </b-pagination>
          </div>
          <client-only>
            <carousel
              ref="carousel"
              class="myslider"
              :per-page="1"
              :pagination-enabled="false"
            >
              <slide
                class="item"
                v-for="(item, index) in $constants.escuelaDeDirectores.slides"
                :key="index"
              >
                <div class="in-box-slide">
                  <div class="">
                    <div class="im-prt position-relative">
                      <img :src="item.imgURL" alt="" class="object-fit-cover" />
                      <div class="position-absolute set-to-bottom">
                        <div class="slide-nu text-center ff-nunito">
                          {{ item.text1 }}
                        </div>
                        <div class="slide-title ff-sans-b">
                          {{ item.text2 }}
                        </div>
                      </div>
                    </div>
                    <div class="tx-prt ff-nunito">
                      <p>
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
    </section>
    <div class="b-s-for-scroll" id="pensum-id"></div>
    <section class="pensum-sec">
      <div class="container">
        <div class="points-image margin-0-auto">
          <div class="d-flex flex-wrap-767">
            <div class="points-part">
              <h4 class="ff-sans-b">Pénsum</h4>
              <p class="ff-nunito">
                El Seminario de Escuela de Directores - Fundación Bolívar
                Davivienda - EDIME, comprende las siguientes áreas:
              </p>
              <ul class="ff-nunito">
                <li class="position-relative after-po">
                  Análisis de situaciones de negocios
                </li>
                <li class="position-relative after-po">
                  Dirección de personas en las organizaciones
                </li>
                <li class="position-relative after-po">
                  Consecución de recursos
                </li>
                <li class="position-relative after-po">
                  Cultura organizacional
                </li>
                <li class="position-relative after-po">Gestión de procesos</li>
                <li class="position-relative after-po">Estrategia</li>
              </ul>
            </div>
            <div class="img-part">
              <img
                src="/images/pensum_img.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="b-s-for-scroll" id="seminario-id"></div>
    <section class="structure-the-seminar bg-white">
      <div class="container">
        <div class="text-center">
          <div class="inner-struc-div margin-0-auto">
            <div class="sec-tit">
              <p class="ff-nunito">Estructura del</p>
              <h3 class="ff-sans-b">Seminario</h3>
            </div>
            <ul>
              <li>
                <h4 class="ff-sans-b">Fechas</h4>
                <div class="ff-nunito">
                  <p>
                    {{ $constants.escuelaDeDirectores.fechas }}
                  </p>
                </div>
              </li>
              <li>
                <h4 class="ff-sans-b">Actividades</h4>
                <div class="ff-nunito">
                  <p>
                    {{ $constants.escuelaDeDirectores.actividades1 }}
                  </p>
                  <p>
                    {{ $constants.escuelaDeDirectores.actividades2 }}
                  </p>
                </div>
              </li>
              <li>
                <h4 class="ff-sans-b">Tiempo dedicado</h4>
                <div class="ff-nunito">
                  <p>
                    {{ $constants.escuelaDeDirectores.tiempoDedicado }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
     <div class="b-s-for-scroll2" id="perfil-participantes-id"></div>
    </section>
    <section class="participants-profile">
      <div class="container">
        <div class="text-center pg-title">
          <p class="ff-nunito">Perfil de los</p>
          <h2 class="ff-sans-b">participantes</h2>
        </div>
        <div class="d-none-n d-block-767 partic-three-bx for767">
          <client-only>
            <carousel :per-page="1">
              <slide>
                <div class="par-one-bx">
                  <h4 class="ff-sans-b">1. Experiencia Mínima</h4>
                  <div class="im-bx">
                    <img
                      src="/images/experiencia_img.jpg"
                      alt=""
                      class="object-fit-cover"
                    />
                  </div>
                  <div class="ff-nunito">
                    <p>
                      Experiencia de mínimo 3 años en nivel directivo o
                      gerencial en posiciones de responsabilidad,
                      preferiblemente dentro de una fundación como director de
                      área, director de la organización social, miembro del
                      consejo, junta directiva o representante legal.
                    </p>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="par-one-bx">
                  <h4 class="ff-sans-b">2. Disponibilidad de tiempo</h4>
                  <div class="im-bx">
                    <img
                      src="/images/disponibilidad_tie_img.jpg"
                      alt=""
                      class="object-fit-cover"
                    />
                  </div>
                  <div class="ff-nunito">
                    <p>
                      Disponibilidad para asistir virtualmente mediante la
                      plataforma de Zoom los 7 días del evento de 8:00 a. m. a
                      12:00p. m.
                    </p>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="par-one-bx">
                  <h4 class="ff-sans-b">3. Formulario Completo</h4>
                  <div class="im-bx">
                    <img
                      src="/images/formulario_com_img.jpg"
                      alt=""
                      class="object-fit-cover"
                    />
                  </div>
                  <div class="ff-nunito">
                    <p>
                      Diligenciar el formato de inscripción en donde también
                      deberán responder preguntas sobre su hoja de vida para
                      iniciar con el proceso de selección. Deben completar todos
                      los campos; los formularios incompletos no serán tenidos
                      en cuenta.
                    </p>
                  </div>
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>
        <div class="partic-three-bx d-none-767 rahul">
          <div class="d-flex">
            <div class="par-one-bx">
              <h4 class="ff-sans-b">1. Experiencia Mínima</h4>
              <div class="im-bx">
                <img
                  src="/images/experiencia_img.jpg"
                  alt=""
                  class="object-fit-cover"
                />
              </div>
              <div class="ff-nunito">
                <p>
                  Experiencia de mínimo 3 años en nivel directivo o gerencial en
                  posiciones de responsabilidad, preferiblemente dentro de una
                  fundación como director de área, director de la organización
                  social, miembro del consejo, junta directiva o representante
                  legal.
                </p>
              </div>
            </div>
            <div class="par-one-bx">
              <h4 class="ff-sans-b">2. Disponibilidad de tiempo</h4>
              <div class="im-bx">
                <img
                  src="/images/disponibilidad_tie_img.jpg"
                  alt=""
                  class="object-fit-cover"
                />
              </div>
              <div class="ff-nunito">
                <p>
                  Disponibilidad para asistir virtualmente mediante la
                  plataforma de Zoom los 7 días del evento de 8:00 a. m. a
                  12:00p. m.
                </p>
              </div>
            </div>
            <div class="par-one-bx">
              <h4 class="ff-sans-b">3. Formulario Completo</h4>
              <div class="im-bx">
                <img
                  src="/images/formulario_com_img.jpg"
                  alt=""
                  class="object-fit-cover"
                />
              </div>
              <div class="ff-nunito">
                <p>
                  Diligenciar el formato de inscripción en donde también deberán
                  responder preguntas sobre su hoja de vida para iniciar con el
                  proceso de selección. Deben completar todos los campos; los
                  formularios incompletos no serán tenidos en cuenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="b-s-for-scroll3" id="costos-id"></div>
    </section>
    <section class="costos-section bg-white">
      <div class="container">
        <div class="text-center pg-title">
          <p class="ff-nunito">Costos</p>
          <h2 class="ff-sans-b">2021</h2>
        </div>
        <div class="two-boxes margin-0-auto">
          <div
            class="d-flex justify-content-between justify-content-center-767 flex-wrap-767"
          >
            <div class="indivi-bx">
              <h4 class="ff-sans-b text-center">Por persona</h4>
              <div class="img-bx">
                <img
                  src="/images/por_pers_img.jpg"
                  alt=""
                  class="object-fit-cover"
                />
              </div>
              <div class="tx-bx ff-nunito">
                <p>
                  El costo por persona será de <b>$1.800.000</b> y está dirigido
                  a colaboradores que hagan parte de las organizaciones de
                  Aflora. <b>Incluye</b> participación los 7 días, materiales, y
                  certificado.
                </p>
                <p>
                  El pago se debe realizar a Edime <b>de contado</b> y se
                  entregará sólo una factura.
                </p>
              </div>
            </div>
            <div class="indivi-bx">
              <h4 class="ff-sans-b text-center">Método de pago</h4>
              <div class="img-bx">
                <img
                  src="/images/metodo_img.jpg"
                  alt=""
                  class="object-fit-cover"
                />
              </div>
              <div class="tx-bx ff-nunito">
                <p>
                  El pago se debe realizar directamente a una cuenta bancaria de
                  EDIME. La Fundación Bolívar Davivienda informará el número de
                  cuenta bancaria para que el participante pueda hacer la
                  consignación correspondiente, y posteriormente enviar el
                  comprobante de pago a
                  <b
                    ><a href="mailto:escueladirectores@fundacionbd.org"
                      >escueladirectores@fundacionbd.org</a
                    ></b
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    changeSlide(page) {
      this.$refs.carousel.goToPage(page - 1)
    },
  },
}
</script>