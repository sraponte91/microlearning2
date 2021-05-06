<template>
  <div v-if="error.statusCode === 404">
    <main>
      <section class="error-section-1">
        <div class="container margin-0-auto">
          <div class="text-orange">404</div>
          <h1 class="ff-sans-b">Lo sentimos</h1>
          <p>No encontramos la página que estas buscando.</p>
          <b-btn variant="primary">Inscríbase aquí</b-btn>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
}
</script>
<style>
.error-section-1 {
  padding: 70px 0;
  font-family: Nunito;
  font-size: 32px;
  color: #00233b;
  text-decoration: none solid rgb(0, 35, 59);
  line-height: 32px;
  letter-spacing: 2px;
  text-align: center;
}
.error-section-1 .text-orange {
  font-family: Nunito;
  font-size: 92px;
  color: #ff6600;
  text-decoration: none solid rgb(255, 102, 0);
  line-height: 32px;
  letter-spacing: 2px;
  margin-bottom: 25px;
}
.error-section-1 h1 {
  font-family: 'sansationbold';
  font-size: 72px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 100px;
  margin-bottom: 25px;
}
.error-section-1 .btn-primary {
  padding: 10px 25px;
  background-color: #ff671b;
  font-family: Nunito;
  font-size: 18px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: center;
  border: none;
  border-radius: 0;
  margin-top: 50px;
}
@media (max-width: 767px) {
  .error-section-1 .text-orange {
    padding-top: 30px;
    line-height: 92px;
  }
  .error-section-1 h1 {
    font-size: 58px;
    line-height: normal;
  }
}
</style>
