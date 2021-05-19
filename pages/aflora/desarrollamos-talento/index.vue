<template>
  <main>
    <div class="breadc-bak">
      <div class="container margin-0-auto">
        <b-breadcrumb class="ff-sans-r mb-2">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/aflora">Aflora</b-breadcrumb-item>
          <b-breadcrumb-item active>Desarrollamos talento</b-breadcrumb-item>
        </b-breadcrumb>
        <div class="back-to-home position-relative d-flex align-items-center small-size">
          <i class="ic-back" @click="goBack()"></i>
          <a class="ff-sans-b" href="javascript:void(0)" @click="goBack()">Volver</a>
        </div>
      </div>
    </div>

    <section class="ig-tx-zing-zag desarrolla bg-white">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
            <h2 class="ff-sans-b ss d-block-991 d-none-n wow bounceInLeft" data-wow-duration="2s">
              Desarrollamos <br />
              talento
            </h2>
            <div class="txt-points position-relative order-2-991 wow bounceInLeft" data-wow-duration="2s">
              <h2 class="ff-sans-b d-none-991">
                Desarrollamos <br />
                talento
              </h2>
              <div class="pra-p for-bgcol">
                <p>
                  En Aflora brindamos a todas las organizaciones sociales con
                  gran potencial una ruta de formación para fortalecer sus
                  capacidades y las de sus equipos. Buscamos ayudarlas a
                  identificar sus oportunidades de mejora en distintas áreas a
                  través de un autodiagnóstico. Nuestro propósito es ayudarlas a
                  identificar los medios para lograr su sostenibilidad
                  financiera, ambiental y social.
                </p>
                <p>
                  Trabajamos unidos con las organizaciones, para impulsar sus
                  causas, cerrar brechas sociales y contribuir a la construcción
                  de un mejor país.
                </p>
              </div>
            </div>
            <div class="img-points order-1-991 wow bounceInRight" data-wow-duration="2s">
              <img src="/images/programa-aflora/3-desarrollamos-talento/desarrollamostalento_bloque1.jpg" alt=""
                class="object-fit-cover" />
            </div>
          </div>
          <div class="d-flex multiple-reapt align-items-start pp-lr flex-wrap-767">
            <div class="oly-img-bx wow bounceInLeft" data-wow-duration="2s">
              <img src="/images/programa-aflora/3-desarrollamos-talento/desarrollamostalento_bloque2_destacado.jpg"
                alt="" class="object-fit-cover" />
            </div>
            <div class="oly-tx-bx wow bounceInRight" data-wow-duration="2s">
              <div class="inn-bx-bg ff-sans-b">
                <p>
                  Conozca los ciclos de formación, y certifíquese de manera
                  gratuita con prestigiosas universidades.
                </p>
                <div class="links-to-r text-right">
                  <NuxtLink to="/aflora/desarrollamos-talento/ciclos-de-formacion">Quiero conocer más ></NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="levels-nd-benef text-center">
            <h2 class="ff-sans-b">Niveles y beneficios por nivel</h2>
            <div class="pra-p">
              <p>
                Ofrecemos un conjunto de capacitaciones y ciclos de formación
                adaptados a las condiciones, necesidades y características de
                cada organización. Luego de diligenciar el autodiagnóstico, las
                organizaciones serán clasificadas en uno de los 4 niveles que
                tiene Aflora. <br />

                Cada nivel está construido de manera estratégica para brindarle
                a las organizaciones los contenidos que necesitan según el
                estado real en el que se encuentra cada área de la organización.
                <br />

                El objetivo es que las organizaciones cumplan con los requisitos
                de cada nivel, para que logren avanzar al siguiente y así
                terminar con éxito todo el proceso de aprendizaje y mejora.
                <br />

                Estas son las características de cada nivel: <br />
              </p>
              <!--New design---
              <div class="four-boxes">
                <div class="d-flex flex-wrap">
                  <div class="one-box text-center position-relative">
                    <div
                      class="round-bx position-relative margin-0-auto d-flex align-items-center justify-content-center">
                      <div
                        class="numbr text-white ff-sans-b d-flex align-items-center justify-content-center position-absolute">
                        1
                      </div>
                      <p class="ff-sans-sb">
                        En esta sección se encontrará (i) una plataforma de e-learning; (ii) información y
                        acceso para procesos de formación con aliados; (iii) información y acceso para
                        procesos de formación abiertas de ingreso con correo electrónico; y (iv)
                        facilidades para preparación de giras.
                      </p>
                    </div>
                  </div>
                  <div class="one-box text-center position-relative">
                    <div
                      class="round-bx position-relative margin-0-auto d-flex align-items-center justify-content-center">
                      <div
                        class="numbr text-white ff-sans-b d-flex align-items-center justify-content-center position-absolute">
                        2
                      </div>
                      <p class="ff-sans-sb">
                        Para acceder a la misma, El Portal cuenta con las habilitaciones necesarias para
                        que el Usuario designe un usuario y contraseña. Los datos del Usuario que se
                        recolecten con ocasión de la anterior designación se tratarán de acuerdo con lo
                        indicado en la sección AUTORIZACIONES QUE USTED OTORGA de los Términos
                        Generales
                      </p>
                    </div>
                  </div>
                  <div class="one-box text-center position-relative">
                    <div
                      class="round-bx position-relative margin-0-auto d-flex align-items-center justify-content-center">
                      <div
                        class="numbr text-white ff-sans-b d-flex align-items-center justify-content-center position-absolute">
                        3
                      </div>
                      <p class="ff-sans-sb">
                        Los procesos de formación serán evaluados por el Usuario
                      </p>
                    </div>
                  </div>
                  <div class="one-box text-center position-relative">
                    <div
                      class="round-bx position-relative margin-0-auto d-flex align-items-center justify-content-center">
                      <div
                        class="numbr text-white ff-sans-b d-flex align-items-center justify-content-center position-absolute">
                        4
                      </div>
                      <p class="ff-sans-sb">
                        En relación con los procesos de formación con aliados, FBD hace claridad que la
                        información contenido en El Portal se publica con propósitos informativos, por lo
                        que FBD no respalda los proveedores que se referencien en esta sección. En
                        consecuencia, FBD, la FUNDACIÓN CULTIVA EL ARTE Y LA CULTURA, ni el
                        GRUPO EMPRESARIAL BOLÍVAR serán responsables, individual o
                        conjuntamente, ante los usuarios de dichos programas o de los servicios
                        prestados por estos aliados
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              -->
              <p>Nuestro foco principal serán aquellas organizaciones sociales altamente comprometidas con su proceso formativo y que apliquen el uso y herramientas que brinda cada nivel. </p>
              <!--Close New design--->

            </div>
            <!--<div class="btn-g">
              <a :href="$afloraData.afloraDesarrollamosTalento.nivelesLink" 
              class="btn-know-leave ff-sans-b">
              Conozca más</a>
            </div>-->
          </div>
        </div>
      </div>
    </section>

    <section class="school-directors">
      <div class="container">
        <div class="sm-siz-container margin-0-auto">
          <div class="position-relative for-mt-mins">
            <div class="im-prt">
              <img src="/images/programa-aflora/3-desarrollamos-talento/escuela_de_directores_desktop.jpg" alt=""
                class="object-fit-cover" />
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
                <a :href="$afloraData.afloraDesarrollamosTalento.escuelaLink" class="btn-know-leave ff-sans-b">Conozca más</a>
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
    head() {
      return {
        title: this.$afloraData.afloraDesarrollamosTalento.meta.title +
          ' - ' +
          this.$constants.home.meta.title,
        meta: [{
            hid: 'title',
            name: 'title',
            content: this.$afloraData.afloraDesarrollamosTalento.meta.metaTitle +
              ' - ' +
              this.$constants.home.meta.title,
          },
          {
            hid: 'description',
            name: 'description',
            content: this.$afloraData.afloraDesarrollamosTalento.meta
              .metaDescription,
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.$afloraData.afloraDesarrollamosTalento.meta.ogTitle +
              ' - ' +
              this.$constants.home.meta.title,
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: this.$afloraData.afloraDesarrollamosTalento.meta
              .ogDescription,
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: this.$constants.baseURL +
              this.$afloraData.afloraDesarrollamosTalento.meta.ogImage,
          },
        ],
      }
    },
  }

</script>
