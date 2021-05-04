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
            <span aria-current="location">Desarrollamos talento</span>
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

    <!-- image text left right start -->
    <section class="txt-image left-txt space-big">
      <div class="container">
        <div class="txt-img-multi">
          <div class="only-txt outer-txt">
            <div class="b-title">
              <h2>Desarrollamos talento</h2>
            </div>
            <div class="single-txt">
              <p>
                Desarrollamos en nuestros beneficiarios la capacidad de resolver
                inconvenientes, encontrando nuevos y mejores caminos que los
                lleven a cumplir sus objetivos y metas.
              </p>
            </div>
            <div>
              <img src="/images/oval-1.png" alt="" />
            </div>
          </div>
          <div class="only-img">
            <img src="/images/nuestro.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- image text left right end -->

    <!-- image text left right start -->
    <section class="txt-image right-txt right-top pt-0">
      <div class="container">
        <div class="txt-img-multi">
          <div class="only-img">
            <img src="/images/lady.jpg" alt="" />
          </div>
          <div class="only-txt">
            <div class="single-txt top-small">
              <p class="pb-4">
                En Becas al Talento hemos creado una serie de talleres que
                fortalecerán el talento de estos jóvenes:
              </p>
              <ul>
                <li>Liderazgo transformador</li>
                <li>
                  Práctica de <i><b>mindfulness</b></i>
                </li>
                <li>Imagen profesional</li>
                <li>Negociación y trabajo en equipo</li>
                <li>Presentaciones de alto impacto</li>
                <li>Sustentación – Acto comunicativo</li>
                <li>Metodologías de proyectos</li>
                <li>Innovación</li>
                <li>Conocimiento digital</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- image text left right end -->
  </main>
</template>

<style>
/* Breadcrumb css start */
.breadcrumb {
  background-color: transparent;
  border: none;
  z-index: 8;
  margin: 0;
  padding: 0;
  left: 100px;
  top: 30px;
  align-items: center;
  font-family: sansationregular;
}
.breadcrumb-item.active,
.breadcrumb li {
  color: #111820;
}
.breadcrumb li a {
  color: #6fccdc;
  font-size: 16px;
}
.breadcrumb-item + .breadcrumb-item:before {
  float: left;
  padding-right: 0.5rem;
  color: #6c757d;
  content: '/';
}
.breadc-bak .back-to-home.small-size {
  left: -12px;
  top: 0;
}
.breadc-bak .back-to-home .ic-back {
  background: url(/images/back_acon2.svg) 0 0 no-repeat;
  height: 30px;
  width: 30px;
}
.back-to-home.small-size .ic-back {
  transform: scale(0.7);
}
.breadc-bak .back-to-home a {
  color: #77777a;
}
.back-to-home.small-size a {
  font-size: 15px;
}
/* Breadcrumb css end */
.b-title h2 {
  font-family: sansationbold;
  font-size: 65px;
  color: #2f425b;
  line-height: 62.5px;
}
.b-title p {
  font-family: sansationbold;
  font-size: 21px;
  color: #313338;
  line-height: 30px;
}
.right-top .single-txt.top-small {
  top: 40px;
}
.left-txt .outer-txt .single-txt,
.right-txt .outer-txt .single-txt {
  top: 150px;
}
.left-txt .outer-small-txt .single-txt,
.right-txt .outer-small-txt .single-txt {
  top: 80px;
}
/* como css start */
.como {
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.95) 16%,
      rgba(255, 255, 255, 0.7) 100%
    ),
    url('/images/home-fondobloque.jpg');
  min-height: 796px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  padding: 50px 0;
}
.como h2 {
  font-family: sansationbold;
  font-size: 72px;
  color: #313338;
  line-height: 108px;
  text-align: center;
  padding-bottom: 35px;
}
.como p {
  max-width: 692px;
  font-family: Nunito, sans-serif;
  font-size: 24px;
  color: #77777a;
  line-height: 32px;
  text-align: center;
  margin: 0 auto;
}
.cultivarte-banner {
  background-image: linear-gradient(
      -90deg,
      rgba(46, 46, 46, 0.1) 0%,
      rgba(33, 33, 33, 1) 70%,
      rgba(33, 33, 33, 1) 100%
    ),
    url(/images/cultivarte-banner.png);
}
/* como css end */
.only-txt {
  z-index: 1;
}
</style>