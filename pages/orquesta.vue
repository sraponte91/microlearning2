<template>
  <main>
    <div class="container position-relative innerpage">
      <b-breadcrumb class="position-absolute ff-sans-r">
        <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item to="/aflora">Aflora</b-breadcrumb-item>
        <b-breadcrumb-item active>Conózcanos</b-breadcrumb-item>
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
        <img
          src="/images/la_orquesta_bg.jpg"
          alt=""
          class="object-fit-cover"
        />
      </div>
      <div class="pg-tit-inner position-absolute text-center">
        <h1 class="ff-sans-b">La Orquesta</h1>
        <div class="on-banner-tx margin-0-auto">
             <p>Credibly pursue efficient relationships after strategic collaboration and idea-sharing. Completely embrace virtual technology after out-of-the-box collaboration and idea-sharing. Distinctively conceptualize principle-centered imperatives with emerging vortals. Professionally build long-term high-impact testing procedures without extensive internal or "organic" sources. Phosfluorescently matrix 24/7 scenarios before robust best practices.</p>
        </div>
      </div>
    </section>


    <section class="bg-white member-prt-a">
         <div class="container">
              <div class="text-center">
                   <h3 class="ff-sans-b">Integrantes</h3>
              </div>
              <div class="some-link-here d-flex justify-content-center flex-wrap-479">
                   <a href="javascript:void(0)" class="btn-links text-center">Cobres</a>
                   <a href="javascript:void(0)" class="btn-links text-center">Percusión</a>
                   <a href="javascript:void(0)" class="btn-links text-center">Cuerdas</a>
                   <a href="javascript:void(0)" class="btn-links text-center">Maderas</a>
              </div>
              <div class="listof-member">
                   <div class="member-containers margin-0-auto">
                        <div class="d-flex flex-wrap for-margin-">
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_a.png" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Miller <br> Muñoz</h4>
                                            <p>Miller Muñoz</p>
                                       </div>
                                  </div>
                             </div>
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_b.jpg" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Daniel <br> Moreno</h4>
                                            <p>Trompeta</p>
                                       </div>
                                  </div>
                             </div>
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_c.jpg" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Ana <br> Molina</h4>
                                            <p>Corno francés</p>
                                       </div>
                                  </div>
                             </div>
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_d.jpg" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Gloria <br> Ramirez</h4>
                                            <p>Trombon y Tuba</p>
                                       </div>
                                  </div>
                             </div>
                        </div>
                        <div class="d-flex justify-content-between lft-rit-arrow">
                             <a href="javascript:void(0)" class="btn-arrow">&lt;</a>
                             <a href="javascript:void(0)" class="btn-arrow">&gt;</a>                             
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
                         <p>Professionally innovate goal-oriented human capital for interactive leadership. Monotonectally innovate 24/7 collaboration and idea-sharing rather than economically sound technologies.</p>
                   </div>                   
              </div>
              <div class="listof-member">
                   <div class="member-containers margin-0-auto">
                        <div class="d-flex flex-wrap for-margin-">
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_e.png" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Johannes <br> Moser</h4>
                                            <p>Violonchelo</p>
                                       </div>
                                  </div>
                             </div>
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_f.png" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Gabriel <br> Ahumada</h4>
                                            <p>Flauta</p>
                                       </div>
                                  </div>
                             </div>
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_g.png" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Sarah <br> Chang</h4>
                                            <p>Violín</p>
                                       </div>
                                  </div>
                             </div>
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_h.png" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Melissa <br> White</h4>
                                            <p>Violín</p>
                                       </div>
                                  </div>
                             </div>
                        </div>
                        <div class="d-flex justify-content-between lft-rit-arrow">
                             <a href="javascript:void(0)" class="btn-arrow">&lt;</a>
                             <a href="javascript:void(0)" class="btn-arrow">&gt;</a>                             
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
                         <p>Professionally innovate goal-oriented human capital for interactive leadership. Monotonectally innovate 24/7 collaboration and idea-sharing rather than economically sound technologies.</p>
                   </div>                   
              </div>
              <div class="listof-member">
                   <div class="member-containers margin-0-auto">
                        <div class="d-flex flex-wrap for-margin-">
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_i.png" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Andres <br> Orozco</h4>
                                            <p>Director principal</p>
                                       </div>
                                  </div>
                             </div>
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_j.png" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Matthew <br> Sydney</h4>
                                            <p>Director invitado</p>
                                       </div>
                                  </div>
                             </div>
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_k.png" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Rafael <br> Payare</h4>
                                            <p>Director</p>
                                       </div>
                                  </div>
                             </div>
                             <div class="member-dispay">
                                  <div class="d-flex align-items-center">
                                       <div class="member-pic">
                                            <img src="/images/member_l.png" alt="" class="object-fit-cover" />
                                       </div>
                                       <div class="member-info ff-sans-r">
                                            <h4>Alejandro <br> Posada</h4>
                                            <p>Director invitado</p>
                                       </div>
                                  </div>
                             </div>
                        </div>
                        <div class="d-flex justify-content-between lft-rit-arrow">
                             <a href="javascript:void(0)" class="btn-arrow">&lt;</a>
                             <a href="javascript:void(0)" class="btn-arrow">&gt;</a>                             
                        </div>
                   </div>
              </div>
         </div>
    </section>

  </main>
</template>
<script>
export default {
  methods: {
    goBack() {
      window.history.back()
    },
  },
}
</script>