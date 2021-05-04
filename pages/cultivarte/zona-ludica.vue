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
        <div class="pm-title border-orange">
          <h2>Zona Lúdica</h2>
          <h3>Plataformas educativas</h3>
          <p>
            Conoce los portales aliados donde podrás aprender mientras te
            diviertes.
          </p>
        </div>
      </div>
    </section>
    <!-- requisitos end -->

    <!-- zona start -->
    <section>
      <div class="container">
        <div class="all-zona">
          <div class="single-zona">
            <h3>Los zúper</h3>
            <div class="zona-img">
              <img src="/images/logo-los.png" alt="" />
            </div>
            <a href="#">Ver más</a>
          </div>
          <div class="single-zona">
            <h3>Los zúper</h3>
            <div class="zona-img">
              <img src="/images/logo-code-combat.png" alt="" />
            </div>
            <a href="#">Ver más</a>
          </div>
          <div class="single-zona">
            <h3>Los zúper</h3>
            <div class="zona-img">
              <img src="/images/logo-biblioteca.png" alt="" />
            </div>
            <a href="#">Ver más</a>
          </div>
          <div class="single-zona">
            <h3>Los zúper</h3>
            <div class="zona-img">
              <img src="/images/logo-segur-polis.png" alt="" />
            </div>
            <a href="#">Ver más</a>
          </div>
          <div class="single-zona">
            <h3>Los zúper</h3>
            <div class="zona-img">
              <img src="/images/logos-ae-f-monetarium.png" alt="" />
            </div>
            <a href="#">Ver más</a>
          </div>
          <div class="single-zona">
            <h3>Los zúper</h3>
            <div class="zona-img">
              <img src="/images/logo-casita-de-artistas.png" alt="" />
            </div>
            <a href="#">Ver más</a>
          </div>
          <div class="single-zona">
            <h3>Los zúper</h3>
            <div class="zona-img">
              <img src="/images/logo-discovery-en-la-escuela.png" alt="" />
            </div>
            <a href="#">Ver más</a>
          </div>
          <div class="single-zona">
            <h3>Los zúper</h3>
            <div class="zona-img">
              <img src="/images/logo-guardianes-de-la-musica.png" alt="" />
            </div>
            <a href="#">Ver más</a>
          </div>
        </div>
        <div class="page-btn">
          <a href="#">Cargar Más</a>
        </div>
      </div>
    </section>
    <!-- zona end -->
  </main>
</template>
<style>
.pm-title p {
  font-family: Nunito, sans-serif;
  font-size: 20px;
  color: #000000;
  line-height: 30px;
  text-align: center;
}
.pm-title.border-orange {
  border-color: #ff671b;
}
/* zona css start */
.all-zona {
  display: flex;
  flex-wrap: wrap;
  padding-top: 80px;
}
.single-zona {
  width: calc(32% - 12px);
  margin: 12px 12px 30px 12px;
}
.single-zona h3 {
  font-family: sansationregular;
  font-size: 20px;
  color: #111820;
  text-transform: uppercase;
  padding-bottom: 10px;
}
.zona-img {
  height: 252px;
  border-radius: 4px;
  background: #f7f7f7;
  box-shadow: 0px 0px 15px rgba(17, 24, 32, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.zona-img img {
  width: 80%;
  object-fit: contain;
  height: 100%;
}
.single-zona:hover .zona-img {
  box-shadow: none;
}
.single-zona a {
  display: inline-block;
  padding: 10px 50px 10px 11px;
  font-family: Nunito, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #ff671b;
  margin-top: 20px;
}
.single-zona a:hover {
  padding: 10px 30px 10px 11px;
  background-color: #ff671b;
  color: #f7f7f7;
}
.page-btn {
  text-align: center;
  padding: 50px 0;
}
.page-btn a {
  max-width: 293px;
  width: 100%;
  padding: 10px 11px;
  background-color: #ff671b;
  font-family: Nunito, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  display: block;
  margin: 0 auto;
}
/* zona css end */
</style>
