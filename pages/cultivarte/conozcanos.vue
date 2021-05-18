<template>
  <main>
    <!-- Banner start -->
    <div class="container position-relative innerpage">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item to="/cultivarte">Cultivarte</b-breadcrumb-item>
        <b-breadcrumb-item active>Conózcanos</b-breadcrumb-item>
      </b-breadcrumb>
      <div class="back-to-home position-absolute d-flex align-items-center small-size">
        <i class="ic-back" @click="goBack()"></i>
        <a class="ff-sans-b text-white" href="javascript:void(0)" @click="goBack()">Volver</a>
      </div>
    </div>
    <section class="common-banner nc">
      <div class="container">
        <h2>Cultivarte</h2>
      </div>
    </section>
    <!-- Banner end -->

    <!-- image text left right start -->
    <section class="txt-image left-txt space-big left-bottom">
      <div class="container">
        <div class="txt-img-multi">
          <div class="only-txt">
            <div class="dot">
              <img src="/images/oval-1.png" alt="" />
            </div>
            <div class="single-txt">
              <h2 class="title-thin">Nuestro Impacto</h2>
              <p>
                En la Fundación Cultiva el Arte y la Cultura, queremos cambiar
                historias de niños, niñas y adolescentes, proporcionándoles
                espacios seguros para desarrollar sus talentos a través de
                actividades lúdicas, culturales y artísticas que realizan
                durante su tiempo libre. Somos un programa apoyado por la
                Fundación Bolívar Davivienda.
              </p>
            </div>
          </div>
          <div class="only-img">
            <img src="/images/programa-cultivarte/2-conozcanos/conozcanos_bloque1.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- image text left right end -->

    <!-- Areas start -->
    <section class="areas">
      <div class="areas-container">
        <h2>Áreas de trabajo</h2>
        <div class="all-areas">
          <div class="single-areas">
            <div class="areas-img">
              <img src="/images/mutualismo.png" alt="" />
            </div>
            <p>Promoción de valores</p>
          </div>
          <div class="single-areas">
            <div class="areas-img">
              <img src="/images/arte-y-cultura.png" alt="" />
            </div>
            <p>Arte y cultura</p>
          </div>
          <div class="single-areas">
            <div class="areas-img">
              <img src="/images/educaci.png" alt="" />
            </div>
            <p>Educación financiera</p>
          </div>
          <div class="single-areas">
            <div class="areas-img">
              <img src="/images/lectura.png" alt="" />
            </div>
            <p>Promoción de lectura</p>
          </div>
          <div class="single-areas">
            <div class="areas-img">
              <img src="/images/ciencia-y-tecnologia.png" alt="" />
            </div>
            <p>Ciencia y tecnología</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Areas end -->

    <!-- image text left right start -->
    <section class="txt-image right-txt right-top donde">
      <div class="container">
        <div class="txt-img-multi no-pos-right align-items-end">
          <div class="only-img">
            <img src="/images/programa-cultivarte/2-conozcanos/conozcanos_2dondeestamos.jpg" alt="" />
          </div>
          <div class="only-txt">
            <div class="single-txt">
              <h2 class="title-thin">¿Dónde estamos ubicados?</h2>
              <p class="pb-4">
                Contamos con más de 80 sedes en municipios a lo largo del
                territorio nacional y nuestro objetivo es llegar a lugares donde
                los programas pedagógicos generen mayor impacto.
              </p>
              <p>
                También contamos con 6 sedes en Centro América en Panamá, El
                Salvador, Honduras y Costa Rica donde niños, niñas y
                adolescentes encuentran espacios de ocio en los que desarrollan
                las competencias necesarias para cumplir sus sueños, mientras
                que aprenden y se divierten.
              </p>
              <a  
              :href="$cultivarteData.cultivarteDondeEstamosUbicados.dondeEstamosUbicados"
              >Conozca más <img src="/images/back_acon2.svg" /></a>
            </div>
            <div class="dot">
              <img src="/images/oval-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- image text left right end -->

    <!-- icon section start -->
    <section class="achive">
      <div class="container">
        <div class="all-achive">
          <div class="single-achive">
            <div class="achive-img">
              <img src="/images/programa-cultivarte/2-conozcanos/iconos-cifras/red.png" alt="" style="img-fluid" />
            </div>
            <div class="achive-txt">
              <h3 id="beneficiarios-counter"></h3>
              <p>Beneficiarios</p>
            </div>
          </div>
          <div class="single-achive">
            <div class="achive-img">
             <img src="/images/programa-cultivarte/2-conozcanos/iconos-cifras/edificio.png" alt="" style="img-fluid" />
            </div>
            <div class="achive-txt">
              <h3 id="sedes-counter"></h3>
              <p>Sedes</p>
            </div>
          </div>
          <div class="single-achive">
            <div class="achive-img">
               <img src="/images/programa-cultivarte/2-conozcanos/iconos-cifras/responsabilidad.png" alt="" style="img-fluid" />
            </div>
            <div class="achive-txt">
              <h3 id="asistentes-permanentes-counter"></h3>
              <p>Asistentes permanentes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- icon section end -->

    <!-- Testimonial start -->
    <section class="testimonial">
      <div class="testi-title">
        <h3>Testimonios</h3>
        <h4>De nuestros integrantes</h4>
      </div>
      <client-only>
        <carousel :perPageCustom="[
            [575, 1],
            [1024, 2],
            [1200, 3],
          ]" :navigationEnabled="true">
          <slide v-for="(item, i) in $cultivarteData.cultivarteConozcanos
              .testimonios" :key="i" class="testi-center">
            <div class="testi-single">
              <div class="testi-txt">
                <h3 v-text="item.title" />
                <p v-text="item.description" />
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
    </section>
    <!-- Testimonial end -->

    <!-- image text left right start -->
    <section class="txt-image left-txt space-big pb-0">
      <div class="container">
        <div class="txt-img-multi align-items-end">
          <div class="only-txt">
            <div class="dot">
              <img src="/images/oval-1.png" alt="" />
            </div>
            <div class="single-txt">
              <h2 class="title-thin">Cultivarte a través del tiempo</h2>
              <p>
                Cultivarte nace con el propósito de convertirse en un agente de
                cambio para la vida de los niños, niñas y jóvenes de
                Latinoamérica. Buscamos fortalecer sus talentos sin importar las
                condiciones en las que vivan, ni el lugar donde se encuentran.
                Conozca aquí nuestra historia completa y cómo hemos crecido a
                través del tiempo.
              </p>
            </div>
          </div>
          <div class="only-img">
            <img src="/images/programa-cultivarte/2-conozcanos/conozcanos_3tiempo.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- image text left right end -->

    <!-- image text left right start -->
    <section class="txt-image right-txt right-top">
      <div class="container">
        <div class="txt-img-multi no-pos-right">
          <div class="only-img">
            <img src="/images/programa-cultivarte/2-conozcanos/conozcanos_4inicio.jpg" alt="" />
          </div>
          <div class="only-txt">
            <div class="single-txt">
              <h2>Nuestro inicio</h2>
              <p class="pb-4">
                En 2012 nace el programa como la iniciativa de responsabilidad social más importante del Banco Davivienda que, consciente de la situación en la que se encontraba la infancia y adolescencia en diferentes zonas del país, decide tener una participación activa en la transformación de la historia de vida de los niños, niñas y jóvenes. 
              </p>
              <p>
                De esta manera, buscamos brindarles a sus poblaciones, espacios seguros en los que puedan pasar sus ratos libres de manera constructiva y segura, y alejándose de riesgos sociales. Así buscamos fortalecer el vínculo de los beneficiarios con la alta calidad educacional, y así, potenciar sus competencias. Iniciamos primero con operaciones en dos sedes, que fueron en Anserma (Caldas) y Pacho (Cundinamarca), y en la actualidad contamos con más de 80 distribuidas en toda Colombia y varios países de Centroamérica.
              </p>
              <p></p>
              “La educación es el pasaporte para el futuro, porque el mañana pertenece a quienes se preparan hoy.” - El-Hajj Malik El-Shabazz (Malcom X).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- image text left right end -->

    <!-- image text left right start -->
    <section class="txt-image left-txt pt-0">
      <div class="container">
        <div class="txt-img-multi no-pos-left">
          <div class="only-txt">
            <div class="single-txt">
              <h2>Cultivarte hoy</h2>
              <p>
                En 2018 nos constituimos como la Fundación Cultiva el Arte y la Cultura y somos apoyados por la
                Fundación Bolívar Davivienda. Actualmente contamos con más de 80 sedes activas ubicadas
                estratégicamente, en lugares en los que era necesaria la implementación de iniciativas que permitieran a
                los beneficiarios convertirse en seres integrales, desarrollando significativamente sus talentos, a
                través del tiempo libre.
              </p>
              <p>
                “El mundo pertenece a quienes creen en la belleza de sus sueños.” - Eleanor Roosevelt
              </p>
            </div>
          </div>
          <div class="only-img">
            <img src="/images/programa-cultivarte/2-conozcanos/conozcanos_5cultivartehoy.jpg" alt="" />
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
          <div class="logos">
            <div class="s-logo">
              <img src="/images/Combined Shape.svg" alt="" class="img-fluid" />
            </div>
            <div class="s-logo">
              <img src="/images/Combined Shape.svg" alt="" class="img-fluid" />
            </div>
            <div class="s-logo">
              <img src="/images/Combined Shape.svg" alt="" class="img-fluid" />
            </div>
            <div class="s-logo">
              <img src="/images/Combined Shape.svg" alt="" class="img-fluid" />
            </div>
            <div class="s-logo">
              <img src="/images/Combined Shape.svg" alt="" class="img-fluid" />
            </div>
            <div class="s-logo">
              <img src="/images/Combined Shape.svg" alt="" class="img-fluid" />
            </div>
            <div class="s-logo">
              <img src="/images/Combined Shape.svg" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Con el apoyo de end -->
  </main>
</template>

<script>
export default {
  mounted() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.counter('beneficiarios-counter', 0, '+100000', 100)
        this.counter('sedes-counter', 0, 86, 0.5)
        this.counter('asistentes-permanentes-counter', 0, '+11000', 20)
        observer.unobserve(document.querySelector('#beneficiarios-counter'))
      }
    })
    observer.observe(document.querySelector('#beneficiarios-counter'))
  },
  head() {
    return {
      title:
        this.$cultivarteData.cultivarteConozcanos.meta.title +
        ' - ' +
        this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            this.$cultivarteData.cultivarteConozcanos.meta.metaTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$cultivarteData.cultivarteConozcanos.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$cultivarteData.cultivarteConozcanos.meta.ogTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$cultivarteData.cultivarteConozcanos.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${this.$constants.baseURL}${this.$cultivarteData.cultivarteConozcanos.meta.ogImage}`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.common-banner.nc {
  background-image: linear-gradient(
      0deg,
      #111820 12%,
      rgba(255, 103, 27, 0.1) 100%
    ),
    url(/images/n-cultivarte.jpg);
}

@media (min-width: 768px) {
  .sobre-txt a,
  .single-txt a {
    font-family: sansationbold;
    font-size: 16px;
    color: #030303;
    display: inline-block;
    margin-top: 25px;
  }

  .sobre-txt a img,
  .single-txt a img {
    width: 17px;
    transform: rotate(180deg);
  }

  .right-txt .no-pos-right .single-txt {
    position: unset;
    margin: 0 0 0 -297px;
  }

  .left-txt .no-pos-left .single-txt {
    position: relative;
    margin: 0 -300px 0 0;
    top: 0;
  }

  .no-pos-right .only-img {
    padding-top: 100px;
  }
}

.bs-txt p {
  font-family: Nunito, sans-serif;
  font-size: 16px;
  color: #58595b;
  line-height: 30px;
  padding: 13px 0;
  max-width: 380px;
}

.single-txt h2.title-thin {
  font-weight: normal;
}

@media (min-width: 768px) {
  .left-txt .no-pos-left .bs-txt p {
    max-width: 328px;
    margin: 0 0 0 auto;
  }

  .left-bottom .only-img {
    padding-bottom: 50px;
  }

  .left-bottom .single-txt {
    top: unset;
    bottom: 0;
  }

  .donde {
    padding: 100px 0;
  }
}

/* Areas css start */
.areas {
  background: linear-gradient(130deg, #313338 52%, #2c3e53 100%);
  padding: 70px 0;
}

.areas-container {
  max-width: 95%;
  padding: 0 15px;
  margin: 0 auto;
}

.areas h2 {
  font-family: Nunito, sans-serif;
  font-size: 72px;
  color: #ffffff;
  line-height: 72px;
  text-align: center;
  font-weight: normal;
  padding-bottom: 70px;
}

.all-areas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.single-areas {
  width: calc(19% - 10px);
  margin: 10px;
  background: #fff;
  border-radius: 3px;
  padding: 40px 30px;
}

.areas-img {
  height: 133px;
  display: flex;
  justify-content: center;
}

.single-areas img {
  width: 70%;
  height: auto;
  object-fit: contain;
}

.single-areas p {
  font-family: sansationregular;
  font-size: 26px;
  color: #313338;
  line-height: 26px;
  text-align: center;
  padding-top: 20px;
}

/* Areas css end */
/* icon section start */
.achive {
  padding-bottom: 100px;
}

.all-achive {
  display: flex;
  justify-content: space-between;
}

.single-achive {
  width: calc(33.33% - 10px);
  display: flex;
  align-items: flex-end;
  margin: 10px;
  justify-content: center;
}

.achive-txt {
  padding-left: 30px;
  width: calc(100% - 94px);
}

.achive-img {
  width: 94px;
}

.achive-txt h3 {
  font-family: Nunito, sans-serif;
  font-weight: bold;
  font-size: 50px;
  color: #ff671b;
  line-height: 52px;
  margin-bottom: 7px;
}

.achive-txt p {
  font-family: Nunito, sans-serif;
  font-size: 18px;
  color: #111820;
  line-height: 30px;
}

/* icon section end */
.logos {
  display: flex;
}

.s-logo {
  margin: 10px 14px;
  width: calc(14% - 14px);
}

@media (max-width: 767px) {
  .areas {
    padding: 25px 0;
  }

  .areas h2 {
    font-size: 42px;
    padding-bottom: 15px;
  }

  .areas-container {
    max-width: 100%;
  }

  .areas-img {
    height: 75px;
  }

  .all-areas .single-areas {
    width: calc(46% - 5px);
    margin: 5px;
    padding: 20px 15px;
  }

  .all-areas .single-areas p {
    font-size: 20px;
    padding-top: 0;
  }

  .achive {
    padding: 0 0 15px;
  }

  .single-achive {
    align-items: center;
    margin: 0;
    padding: 10px;
    background: #dadada;
    width: 100%;
  }

  .achive-img {
    width: 60px;
  }

  .achive-img img {
    max-width: 100%;
  }

  .single-achive:nth-child(2n + 2) {
    background: #f7f7f7;
  }

  .achive-txt h3 {
    margin: 0;
    font-size: 28px;
    line-height: normal;
    color: #ff671b;
  }

  .achive-txt p {
    font-size: 18px;
    line-height: normal;
    color: #111820;
  }

  .conel {
    padding-bottom: 0px;
  }

  .conel .s-logo {
    width: calc(50% - 10px);
    margin: 5px;
  }
}
</style>
