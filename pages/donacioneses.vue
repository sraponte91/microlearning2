<template>
  <main>
    <section class="main-slider-at-top donaciones-main position-relative">
      <div class="img-prt position-relative">
        <img
          src="/images/head_fe_8241301e_6_afbc_1_272402.jpeg"
          alt=""
          class="object-fit-cover"
        />
      </div>
      <div class="container position-absolute">
        <h1 class="text-uppercase ff-sans-b">
          Su Donación Tiene El <br />
          Poder De Transformar <br />
          Historia
        </h1>
        <div class="iwant-donate">
          <a href="javascript:void(0)" class="ff-nunito btn-iwant-do"
            >Quiero donar</a
          >
        </div>
      </div>
    </section>
    <section class="bg-white donate-funding">
      <div class="container">
        <div class="inner-wid margin-0-auto">
          <div class="img-part position-relative after-po">
            <img
              src="/images/ninios_campana_8c3f2bb2d28185797bbc6f.jpeg"
              class="object-fit-cover"
              alt=""
            />
            <div class="position-absolute set-btom text-center">
              <h3 class="text-uppercase ff-sans-b">
                Transformando El Futuro De Nuestros Niños
              </h3>
            </div>
          </div>
          <div class="progress-bar-here">
            <div class="text-right">
              <p>Recaudado</p>
            </div>
            <b-progress :value="value" :max="max"></b-progress>
            <h4>$4.192.000 de $14.000.000</h4>
          </div>
          <div class="text-info-ab-do ff-nunito">
            <p>
              En Medellín más de 150 niños y niñas en situación de abandono, han
              sido acogidos por la Corporación Superarse. Esta organización los
              apoya en la construcción de su proyecto de vida y los forma en
              habilidades tecnológicas para acceder a su derecho a la educación.
              Hoy se hace imprescindible disponer de computadores como
              herramienta de aprendizaje y esto será posible gracias a su
              donación. Apoyemos este camino de esperanza.
            </p>
          </div>
          <div class="donate-btn text-center">
            <a href="javascript:void(0)" class="btb-do-b ff-nunito"
              >Quiero donar</a
            >
          </div>
        </div>
      </div>
    </section>

    <section class="be-part-of-ther position-relative">
      <img
        src="/images/main_rectangle_abde.svg"
        alt=""
        class="object-fit-cover d-none-767"
      />
      <div
        class="container position-absolute text-btn-lel position-relative-767"
      >
        <div class="inn-sm-bx margin-0-auto">
          <div class="d-flex justify-content-center flex-wrap-767">
            <div class="text-right txt-part text-center-767">
              <h3 class="text-uppercase ff-sans-b">
                <span>sea Parte</span><br />
                De Los Que<br />
                Transforman<br />
                Historias
              </h3>
            </div>
            <div class="nd-part-of-div">
              <p class="ff-nunito">
                Con una donación usted tiene el poder de transformar la historia
                de estas iniciativas, brindándoles más oportunidades y recursos
                para que sigan construyendo el futuro del país.
              </p>
              <div class="donate-btn">
                <a href="javascript:void(0)" class="btb-do-b ff-nunito"
                  >Quiero donar</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="seprate-iimg position-absolute position-relative-767">
        <img
          src="/images/background278a6_bc9a61e873ed.png"
          alt=""
          class="object-fit-cover"
        />
      </div>
    </section>
    <section class="joing-forcese">
      <div class="container">
        <div class="inn-sm-sec margin-0-auto">
          <h3 class="text-uppercase ff-sans-b">Unimos Fuerzas</h3>
          <div class="text-center pra-p">
            <p class="ff-nunito">
              Estos son todos los aliados que se han unido para ayudar a las
              comunidades, líderes y emprendedores a transformar sus vidas e
              iniciativas.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="donation-certificate bg-white">
      <div class="container">
        <div class="text-center">
          <div class="img margin-0-auto">
            <img
              src="/images/superarse_095a4fdf_af0b3e-482_e4572e88f2_a.jpeg"
              alt=""
              class="object-fit-cover"
            />
          </div>
          <div class="pra-p ff-nunito">
            <p>Para solicitar su certificado de donación contacte a</p>
            <a href="mailto:donaciones@fundacionbd.org"
              >donaciones@fundacionbd.org</a
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      value: 33.333333333,
      max: 50,
    }
  },
}
</script>