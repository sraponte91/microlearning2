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
          <b-breadcrumb-item active>Mentores</b-breadcrumb-item>
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
            <h2 class="ff-sans-b ss d-block-991 d-none-n">Mentores</h2>
            <div class="txt-points position-relative order-2-991">
              <h2 class="ff-sans-b d-none-991">Mentores</h2>
              <div class="pra-p for-bgcol">
                <h3 class="ff-sans-b">Conoce tus guías</h3>
                <p>
                  Mentores expertos son líderes de las empresas del Grupo
                  Bolívar que acompañan, guían y retan a los empresarios en un
                  tema específico a trabajar, para facilitar la implementación
                  del plan definido con el mentor padrino.
                </p>
                <p>
                  Algunos de nuestros mentores padrinos que acompañan los
                  emprendedores son:
                </p>
              </div>
            </div>
            <div class="img-points order-1-991">
              <img
                src="/images/programa-emprende-pais/5-mentores/mentores_bloque1.jpg"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slection-iema bg-white">
      <div class="container">
        <div class="text-center">
          <h3 class="ff-sans-b">Selecciona el tema</h3>
          <div class="select-here margin-0-auto">
            <b-form-select v-model="selectedTopic">
              <b-form-select-option value="">Select</b-form-select-option>
              <b-form-select-option
                v-for="(t, i) of topics"
                :key="i"
                :value="t"
                >{{ t }}</b-form-select-option
              >
            </b-form-select>
          </div>
          <div class="select-over-here">
            <div class="d-flex flex-wrap">
              <div
                v-for="(item, i) of topicItems"
                :key="i"
                class="indiv-slect d-flex flex-wrap-767"
              >
                <div class="pics order-2-767">
                  <img
                    :src="item.imgURL"
                    :alt="item.title"
                    class="object-fit-cover"
                  />
                </div>
                <div class="d-flex flex-wrap text-prt order-1-767">
                  <div class="text-left">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.subtitle }}</p>
                  </div>
                  <div
                    class="set-b align-self-end w-100 text-left after-po position-relative"
                  >
                    <a :href="item.link">Conocer más</a>
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
    topics() {
      return this.$emprendePaisData.emprendePaisDesarrollamosTalentoMentores.items
        .map((i) => i.topic)
        .filter((v, i, a) => a.indexOf(v) === i)
    },
    topicItems() {
      return this.$emprendePaisData.emprendePaisDesarrollamosTalentoMentores.items.filter(
        (i) => {
          if (this.selectedTopic.length) {
            return this.selectedTopic === i.topic
          } else {
            return true
          }
        }
      )
    },
  },
  data() {
    return {
      selectedTopic: '',
    }
  },
  head() {
    return {
      title: this.$emprendePaisData.emprendePaisDesarrollamosTalentoMentores
        .meta.title + ' - ' + this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$emprendePaisData
            .emprendePaisDesarrollamosTalentoMentores.meta.metaTitle + ' - ' + this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$emprendePaisData
            .emprendePaisDesarrollamosTalentoMentores.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$emprendePaisData
            .emprendePaisDesarrollamosTalentoMentores.meta.ogTitle + ' - ' + this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$emprendePaisData
            .emprendePaisDesarrollamosTalentoMentores.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$emprendePaisData.emprendePaisDesarrollamosTalentoMentores.meta
              .ogImage,
        },
      ],
    }
  },
}
</script>