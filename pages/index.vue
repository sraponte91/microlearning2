<template>
  <main>
    <HomeSlider></HomeSlider>

    <section class="desarrollamos-section position-relative before-po">
      <HomeDots></HomeDots>
      <div class="inner-section margin-0-auto position-relative z-index-5">
        <div class="text-center text-white">
          <small class="ff-nunito">Sobre nosotros</small>
          <h2 class="ff-sans-b">
            Desarrollamos <br />
            Talento
          </h2>
          <p class="ff-nunito margin-0-auto">
            Somos un equipo que une. Que invita a explorar con creatividad y a
            nunca dejar de innovar. A encontrar el éxito en cada esfuerzo. Que
            ayuda a conectar el talento con el cambio.
          </p>
          <div class="for-btn">
            <a
              :href="$constants.home.desarrollamosTalento"
              class="btn-tell-more"
              >Conozca más</a
            >
          </div>
        </div>
      </div>
      <HomeDotsbottoms></HomeDotsbottoms>
    </section>

    <section class="our-program-section">
      <div class="d-flex flex-wrap">
        <div
          class="sec-name fr-width-height d-flex align-items-center position-relative justify-content-center"
        >
          <div
            class="two-dot d-flex position-absolute align-items-start d-none-767i"
          >
            <div class="dots-div d-flex flex-wrap">
              <div class="d-flex">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <div class="d-flex">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <div class="d-flex">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <div class="d-flex">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <div class="d-flex">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
          </div>
          <div class="text-white text-center">
            <p class="ff-nunito">Nuestros</p>
            <p class="ff-sans-b">Programas</p>
          </div>
        </div>
        <div
          class="program-box position-relative fr-width-height"
          v-for="(item, i) of $constants.home.nuestrosProgramas"
          :key="i"
        >
          <div class="for-img position-absolute">
            <img
              :src="item.imgURL"
              :alt="item.title"
              class="object-fit-cover"
            />
          </div>
          <div class="title-tx position-absolute text-white ff-sans-b">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="d-none-n plus-sign d-block-767 position-absolute">
            <NuxtLink
              :to="item.link"
              class="after-po before-po position-relative"
            ></NuxtLink>
          </div>
          <div
            class="on-hover-show position-absolute d-flex align-items-center"
          ></div>
          <div
            class="on-hover-2div position-absolute d-flex align-items-center"
          >
            <p v-html="item.summary">
              {{ item.summary }}
            </p>
            <NuxtLink
              :to="item.link"
              class="btn-read-mr position-absolute ff-sans-r"
              >Leer Más</NuxtLink
            >
          </div>
          <NuxtLink
            :to="item.link"
            class="position-absolute full-box-link"
          ></NuxtLink>
        </div>
      </div>
    </section>

    <section class="how-we-connect bg-white">
      <div class="container">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap-991"
        >
          <div class="left-solid-color d-flex align-items-center">
            <div class="inner-tx-w text-center">
              <small class="ff-nunito">Así conectamos</small>
              <h3 class="ff-sans-b">
                El talento <span class="ff-sans-i">con</span> El cambio
              </h3>
              <div class="for-btn">
                <a :href="$constants.home.elCambio" class="btn-tell-more"
                  >Conozca más</a
                >
              </div>
            </div>
          </div>
          <div class="right-img position-relative">
            <img
              src="/images/seccion-inicio/microlearning.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <HomePromixo-part-home></HomePromixo-part-home>

    <section class="news-section-bolivar bg-white d-none-767">
      <div class="container">
        <h2 class="ff-sans-b">
          Actualidad Fundación <br />
          Bolivar Davivienda
        </h2>
        <client-only>
          <div class="accordion" role="tablist">
            <b-card no-body>
              <div class="d-flex w-100 flex-wrap-991">
                <div>
                  <b-card-header
                    v-for="(item, i) of $constants.home.foundationNews"
                    :key="i"
                    header-tag="header"
                    role="tab"
                  >
                    <b-button
                      block
                      v-b-toggle="'accordion-' + i"
                      variant="info"
                    >
                      <div class="d-flex align-items-center">
                        <div class="sm-img">
                          <img
                            :src="item.imgURL"
                            :alt="item.smallTitle"
                            class="object-fit-cover"
                          />
                        </div>
                        <div class="tx-info">
                          <h4 class="ff-sans-b">{{ item.smallTitle }}</h4>
                          <p class="ff-nunito">
                            {{ item.summary }}
                          </p>
                        </div>
                      </div>
                    </b-button>
                  </b-card-header>
                </div>
                <div class="tabs-contains">
                  <b-collapse
                    v-for="(item, i) of $constants.home.foundationNews"
                    :key="i"
                    :id="'accordion-' + i"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <div class="big-news-img position-relative after-po">
                          <img
                            :src="item.imgURL"
                            :alt="item.smallTitle"
                            class="object-fit-cover"
                          />
                        </div>
                        <div class="about-news">
                          <div class="tags ff-nunito">
                            <a
                              v-for="(tag, i) of item.tags"
                              :key="i"
                              :href="tag.url"
                              >{{ tag.title }}</a
                            >
                          </div>
                          <div class="date">{{ item.date }}</div>
                          <div class="new-titles ff-sans-b">
                            <a
                              href="javascript:void(0)"
                              v-html="item.bigTitle"
                            ></a>
                          </div>
                        </div>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </div>
              </div>
            </b-card>
          </div>
        </client-only>
      </div>
    </section>

    <section class="news-section-bolivar bg-white d-none-n d-block-767">
      <div class="container">
        <h2 class="ff-sans-b">
          Actualidad Fundación <br />
          Bolivar Davivienda
        </h2>
        <client-only>
          <div class="accordion" role="tablist">
            <b-card
              no-body
              v-for="(item, i) of $constants.home.foundationNews"
              :key="i"
            >
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle="'accordion-' + i" variant="info">
                  <div class="d-flex align-items-center">
                    <div class="sm-img">
                      <img
                        :src="item.imgURL"
                        :alt="item.smallTitle"
                        class="object-fit-cover"
                      />
                    </div>
                    <div class="tx-info">
                      <h4 class="ff-sans-b">{{ item.smallTitle }}</h4>
                      <p class="ff-nunito">
                        {{ item.summary }}
                      </p>
                    </div>
                  </div>
                </b-button>
              </b-card-header>
              <b-collapse
                :id="'accordion-' + i"
                visible
                accordion="my-accordion-mob"
                role="tabpanel"
                class="tabs-contains"
              >
                <b-card-body>
                  <b-card-text>
                    <div class="big-news-img position-relative after-po">
                      <img
                        :src="item.imgURL"
                        :alt="item.smallTitle"
                        class="object-fit-cover"
                      />
                    </div>
                    <div class="about-news">
                      <div class="tags ff-nunito">
                        <a
                          v-for="(tag, i) of item.tags"
                          :key="i"
                          :href="tag.url"
                          >{{ tag.title }}</a
                        >
                      </div>
                      <div class="date">{{ item.date }}</div>
                      <div class="new-titles ff-sans-b">
                        <a href="javascript:void(0)" v-html="item.bigTitle"></a>
                      </div>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </client-only>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.home.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.home.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.home.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.home.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$constants.baseURL + this.$constants.home.meta.ogImage,
        },
      ],
    }
  },
}
</script>