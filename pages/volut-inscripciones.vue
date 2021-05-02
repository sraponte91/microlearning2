<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/aflora">Aflora</b-breadcrumb-item>
          <b-breadcrumb-item active>Inscripciones</b-breadcrumb-item>
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

    <section class="ig-tx-zing-zag desarrolla inscripci-pg bg-white">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
            <h2 class="ff-sans-b ss d-block-991 d-none-n">Inscripciones</h2>
            <h3 class="ff-sans-b ss d-block-991 d-none-n">
              ¿Cómo inscribirse <br />
              a Aflora?
            </h3>
            <div class="txt-points position-relative order-2-991">
              <h2 class="ff-sans-b d-none-991">Inscripciones</h2>
              <h3 class="ff-sans-b d-none-991">
                ¿Cómo inscribirse <br />
                a Aflora?
              </h3>
              <div class="pra-p for-bgcol">
               <ul>
                    <li class="position-relative after-po">Pertenecer al Grupo Bolívar en alguno de estos perfiles: pensionado/a, familiar de un colaborador del Grupo Bolívar, o ser un colaborador directo.</li>
                    <li class="position-relative after-po">Querer aportar conocimiento, herramientas y talento humano para cada una de las jornadas que el programa ofrece a lo largo del año. Esto incluye jornadas presenciales y virtuales.</li>
                    <li class="position-relative after-po">En caso de ser necesario, cumplir con el perfil de algunas campañas que buscan profesionales o trabajadores de ciertas áreas en particular.</li>
               </ul>
              </div>
            </div>
            <div class="img-points order-1-991">
              <img
                src="/images/inscripciones_bloque_15_d_f.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </div>
          <div class="b-s-30"></div>
          <div class="txt-info-m margin-0-auto text-center">
            <h4 class="ff-sans-b">Reglamento de inscripción</h4>
            <div class="pra-p ff-nunito">
              <p>Para Fundación Bolívar Davivienda es muy importante que todos los interesados, aspirantes y beneficiarios, conozcan con detalle las políticas detrás de cada iniciativa. Por eso, lo invitamos a leer con detenimiento el reglamento del programa Voluntariado Familia Bolívar, donde  encontrará los requisitos y condiciones para ser parte del programa.</p>
            </div>
            <div
              class="two-btn d-flex justify-content-between ff-sans-b flex-wrap"
            >
              <a
                :href="$constants.inscripciones.reglamentoLink"
                class="btn-sm btn-line-btn text-center"
                >Lee el reglamento de inscripción</a
              >
              <a
                :href="$constants.inscripciones.inscribaseLink"
                class="btn-sm btn-solid-btn text-center"
                >Inscribase aquí</a
              >
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
}
</script>