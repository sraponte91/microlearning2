<template>
  <main>
    <section class="leader-section-1">
      <div class="container margin-0-auto">
        <div class="row">
          <div class="col-md-12 text-center leader-title">
            <h1 class="ff-sans-b">Líderes emprendedores</h1>
            <div class="label">#LaJoven</div>
            <p>Transformando el talento cultural en oportunidades</p>
            <b-img src="images/leader-image.jpg" fluid alt=""></b-img>
          </div>
          <div class="col-md-12">
            <h2 class="ff-sans-b">El Programa</h2>
          </div>
          <div class="col-md-6">
            <p>
              El Global Leaders Program y la Fundación Bolívar Davivienda, a
              través de la Filarmónica Joven de Colombia, han decidido unir
              esfuerzos para lanzar Líderes Emprendedores #LaJoven, un programa
              de formación en emprendimientos artísticos sostenibles de talla
              mundial. Por primera vez para Latinoamérica, una versión del
              Global Leaders Program (reconocido programa ejecutivo de formación
              a nivel internacional) será dictada en español y principalmente
              enfocada en el contexto colombiano. Este es un compromiso de las
              dos organizaciones de formar a la próxima generación de músicos
              emprendedores en Colombia y fortalecer las capacidades de
              emprendimiento de importantes gestores culturales en el país.
            </p>
            <p>
              Líderes Emprendedores #La Joven es una experiencia de desarrollo
              profesional que cultiva diversos conjuntos de habilidades,
              herramientas y recursos cada año en veinticinco jóvenes músicos y
              5 gestores culturales cuidadosamente seleccionados. La experiencia
              de aprendizaje para los participantes se centra en dos pilares
              básicos de crecimiento.<br />en oportunidades
            </p>
            <ul>
              <li>Un currículum multidisciplinario liderado por expertos.</li>
              <li>
                Tareas aplicadas al desarrollo de un proyecto artístico
                innovador e implementable.
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <b-img src="images/ei-program.jpg" fluid alt=""></b-img>
          </div>
        </div>
      </div>
    </section>
    <section class="leader-section-2 bg-grey">
      <div class="container margin-0-auto">
        <h2 class="ff-sans-b">Perfil del candidato</h2>
        <div class="row">
          <div class="col-md-6">
            <div class="sec2-inner-box">
              <b-img src="images/candidate-image-1.jpg" fluid alt=""></b-img>
              <h3 class="ff-sans-b">Jóvenes Músicos</h3>
              <p>
                Deben tener interés en la gestión cultural desde cualquier campo
                de la música sinfónica. Además, de haber integrado al menos una
                temporada de la Filarmónica Joven de Colombia y mostrar interés
                y experiencia en el montaje de proyectos que articulen la música
                con la pedagogía, el emprendimiento y/o la transformación
                social. Para este perfil de participante en el grupo 2021, se
                destinarán 25 cupos.
              </p>
              <div class="text-center">
                <b-button href="#" variant="primary">Inscríbase aquí</b-button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="sec2-inner-box">
              <b-img src="images/candidate-image-2.jpg" fluid alt=""></b-img>
              <h3 class="ff-sans-b">Gestores Culturales</h3>
              <p>
                Deben contar con trayectoria en cualquier campo relacionado con
                el sector sinfónico, además de estar interesados en actualizar
                sus conocimientos en gestión y emprendimiento de proyectos
                artísticos sostenibles. Así mismo, deberán demostrar capacidad
                crítica y formación interdisciplinaria que permita construir una
                reflexión actual y de tendencia de cara a los retos que enfrenta
                el sector. Para este perfil de participante en el grupo 2021, se
                destinarán 5 cupos.
              </p>
              <div class="text-center">
                <b-button href="#" variant="primary">Inscríbase aquí</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="leader-section-3">
      <div class="container margin-0-auto">
        <h2 class="ff-sans-b">Malla Curricular</h2>
        <p class="label text-center text-orange">Unidades</p>

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
            <slide v-for="n in 7" :key="n">
              <div class="position-relative box bg-white">
                <div class="main-slider-at-top actualidad-pg">
                  <div class="img-prt position-relative">
                    <b-img src="images/blog_a.jpg" fluid alt=""></b-img>
                    <div class="container position-absolute set-to-bottom">
                      <div class="banner-txt text-white">
                        <div class="orange-bg">
                          <h3 class="ff-sans-b">Unidad 1</h3>
                        </div>
                        <div class="black-bg">
                          <p class="ff-nunito">
                            Empoderamiento y mentalidad reflexiva
                          </p>
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
            Explora cómo los desafíos sociales locales pueden transformarse en
            oportunidades para nuevos emprendimientos, cultivando una mentalidad
            de acción y posibilidad.
          </p>
          <b-btn variant="secondary">Ver Mas</b-btn>
        </div>

        <div class="block-text">
          <h3 class="ff-sans-b">Metodología</h3>
          <p>
            Todos los módulos consisten en dos seminarios online en vivo de 90
            minutos, programados los martes de 4:00 a 5:30 p.m., hora de
            Colombia, además de lecturas, presentaciones, actividades
            individuales, y una evaluación, durante cinco meses. Cada unidad
            está dirigida por un(a) Director(a) de Módulo. Los Directores de
            Módulo quien garantiza que el plan de estudios esté guiado en todo
            momento por expertos en cada campo. La formación en cada módulo, se
            complementa con una gama de expositores invitados que aumentan la
            experiencia de aprendizaje, a través de ejemplos musicales y
            consideraciones prácticas del mundo artístico.
          </p>
        </div>
      </div>
    </section>
    <section class="leader-section-4 bg-grey">
      <div class="container margin-0-auto">
        <p class="ff-nunito caption">Reto de</p>
        <h2 class="ff-sans-b">Emprendimiento</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="sec4-inner-box">
              <h4 class="ff-sans-b">¿En que consiste?</h4>
              <b-img src="images/emp-image-1.jpg" fluid alt=""></b-img>
              <p>
                Una vez cursados los seis módulos del plan de estudios, los
                miembros de la cohorte aplican el conocimiento y las habilidades
                adquiridas, para escribir y presentar un Reto de Emprendimiento.
                Esta evaluación final puede ser muy versátil, dependiendo de los
                intereses, creatividad y antecedentes de cada participante.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sec4-inner-box">
              <h4 class="ff-sans-b">¿En que consiste?</h4>
              <b-img src="images/emp-image-2.jpg" fluid alt=""></b-img>
              <p>
                Una vez cursados los seis módulos del plan de estudios, los
                miembros de la cohorte aplican el conocimiento y las habilidades
                adquiridas, para escribir y presentar un Reto de Emprendimiento.
                Esta evaluación final puede ser muy versátil, dependiendo de los
                intereses, creatividad y antecedentes de cada participante.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sec4-inner-box">
              <h4 class="ff-sans-b">¿En que consiste?</h4>
              <b-img src="images/emp-image-3.jpg" fluid alt=""></b-img>
              <p>
                Una vez cursados los seis módulos del plan de estudios, los
                miembros de la cohorte aplican el conocimiento y las habilidades
                adquiridas, para escribir y presentar un Reto de Emprendimiento.
                Esta evaluación final puede ser muy versátil, dependiendo de los
                intereses, creatividad y antecedentes de cada participante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="leader-section-5">
      <div class="container margin-0-auto">
        <div class="row">
          <div class="col-md-6">
            <h2 class="ff-sans-b">Reconocimientos</h2>
            <p>
              Una vez concluido este proceso formativo, y posterior al pitch, de
              los treinta retos de emprendimiento seleccionados, en la cohorte,
              se premiarán tres proyectos que recibirán el reconocimiento –
              Líder Emprendedor #LaJoven 2021 – para su implementación o
              desarrollo.
            </p>
          </div>
          <div class="col-md-8 offset-2">
            <div class="sec5-inner-list">
              <div class="sec5-inner-left">1</div>
              <div class="sec5-inner-right">
                <h4 class="ff-sans-b">Primer lugar</h4>
                <p>
                  Acompañamiento con el programa de Mentorías de la Fundación
                  Bolívar Davivienda, con altos ejecutivos empresariales +
                  Capital Semilla para el proyecto.
                </p>
              </div>
            </div>
            <div class="sec5-inner-list reverse">
              <div class="sec5-inner-left">2</div>
              <div class="sec5-inner-right">
                <h4 class="ff-sans-b">Segundo lugar</h4>
                <p>
                  Acompañamiento con el programa de Mentorías de la Fundación
                  Bolívar Davivienda, con altos ejecutivos empresariales +
                  Integración al Grupo 2020 de la versión bilingüe del Global
                  Leaders Program para el trabajo de campo internacional.
                </p>
              </div>
            </div>
            <div class="sec5-inner-list">
              <div class="sec5-inner-left">3</div>
              <div class="sec5-inner-right">
                <h4 class="ff-sans-b">Tercer lugar</h4>
                <p>
                  Acompañamiento con el programa de Mentorías de la Fundación
                  Bolívar Davivienda, con altos ejecutivos empresariales.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <p>
              Los ganadores serán seleccionados por un comité de evaluación
              integrado por el Global Leaders Program, la Fundación Bolívar
              Davivienda y uno o más miembros del comité académico.
            </p>
            <p>
              <strong
                >*Sujeto a la evolución de la crisis sanitaria derivada del
                COVID-19.</strong
              >
            </p>
          </div>
        </div>

        <div class="row leader-cost">
          <div class="col-md-12">
            <h2 class="ff-sans-b">Costos</h2>
          </div>
          <div class="col-md-12">
            <div class="lc-lists">
              <div class="lc-items">
                <div class="lc-item">
                  <h4 class="ff-sans-b">
                    Para jóvenes integrantes y egresados de la filarmónica joven
                    de Colombia
                  </h4>
                  <p class="regular-price">de <strong>$6.375usd</strong></p>
                  <p class="special-price">Beca <strong>$6.375usd</strong></p>
                  <p class="savings-price">
                    Ahora <strong><span>$</span>103<span>USD</span></strong>
                  </p>
                  <div class="text-center">
                    <b-button variant="primary">Inscribase aquí</b-button>
                  </div>
                </div>
              </div>
              <div class="lc-items">
                <div class="lc-item">
                  <h4 class="ff-sans-b">
                    Para jóvenes integrantes y egresados de la filarmónica joven
                    de Colombia
                  </h4>
                  <p class="regular-price">de <strong>$6.375usd</strong></p>
                  <p class="special-price">Beca <strong>$6.375usd</strong></p>
                  <p class="savings-price">
                    Ahora <strong><span>$</span>103<span>USD</span></strong>
                  </p>
                  <div class="text-center">
                    <b-button variant="primary">Inscribase aquí</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 offset-md-3">
            <h4 class="ff-sans-b">Forma de pago</h4>
            <p>
              El pago se realizará directamente al Global Leaders Program,
              después de haber sido seleccionado en la cohorte, a través de pago
              por tarjeta de crédito.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="leader-section-6 bg-grey">
      <div class="container margin-0-auto text-center">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <p class="ff-nunito caption">Proceso de</p>
            <h2 class="ff-sans-b">Selección</h2>

            <div class="row">
              <div class="col-md-12">
                <h3 class="ff-sans-b">Inscripción</h3>
                <p>
                  El pago se realizará directamente al Global Leaders Program,
                  después de haber sido seleccionado en la cohorte, a través de
                  pago por tarjeta de crédito.
                </p>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <h3 class="ff-sans-b">Selección anual</h3>
                <p>
                  Anualmente, se seleccionarán 30 estudiantes (25 jóvenes
                  músicos y 5 gestores culturales profesionales). La selección
                  estará a cargo de un jurado integrado por Fundación Bolívar
                  Davivienda, Filarmónica Joven de Colombia y Global Leaders
                  Program.
                </p>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <h3 class="ff-sans-b">Notificación</h3>
                <p>
                  Los seleccionados serán notificados por correo electrónico en
                  enero 2021, para realizar todo el proceso de matrícula, con el
                  Global Leaders Program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="leader-section-7">
      <div class="container margin-0-auto text-center">
        <b-img src="images/leader-info.jpg" fluid alt=""></b-img>
        <p>
          Para mayor información contacte a <br /><a href="#"
            >filarmonica@fundacionbd.org</a
          >
        </p>
      </div>
    </section>
  </main>
</template>
<style>
.bg-grey {
  background: #f7f7f7;
}
.text-orange {
  color: #ff671b;
}
.leader-section-1 {
  padding: 70px 0;
}
.leader-section-1 .leader-title {
  margin-bottom: 70px;
}
.leader-section-1 h1 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  margin-bottom: 15px;
}
.leader-section-1 .label {
  padding: 10px 25px;
  display: inline-block;
  background: #ffc1b0;
  font-family: 'sansationregular';
  font-size: 36px;
  color: #111820;
  text-decoration: none solid rgb(17, 24, 32);
  line-height: 32px;
  margin-bottom: 15px;
}
.leader-section-1 p {
  font-family: Nunito;
  font-size: 18px;
  color: #111820;
  text-decoration: none solid rgb(17, 24, 32);
  line-height: 24px;
  margin-bottom: 15px;
}
.leader-section-1 h2 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 64px;
  margin-bottom: 30px;
}
.leader-section-1 ul {
  margin: 0;
  margin-left: 15px;
}
.leader-section-1 ul li {
  position: relative;
  padding: 5px 0 5px 15px;
  font-family: Nunito;
  font-size: 18px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 32px;
}
.leader-section-1 ul li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 20px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #2f425b;
}
.leader-section-2 {
  padding: 70px 0;
}
.leader-section-2 h2 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  margin-bottom: 30px;
}
.sec2-inner-box h3 {
  font-size: 24px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 32px;
  margin-bottom: 15px;
}
.sec2-inner-box p {
  font-family: Nunito;
  font-size: 18px;
  color: #77777a;
  text-decoration: none solid rgb(119, 119, 122);
  line-height: 32px;
  margin-bottom: 15px;
}
.sec2-inner-box .img-fluid {
  margin-bottom: 15px;
}
.sec2-inner-box .btn-primary {
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
}
.leader-section-3 {
  padding: 70px 0;
}
.leader-section-3 h2 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  margin-bottom: 50px;
  text-align: center;
  position: relative;
}
.leader-section-3 h2:after {
  content: '';
  position: absolute;
  width: 300px;
  height: 1px;
  background: #2f425b;
  margin-left: -150px;
  left: 50%;
  bottom: -20px;
}
.leader-section-3 .label {
  font-family: Nunito;
  font-size: 24px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  line-height: 32px;
  letter-spacing: 2px;
  margin-bottom: 15px;
}
.leader-section-3 .block-text {
  background: #ffc1b0;
  padding: 70px;
  font-family: Nunito;
  font-size: 22px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 32px;
  margin: 50px 0;
}
.leader-section-3 .block-text h3 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 64px;
  margin-bottom: 20px;
}
.leader-section-3 .main-slider-at-top .container {
  max-width: 100%;
  padding: 0;
}
.leader-section-3 .main-slider-at-top .set-to-bottom {
  bottom: 0;
}
.leader-section-3 .main-slider-at-top .orange-bg {
  width: 100%;
  max-width: 280px;
}
.leader-section-3 .main-slider-at-top h3 {
  padding: 10px;
  font-family: Nunito;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 32px;
  letter-spacing: 2px;
  text-align: center;
}
.leader-section-3 .main-slider-at-top p {
  font-family: 'sansationregular';
  font-size: 32px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 40px;
}
.leader-section-3 .VueCarousel {
  padding-top: 100px;
}
.leader-section-3 .VueCarousel-pagination {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
}
.leader-section-3 {
  counter-reset: my-sec-counter;
}
.leader-section-3 .VueCarousel-dot-container button:before {
  counter-increment: my-sec-counter;
  content: counter(my-sec-counter);
}
.leader-section-3 .VueCarousel-dot-container {
  margin: 0 !important;
}
.leader-section-3 .VueCarousel-dot-container button {
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
.leader-section-3 .VueCarousel-dot-container .VueCarousel-dot--active {
  background: #ff671b !important;
  color: #fff;
}

.leader-section-3 .sec3-info {
  padding: 50px 0 0;
}
.leader-section-3 .sec3-info p {
  font-family: Nunito;
  font-size: 18px;
  color: #77777a;
  text-decoration: none solid rgb(119, 119, 122);
  line-height: 32px;
}
.leader-section-3 .sec3-info .btn-secondary {
  display: block;
  margin: 25px auto 0;
  width: 250px;
  height: 54px;
  padding: 0px 11px 0px 16px;
  background: #fff;
  border: none;
  border-bottom: 1px solid #111820;
  font-family: Nunito;
  font-size: 18px;
  text-align: left;
  color: #111820;
  border-radius: 0;
  position: relative;
}
.leader-section-3 .sec3-info .btn-secondary:before {
  content: '+';
  font-family: Nunito;
  font-size: 18px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.leader-section-4 {
  padding: 70px;
}
.leader-section-4 h2 {
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 64px;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 50px;
}
.leader-section-4 p {
  font-family: Nunito;
  font-size: 20px;
  color: #77777a;
  text-decoration: none solid rgb(119, 119, 122);
  line-height: 32px;
  margin-bottom: 10px;
}
.leader-section-4 .caption {
  font-size: 32px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  line-height: 42px;
  letter-spacing: 10px;
  text-align: center;
}
.sec4-inner-box {
  background: #fff;
  padding: 25px;
  font-family: Nunito;
  font-size: 18px;
  color: #313338;
  text-decoration: none solid rgb(49, 51, 56);
  line-height: 25px;
}
.sec4-inner-box h4 {
  font-size: 27px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 38px;
  margin-bottom: 15px;
}
.sec4-inner-box .img-fluid {
  margin-bottom: 15px;
}
.leader-section-5 {
  padding: 70px 0;
}
.leader-section-5 h2 {
  font-size: 40px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 64px;
  margin-bottom: 15px;
}
.leader-section-5 p {
  font-family: Nunito;
  font-size: 18px;
  color: #77777a;
  text-decoration: none solid rgb(119, 119, 122);
  line-height: 32px;
  margin-bottom: 15px;
}
.sec5-inner-list {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  margin: 30px 0;
}
.sec5-inner-list .sec5-inner-left {
  background: #43464a;
  color: #fff;
  flex: 1 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'sansationbold';
  font-size: 80px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  line-height: 24px;
  text-align: center;
}
.sec5-inner-list .sec5-inner-right {
  padding: 30px;
  flex: 10000 0 0;
  background: -moz-linear-gradient(
    left,
    rgba(218, 218, 218, 1) 0%,
    rgba(218, 218, 218, 1) 65%,
    rgba(218, 218, 218, 0) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(218, 218, 218, 1) 0%,
    rgba(218, 218, 218, 1) 65%,
    rgba(218, 218, 218, 0) 100%
  );
  background: linear-gradient(
    to right,
    rgba(218, 218, 218, 1) 0%,
    rgba(218, 218, 218, 1) 65%,
    rgba(218, 218, 218, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dadada', endColorstr='#00dadada',GradientType=1 );
}
.sec5-inner-list.reverse .sec5-inner-left {
  order: 2;
}
.sec5-inner-list.reverse .sec5-inner-right {
  padding-left: 120px;
  order: 1;
  background: -moz-linear-gradient(
    left,
    rgba(218, 218, 218, 0) 0%,
    rgba(218, 218, 218, 1) 35%,
    rgba(218, 218, 218, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(218, 218, 218, 0) 0%,
    rgba(218, 218, 218, 1) 35%,
    rgba(218, 218, 218, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(218, 218, 218, 0) 0%,
    rgba(218, 218, 218, 1) 35%,
    rgba(218, 218, 218, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00dadada', endColorstr='#dadada',GradientType=1 );
}
.sec5-inner-list h4 {
  font-size: 28px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  line-height: 16px;
  margin-bottom: 15px;
}
.lc-lists {
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
}
.lc-lists .lc-items {
  padding: 10px;
  height: 100%;
  width: 33.33%;
  flex: 0 0 33.33%;
}
.lc-lists .lc-item {
  padding: 20px;
  height: 100%;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.2);
}
.lc-lists .lc-item h4 {
  font-size: 28px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 36px;
  text-align: center;
  margin-bottom: 25px;
}
.lc-lists .lc-item .regular-price,
.lc-lists .lc-item .special-price,
.lc-lists .lc-item .savings-price {
  font-family: Nunito;
  font-size: 24px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  text-align: center;
}
.lc-lists .lc-item .regular-price strong,
.lc-lists .lc-item .special-price strong,
.lc-lists .lc-item .savings-price strong {
  font-family: 'sansationbold';
  font-size: 36px;
  color: #696969;
  text-decoration: none solid rgb(105, 105, 105);
}
.lc-lists .lc-item .regular-price strong {
  text-decoration: line-through;
}
.lc-lists .lc-item .savings-price strong {
  padding: 15px 0 30px;
  display: block;
  font-size: 112px;
  color: #111820;
  text-decoration: none solid rgb(17, 24, 32);
  letter-spacing: -4px;
  text-align: center;
}
.lc-lists .lc-item .savings-price span {
  display: inline-block;
  width: 20px;
  font-size: 28px;
  color: #111820;
  word-break: break-all;
  line-height: 28px;
}
.lc-lists .lc-item .btn-primary {
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
}

.leader-section-6 {
  padding: 70px;
}
.leader-section-6 h2 {
  font-size: 48px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 64px;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 50px;
}
.leader-section-6 p {
  font-family: Nunito;
  font-size: 20px;
  color: #77777a;
  text-decoration: none solid rgb(119, 119, 122);
  line-height: 32px;
  margin-bottom: 15px;
}
.leader-section-6 .caption {
  font-size: 32px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  line-height: 42px;
  letter-spacing: 2px;
  text-align: center;
}
.leader-section-6 h3 {
  font-family: Nunito;
  font-size: 36px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 32px;
  text-align: center;
  margin-bottom: 15px;
}
.leader-section-7 {
  padding: 70px;
}
.leader-section-7 .img-fluid {
  padding-bottom: 50px;
}
.leader-section-7 p {
  font-family: Nunito;
  font-size: 18px;
  color: #111820;
  text-decoration: none solid rgb(17, 24, 32);
  line-height: 32px;
  text-align: center;
}
.leader-section-7 p a {
  font-size: 23px;
}
</style>
