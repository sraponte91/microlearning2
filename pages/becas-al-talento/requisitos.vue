<template>
  <main>
    <!-- Breadcrums start -->
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <ol class="breadcrumb ff-sans-r mb-2">
          <li class="breadcrumb-item">
            <a href="/." target="_self" class="">Home</a>
          </li>
          <li class="breadcrumb-item active">
            <span aria-current="location">Requisitos</span>
          </li>
        </ol>
        <div
          class="back-to-home position-relative d-flex align-items-center small-size"
        >
          <i class="ic-back"></i>
          <a href="javascript:void(0)" class="ff-sans-b">Volver</a>
        </div>
      </div>
    </div>
    <!-- Breadcrums end -->

    <!-- requisitos start -->
    <section class="requisitos">
      <div class="container">
        <div class="pm-title">
          <h2>Requisitos</h2>
          <h3>¿Cuáles son y cómo aplico?</h3>
        </div>
        <div class="requi-detail">
          <p class="sub">
            Becas al Talento está dirigido a estudiantes de pregrado que cumplan
            con estos requisitos:
          </p>
          <div class="pm-services">
            <div class="pms-single">
              <div class="single-service">
                <p>Ser nacional colombiano y residir en Colombia.</p>
              </div>
              <div class="single-service">
                <p>
                  Acreditar excelentes resultados académicos, con un promedio
                  mínimo acumulado de 3.8.
                </p>
              </div>
              <div class="single-service">
                <p>
                  Estar cursando cualquier programa de pregrado en la
                  Universidad Aliada.
                </p>
              </div>
              <div class="single-service">
                <p>
                  No ser objeto de sanciones disciplinarias por parte de la
                  Universidad.
                </p>
              </div>
            </div>
            <div class="pms-single">
              <div class="single-service">
                <p>
                  Pasar a cursar mínimo 5to semestre y para carreras anualizadas
                  a partir del tercer año; y máximo pasar a 9no semestre o
                  último año.
                </p>
              </div>
              <div class="single-service">
                <p>
                  No haber perdido materias en el semestre en el que realiza la
                  solicitud.
                </p>
              </div>
              <div class="single-service">
                <p>Demostrar estar en dificultad socioeconómica./p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- requisitos end -->

    <!-- image text left right start -->
    <section class="txt-image left-txt right-top pt-0 big-txt">
      <div class="container">
        <div class="txt-img-multi">
          <div class="only-txt outer-small-txt">
            <div class="b-title">
              <p>
                Para beneficiarios antiguos del programa, estos son los
                requerimientos para renovar el beneficio:
              </p>
            </div>
            <div class="single-txt top-small">
              <ul>
                <li>
                  Acreditar excelentes resultados académicos, con un promedio
                  semestral mínimo de 3.8.
                </li>
                <li>No perder materias siendo beneficiario del programa.</li>
                <li>
                  Haber cursado el 80% del total de créditos correspondientes a
                  su semestre.
                </li>
                <li>
                  No ser objeto de sanciones disciplinarias por parte de la
                  Universidad.
                </li>
                <li>
                  Demostrar que la dificultad socioeconómica en su hogar
                  permanece vigente.
                </li>
                <li>
                  Haber participado de forma activa en el Programa Competencias
                  Ciudadanas y cumplir con las horas establecidas para tales
                  fines durante el semestre.
                </li>
                <li>
                  Haber cumplido con los compromisos financieros contraídos en
                  el marco del crédito de largo plazo.
                </li>
              </ul>
            </div>
          </div>
          <div class="only-img">
            <img src="/images/img6.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- image text left right end -->

    <!-- call to action white start -->
    <section class="cta-white">
      <div class="container">
        <h3>Reglamento de inscripción</h3>
        <p>
          Para Fundación Bolívar Davivienda es muy importante que todos los
          interesados, aspirantes y beneficiarios, conozcan con detalle las
          políticas detrás de cada iniciativa. Por eso, lo invitamos a leer con
          detenimiento el reglamento del programa Voluntariado Familia Bolívar,
          donde  encontrará los requisitos y condiciones para ser parte del
          programa.
        </p>
        <a href="#">Lee el reglamento de inscripción</a>
      </div>
    </section>
    <!-- call to action white end -->
  </main>
</template>
<style >
/* requisitos css start */
.pm-title {
  padding-bottom: 40px;
  border-bottom: solid 1px #666666;
}
.pm-title h2 {
  font-family: Nunito, sans-serif;
  font-size: 72px;
  color: #2f425b;
  line-height: 72px;
  text-align: center;
}
.pm-title h3 {
  font-family: sansationbold;
  font-size: 48px;
  color: #2f425b;
  line-height: 100px;
  text-align: center;
}
.requi-detail p.sub {
  max-width: 576px;
  font-family: sansationbold;
  font-size: 21px;
  color: #313338;
  line-height: 30px;
  text-align: center;
  margin: 0 auto;
  padding: 58px 0 39px 0;
}
.pm-services {
  display: flex;
  justify-content: space-between;
  padding-bottom: 80px;
  max-width: 1043px;
  margin: 0 auto;
}
.pms-single {
  width: 49%;
}
.pms-single .single-service {
  width: 100%;
  margin: 0 0 10px 0;
}
/* requisitos css end */
/* call to action white start */
.cta-white {
  padding: 100px 0;
  text-align: center;
}
.cta-white h3 {
  font-family: sansationbold;
  font-size: 50px;
  color: #ff671b;
  line-height: 52px;
  text-align: center;
}
.cta-white p {
  max-width: 821px;
  margin: 0 auto;
  font-family: sansationregular;
  font-size: 20px;
  color: #313338;
  line-height: 30px;
  text-align: center;
  padding: 32px 0;
}
.cta-white a {
  display: inline-block;
  padding: 10px;
  max-width: 327px;
  border: 1px solid #77777a;
  border-radius: 6px;
  background-size: cover;
  font-family: sansationbold;
  font-size: 16px;
  color: #111820;
  text-align: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  width: 100%;
}
.cta-white a:hover,
.cta-white a:active,
.cta-white a:focus {
  background: #ff671b;
  border-color: #ff671b;
  color: #fff;
}
/* call to action white end */
.left-txt .outer-small-txt .single-txt {
  top: 130px;
}
</style>