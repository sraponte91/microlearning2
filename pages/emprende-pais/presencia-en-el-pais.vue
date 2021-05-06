<template>
  <main>
    <div class="container position-relative innerpage">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item to="/emprende-pais"
          >Emprende país
        </b-breadcrumb-item>
        <b-breadcrumb-item active>Precencia en el Pais</b-breadcrumb-item>
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
    <section class="main-slider-at-top aflora-pge position-relative after-po">
      <div class="img-prt position-relative">
        <img
          src="/images/presenciapais_header_desktop_bbea.jpg"
          alt=""
          class="object-fit-cover"
        />
      </div>
      <div class="pg-tit-inner position-absolute text-center">
        <h1 class="ff-sans-b">Presencia en el País</h1>
      </div>
    </section>

    <section class="cundinamarca-s presencia-en">
      <div class="container">
        <div class="text-center">
          <h2 class="ff-sans-b">Cundinamarca</h2>
        </div>
        <div class="d-flex align-items-start flex-wrap-767">
          <div class="filters-prt">
            <div class="text-right d-none-767">
              <a href="javascript:void(0)" class="clear-all">Limpiar</a>
            </div>
            <h4 class="ff-sans-b">Filtros</h4>
            <div class="d-none-n d-block-767">
              <div>
                <div class="selec-bx">
                  <h5 class="ff-sans-r">Municipio</h5>
                  <b-form-select
                    class="mb-3"
                    v-model="selectedCity"
                    @change="setCity()"
                  >
                    <b-form-select-option
                      v-for="(city, i) of cities"
                      :key="i"
                      :value="city"
                      >{{ city }}</b-form-select-option
                    >
                  </b-form-select>
                </div>
              </div>
            </div>
            <div class="d-none-767">
              <client-only>
                <div class="accordion" role="tablist">
                  <b-card no-body>
                    <b-card-header header-tag="header" role="tab">
                      <b-button
                        block
                        v-b-toggle.accordion-4
                        variant="info"
                        class="ff-sans-r"
                      >
                        <div class="d-flex justify-content-between">
                          <p>Municipio</p>
                          <i class="ic-accordion position-relative"></i>
                        </div>
                      </b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-4"
                      visible
                      accordion="my-accordions"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <b-card-text>
                          <b-form-checkbox-group v-model="selectedCities">
                            <ul class="ff-sans-r">
                              <li v-for="(city, i) of cities" :key="i">
                                <div>
                                  <b-form-checkbox
                                    class="ff-nunito"
                                    :value="city"
                                    >{{ city }}
                                  </b-form-checkbox>
                                </div>
                              </li>
                            </ul>
                          </b-form-checkbox-group>
                        </b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </client-only>
            </div>
          </div>
          <div class="txt-par-info">
            <div class="inside-box" v-for="(item, i) of municipio" :key="i">
              <div class="text-center">
                <h4 class="ff-sans-b">{{ item.title }}</h4>
                <p class="ff-nunito">{{ item.city }}</p>
                <div
                  class="three-sm-bx margin-0-auto flex-wrap-767 text-center w-100"
                >
                  <div class="onew text-center w-100">
                    <h4 class="ff-sans-b">{{ item.coordinator }}</h4>
                    <p class="ff-nunito">{{ item.name }}</p>
                  </div>
                  <div class="onew text-center w-100">
                    <a :href="'mailto:' + item.email">
                      <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        overflow="visible"
                        preserveAspectRatio="none"
                        viewBox="0 0 24 24"
                        width="46"
                        height="46"
                      >
                        <g>
                          <path
                            xmlns:default="http://www.w3.org/2000/svg"
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                            style="fill: rgb(255, 103, 27)"
                            vector-effect="non-scaling-stroke"
                          />
                        </g>
                      </svg>
                      {{ item.email }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  computed: {
    cities() {
      return this.$constants.emprendePaisPresenciaEnElPais.municipio
        .map((d) => d.city)
        .filter((v, i, a) => a.indexOf(v) === i)
    },
    municipio() {
      return this.$constants.emprendePaisPresenciaEnElPais.municipio.filter(
        (i) => {
          if (this.selectedCities.length) {
            return this.selectedCities.includes(i.city)
          } else {
            return true
          }
        }
      )
    },
  },
  data() {
    return {
      selectedCities: [],
      selectedCity: null,
    }
  },
  methods: {
    setCity() {
      this.selectedCities = [this.selectedCity]
    },
  },
  head() {
    return {
      title: this.$constants.emprendePaisPresenciaEnElPais.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.emprendePaisPresenciaEnElPais.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.emprendePaisPresenciaEnElPais.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.emprendePaisPresenciaEnElPais.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.emprendePaisPresenciaEnElPais.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants.emprendePaisPresenciaEnElPais.meta.ogImage,
        },
      ],
    }
  },
}
</script>
