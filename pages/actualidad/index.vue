<template>
  <main>
    <div class="container position-relative">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item active>Actualidad</b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <section class="main-slider-at-top actualidad-pg">
      <div class="img-prt position-relative">
        <img src="/images/seccion-actualidad/encabezado_actualidad.jpg" alt="" class="object-fit-cover" />
        <div class="container position-absolute set-to-bottom">
          <div class="banner-txt text-white">
            <div class="orange-bg">
              <h1 class="ff-sans-b">Actualidad</h1>
            </div>
            <div class="black-bg">
              <p class="ff-nunito">
                Aquí vas a poder aprender acerca del desarrollo de nuestros
                programas y sus novedades
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="what-looking-for">
      <div class="container">
        <div class="innper-bx margin-0-auto">
          <div
            class="d-flex align-items-center justify-content-between flex-wrap-767"
          >
            <p class="ff-nunito text-white">¿Qué estas buscando?</p>
            <b-form-input
              v-model="search"
              placeholder="Actualidad"
            ></b-form-input>
          </div>
        </div>
      </div>
    </section>

    <section class="list-of-blog-actu">
      <template v-if="articles.length">
        <div
          v-for="(item, i) of articles"
          :key="i"
          class="main-slider-at-top actualidad-pg"
        >
          <div class="img-prt position-relative">
            <img
              :src="item.imgURL"
              :alt="item.title"
              class="object-fit-cover"
            />
            <div class="container position-absolute set-to-bottom">
              <div class="banner-txt text-white">
                <div class="line-he-1">
                  <span class="date-p ff-nunito text-white">{{
                    item.date
                  }}</span>
                </div>
                <div class="orange-bg">
                  <h1 class="ff-sans-b">{{ item.title }}</h1>
                </div>
                <div class="black-bg">
                  <p class="ff-nunito">
                    {{ item.shortDescription }}
                  </p>
                </div>
              </div>
            </div>
            <NuxtLink
              :to="'/actualidad/' + item.slug"
              class="position-absolute full-box-link"
            >
            </NuxtLink>
          </div>
        </div>
      </template>
      <h4 style="margin: 15px 0 0 40px;" v-else>No data found</h4>
    </section>
  </main>
</template>
<script>
export default {
  computed: {
    articles() {
      return this.$constants.actualidad.articles.filter((i) => {
        return i.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  data() {
    return {
      search: '',
    }
  },
  head() {
    return {
      title: this.$constants.actualidad.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.actualidad.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.actualidad.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.actualidad.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.actualidad.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL + this.$constants.actualidad.meta.ogImage,
        },
      ],
    }
  },
}
</script>