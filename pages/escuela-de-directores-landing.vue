<template>
  <main>
    <section class="director-section-1">
      <div class="container margin-0-auto">
        <div class="row">
          <div class="col-md-12 text-center leader-title">
            <h1 class="ff-sans-b">Escuela de directores</h1>
          </div>
          <div class="col-md-12">
            <div class="sec1-boxes">
              <b-img src="images/director-about.jpg" fluid alt=""></b-img>
              <div class="sec1-description">
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
            <b-btn variant="primary">Inscríbase aquí</b-btn>
          </div>
        </div>
      </div>
    </section>
    <section class="director-section-2 bg-grey">
      <div class="container margin-0-auto">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h2 class="ff-sans-b">Nuestros expertos</h2>
            <b-img src="images/director-expert.jpg" fluid alt=""></b-img>
            <b-btn variant="primary">Conozca más</b-btn>
          </div>
        </div>
      </div>
    </section>
    <section class="director-section-3">
      <div class="container margin-0-auto">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h2 class="ff-sans-b">Método del caso</h2>
            <!-- dsadasdsa -->
          </div>
          <div class="col-md-12">
            <client-only>
              <carousel
                :perPageCustom="[
                  [575, 1],
                  [1024, 1],
                  [1200, 1],
                ]"
                :navigationEnabled="false"
                :paginationEnabled="true"
              >
                <slide
                  v-for="(metodoDelCaso, i) in $constants
                    .escuelaDeDirectoresLanding.metodoDelCasos"
                  :key="i"
                >
                  <div class="position-relative box bg-white">
                    <div class="main-slider-at-top actualidad-pg">
                      <div class="img-prt position-relative">
                        <b-img :src="metodoDelCaso.image" fluid alt=""></b-img>
                        <div class="container position-absolute set-to-bottom">
                          <div class="banner-txt text-white">
                            <div class="orange-bg">
                              <h3
                                class="ff-sans-b"
                                v-text="metodoDelCaso.title"
                              />
                            </div>
                            <div class="black-bg">
                              <p
                                class="ff-nunito"
                                v-text="metodoDelCaso.description"
                              />
                            </div>
                          </div>
                        </div>
                        <!-- <a
                      href="/actualidad/title-of-actualidad1"
                      class="position-absolute full-box-link"
                    ></a> -->
                      </div>
                    </div>
                    <!-- <b-img :src="item.image" fluid alt=""></b-img> -->
                  </div>
                </slide>
              </carousel>
            </client-only>
            <div class="sec3-info">
              <p>
                Es un innovador proceso de aprendizaje y perfeccionamiento de
                capacidades directivas que se trabaja en tres niveles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="director-section-4 bg-grey">
      <div class="container margin-0-auto">
        <div class="row">
          <div class="col-md-6">
            <h2 class="ff-sans-b">Pénsum</h2>
            <p>
              El Seminario de Escuela de Directores - Fundación Bolívar
              Davivienda - EDIME, comprende las siguientes áreas:
            </p>
            <ul>
              <li>Análisis de situaciones de negocios</li>
              <li>Dirección de personas en las organizaciones</li>
              <li>Consecución de recursos</li>
              <li>Cultura organizacional</li>
              <li>Gestión de procesos</li>
              <li>Estrategia</li>
            </ul>
          </div>
          <div class="col-md-6">
            <b-img src="images/director-pensum.jpg" fluid alt=""></b-img>
          </div>
        </div>
      </div>
    </section>
    <section class="director-section-5">
      <div class="container margin-0-auto">
        <div class="row">
          <div class="col-md-8 offset-md-2 text-cente">
            <p class="ff-nunito caption">Estructura del</p>
            <h2 class="ff-sans-b">Seminario</h2>

            <div class="row">
              <div class="col-md-12">
                <h3 class="ff-sans-b">Fechas</h3>
                <p>
                  La Escuela de directores la haremos el 18,19, 20,23,24,25 y 26
                  de Agosto en un horario de 8:00 am a 12:00.
                </p>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <h3 class="ff-sans-b">Actividades</h3>
                <p>
                  El primer día se llevarán a cabo la inauguración, la
                  introducción y la presentación a cargo de los directivos de la
                  Fundación Bolívar Davivienda, y 1 sesión de trabajo.
                </p>
                <p>
                  Los seis días siguientes habrá entre 2 y 3 sesiones, para un
                  total de 14. El último día celebraremos el cierre del
                  seminario y se entregarán los certificados de asistencia.
                </p>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <h3 class="ff-sans-b">Tiempo dedicado</h3>
                <p>
                  Demandará una dedicación de 30 horas presenciales y
                  aproximadamente 20 horas de estudio individual, para preparar
                  los casos antes de cada sesión y lograr una mejor interacción
                  y participación por parte de los asistentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="director-section-6 bg-grey">
      <div class="container margin-0-auto">
        <p class="ff-nunito caption">Perfil de los</p>
        <h2 class="ff-sans-b">participantes</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="sec6-inner-box">
              <h4 class="ff-sans-b">1. Experiencia Mínima</h4>
              <b-img
                src="images/director-participate-1.jpg"
                fluid
                alt=""
              ></b-img>
              <p>
                Experiencia de mínimo 3 años en nivel directivo o gerencial en
                posiciones de responsabilidad, preferiblemente dentro de una
                fundación como director de área, director de la organización
                social, miembro del consejo, junta directiva o representante
                legal.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sec6-inner-box">
              <h4 class="ff-sans-b">2. Disponibilidad de tiempo</h4>
              <b-img
                src="images/director-participate-2.jpg"
                fluid
                alt=""
              ></b-img>
              <p>
                Disponibilidad para asistir virtualmente mediante la plataforma
                de Zoom los 7 días del evento de 8:00 a. m. a 12:00p. m.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sec6-inner-box">
              <h4 class="ff-sans-b">3. Formulario Completo</h4>
              <b-img
                src="images/director-participate-3.jpg"
                fluid
                alt=""
              ></b-img>
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
    </section>
    <section class="director-section-6">
      <div class="container margin-0-auto">
        <p class="ff-nunito caption">Costos</p>
        <h2 class="ff-sans-b">2021</h2>
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="sec6-inner-box">
              <h4 class="ff-sans-b text-center">Por persona</h4>
              <b-img src="images/director-costos-1.jpg" fluid alt=""></b-img>
              <p>
                El costo por persona será de <strong>$1.800.000</strong> y está
                dirigido a colaboradores que hagan parte de las organizaciones
                de Aflora. <strong>Incluye</strong> participación los 7 días,
                materiales, y certificado.
              </p>
              <p>
                El pago se debe realizar a Edime <strong>de contado</strong> y
                se entregará sólo una factura.
              </p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="sec6-inner-box">
              <h4 class="ff-sans-b text-center">3. Formulario Completo</h4>
              <b-img src="images/director-costos-2.jpg" fluid alt=""></b-img>
              <p>
                El pago se debe realizar directamente a una cuenta bancaria de
                EDIME. La Fundación Bolívar Davivienda informará el número de
                cuenta bancaria para que el participante pueda hacer la
                consignación correspondiente, y posteriormente enviar el
                comprobante de pago a
                <a href="mailto:escueladirectores@fundacionbd.org"
                  >escueladirectores@fundacionbd.org</a
                >
              </p>
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
      title: this.$constants.escuelaDeDirectoresLanding.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.escuelaDeDirectoresLanding.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.escuelaDeDirectoresLanding.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.escuelaDeDirectoresLanding.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.escuelaDeDirectoresLanding.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${this.$constants.baseURL}${this.$constants.escuelaDeDirectoresLanding.meta.ogImage}`,
        },
      ],
    }
  },
}
</script>

<style>
.bg-grey {
  background: #f7f7f7;
}
.text-orange {
  color: #ff671b;
}
.director-section-1 {
  padding: 50px 0;
}
.director-section-1 h1 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  text-align: center;
}
.director-section-1 .text-orange {
  font-family: Nunito;
  font-size: 32px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  line-height: 34px;
  letter-spacing: 2px;
  text-align: center;
}
.sec1-boxes {
  margin-top: 30px;
  position: relative;
  overflow: hidden;
}
.sec1-boxes .img-fluid {
  position: absolute;
  z-index: 0;
  right: 0;
  top: 0;
}
.sec1-boxes .sec1-description {
  position: relative;
  z-index: 1;
  padding: 50px;
  width: 60%;
  background: -moz-linear-gradient(
    left,
    rgba(218, 218, 218, 1) 0%,
    rgba(218, 218, 218, 1) 50%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(218, 218, 218, 1) 0%,
    rgba(218, 218, 218, 1) 50%,
    rgba(255, 218, 255, 1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    to right,
    rgba(218, 218, 218, 1) 0%,
    rgba(218, 218, 218, 1) 50%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dadada', endColorstr='#00dadada',GradientType=1 );
}
.sec1-boxes h3 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 64px;
  margin-bottom: 25px;
}
.sec1-boxes p {
  font-family: Nunito;
  font-size: 18px;
  color: #313338;
  text-decoration: none solid rgb(49, 51, 56);
  line-height: 32px;
  margin-bottom: 15px;
}
.director-section-1 .btn-primary {
  padding: 10px 25px;
  background-color: #ff671b;
  font-family: Nunito;
  font-size: 18px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: center;
  border: none;
  border-radius: 0;
  margin-bottom: 15px;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.director-section-2 {
  padding: 50px 0;
  text-align: center;
}
.director-section-2 h2 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  margin-bottom: 15px;
}
.director-section-2 .btn-primary {
  padding: 10px 25px;
  background-color: #ffffff;
  font-family: Nunito;
  font-size: 18px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: center;
  border: none;
  border-radius: 0;
  margin-bottom: 15px;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.director-section-3 {
  padding: 50px 0;
}
.director-section-3 h2 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  margin-bottom: 50px;
  text-align: center;
  position: relative;
}
.director-section-3 h2:after {
  content: '';
  position: absolute;
  width: 300px;
  height: 1px;
  background: #2f425b;
  margin-left: -150px;
  left: 50%;
  bottom: -20px;
}
.director-section-3 .main-slider-at-top .container {
  max-width: 100%;
  padding: 0;
}
.director-section-3 .main-slider-at-top .set-to-bottom {
  bottom: 0;
}
.director-section-3 .main-slider-at-top .orange-bg {
  width: 100%;
  max-width: 280px;
}
.director-section-3 .main-slider-at-top h3 {
  padding: 10px;
  font-family: Nunito;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 32px;
  letter-spacing: 2px;
  text-align: center;
}
.director-section-3 .main-slider-at-top p {
  font-family: 'sansationregular';
  font-size: 32px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 40px;
}
.director-section-3 .VueCarousel {
  padding-top: 100px;
}
.director-section-3 .VueCarousel-pagination {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
}
.director-section-3 {
  counter-reset: my-sec-counter;
}
.director-section-3 .VueCarousel-dot-container button:before {
  counter-increment: my-sec-counter;
  content: counter(my-sec-counter);
}
.director-section-3 .VueCarousel-dot-container {
  margin: 0 !important;
}
.director-section-3 .VueCarousel-dot-container button {
  margin: 0 5px !important;
  padding: 0 !important;
  width: 60px !important;
  height: 55px !important;
  border-radius: 5px;
  background: #2f425b !important;
  font-family: sansationbold;
  font-size: 26px;
  color: #f7f7f7;
  text-decoration: none solid rgb(247, 247, 247);
  text-transform: uppercase;
  text-align: center;
  outline: none !important;
}
.director-section-3 .VueCarousel-dot-container .VueCarousel-dot--active {
  background: #ff671b !important;
  color: #fff;
}

.director-section-3 .sec3-info {
  padding: 50px 0 0;
}
.director-section-3 .sec3-info p {
  font-family: Nunito;
  font-size: 18px;
  color: #77777a;
  text-decoration: none solid rgb(119, 119, 122);
  line-height: 32px;
}

.director-section-4 {
  padding: 50px 0;
}
.director-section-4 h2 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  margin-bottom: 15px;
}
.director-section-4 p {
  font-family: Nunito;
  font-size: 18px;
  color: #313338;
  text-decoration: none solid rgb(49, 51, 56);
  line-height: 32px;
  margin-bottom: 15px;
}
.director-section-4 ul {
  margin: 0;
  margin-left: 15px;
}
.director-section-4 ul li {
  position: relative;
  padding: 5px 0 5px 15px;
  font-family: Nunito;
  font-size: 18px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 32px;
}
.director-section-4 ul li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 20px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #2f425b;
}

.director-section-5 {
  padding: 70px;
}
.director-section-5 h2 {
  font-size: 48px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 64px;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 50px;
}
.director-section-5 p {
  font-family: Nunito;
  font-size: 20px;
  color: #77777a;
  text-decoration: none solid rgb(119, 119, 122);
  line-height: 32px;
  margin-bottom: 15px;
}
.director-section-5 .caption {
  font-size: 32px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  line-height: 42px;
  letter-spacing: 2px;
  text-align: center;
}
.director-section-5 h3 {
  font-family: Nunito;
  font-size: 36px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 32px;
  text-align: center;
  margin-bottom: 15px;
}

.director-section-6 {
  padding: 70px;
}
.director-section-6 h2 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 64px;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 50px;
}
.director-section-6 p {
  font-family: Nunito;
  font-size: 20px;
  color: #77777a;
  text-decoration: none solid rgb(119, 119, 122);
  line-height: 32px;
  margin-bottom: 10px;
}
.director-section-6 .caption {
  font-size: 32px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  line-height: 42px;
  letter-spacing: 10px;
  text-align: center;
}
.sec6-inner-box {
  background: #fff;
  padding: 25px;
  font-family: Nunito;
  font-size: 18px;
  color: #313338;
  text-decoration: none solid rgb(49, 51, 56);
  line-height: 25px;
  box-shadow: 0px 3px 9px rgb(0 0 0 / 20%);
}
.sec6-inner-box h4 {
  font-size: 27px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 38px;
  margin-bottom: 15px;
}
.sec6-inner-box p {
  margin-bottom: 15px;
}
.sec6-inner-box p a {
  color: #313338;
  font-weight: bold;
}
.sec6-inner-box .img-fluid {
  margin-bottom: 15px;
}
</style>
