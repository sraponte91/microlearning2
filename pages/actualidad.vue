<template>
     <main>
          <div class="container position-relative">
               <b-breadcrumb class="position-absolute ff-sans-r">                    
                    <b-breadcrumb-item href="/.">Home</b-breadcrumb-item>                    
                    <b-breadcrumb-item active>Actualidad</b-breadcrumb-item>
               </b-breadcrumb>
          </div>          
          <section class="main-slider-at-top actualidad-pg">               
               <div class="img-prt position-relative">
                    <img src="/images/main_slide_a.png" alt="" class="object-fit-cover" />
                    <div class="container position-absolute set-to-bottom">
                         <div class="banner-txt text-white">   
                              <div class="orange-bg">
                                   <h1 class="ff-sans-b">Actualidad</h1>
                              </div>               
                              <div class="black-bg">
                                   <p class="ff-nunito">Aquí vas a poder aprender acerca del desarrollo de nuestros programas y sus novedades</p>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
          <section class="what-looking-for">
               <div class="container">
                    <div class="innper-bx margin-0-auto">
                         <div class="d-flex align-items-center justify-content-between flex-wrap-767">
                              <p class="ff-nunito text-white">¿Qué estas buscando?</p>
                              <b-form-input :id="`type-${type}`" :type="type" placeholder="Aflora, avances, nuevos programas"></b-form-input>
                         </div>                         
                    </div>
               </div>
          </section>

          <section class="list-of-blog-actu">
               <div class="main-slider-at-top actualidad-pg">               
                    <div class="img-prt position-relative">
                         <img src="/images/blog_a.jpg" alt="" class="object-fit-cover" />
                         <div class="container position-absolute set-to-bottom">
                              <div class="banner-txt text-white">   
                                   <div class="line-he-1">
                                        <span class="date-p ff-nunito text-white">08 - Agosto - 2020</span>
                                   </div>                                   
                                   <div class="orange-bg">
                                        <h1 class="ff-sans-b">Continually aggregate premium</h1>
                                   </div>               
                                   <div class="black-bg">
                                        <p class="ff-nunito">Uniquely harness backward-compatible networks without turnkey core competencies.</p>
                                   </div>
                              </div>
                         </div>
                         <a href="/interna-de-actualidad" class="position-absolute full-box-link"></a>
                    </div>
               </div>
               <div class="main-slider-at-top actualidad-pg">               
                    <div class="img-prt position-relative">
                         <img src="/images/blog_b.jpg" alt="" class="object-fit-cover" />
                         <div class="container position-absolute set-to-bottom">
                              <div class="banner-txt text-white">   
                                   <div class="line-he-1">
                                        <span class="date-p ff-nunito text-white">08 - Agosto - 2020</span>
                                   </div>                                   
                                   <div class="orange-bg">
                                        <h1 class="ff-sans-b">Continually aggregate premium</h1>
                                   </div>               
                                   <div class="black-bg">
                                        <p class="ff-nunito">Uniquely harness backward-compatible networks without turnkey core competencies.</p>
                                   </div>
                              </div>
                         </div>
                         <a href="/interna-de-actualidad" class="position-absolute full-box-link"></a>
                    </div>
               </div>
               <div class="main-slider-at-top actualidad-pg">               
                    <div class="img-prt position-relative">
                         <img src="/images/blog_c.jpg" alt="" class="object-fit-cover" />
                         <div class="container position-absolute set-to-bottom">
                              <div class="banner-txt text-white">   
                                   <div class="line-he-1">
                                        <span class="date-p ff-nunito text-white">08 - Agosto - 2020</span>
                                   </div>                                   
                                   <div class="orange-bg">
                                        <h1 class="ff-sans-b">Continually aggregate premium</h1>
                                   </div>               
                                   <div class="black-bg">
                                        <p class="ff-nunito">Uniquely harness backward-compatible networks without turnkey core competencies.</p>
                                   </div>
                              </div>
                         </div>
                         <a href="/interna-de-actualidad" class="position-absolute full-box-link"></a>
                    </div>
               </div>
          </section>
     </main>
</template