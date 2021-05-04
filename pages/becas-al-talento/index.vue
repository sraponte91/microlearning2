<template>
  <main>
    <section class="becas-banner">
      <div class="container-fluid">
        <div class="banner-content">
          <div class="b-logo">
            <img src="/images/becas-banner-logo.png" alt="">
          </div>
          <p>Becas al Talento es un programa de la Fundación Bolívar Davivienda, que busca apoyar a estudiantes con un alto desempeño académico, de diferentes instituciones de educación superior para culminar sus estudios en caso de dificultades económicas. º</p>
        </div>
      </div>
      <div class="banner-img">
        <img src="/images/becas-banner-mobile.jpg" alt="">
      </div>
    </section>
    <!-- Banner end -->

    <!-- Link start -->
    <section class="becas-links">
      <div class="container">
        <div class="link-main">
          <NuxtLink to="/becas-al-talento/conozcanos" class="single-link"
            >Conózcanos</NuxtLink
          >
          <NuxtLink to="/becas-al-talento/desarrollamos-talento" class="single-link"
            > Desarrollamos talento </NuxtLink
          >
          <NuxtLink to="/becas-al-talento/requisitos" class="single-link"
            >Requisitos</NuxtLink
          >
        </div>
      </div>
    </section>
    <!-- Link end -->

    <!-- Sobre Becas start -->
    <section class="sobre-becas txt-image right-txt">
      <div class="container">
        <div class="sobre-main txt-img-multi">
          <div class="sobre-img only-img">
            <img src="/images/sobre.jpg" alt="">
          </div>
          <div class="sobre-content only-txt">
            <div>
              
            </div>
            <div class="sobre-txt single-txt">
              <h2>Sobre Becas</h2>
              <p>En el programa apoyamos el talento y la excelencia de los estudiantes de nuestras universidades aliadas, con el fin de garantizar que terminen sus estudios profesionales de manera exitosa. Este beneficio se otorga como una beca-crédito para estudiantes que estén cursando entre 5to y 8vo semestre y está ligado a las políticas y procesos internos de las instituciones universitarias.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Sobre Becas end -->

    <!-- call to action start -->
    <section class="cta">
      <div class="container">
        <h3>Sobre nosotros</h3>
        <h2>Desarrollamos Talento</h2>
        <a :href="$constants.becasAlTalento.cuentameMasLink">Cuéntame más</a>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: this.$constants.becasAlTalento.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.becasAlTalento.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.becasAlTalento.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.becasAlTalento.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.becasAlTalento.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$constants.baseURL + this.$constants.becasAlTalento.meta.ogImage,
        },
      ],
    }
  },
}
</script>