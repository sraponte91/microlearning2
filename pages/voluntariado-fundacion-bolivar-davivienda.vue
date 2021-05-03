<template>
  <main>
    <section class="aflora-bnr-se position-relative after-po">
      <div class="img-prt position-absolute">
        <img src="/images/headvoluntariado_ebad.jpg" alt="" class="object-fit-cover" />
      </div>
      <div
        class="d-flex align-items-center some-txt-logo justify-content-center-767 align-items-start-767 position-relative ff-nunito text-white"
      >
        <div>
          <div class="log-prt">
            <img src="/images/logo_joven_de_colombia.svg" alt="" class="img-fluid" />
          </div>
          <p>El Voluntariado del Grupo Bolívar es el camino para cumplir en equipo la apuesta social de la organización a través de la solidaridad, innovación y participación de colaboradores, familiares y pensionados de las diferentes compañías. Este programa logra la misión de unirnos para transformar y multiplicar. Nos cambia la forma en la que vemos el mundo y a nosotros mismos.</p>
        </div>
      </div>
    </section>

    <section class="bg-white only-links-to">
      <div class="container">
        <div
          class="d-flex flex-wrap for-mg justify-content-center ff-nunito justify-content-start-767"
        >
          <NuxtLink to="/volut-conozcanos" class="linkse text-center"
            >Conózcanos</NuxtLink
          >
          <NuxtLink to="/volut-desarrollamos-talento" class="linkse text-center"
            >Desarrollamos talento</NuxtLink
          >
          <NuxtLink to="/volut-inscripciones" class="linkse text-center"
            >Inscripciones</NuxtLink
          >
          <NuxtLink to="" class="linkse text-center"
            >Iniciar sesión</NuxtLink
          >          
        </div>
      </div>
    </section>

    <section class="bg-white what-we-do position-relative voluntaiad-main-se">
      <HomeDots></HomeDots>
      <div class="container">
        <div class="d-flex align-items-start flex-wrap-991">
          <div class="txt-bx-wht position-relative order-2-991">
            <h2 class="ff-sans-b">Sobre nuestro <br> Voluntariado</h2>
            <div class="pra-p ff-nunito">
              <p>Voluntariado Familia Bolívar está enfocado en crear una red de voluntarios en diferentes áreas de conocimiento, para lograr construir una sociedad justa y equitativa. </p>

<p>Los voluntarios que hacen parte del programa donan tiempo y conocimientos para fortalecer competencias ciudadanas en comunidades como: educación financiera, seguridad vial, promoción de lectura, educación ambiental, resolución de conflictos, y muchos más.</p>
            </div> 
          </div>
          <div class="img-rrt-pr order-1-991">
            <img
              src="/images/rectangle_k.jpg"
              alt=""
              class="object-fit-cover"
            />            
          </div>
        </div>
      </div>
    </section>

    <section
      class="desarrollamos-section aflora-pg position-relative before-po"
    >
      <HomeDots></HomeDots>
      <div class="inner-section margin-0-auto position-relative z-index-5">
        <div class="text-center text-white">
          <small class="ff-nunito">Sobre nosotros</small>
          <h2 class="ff-sans-b">Desarrollamos Talento</h2>
          <p class="ff-nunito margin-0-auto">
            Dynamically simplify fully tested internal or "organic" sources via
            open-source innovation. Progressively productize ubiquitous supply
            chains without standardized.
          </p>
          <div class="for-btn">
            <a
              :href="$constants.aflora.desarrollamosTalento"
              class="btn-tell-more"
              >Cuéntame más</a
            >
          </div>
        </div>
      </div>
     <HomeDotsbottoms></HomeDotsbottoms>
    </section>
  </main>
</template>