<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/emprende-pais"
            >Emprende país
          </b-breadcrumb-item>
          <b-breadcrumb-item to="/emprende-pais/desarrollamos-talento"
            >Desarrollamos talento
          </b-breadcrumb-item>
          <b-breadcrumb-item active>Consultores</b-breadcrumb-item>
        </b-breadcrumb>
        <div
          class="back-to-home position-relative d-flex align-items-center small-size"
        >
          <i class="ic-back" @click="goBack()"></i>
          <a class="ff-sans-b" href="javascript:void(0)" @click="goBack()"
            >Volver</a
          >
        </div>
      </div>
    </div>

    <section class="ig-tx-zing-zag desarrolla bg-white">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
            <h2 class="ff-sans-b ss d-block-991 d-none-n">Consultores</h2>
            <div class="txt-points position-relative order-2-991">
              <h2 class="ff-sans-b d-none-991">Consultores</h2>
              <div class="pra-p for-bgcol">
                <!--<h3 class="ff-sans-b">
                  Trabajamos por los grandes <br />
                  emprendedores del país
                </h3>-->
                <p>Nuestros consultores son expertos en áreas estratégicas de muy alto nivel, buscamos que las pymes tengan acceso al mejor conocimiento y experiencia. Trabajamos hoy en día con 26 firmas de consultoría, al servicio de los emprendedores que participan en Emprende País en temas: Comercial,  Comunicaciones,  Estrategia,  Finanzas,  Gobierno Corporativo,  Innovación,  Marketing y Marketing Digital, Sostenibilidad, Dirección y Liderazgo. </p>
                <p>Nuestros consultores son expertos en emprendimiento y encargados de llevar conocimiento a las empresas. Cada uno de ellos, desde su sector, se convierte en una pieza clave de la ruta de formación para los emprendedores exitosos.</p>
              </div>
            </div>
            <div class="img-points order-1-991">
              <img
                src="/images/programa-emprende-pais/4-consultores/consultores_bloque1.jpg"
                alt=""
                class="object-fit-cover"
              />
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
      title: this.$emprendePaisData.emprendePaisDesarrollamosTalentoConsultores
        .meta.title + ' - ' + this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$emprendePaisData
            .emprendePaisDesarrollamosTalentoConsultores.meta.metaTitle + ' - ' + this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$emprendePaisData
            .emprendePaisDesarrollamosTalentoConsultores.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$emprendePaisData
            .emprendePaisDesarrollamosTalentoConsultores.meta.ogTitle + ' - ' + this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$emprendePaisData
            .emprendePaisDesarrollamosTalentoConsultores.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$emprendePaisData.emprendePaisDesarrollamosTalentoConsultores
              .meta.ogImage,
        },
      ],
    }
  },
}
</script>