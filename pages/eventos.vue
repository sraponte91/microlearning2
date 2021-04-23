<template>
     <main>
          <div class="container position-relative">
               <b-breadcrumb class="position-absolute ff-sans-r">                    
                    <b-breadcrumb-item href="/.">Home</b-breadcrumb-item>                    
                    <b-breadcrumb-item active>Eventos</b-breadcrumb-item>
               </b-breadcrumb>
          </div>          
          <section class="main-slider-at-top actualidad-pg">               
               <div class="img-prt position-relative">
                    <img src="/images/evento_banner.jpg" alt="" class="object-fit-cover" />
                    <div class="container position-absolute set-to-bottom">
                         <div class="banner-txt text-white">   
                              <div class="orange-bg">
                                   <h1 class="ff-sans-b">Eventos</h1>
                              </div>               
                              <div class="black-bg">
                                   <p class="ff-nunito">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p>
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
                              <b-form-input :id="`type-${type}`" :type="type" placeholder="Eventos"></b-form-input>
                         </div>                         
                    </div>
               </div>
          </section>

          <section class="only-boxes-section">
               <div class="container">
                    <div class="d-flex flex-wrap for-mar-setmet">
                         <div class="only-one-bx">
                              <h3 class="ff-sans-b text-uppercase">Título del evento</h3>
                              <div class="im-bxe">
                                   <img src="/images/inversion_social.jpg" alt="" class="object-fit-cover" />
                              </div>
                              <div class="dt-tx-info position-relative after-po ff-nunito">
                                   <div class="d-flex">
                                        <div class="dat-bx position-relative after-po">
                                             <p>9/Feb/2021</p>
                                             <p>8:00</p>
                                        </div>
                                        <div class="bx-nam">
                                             <div class="d-flex justify-content-between">
                                                  <div class="lft">
                                                       <h4>Lugar del evento</h4>
                                                       <p>Nombre del encargado</p>
                                                  </div>                      
                                                  <p>Bogotá</p>                            
                                             </div>
                                        </div>
                                   </div>                                   
                              </div>
                              <div class="for-btn">
                                   <a href="/interna-de-evento" class="btn-ver-evento ff-nunito position-relative">Ver Evento</a>
                              </div>
                         </div>
                         <div class="only-one-bx">
                              <h3 class="ff-sans-b text-uppercase">Título del evento</h3>
                              <div class="im-bxe">
                                   <img src="/images/inversion_social.jpg" alt="" class="object-fit-cover" />
                              </div>
                              <div class="dt-tx-info position-relative after-po ff-nunito">
                                   <div class="d-flex">
                                        <div class="dat-bx position-relative after-po">
                                             <p>9/Feb/2021</p>
                                             <p>8:00</p>
                                        </div>
                                        <div class="bx-nam">
                                             <div class="d-flex justify-content-between">
                                                  <div class="lft">
                                                       <h4>Lugar del evento</h4>
                                                       <p>Nombre del encargado</p>
                                                  </div>                      
                                                  <p>Bogotá</p>                            
                                             </div>
                                        </div>
                                   </div>                                   
                              </div>
                              <div class="for-btn">
                                   <a href="/interna-de-evento" class="btn-ver-evento ff-nunito position-relative">Ver Evento</a>
                              </div>
                         </div>
                         <div class="only-one-bx">
                              <h3 class="ff-sans-b text-uppercase">Título del evento</h3>
                              <div class="im-bxe">
                                   <img src="/images/inversion_social.jpg" alt="" class="object-fit-cover" />
                              </div>
                              <div class="dt-tx-info position-relative after-po ff-nunito">
                                   <div class="d-flex">
                                        <div class="dat-bx position-relative after-po">
                                             <p>9/Feb/2021</p>
                                             <p>8:00</p>
                                        </div>
                                        <div class="bx-nam">
                                             <div class="d-flex justify-content-between">
                                                  <div class="lft">
                                                       <h4>Lugar del evento</h4>
                                                       <p>Nombre del encargado</p>
                                                  </div>                      
                                                  <p>Bogotá</p>                            
                                             </div>
                                        </div>
                                   </div>                                   
                              </div>
                              <div class="for-btn">
                                   <a href="/interna-de-evento" class="btn-ver-evento ff-nunito position-relative">Ver Evento</a>
                              </div>
                         </div>
                         <div class="only-one-bx">
                              <h3 class="ff-sans-b text-uppercase">Título del evento</h3>
                              <div class="im-bxe">
                                   <img src="/images/inversion_social.jpg" alt="" class="object-fit-cover" />
                              </div>
                              <div class="dt-tx-info position-relative after-po ff-nunito">
                                   <div class="d-flex">
                                        <div class="dat-bx position-relative after-po">
                                             <p>9/Feb/2021</p>
                                             <p>8:00</p>
                                        </div>
                                        <div class="bx-nam">
                                             <div class="d-flex justify-content-between">
                                                  <div class="lft">
                                                       <h4>Lugar del evento</h4>
                                                       <p>Nombre del encargado</p>
                                                  </div>                      
                                                  <p>Bogotá</p>                            
                                             </div>
                                        </div>
                                   </div>                                   
                              </div>
                              <div class="for-btn">
                                   <a href="/interna-de-evento" class="btn-ver-evento ff-nunito position-relative">Ver Evento</a>
                              </div>
                         </div>
                         <div class="only-one-bx">
                              <h3 class="ff-sans-b text-uppercase">Título del evento</h3>
                              <div class="im-bxe">
                                   <img src="/images/inversion_social.jpg" alt="" class="object-fit-cover" />
                              </div>
                              <div class="dt-tx-info position-relative after-po ff-nunito">
                                   <div class="d-flex">
                                        <div class="dat-bx position-relative after-po">
                                             <p>9/Feb/2021</p>
                                             <p>8:00</p>
                                        </div>
                                        <div class="bx-nam">
                                             <div class="d-flex justify-content-between">
                                                  <div class="lft">
                                                       <h4>Lugar del evento</h4>
                                                       <p>Nombre del encargado</p>
                                                  </div>                      
                                                  <p>Bogotá</p>                            
                                             </div>
                                        </div>
                                   </div>                                   
                              </div>
                              <div class="for-btn">
                                   <a href="/interna-de-evento" class="btn-ver-evento ff-nunito position-relative">Ver Evento</a>
                              </div>
                         </div>
                         <div class="only-one-bx">
                              <h3 class="ff-sans-b text-uppercase">Título del evento</h3>
                              <div class="im-bxe">
                                   <img src="/images/inversion_social.jpg" alt="" class="object-fit-cover" />
                              </div>
                              <div class="dt-tx-info position-relative after-po ff-nunito">
                                   <div class="d-flex">
                                        <div class="dat-bx position-relative after-po">
                                             <p>9/Feb/2021</p>
                                             <p>8:00</p>
                                        </div>
                                        <div class="bx-nam">
                                             <div class="d-flex justify-content-between">
                                                  <div class="lft">
                                                       <h4>Lugar del evento</h4>
                                                       <p>Nombre del encargado</p>
                                                  </div>                      
                                                  <p>Bogotá</p>                            
                                             </div>
                                        </div>
                                   </div>                                   
                              </div>
                              <div class="for-btn">
                                   <a href="/interna-de-evento" class="btn-ver-evento ff-nunito position-relative">Ver Evento</a>
                              </div>
                         </div>
                    </div>
                    <div class="text-center">
                         <div class="btn-redrect">
                              <a href="javascript:void(0)" class="btn-carge-mars ff-nunito">Cargar Más</a>
                         </div>
                    </div>
               </div>
          </section>
     </main>
</template