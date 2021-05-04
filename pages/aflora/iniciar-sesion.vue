<template>
  <main>
    <div class="container position-relative innerpage">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item to="/aflora">Aflora</b-breadcrumb-item>
        <b-breadcrumb-item active>Nuestras organizaciones</b-breadcrumb-item>
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
        <img src="/images/nuestras_bg.jpg" alt="" class="object-fit-cover" />
      </div>
      <div class="pg-tit-inner position-absolute text-center">
        <h1 class="ff-sans-b">Nuestras organizaciones</h1>
      </div>
    </section>

    <section class="cundinamarca-s">
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
                  <h5 class="ff-sans-r">Departamento</h5>
                  <b-form-select class="mb-3">
                    <b-form-select-option value="a"
                      >Antioquia</b-form-select-option
                    >
                    <b-form-select-option value="b"
                      >Cundinamarca</b-form-select-option
                    >
                    <b-form-select-option value="c"
                      >Nariño</b-form-select-option
                    >
                  </b-form-select>
                </div>
                <div class="selec-bx">
                  <h5 class="ff-sans-r">Linea de gestión</h5>
                  <b-form-select class="mb-3">
                    <b-form-select-option value="a"
                      >Option 1</b-form-select-option
                    >
                    <b-form-select-option value="b"
                      >Option 2</b-form-select-option
                    >
                    <b-form-select-option value="c"
                      >Option 3</b-form-select-option
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
                          <p>Departamento</p>
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
                          <ul class="ff-sans-r">
                            <li>
                              <div>
                                <b-form-checkbox
                                  id="checkbox-1"
                                  name="checkbox-1"
                                  class="ff-nunito"
                                >
                                  Antioquia
                                </b-form-checkbox>
                              </div>
                            </li>
                            <li>
                              <div>
                                <b-form-checkbox
                                  id="checkbox-2"
                                  name="checkbox-2"
                                  class="ff-nunito"
                                >
                                  Cundinamarca
                                </b-form-checkbox>
                              </div>
                            </li>
                            <li>
                              <div>
                                <b-form-checkbox
                                  id="checkbox-3"
                                  name="checkbox-3"
                                  class="ff-nunito"
                                >
                                  Nariño
                                </b-form-checkbox>
                              </div>
                            </li>
                          </ul>
                        </b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                  <b-card no-body>
                    <b-card-header header-tag="header" role="tab">
                      <b-button
                        block
                        v-b-toggle.accordion-5
                        variant="info"
                        class="ff-sans-r"
                      >
                        <div class="d-flex justify-content-between">
                          <p>Línea de gestion</p>
                          <i class="ic-accordion position-relative"></i>
                        </div>
                      </b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-5"
                      accordion="my-accordions"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <b-card-text>
                          <ul class="ff-sans-r">
                            <li>
                              <div>
                                <b-form-checkbox
                                  id="checkbox-4"
                                  name="checkbox-4"
                                  class="ff-nunito"
                                >
                                  Antioquia
                                </b-form-checkbox>
                              </div>
                            </li>
                            <li>
                              <div>
                                <b-form-checkbox
                                  id="checkbox-5"
                                  name="checkbox-5"
                                  class="ff-nunito"
                                >
                                  Cundinamarca
                                </b-form-checkbox>
                              </div>
                            </li>
                            <li>
                              <div>
                                <b-form-checkbox
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  class="ff-nunito"
                                >
                                  Nariño
                                </b-form-checkbox>
                              </div>
                            </li>
                          </ul>
                        </b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </client-only>
            </div>
          </div>
          <div class="txt-par-info">
            <div class="inside-box">
              <div class="text-center">
                <h4 class="ff-sans-b">Fundación</h4>
                <p class="ff-nunito">Fundación Amigos de Amagá</p>
                <small class="ff-nunito"
                  >Carrera 43A Calle 18 Sur 13 Amagá, Antioquia, Colombia</small
                >
                <div class="d-flex three-sm-bx margin-0-auto flex-wrap-767">
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Línea de gestión</h4>
                    <p class="ff-nunito">Cultura y recreación</p>
                  </div>
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Nivel</h4>
                  </div>
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Contactos</h4>
                    <a href="javasript:void(0)">
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
                    </a>
                    <a href="javascript:void(0)">
                      <img src="/images/somes.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="inside-box">
              <div class="text-center">
                <h4 class="ff-sans-b">Fundación</h4>
                <p class="ff-nunito">Fundación Amigos de Amagá</p>
                <small class="ff-nunito"
                  >Carrera 43A Calle 18 Sur 13 Amagá, Antioquia, Colombia</small
                >
                <div class="d-flex three-sm-bx margin-0-auto flex-wrap-767">
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Línea de gestión</h4>
                    <p class="ff-nunito">Cultura y recreación</p>
                  </div>
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Nivel</h4>
                  </div>
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Contactos</h4>
                    <a href="javasript:void(0)">
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
                    </a>
                    <a href="javascript:void(0)">
                      <img src="/images/somes.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="inside-box">
              <div class="text-center">
                <h4 class="ff-sans-b">Fundación</h4>
                <p class="ff-nunito">Fundación Amigos de Amagá</p>
                <small class="ff-nunito"
                  >Carrera 43A Calle 18 Sur 13 Amagá, Antioquia, Colombia</small
                >
                <div class="d-flex three-sm-bx margin-0-auto flex-wrap-767">
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Línea de gestión</h4>
                    <p class="ff-nunito">Cultura y recreación</p>
                  </div>
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Nivel</h4>
                  </div>
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Contactos</h4>
                    <a href="javasript:void(0)">
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
                    </a>
                    <a href="javascript:void(0)">
                      <img src="/images/somes.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="inside-box">
              <div class="text-center">
                <h4 class="ff-sans-b">Fundación</h4>
                <p class="ff-nunito">Fundación Amigos de Amagá</p>
                <small class="ff-nunito"
                  >Carrera 43A Calle 18 Sur 13 Amagá, Antioquia, Colombia</small
                >
                <div class="d-flex three-sm-bx margin-0-auto flex-wrap-767">
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Línea de gestión</h4>
                    <p class="ff-nunito">Cultura y recreación</p>
                  </div>
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Nivel</h4>
                  </div>
                  <div class="onew text-center">
                    <h4 class="ff-sans-b">Contactos</h4>
                    <a href="javasript:void(0)">
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
                    </a>
                    <a href="javascript:void(0)">
                      <img src="/images/somes.png" alt="" />
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
  methods: {
    goBack() {
      window.history.back()
    },
  },
  head() {
    return {
      title: this.$constants.afloraIniciarSesion.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.afloraIniciarSesion.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.afloraIniciarSesion.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.afloraIniciarSesion.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.afloraIniciarSesion.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants.afloraIniciarSesion.meta.ogImage,
        },
      ],
    }
  },
}
</script>
