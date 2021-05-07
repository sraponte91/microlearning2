<template>
  <main>
    <div class="donde-esta">
      <!-- Breadcrums start -->
      <div class="breadc-bak">
        <div class="container margin-0-auto">
          <ol class="breadcrumb ff-sans-r mb-2">
            <li class="breadcrumb-item">
              <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
            </li>
            <li class="breadcrumb-item active">
              <span aria-current="location">Directorio</span>
            </li>
          </ol>
          <div class="back-to-home position-relative d-flex align-items-center small-size">
            <i class="ic-back"></i>
            <a class="ff-sans-b" href="javascript:void(0)" @click="goBack()">
              Volver
            </a>
          </div>
        </div>
      </div>
      <!-- Breadcrums end -->

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
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#colombia">Colombia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#el-salvador">El Salvador</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#costa-rica">Costa Rica</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#honduras">Honduras</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#panamá">Panamá</a>
          </li>
        </ul>
        <div class="tab-content">
          <div id="colombia" class="container tab-pane active">
            <div class="tab-main">
              <div class="tab-drop">
                <div class="drop-sub">
                  <h2>Filtros</h2>
                  <h3>Departamento</h3>
                  <select>
                    <option>Antioquia</option>
                    <option>Arauca</option>
                    <option>Atlantico</option>
                    <option>Boyaca</option>
                    <option>Caldas</option>
                    <option>Casanare</option>
                    <option>Cesar</option>
                    <option>Cordoba</option>
                    <option>Cundinamarca</option>
                    <option>Huila</option>
                    <option>La Guajira</option>
                    <option>Magdalena</option>
                    <option>Meta</option>
                    <option>Nariño</option>
                    <option>Norte de Santander</option>
                    <option>Quindio</option>
                    <option>Risaralda</option>
                    <option>Santander</option>
                    <option>Sucre</option>
                    <option>Tolima</option>
                    <option>Valle</option>

                  </select>
                </div>
              </div>
              <div class="contact-details">
                <h2>ANTIOQUIA</h2>
                <h3>Amagá</h3>
                <h2>Alcaldía de Amagá</h2>
                <h2>Calle 51 N° 50-18, tercer piso</h2>
                <a href="milto:amaga@fcultivarte.org">
                  <img src="/images/email.svg" alt="" /> amaga@fcultivarte.org
                </a>
              </div>
              <div class="contact-details">
                <h2>ANTIOQUIA</h2>
                <h3>Andes</h3>
                <h2>Alcaldía de Andes</h2>
                <h2>Cra 50 N°52-52</h2>
                <a href="milto:andes@fcultivarte.org">
                  <img src="/images/email.svg" alt="" /> andes@fcultivarte.org
                </a>
              </div>
              <div class="contact-details">
                <h2>ANTIOQUIA</h2>
                <h3>Ciudad Bolivar</h3>
                <h2>Alcaldía de Ciudad Bolivar</h2>
                <h2>Calle 50 N° 52 - 07</h2>
                <a href="milto:ciudadbolivar@fcultivarte.org">
                  <img src="/images/email.svg" alt="" /> ciudadbolivar@fcultivarte.org
                </a>
              </div>
               <div class="contact-details">
                <h2>ANTIOQUIA</h2>
                <h3>Jardín</h3>
                <h2>Alcaldía de Jardín</h2>
                <h2>Cra 6 N° 9-26</h2>
                <a href="milto:jardin@fcultivarte.org">
                  <img src="/images/email.svg" alt="" /> jardin@fcultivarte.org
                </a>
              </div>
              <div class="contact-details">
                <h2>ANTIOQUIA</h2>
                <h3>El Santuario</h3>
                <h2>Alcaldía de El Santuario</h2>
                <h2>Cra  49 Nro 48 - 19</h2>
                <a href="milto:elsantuario@fcultivarte.org">
                  <img src="/images/email.svg" alt="" /> elsantuario@fcultivarte.org
                </a>
              </div>
               <div class="contact-details">
                <h2>ANTIOQUIA</h2>
                <h3>Sonsón</h3>
                <h2>Alcaldía de Sonsón</h2>
                <h2>Cra8 N° 6-11</h2>
                <a href="milto:sonson@fcultivarte.org">
                  <img src="/images/email.svg" alt="" /> sonson@fcultivarte.org

                </a>
              </div>
               <div class="contact-details">
                <h2>ANTIOQUIA</h2>
                <h3>Támesis</h3>
                <h2>Alcaldía de támesis</h2>
                <h2>Cra 10 N° 12 - 68</h2>
                <a href="milto:tamesis@fcultivarte.org">
                  <img src="/images/email.svg" alt="" /> tamesis@fcultivarte.org
                </a>
              </div>
                  <div class="contact-details">
                <h2>ANTIOQUIA</h2>
                <h3>Betulia</h3>
                <h2>Alcaldía de Betulia</h2>
                <h2>Cra 22 N°23-09 apto 100</h2>
                <a href="milto:betulia@fcultivarte.org">
                  <img src="/images/email.svg" alt="" /> betulia@fcultivarte.org

                </a>
              </div>


            </div>
            <div id="el-salvador" class="container tab-pane fade">
              <div class="tab-main">
                <div class="tab-drop">
                  <div class="drop-sub">
                    <h2>Filtros2</h2>
                    <h3>Departamento</h3>
                    <select>
                      <option>Santa Tecla</option>
                    </select>
                  </div>
                </div>
                <div class="contact-details">
                  <h2>EL SALVADOR</h2>
                  <h3>Santa Tecla</h3>
                  <h2>-</h2>
                  <h2>Calle La Sabana Y Ave. D, Colonia Jardines De La Sabana, Santa Tecla, La Libertad. Contiguo Al
                    Centro Escolar Jardines De La Sabana Y Parque Los Lobos.</h2>
                  <a href="milto:santatecla@fcultivarte.org"><img src="/images/email.svg"
                      alt="" />santatecla@fcultivarte.org</a>
                </div>
              </div>
            </div>
            <div id="costa-rica" class="container tab-pane fade">
              <div class="tab-main">
                <div class="tab-drop">
                  <div class="drop-sub">
                    <h2>Filtros3</h2>
                    <h3>Municipio</h3>
                    <select>
                      <option>Guacimo</option>
                      <option>Alajuela</option>
                    </select>
                  </div>
                </div>
                <div class="contact-details">
                  <h2>COSTA RICA</h2>
                  <h3>Guacimo</h3>
                  <h2>-</h2>
                  <h2>De La Entrada Principal A Guácimo, Limón, 600 M Norte Y 25 M Oeste.</h2>
                  <a href="milto:guacimo@fcultivarte.org"><img src="/images/email.svg"
                      alt="" />guacimo@fcultivarte.org</a>
                </div>
                <div class="contact-details">
                  <h2>COSTA RICA</h2>
                  <h3>Alajuela</h3>
                  <h2>-</h2>
                  <h2>Diagonal A La Iglesia Católica De Barrio Santa Rita, En Barrio San José De Alajuela</h2>
                  <a href="milto:alajuela@fcultivarte.org"><img src="/images/email.svg"
                      alt="" />alajuela@fcultivarte.org</a>
                </div>
              </div>
            </div>
            <div id="honduras" class="container tab-pane fade">
              <div class="tab-main">
                <div class="tab-drop">
                  <div class="drop-sub">
                    <h2>Filtros4</h2>
                    <h3>Municipio</h3>
                    <select>
                      <option>Tegucigalpa</option>
                      <option>Nacaome</option>
                    </select>
                  </div>
                </div>
                <div class="contact-details">
                  <h2>HONDURAS</h2>
                  <h3>Tegucigalpa</h3>
                  <h2>-</h2>
                  <h2>Barrio El Centro Av Jerez, Detrás De Agencia Davivienda Plaza Morazán</h2>
                  <a href="milto:tegucigalpa@fcultivarte.org"><img src="/images/email.svg"
                      alt="" />tegucigalpa@fcultivarte.org</a>
                </div>
                <div class="contact-details">
                  <h2>HONDURAS</h2>
                  <h3>Nacaome</h3>
                  <h2>-</h2>
                  <h2>Barrio El Centro Contiguo A Agencia Davivienda Nacaome, Frente A Alcaldía Municipal</h2>
                  <a href="milto:nacaome@fcultivarte.org"><img src="/images/email.svg"
                      alt="" />nacaome@fcultivarte.org</a>
                </div>
              </div>
            </div>
            <div id="panamá" class="container tab-pane fade">
              <div class="tab-main">
                <div class="tab-drop">
                  <div class="drop-sub">
                    <h2>Filtros5</h2>
                    <h3>Municipio</h3>
                    <select>
                      <option>Curundú</option>
                    </select>
                  </div>
                </div>
                <div class="contact-details">
                  <h2>PANAMÁ</h2>
                  <h3>Curundú</h3>
                  <h2>- </h2>
                  <h2>Calle Maria Reina Al Final, Diagonal A Rotonda, Edificio Biblioteca Noris Correa De Sanjur</h2>
                  <a href="milto:curundu@fcultivarte.org">
                    <img src="/images/email.svg" alt="" />curundu@fcultivarte.org

                  </a>
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
    head() {
      return {
        title: this.$constants.cultivarteDondeEstamosUbicados.meta.title,
        meta: [{
            hid: 'title',
            name: 'title',
            content: this.$constants.cultivarteDondeEstamosUbicados.meta
              .metaTitle,
          },
          {
            hid: 'description',
            name: 'description',
            content: this.$constants.cultivarteDondeEstamosUbicados.meta
              .metaDescription,
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.$constants.cultivarteDondeEstamosUbicados.meta.ogTitle,
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: this.$constants.cultivarteDondeEstamosUbicados.meta
              .ogDescription,
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: `${this.$constants.baseURL}${this.$constants.cultivarteDondeEstamosUbicados.meta.ogImage}`,
          },
        ],
      }
    },
  }

</script>

<style>
  .common-banner.ndb {
    background-image: linear-gradient(0deg,
        #111820 12%,
        rgba(255, 103, 27, 0.1) 100%),
      url(/images/programa-cultivarte/5-ubicacion/header_desktop.jpg);
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
    width: calc(48% - 15px);
    margin: 15px;
  }

  .drop-sub {
    border: solid 1px #77777a;
    max-width: 420px;
    padding: 50px 40px;
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

  @media (max-width: 767px) {
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
