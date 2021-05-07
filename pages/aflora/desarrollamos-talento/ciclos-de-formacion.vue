<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/aflora">Aflora</b-breadcrumb-item>
          <b-breadcrumb-item to="/aflora/desarrollamos-talento"
            >Desarrollamos talento</b-breadcrumb-item
          >
          <b-breadcrumb-item active>Ciclos de formación</b-breadcrumb-item>
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

    <section class="ig-tx-zing-zag desarrolla bg-white pb-0">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
            <h2 class="ff-sans-b ss d-block-991 d-none-n">
              Ciclos de <br />
              formación
            </h2>
            <div class="txt-points position-relative order-2-991">
              <h2 class="ff-sans-b d-none-991">
                Ciclos de <br />
                formación
              </h2>
              <div class="pra-p for-bgcol">
                <h3 class="ff-sans-b">¿Cuáles son los ciclos de formación?</h3>
                <p>
                  Los ciclos de formación de Aflora son un conjunto de
                  herramientas virtuales creadas de la mano de diferentes
                  instituciones nacionales e internacionales. Por medio de estas
                  herramientas las organizaciones tendrán acceso a contenidos de
                  calidad diseñados por expertos del sector social, que impulsan
                  el fortalecimiento de las organizaciones en diferentes áreas.
                  Si las organizaciones tienen una participación activa en la
                  ruta de formación otorgada luego del autodiagnóstico, podrán
                  certificar su avance con nuestros diferentes aliados. Conozca
                  en qué consiste cada uno de nuestros ciclos:
                </p>
              </div>
            </div>
            <div class="img-points order-1-991">
              <img
                src="/images/programa-aflora/5-ciclos-formacion/ciclosformacion_bloque1.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </div>
        </div>

        <div class="multi-bxese-se margin-0-auto">
          <div class="d-flex flex-wrap for-m-left">
            <div class="in-bxeses ff-sans-b">Ciclo de gestión de proyectos</div>
            <div class="in-bxeses ff-sans-b">Ciclo de gestión de proyectos</div>
            <div class="in-bxeses ff-sans-b">Ciclo de gestión de proyectos</div>
            <div class="in-bxeses ff-sans-b">Ciclo de gestión de proyectos</div>
            <div class="in-bxeses ff-sans-b">Ciclo de gestión de proyectos</div>
            <div class="in-bxeses ff-sans-b">Ciclo de gestión de proyectos</div>
            <div class="in-bxeses ff-sans-b">Ciclo en Tecnología</div>
            <div class="in-bxeses ff-sans-b">Ciclo en recursos humanos</div>
            <div class="in-bxeses ff-sans-b">Ciclo de gestión de proyectos</div>
            <div class="in-bxeses ff-sans-b">Ciclo de gestión de proyectos</div>
            <div class="in-bxeses ff-sans-b">Ciclo de gestión de proyectos</div>
            <div class="in-bxeses ff-sans-b">Ciclo de gestión de proyectos</div>
          </div>
        </div>
        <div class="solid-color-bx margin-0-auto ff-sans-b">
          <p>Para tener en cuenta:</p>
          <p>
            ● Al finalizar cada ciclo, la organización debe diligenciar una
            encuesta de satisfacción, una evaluación de conocimiento y subir un
            entregable. La entidad aliada le hará entrega de una certificación
            que acredita su formación virtual especializada.
          </p>
          <p>
            ● El contenido de cada ciclo está disponible 24 horas al día, los 7
            días de la semana.
          </p>
          <p>
            ● Los materiales de cada ciclo son descargables. De esta manera,
            usted tendrá acceso a cada contenido en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: this.$constants.afloraDesarrollamosTalentoCiclosDeFormacion.meta
        .title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.afloraDesarrollamosTalentoCiclosDeFormacion
            .meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.afloraDesarrollamosTalentoCiclosDeFormacion
            .meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.afloraDesarrollamosTalentoCiclosDeFormacion
            .meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.afloraDesarrollamosTalentoCiclosDeFormacion
            .meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants.afloraDesarrollamosTalentoCiclosDeFormacion.meta
              .ogImage,
        },
      ],
    }
  },
}
</script>