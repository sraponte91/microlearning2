<template>
  <main>
    <!-- Breadcrums start -->
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/cultivarte">Cultivarte</b-breadcrumb-item>
          <b-breadcrumb-item active>Zona Lúdica</b-breadcrumb-item>
        </b-breadcrumb>
        <div
          class="back-to-home position-relative d-flex align-items-center small-size"
        >
          <i class="ic-back"></i>
          <a class="ff-sans-b" href="javascript:void(0)" @click="goBack()">
            Volver
          </a>
        </div>
      </div>
    </div>
    <!-- Breadcrums end -->

    <!-- requisitos start -->
    <section class="requisitos">
      <div class="container margin-0-auto">
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
          <div
            class="single-zona"
            v-for="(item, index) in $cultivarteData.cultivarteZonaLudica
              .plataformas"
            :key="index"
          >
            <h3 v-text="item.title" />
            <div class="zona-img">
              <img :src="item.image" alt="" />
            </div>
            <a :href="item.detailUrl target":"_blank">Ver más</a>
          </div>
        </div>
        <!-- <div class="page-btn">
          <a href="#">Cargar Más</a>
        </div> -->
      </div>
    </section>
    <!-- zona end -->
  </main>
</template>

<script>
export default {
  head() {
    return {
      title:
        this.$cultivarteData.cultivarteZonaLudica.meta.title +
        ' - ' +
        this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            this.$cultivarteData.cultivarteZonaLudica.meta.metaTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$cultivarteData.cultivarteZonaLudica.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$cultivarteData.cultivarteZonaLudica.meta.ogTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$cultivarteData.cultivarteZonaLudica.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${this.$constants.baseURL}${this.$cultivarteData.cultivarteZonaLudica.meta.ogImage}`,
        },
      ],
    }
  },
}
</script>

<style scoped>
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
.requisitos .container {
  padding: 30px 0;
  border-bottom: 1px solid #ff671b;
}
.requisitos h2 {
  font-family: Nunito;
  font-size: 72px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 72px;
  text-align: center;
}
.requisitos h3 {
  font-family: 'sansationbold';
  font-size: 48px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 100px;
  text-align: center;
}
.requisitos p {
  font-family: Nunito;
  font-size: 20px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  line-height: 30px;
  text-align: center;
}
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
@media (max-width: 767px) {
  .requisitos h2 {
    font-size: 42px;
    line-height: normal;
    padding: 0 15px;
  }
  .requisitos h3 {
    font-size: 28px;
    line-height: normal;
    padding: 0 15px 15px;
  }
  .requisitos p {
    font-size: 20px;
    padding: 0 15px;
  }
  .all-zona {
    padding-top: 25px;
  }
  .single-zona {
    width: calc(100% - 24px);
  }
}
</style>
