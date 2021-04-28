<template>
  <main>
    <div class="container position-relative innerpage">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item to="/aflora-home">Aflora</b-breadcrumb-item>
        <b-breadcrumb-item active>Conózcanos</b-breadcrumb-item>
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
        <img src="/images/aflora.png" alt="" class="object-fit-cover" />
      </div>
      <div class="pg-tit-inner position-absolute text-center">
        <h1 class="ff-sans-b">Conózcanos</h1>
      </div>
    </section>

    <section class="ig-tx-zing-zag bg-white">
      <div class="container">
        <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
          <div class="txt-points position-relative">
            <div class="pra-p">
              <p>
                Creemos que esta es una oportunidad de crecimiento para todas
                las organizaciones en Colombia, independiente de su foco de
                trabajo. Cada una de nuestras organizaciones tiene sus
                necesidades individuales y construimos con ellas el camino más
                adecuado para cumplir los objetivos de las causas que lideran.
              </p>
              <ul>
                <li class="position-relative after-po">
                  Más de 1.700 organizaciones inscritas y activas.
                </li>
                <li class="position-relative after-po">
                  Más de 22.000 horas de formación.
                </li>
                <li class="position-relative after-po">
                  El 95% de los participantes recomiendan nuestros cursos.
                </li>
              </ul>
              <p>
                Cada organización que se suma a Aflora, ingresa a una amplia red
                de expertos con conocimiento relevante para ayudarles a
                enfrentar sus principales desafíos y construir en conjunto las
                herramientas y el camino que les permita superarlos.
              </p>
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/rectangle_a.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>
        <div
          class="d-flex multiple-reapt align-items-start part-two flex-wrap-991"
        >
          <div class="img-points order-2-991">
            <img
              src="/images/rectangle_b.jpg"
              alt=""
              class="object-fit-cover"
            />
            <div class="extra-div ff-sans-b d-block-991 d-none-n">
              <p>
                Toda organización que esté comprometida con fortalecer sus
                procesos internos para lograr un mayor impacto, puede hacer
                parte de nuestro programa.
              </p>
            </div>
          </div>
          <div class="two-div-in-one position-relative order-1-991">
            <div class="txt-points position-relative">
              <div class="pra-p">
                <h3 class="ff-sans-b">
                  Programa especial para organizaciones comprometidas:
                </h3>
                <p>
                  Aquellos organizaciones que cumplan con más del 60% de su ruta
                  de formación podrán acceder al acompañamiento de expertos
                  quienes les ayudarán a implementar los proyectos de mejora en
                  la organización.
                </p>
              </div>
            </div>
            <div class="extra-div ff-sans-b d-none-991">
              <p>
                Toda organización que esté comprometida con fortalecer sus
                procesos internos para lograr un mayor impacto, puede hacer
                parte de nuestro programa.
              </p>
            </div>
          </div>
        </div>
        <div
          class="d-flex multiple-reapt align-items-start flex-wrap-991 three-bx"
        >
          <div class="txt-points position-relative">
            <div class="pra-p">
              <h3 class="ff-sans-b">
                Programa de formalización y constitución jurídica:
              </h3>
              <p>
                Dirigido a iniciativas sociales no formalizadas que buscan
                constituirse legalmente, recibirán un ciclo de formación y un
                acompañamiento en su formalización.
              </p>
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/rectangle_b.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="testimonios-sec">
      <div class="container-fluid">
        <div class="sec-title text-center">
          <h2 class="ff-nunito">Testimonios</h2>
          <p class="ff-sans-b">De nuestros integrantes</p>
        </div>
        <div class="testimo-slider">
          <div class="for-marg-1">
            <client-only>
              <carousel
                :perPageCustom="[
                  [575, 1],
                  [1024, 2],
                  [1200, 3],
                ]"
                :navigationEnabled="true"
                :paginationEnabled="true"
              >
                <slide
                  v-for="(item, i) of $constants.conozcanos.testimonios"
                  :key="i"
                >
                  <div class="position-relative testimo-bx bg-white">
                    <div class="text-center til ff-sans-b">
                      <h3>
                        {{ item.title }}
                      </h3>
                    </div>
                    <div
                      class="txt margin-0-auto position-relative after-po before-po quote-sign ff-sans-i"
                    >
                      <p>
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </slide>
              </carousel>
            </client-only>
          </div>
        </div>
      </div>
    </section>

    <section class="wid-support-of bg-white">
      <div class="container">
        <h4 class="ff-sans-b">Con el apoyo de:</h4>
        <div class="d-flex flex-wrap for-marg-1">
          <div class="lgoes-bx d-flex align-items-center position-relative">
            <img src="/images/gell_logo.svg" alt="" />
            <a
              href="javascript:void(0)"
              class="position-absolute full-box-link"
            ></a>
          </div>
          <div class="lgoes-bx d-flex align-items-center position-relative">
            <img src="/images/gell_logo.svg" alt="" />
            <a
              href="javascript:void(0)"
              class="position-absolute full-box-link"
            ></a>
          </div>
          <div class="lgoes-bx d-flex align-items-center position-relative">
            <img src="/images/gell_logo.svg" alt="" />
            <a
              href="javascript:void(0)"
              class="position-absolute full-box-link"
            ></a>
          </div>
          <div class="lgoes-bx d-flex align-items-center position-relative">
            <img src="/images/gell_logo.svg" alt="" />
            <a
              href="javascript:void(0)"
              class="position-absolute full-box-link"
            ></a>
          </div>
          <div class="lgoes-bx d-flex align-items-center position-relative">
            <img src="/images/gell_logo.svg" alt="" />
            <a
              href="javascript:void(0)"
              class="position-absolute full-box-link"
            ></a>
          </div>
          <div class="lgoes-bx d-flex align-items-center position-relative">
            <img src="/images/gell_logo.svg" alt="" />
            <a
              href="javascript:void(0)"
              class="position-absolute full-box-link"
            ></a>
          </div>
          <div class="lgoes-bx d-flex align-items-center position-relative">
            <img src="/images/gell_logo.svg" alt="" />
            <a
              href="javascript:void(0)"
              class="position-absolute full-box-link"
            ></a>
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
}
</script>