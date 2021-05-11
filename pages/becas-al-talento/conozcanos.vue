<template>
  <main>
    <!-- Banner start -->
    <div class="container position-relative innerpage">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item to="/becas-al-talento">
          Becas al Talento
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
    <section class="common-banner">
      <div class="container">
        <h2>Becas al talento</h2>
      </div>
    </section>
    <!-- Banner end -->

    <!-- image text left right start -->
    <section class="txt-image left-txt space-big">
      <div class="container">
        <div class="txt-img-multi">
          <div class="only-txt">
            <div class="single-txt">
              <h2>Sobre Becas</h2>
              <p>
                En el programa apoyamos el talento y la excelencia de los
                estudiantes de nuestras universidades aliadas, con el fin de
                garantizar que terminen sus estudios profesionales de manera
                exitosa. Este beneficio se otorga como una beca-crédito para
                estudiantes que estén cursando entre 5to y 8vo semestre y está
                ligado a las políticas y procesos internos de las instituciones
                universitarias.
              </p>
            </div>
          </div>
          <div class="only-img">
            <img
              src="/images/programa-becas-al-talento/2-conozcanos/conozcanos_bloque1_impacto.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- image text left right end -->

    <!-- Hoy el start -->
    <section class="hoy-main">
      <div class="container">
        <div class="hoy-img-txt">
          <div class="hoy-img">
            <img
              src="/images/programa-becas-al-talento/2-conozcanos/conozcanos_bloque2.jpg"
              alt=""
            />
          </div>
          <div class="hoy-txt">
            <div class="h-txt-main">
              <p>
                Hoy el programa ha beneficiado a más de 300 estudiantes, y
                espera seguir creciendo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Hoy el end -->

    <!-- Nuestros start -->
    <section class="nuestro-main">
      <div class="container">
        <div class="nuestro-title">
          <h3>Nuestros</h3>
          <h2>objetivos son</h2>
        </div>
        <div class="nuestro-box">
          <div class="nuestro-single">
            <h4>Con las universidades aliadas</h4>
            <img
              src="/images/programa-becas-al-talento/2-conozcanos/conozcanos_b3objetivos-universidades.jpg"
              alt=""
              class="img-fluid"
            />
            <p>
              Constituir el fondo de becas crédito en alianza con cada
              institución educativa. Con los recaudos de capital que vaya
              gestionando este fondo, el programa seguirá entregando estos
              beneficios financieros a otros estudiantes que cumplan con el
              perfil definido.
            </p>
          </div>
          <div class="nuestro-single">
            <h4>Con los estudiantes y sus familias</h4>
            <img
              src="/images/programa-becas-al-talento/2-conozcanos/conozcanos_b4objetivos_estudiantes.jpg"
              alt=""
              class="img-fluid"
            />
            <p>
              Ofrecer alternativas de financiación para que los estudiantes con
              alto desempeño académico logren culminar sus estudios de pregrado
              sin inconvenientes.
            </p>
          </div>
          <div class="nuestro-single">
            <h4>Con la sociedad colombiana</h4>
            <img
              src="/images/programa-becas-al-talento/2-conozcanos/conozcanos_b5objetivos_sociedad.jpg"
              alt=""
              class="img-fluid"
            />
            <p>
              Formar profesionales íntegros, con alto sentido de responsabilidad
              social, jóvenes líderes comprometidos con la construcción de una
              sociedad más justa, incluyente e innovadora.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Nuestros end -->

    <!-- Testimonial start -->
    <section class="testimonial">
      <div class="testi-title">
        <h3>Testimonios</h3>
        <h4>De nuestros integrantes</h4>
      </div>
      <client-only>
        <carousel
          :perPageCustom="[
            [575, 1],
            [1024, 2],
            [1200, 3],
          ]"
          :navigationEnabled="true"
        >
          <slide
            v-for="(item, i) of $becasAlTalentoData.becasConozcanos.testimonios"
            :key="i"
            class="testi-center"
          >
            <div class="testi-single">
              <div class="testi-txt">
                <h3>{{ item.title }}</h3>
                <p>
                  {{ item.description }}
                </p>
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
    </section>
    <!-- Testimonial end -->

    <!-- image text left right start -->
    <section class="txt-image left-txt space-big">
      <div class="container">
        <div class="txt-img-multi">
          <div class="only-txt">
            <div class="single-txt">
              <p class="pb-4">
                En Becas al Talento estamos comprometidos con fortalecer las
                habilidades blandas y <b>Competencias Ciudadanas</b> de todos
                nuestros beneficiarios, con el propósito de convertir sus
                talentos en oportunidades de mejora.
              </p>
              <p>
                Deseamos apoyar el proceso académico y personal de nuestros
                estudiantes, siempre desde el respeto y la disciplina, para
                cumplir metas y celebrar triunfos junto a ellos.
              </p>
            </div>
          </div>
          <div class="only-img">
            <img
              src="/images/programa-becas-al-talento/2-conozcanos/conozcanos_bloque6.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- image text left right end -->

    <!-- image text left right start -->
    <section class="txt-image right-txt right-top">
      <div class="container">
        <div class="txt-img-multi">
          <div class="only-img">
            <img
              src="/images/programa-becas-al-talento/2-conozcanos/conozcanos_bloque7.jpg"
              alt=""
            />
          </div>
          <div class="only-txt">
            <div class="single-txt">
              <p class="pb-4">
                Creemos que las habilidades blandas son las bases del éxito, por
                eso hemos creado 3 ejes principales para nuestro curso de
                competencias ciudadanas:
              </p>
              <ul>
                <li>Habilidades blandas: personales y sociales.</li>
                <li>Competencias integradoras.</li>
                <li>Acciones transformadoras.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- image text left right end -->

    <!-- Con el apoyo de start -->
    <section class="conel">
      <div class="container">
        <div class="con-el">
          <h3>Con el apoyo de:</h3>
          <div class="services">
            <div class="single-service">
              <p>Pontificia Universidad Javeriana</p>
            </div>
            <div class="single-service">
              <p>Pontificia Universidad Javeriana</p>
            </div>
            <div class="single-service">
              <p>Pontificia Universidad Javeriana</p>
            </div>
            <div class="single-service">
              <p>Pontificia Universidad Javeriana</p>
            </div>
            <div class="single-service">
              <p>Pontificia Universidad Javeriana</p>
            </div>
            <div class="single-service">
              <p>Pontificia Universidad Javeriana</p>
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
      title: this.$becasAlTalentoData.becasConozcanos.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$becasAlTalentoData.becasConozcanos.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$becasAlTalentoData.becasConozcanos.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$becasAlTalentoData.becasConozcanos.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$becasAlTalentoData.becasConozcanos.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$becasAlTalentoData.becasConozcanos.meta.ogImage,
        },
      ],
    }
  },
}
</script>
<style>
@media (max-width: 767px) {
  .common-banner h2 {
    font-size: 38px;
    line-height: 60px;
  }
  .hoy-main {
    padding: 0;
    position: relative;
  }
  .hoy-img-txt {
    flex-direction: column;
  }
  .hoy-img-txt .hoy-img,
  .hoy-img-txt .hoy-txt {
    width: 100%;
  }
  .hoy-img-txt .hoy-img {
    order: 1;
  }
  .hoy-main .container {
    padding: 0;
  }
  .nuestro-main {
    padding: 25px 0;
  }
  .nuestro-title {
    padding-bottom: 20px;
  }
  .nuestro-title h3 {
    font-size: 30px;
    padding-bottom: 0;
  }
  .nuestro-title h2 {
    font-size: 42px;
  }
  .nuestro-box {
    flex-direction: column;
  }
  .nuestro-single {
    width: 100%;
    margin: 10px 0;
    box-shadow: none;
    background: #f7f7f7;
  }
  .conel {
    padding-top: 25px;
    padding-bottom: 0;
  }
  .services {
    flex-direction: column;
  }
  .single-service {
    width: 100%;
  }
}
</style>
