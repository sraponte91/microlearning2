<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/aflora">Aflora</b-breadcrumb-item>
          <b-breadcrumb-item active>Desarrollamos talento</b-breadcrumb-item>
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
            <h2 class="ff-sans-b ss d-block-991 d-none-n">
              Desarrollamos <br />
              talento
            </h2>
            <div class="txt-points position-relative order-2-991">
              <h2 class="ff-sans-b d-none-991">
                Desarrollamos <br />
                talento
              </h2>
              <div class="pra-p for-bgcol">
                <p>
                  Mediante las jornadas de capacitación y formación
                  desarrollamos y cultivamos el talento de todos y todas las
                  participantes, para unirnos, transformar y multiplicar en cada
                  uno de los territorios donde Voluntariado Familia Bolívar
                  tiene presencia.
                </p>
                <p>
                  Adicionalmente, el programa brinda la oportunidad a sus
                  voluntarios de crecer como agentes de cambio, y por eso
                  impulsa y apoya campañas y proyectos sociales propuestos por
                  ellos. Buscamos formar más y mejores voluntarios para que cada
                  vez la red de intercambio de conocimiento sea mayor.
                </p>
              </div>
            </div>
            <div class="img-points order-1-991">
              <img
                src="/images/rectangle_b.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </div>
          <div
            class="d-flex multiple-reapt align-items-start pp-lr flex-wrap-767"
          >
            <div class="oly-img-bx">
              <img
                src="/images/rectangle_c.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
            <div class="oly-tx-bx">
              <div class="inn-bx-bg ff-sans-b">
                <p>
                  Conozca los ciclos de formación, y certifíquese de manera
                  gratuita con prestigiosas universidades.
                </p>
                <div class="links-to-r text-right">
                  <a :href="$constants.afloraDesarrollamosTalento.quieroConocerMas"
                    >Quiero conocer más ></a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="levels-nd-benef text-center">
            <h2 class="ff-sans-b">Niveles y beneficios por nivel</h2>
            <div class="pra-p">
              <p>
                Credibly negotiate customized portals vis-a-vis viral platforms.
                Progressively maximize revolutionary e-services without state of
                the art infomediaries. Monotonectally unleash exceptional
                customer service for stand-alone meta-services. Monotonectally
                negotiate progressive metrics with customized markets.
                Competently incentivize impactful opportunities after cross
                functional paradigms.
              </p>
            </div>
            <div class="btn-g">
              <a
                :href="$constants.afloraDesarrollamosTalento.nivelesLink"
                class="btn-know-leave ff-sans-b"
                >Conocer Niveles</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="school-directors">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="position-relative for-mt-mins">
            <div class="im-prt">
              <img
                src="/images/rectangle_d.png"
                alt=""
                class="object-fit-cover"
              />
            </div>
            <div class="txt-sec margin-0-auto">
              <div class="text-center">
                <h3 class="ff-sans-b text-white">Escuela de directores</h3>
              </div>
              <div class="pra-p text-white">
                <p>
                  Basados en el método del Caso, desarrollamos 8 modelos a
                  partir de experiencias organizacionales de algunos de los
                  participantes en el programa para dar una visión particular y
                  de conjunto de las organizaciones, así como desarrollar
                  pensamiento estratégico y algunas de las habilidades,
                  capacidades y competencias directivas necesarias para el
                  desempeño profesional frente a una fundación.
                </p>
                <p>
                  Si deseas ampliar la información de la Escuela de Directores,
                  conocer el pénsum, el cronograma y los costos, entre otros, te
                  invitamos a visitar el sitio web haciendo clic en el siguiente
                  botón
                </p>
              </div>
              <div class="btn-g text-center">
                <a
                  :href="$constants.afloraDesarrollamosTalento.escuelaLink"
                  class="btn-know-leave ff-sans-b"
                  >Conocer Niveles</a
                >
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
      title: this.$constants.afloraDesarrollamosTalento.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.afloraDesarrollamosTalento.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.afloraDesarrollamosTalento.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.afloraDesarrollamosTalento.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.afloraDesarrollamosTalento.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants.afloraDesarrollamosTalento.meta.ogImage,
        },
      ],
    }
  },
}
</script>