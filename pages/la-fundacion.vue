<template>
  <main>
    <section class="la-fundacion-main-sec pg-la-main">
      <div class="d-flex flex-wrap">
        <div
          class="sm-wid txt-part-lft d-flex align-items-center justify-content-center"
        >
          <div class="in-sm-size-bx text-white">
            <h1 class="ff-sans-b">La Fundación</h1>
            <div class="pra ff-nunito">
              <p>
                Somos el brazo social del Grupo Empresarial Bolívar, con más de 75 años de trayectoria, construyendo confianza y una sólida reputación en diversos sectores del mercado colombiano.
              </p>
              <p>
                Desde el año 2009, dedicamos esfuerzos a las transformaciones estructurales, sostenibles y de impacto en la sociedad, nuestro propósito es desarrollar talento para construir país.
              </p>
            </div>
          </div>
        </div>
        <div class="sm-wid img-part-rght">
          <ul class="d-flex">
            <li>
              <img
                class="object-fit-cover"
                src="/images/seccion-la-fundacion/lafundacion_slider1.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                class="object-fit-cover"
                src="/images/seccion-la-fundacion/lafundacion_slider2.jpg"
                alt=""
              />
            </li>
            <li>
              <img 
                class="object-fit-cover"
                src="/images/seccion-la-fundacion/lafundacion_slider3.jpg"
                alt="" />
            </li>
            <li>
              <img
                class="object-fit-cover"
                src="/images/seccion-la-fundacion/lafundacion_slider4.jpg"
                alt=""
              />
            </li>
            <li>
              <img 
                class="object-fit-cover"
                src="/images/seccion-la-fundacion/lafundacion_slider5.jpg"
                alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="misi-visi-sec">
      <div class="container">
        <client-only>
          <div class="accordion" role="tablist">
            <b-card no-body>
              <div class="d-flex w-100 flex-wrap-991 align-items-center">
                <div class="tabs-titles ff-sans-b">
                  <b-card-header
                    v-for="(item, i) of $constants.laFundacion.tabs"
                    :key="i"
                    header-tag="header"
                    role="tab"
                  >
                    <b-button
                      block
                      v-b-toggle="'accordion-' + i"
                      variant="info"
                    >
                      <div class="d-flex justify-content-between">
                        <p>{{ item.title }}</p>
                        <div
                          class="plus-sign position-relative after-po before-po"
                        ></div>
                      </div>
                    </b-button>
                  </b-card-header>
                </div>
                <div class="tabs-contains">
                  <b-collapse
                    v-for="(item, i) of $constants.laFundacion.tabs"
                    :key="i"
                    :id="'accordion-' + i"
                    visible
                    accordion="mision-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <div
                          class="pra-sec position-relative after-po before-po"
                        >
                          <div
                            class="position-relative text-white ff-nunito"
                            v-html="item.description"
                          ></div>
                        </div>
                        <div
                          class="page-links d-flex ff-sans-r justify-content-center text-white flex-wrap-767"
                        >
                          <a
                            v-for="(tag, i) of item.tags"
                            :key="i"
                            :href="tag.url"
                            >{{ tag.title }}</a
                          >
                        </div>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </div>
              </div>
            </b-card>
          </div>
        </client-only>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: this.$constants.laFundacion.meta.title + ' - ' + this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.laFundacion.meta.metaTitle + ' - ' + this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.laFundacion.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.laFundacion.meta.ogTitle + ' - ' + this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.laFundacion.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$constants.baseURL + this.$constants.laFundacion.meta.ogImage,
        },
      ],
    }
  },
}
</script>
