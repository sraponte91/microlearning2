<template>
  <header class="w-100 header position-relative">
    <div class="fixed-this">
      <div class="container-fluid">
        <!-- navigation start -->
        <nav class="navbar navbar-expand-lg pl-0 pr-0">
          <NuxtLink to="/" class="navbar-brand">
            <img
              src="/images/fundacion_bolivar_davivenda.png"
              class="img-fluid"
              alt="Fundacion Bolivar Davivenda"
              title="Fundacion Bolivar Davivenda"
            />
          </NuxtLink>
          <button
            class="navbar-toggler p-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="openMobileMenu()"
          >
            <svg
              version="1.2"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
              class="ng-element"
              data-id="b6605a34ec1443d69f97220deeb3b22c"
              :style="toggleStyle"
            >
              <g>
                <path
                  xmlns:default="http://www.w3.org/2000/svg"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  style="fill: rgb(255, 103, 27)"
                ></path>
              </g>
            </svg>
          </button>
          <div
            id="navbarSupportedContent"
            class="collapse navbar-collapse justify-content-between"
          >
            <div class="manu-text-close-ic d-none-n d-block-991">
              <div class="d-flex justify-content-center position-relative">
                <h3 class="ff-sans-b">Menú</h3>
                <a
                  href="javascript:void(0)"
                  class="ic-close-menu position-absolute"
                  @click="closeMobileMenu()"
                >
                  <svg
                    version="1.2"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                    class="ng-element interactive"
                    data-id="d72899987dcb405f9711674b20491c84"
                    :style="toggleStyle"
                  >
                    <g>
                      <path
                        xmlns:default="http://www.w3.org/2000/svg"
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        style="fill: rgb(255, 255, 255)"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div class="d-flex justify-content-between w-100">
              <ul class="navbar-nav align-items-center text-lg-left ff-nunito">
                <li
                  class="nav-item"
                >
                  <NuxtLink to="#nuestros-expertos-id" class="nav-link" 
                    >Nuestros Expertos</NuxtLink
                  >
                </li>
                <li
                  class="nav-item"
                >
                  <NuxtLink to="#pensum-id" class="nav-link"
                    >Pénsum</NuxtLink
                  >
                </li>
                <li
                  class="nav-item"
                >
                  <NuxtLink to="#seminario-id" class="nav-link"
                    >Estructura Seminario</NuxtLink
                  >
                </li>
                <li
                  class="nav-item"
                >
                  <NuxtLink to="#perfil-participantes-id" class="nav-link"
                    >Perfil Participantes</NuxtLink
                  >
                </li>
                <li
                  class="nav-item"
                >
                  <NuxtLink to="#costos-id" class="nav-link">Costos</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- navigation end -->
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      toggleStyle: {
        opacity: 1,
        'mix-blend-mode': 'normal',
        fill: 'rgb(255, 255, 255)',
        width: '33px',
        height: '33px',
      },
    }
  },
  methods: {
    openMobileMenu() {
      document.body.classList.add('overflow-hidden')
      document
        .getElementById('navbarSupportedContent')
        .classList.remove('menu-close-after-cl')
      document.getElementById('navbarSupportedContent').classList.add('show')
    },
    closeMobileMenu() {
      document
        .getElementById('navbarSupportedContent')
        .classList.add('menu-close-after-cl')
      document.getElementById('navbarSupportedContent').classList.remove('show')
      document.body.classList.remove('overflow-hidden')
    },
  },
}
</script>
