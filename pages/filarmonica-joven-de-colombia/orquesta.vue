<template>
  <main>
    <div class="container position-relative innerpage">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item to="/filarmonica-joven-de-colombia"
          >Filarmónica joven de colombia</b-breadcrumb-item
        >
        <b-breadcrumb-item active>La Orquesta</b-breadcrumb-item>
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
        <img src="/images/programa-filarmonica-joven/4-orquesta/orquesta_header_desktop.jpg" alt="" class="object-fit-cover" />
      </div>
      <div class="pg-tit-inner position-absolute text-center">
        <h1 class="ff-sans-b">La Orquesta</h1>
        <div class="on-banner-tx margin-0-auto">
          <p>
            Credibly pursue efficient relationships after strategic
            collaboration and idea-sharing. Completely embrace virtual
            technology after out-of-the-box collaboration and idea-sharing.
            Distinctively conceptualize principle-centered imperatives with
            emerging vortals. Professionally build long-term high-impact testing
            procedures without extensive internal or "organic" sources.
            Phosfluorescently matrix 24/7 scenarios before robust best
            practices.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white member-prt-a">
      <div class="container">
        <div class="text-center">
          <h3 class="ff-sans-b">Integrantes</h3>
        </div>
        <div class="some-link-here d-flex justify-content-center flex-wrap-479">
          <a
            href="javascript:void(0)"
            class="btn-links text-center"
            v-for="(item, i) of $constants.filarmonicaJovenDeColombiaOrquesta
              .integrantes.tabs"
            :key="i"
            :class="{ active: activeTab === item.name }"
            @click="setTab(item)"
            >{{ item.name }}</a
          >
        </div>
        <div class="listof-member">
          <div class="member-containers margin-0-auto">
            <div class="d-flex flex-wrap for-margin-">
              <client-only>
                <carousel
                  ref="integrantes"
                  :per-page="1"
                  :navigationEnabled="false"
                  :paginationEnabled="false"
                >
                  <slide v-for="(items, i) of activeTabItems" :key="i">
                    <div
                      class="member-dispay"
                      v-for="(item, j) of items"
                      :key="j"
                    >
                      <div class="d-flex align-items-center">
                        <div class="member-pic">
                          <img
                            :src="item.imgURL"
                            :alt="item.title.replace(/(<([^>]+)>)/gi, '')"
                            class="object-fit-cover"
                          />
                        </div>
                        <div class="member-info ff-sans-r">
                          <h4 v-html="item.title"></h4>
                          <p>{{ item.subtitle }}</p>
                        </div>
                      </div>
                    </div>
                  </slide>
                </carousel>
              </client-only>
            </div>
            <div class="d-flex justify-content-between lft-rit-arrow">
              <a
                href="javascript:void(0)"
                class="btn-arrow"
                @click="goPrev('integrantes')"
                >&lt;</a
              >
              <a
                href="javascript:void(0)"
                class="btn-arrow"
                @click="goNext('integrantes')"
                >&gt;</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="member-prt-b">
      <div class="container">
        <div class="text-center">
          <div class="margin-0-auto pra-p-mem">
            <h3 class="ff-sans-b">Artistas Invitados</h3>
            <p>
              Professionally innovate goal-oriented human capital for
              interactive leadership. Monotonectally innovate 24/7 collaboration
              and idea-sharing rather than economically sound technologies.
            </p>
          </div>
        </div>
        <div class="listof-member">
          <div class="member-containers margin-0-auto">
            <div class="d-flex flex-wrap for-margin-">
              <client-only>
                <carousel
                  ref="artistasInvitados"
                  :per-page="1"
                  :navigationEnabled="false"
                  :paginationEnabled="false"
                >
                  <slide v-for="(items, i) of artistasInvitados" :key="i">
                    <div
                      class="member-dispay"
                      v-for="(item, j) of items"
                      :key="j"
                    >
                      <div class="d-flex align-items-center">
                        <div class="member-pic">
                          <img
                            :src="item.imgURL"
                            :alt="item.title.replace(/(<([^>]+)>)/gi, '')"
                            class="object-fit-cover"
                          />
                        </div>
                        <div class="member-info ff-sans-r">
                          <h4 v-html="item.title"></h4>
                          <p>{{ item.subtitle }}</p>
                        </div>
                      </div>
                    </div>
                  </slide>
                </carousel>
              </client-only>
            </div>
            <div class="d-flex justify-content-between lft-rit-arrow">
              <a
                href="javascript:void(0)"
                class="btn-arrow"
                @click="goPrev('artistasInvitados')"
                >&lt;</a
              >
              <a
                href="javascript:void(0)"
                class="btn-arrow"
                @click="goNext('artistasInvitados')"
                >&gt;</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white member-prt-a">
      <div class="container">
        <div class="text-center">
          <div class="margin-0-auto pra-p-mem">
            <h3 class="ff-sans-b">Directores</h3>
            <p>
              Professionally innovate goal-oriented human capital for
              interactive leadership. Monotonectally innovate 24/7 collaboration
              and idea-sharing rather than economically sound technologies.
            </p>
          </div>
        </div>
        <div class="listof-member">
          <div class="member-containers margin-0-auto">
            <div class="d-flex flex-wrap for-margin-">
              <client-only>
                <carousel
                  ref="directores"
                  :per-page="1"
                  :navigationEnabled="false"
                  :paginationEnabled="false"
                >
                  <slide v-for="(items, i) of directores" :key="i">
                    <div
                      class="member-dispay"
                      v-for="(item, j) of items"
                      :key="j"
                    >
                      <div class="d-flex align-items-center">
                        <div class="member-pic">
                          <img
                            :src="item.imgURL"
                            :alt="item.title.replace(/(<([^>]+)>)/gi, '')"
                            class="object-fit-cover"
                          />
                        </div>
                        <div class="member-info ff-sans-r">
                          <h4 v-html="item.title"></h4>
                          <p>{{ item.subtitle }}</p>
                        </div>
                      </div>
                    </div>
                  </slide>
                </carousel>
              </client-only>
            </div>
            <div class="d-flex justify-content-between lft-rit-arrow">
              <a
                href="javascript:void(0)"
                class="btn-arrow"
                @click="goPrev('directores')"
                >&lt;</a
              >
              <a
                href="javascript:void(0)"
                class="btn-arrow"
                @click="goNext('directores')"
                >&gt;</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
Array.prototype.chunk = function (n) {
  if (!this.length) {
    return []
  }
  return [this.slice(0, n)].concat(this.slice(n).chunk(n))
}
export default {
  computed: {
    activeTabItems() {
      return this.selectedTabItems.chunk(4)
    },
    artistasInvitados() {
      return this.$constants.filarmonicaJovenDeColombiaOrquesta.artistasInvitados.chunk(
        4
      )
    },
    directores() {
      return this.$constants.filarmonicaJovenDeColombiaOrquesta.directores.chunk(
        4
      )
    },
  },
  data() {
    return {
      activeTab: 'Cobres',
      selectedTabItems: this.$constants.filarmonicaJovenDeColombiaOrquesta
        .integrantes.tabs[0].items,
    }
  },
  methods: {
    setTab(tab) {
      this.activeTab = tab.name
      this.selectedTabItems = tab.items
      this.$nextTick(() => {
        this.$refs.integrantes.goToPage(0)
      })
    },
    goNext(ref) {
      this.$refs[ref].goToPage(
        this.$refs[ref].currentPage === this.activeTabItems.length - 1
          ? 0
          : this.$refs[ref].currentPage + 1
      )
    },
    goPrev(ref) {
      this.$refs[ref].goToPage(
        this.$refs[ref].currentPage === 0
          ? this.activeTabItems.length - 1
          : this.$refs[ref].currentPage - 1
      )
    },
  },
  head() {
    return {
      title: this.$constants.filarmonicaJovenDeColombiaOrquesta.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.filarmonicaJovenDeColombiaOrquesta.meta
            .metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.filarmonicaJovenDeColombiaOrquesta.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.filarmonicaJovenDeColombiaOrquesta.meta
            .ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.filarmonicaJovenDeColombiaOrquesta.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$constants.baseURL +
            this.$constants.filarmonicaJovenDeColombiaOrquesta.meta.ogImage,
        },
      ],
    }
  },
}
</script>
<style scoped>
.some-link-here .btn-links.active {
  background-color: #ff671b;
  border-color: #ff671b;
  color: #f7f7f7;
}
</style>>