<template>
  <main>
    <div class="donde-esta">
      <div class="container position-relative innerpage">
        <b-breadcrumb class="position-absolute ff-sans-r">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/cultivarte">Cultivarte</b-breadcrumb-item>
          <b-breadcrumb-item active>Dónde estamos ubicados</b-breadcrumb-item>
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

      <!-- Banner start -->
      <section class="common-banner ndb">
        <div class="container">
          <h2>¿Dónde estamos?</h2>
        </div>
      </section>
      <!-- Banner end -->
    </div>

    <section class="page-details">
      <div class="container">
        <p>
          Nuestro objetivo es llegar a lugares donde las ayudas y los programas
          pedagógicos tienen mayores dificultades de consolidarse y de esta
          manera convertirnos en un modelo de cambio para construir país.
          Actualmente tenemos más de 80 sedes donde niños, niñas y adolescentes
          encuentran espacios de ocio en los que desarrollan las competencias
          necesarias para cumplir sus sueños.
        </p>
      </div>
    </section>

    <section class="all-tab">
      <div class="container">
        <ul class="nav nav-tabs" role="tablist">
          <li
            class="nav-item"
            v-for="(item, i) of $cultivarteData.cultivarteDondeEstamosUbicados
              .locations"
            :key="i"
          >
            <a
              class="nav-link"
              :class="{ active: activeTab === item.country }"
              data-toggle="tab"
              href="javascript:void(0)"
              @click="changeTab(item)"
              >{{ item.country }}</a
            >
          </li>
        </ul>
        <div class="tab-content">
          <div class="container tab-pane active">
            <div class="tab-main flex-wrap">
              <div class="tab-drop sma-w">
                <div class="drop-sub">
                  <h2>Filtros</h2>
                  <h3>Municipio</h3>
                  <select v-model="selectedCity">
                    <option value="">Select</option>
                    <option v-for="(city, i) of cities" :key="i">
                      {{ city }}
                    </option>
                  </select>
                </div>
              </div>
              <div
                class="contact-details sma-w"
                v-for="(item, i) of selectedCityData"
                :key="i"
              >
                <h2>{{ item.title }}</h2>
                <h3>{{ item.cityName }}</h3>
                <h2>{{ item.text }}</h2>
                <h2>{{ item.designation }}</h2>
                <a :href="'milto:' + item.email">
                  <img src="/images/email.svg" alt="" /> {{ item.email }}
                </a>
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
    cities() {
      return this.selectedCountry.cities.map((ct) => ct.cityName)
    },
    selectedCityData() {
      return this.selectedCountry.cities.filter((ct) =>
        this.selectedCity ? ct.cityName === this.selectedCity : true
      )
    },
    activeTab() {
      return this.selectedCountry.country
    },
  },
  data() {
    return {
      selectedCity: '',
      selectedCountry: this.$cultivarteData.cultivarteDondeEstamosUbicados
        .locations[0],
    }
  },
  methods: {
    changeTab(country) {
      this.selectedCity = ''
      this.selectedCountry = country
    },
  },
  head() {
    return {
      title:
        this.$cultivarteData.cultivarteDondeEstamosUbicados.meta.title +
        ' - ' +
        this.$constants.home.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            this.$cultivarteData.cultivarteDondeEstamosUbicados.meta.metaTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$cultivarteData.cultivarteDondeEstamosUbicados.meta
            .metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$cultivarteData.cultivarteDondeEstamosUbicados.meta.ogTitle +
            ' - ' +
            this.$constants.home.meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$cultivarteData.cultivarteDondeEstamosUbicados.meta
            .ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${this.$constants.baseURL}${this.$cultivarteData.cultivarteDondeEstamosUbicados.meta.ogImage}`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.common-banner.ndb {
  background-image: linear-gradient(
      0deg,
      #111820 12%,
      rgba(255, 103, 27, 0.1) 100%
    ),
    url(/images/programa-cultivarte/5-ubicacion/header_desktop.jpg);
}
.tab-content .tab-drop.sma-w,
.tab-content .contact-details.sma-w {
  width: calc((100% / 3) - 30px);
}

.donde-esta {
  position: relative;
}

.donde-esta .breadc-bak {
  position: absolute;
  top: 0;
  width: 100%;
}

.page-details {
  padding: 40px 0;
}

.page-details p {
  max-width: 693px;
  margin: 0 auto;
  font-family: sansationregular;
  font-size: 18px;
  color: #111820;
  line-height: 30px;
  text-align: center;
}

.all-tab ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: none;
}

.all-tab ul li {
  width: 161px;
  margin: 7px;
}

.all-tab ul li a.nav-link {
  border: 1px solid #77777a;
  border-radius: 4px;
  background-size: cover;
  font-family: Nunito, sans-serif;
  font-size: 16px;
  color: #77777a;
  text-align: center;
  padding: 10px;
  display: block;
}

.all-tab ul li a.nav-link.active,
.all-tab ul li a.nav-link:hover {
  background-color: #ff671b;
  color: #f7f7f7;
}

.all-tab .tab-content {
  padding: 100px 0;
}

.tab-main {
  display: flex;
}

.tab-drop,
.contact-details {
  margin: 15px;
}

.drop-sub {
  border: solid 1px #77777a;
  padding: 30px;
}

.drop-sub h2 {
  font-family: sansationbold;
  font-size: 26px;
  color: #111820;
  line-height: 21px;
  letter-spacing: -0.5px;
  margin-bottom: 25px;
}

.drop-sub h3 {
  font-family: sansationregular;
  font-size: 26px;
  color: #111820;
  line-height: 21px;
  letter-spacing: -0.5px;
  margin-bottom: 35px;
}

.drop-sub select {
  width: 100%;
  padding: 10px;
  border: 1px solid #8c8c8c;
  border-radius: 4px;
  font-family: sansationbold;
  font-size: 20px;
  color: #77777a;
}

.contact-details {
  border-radius: 10px;
  background: #f7f7f7;
  box-shadow: 0px 12px 25px rgba(17, 24, 32, 0.1);
  padding: 50px;
  text-align: center;
}

.contact-details h2 {
  font-family: sansationbold;
  font-size: 26px;
  color: #111820;
  line-height: 21px;
  letter-spacing: -0.5px;
  text-align: center;
  padding-bottom: 20px;
}

.contact-details h3 {
  font-family: Nunito, sans-serif;
  font-size: 36px;
  color: #ff671b;
  line-height: 30px;
  text-align: center;
  padding-bottom: 30px;
}

.contact-details a img {
  margin-right: 15px;
}

.contact-details a {
  font-family: Nunito, sans-serif;
  font-size: 20px;
  color: #77777a;
  line-height: 1px;
  text-align: center;
}

@media (max-width: 991px) {
  .tab-content .tab-drop.sma-w,
  .tab-content .contact-details.sma-w {
    width: calc((100% / 2) - 30px);
  }
}
@media (max-width: 767px) {
  .tab-content .tab-drop.sma-w,
  .tab-content .contact-details.sma-w {
    width: 100%;
  }
  .all-tab ul li {
    width: 150px;
  }

  .all-tab .tab-content {
    padding: 25px 0;
  }

  .tab-main {
    flex-direction: column;
  }

  .tab-drop,
  .contact-details {
    width: calc(100% - 30px);
  }
}
</style>
