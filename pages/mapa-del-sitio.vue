<template>
  <main>
    <section class="sitemap">
      <div class="container margin-0-auto">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h1 class="text-center">Términos y condiciones</h1>
            <ul>
              <li>
                <a href="#">Nombre de página</a>
                <ul>
                  <li><a href="#">Nombre de página</a></li>
                  <li><a href="#">Nombre de página</a></li>
                  <li>
                    <a href="#">Nombre de página</a>
                    <ul>
                      <li><a href="#">Nombre de página</a></li>
                      <li><a href="#">Nombre de página</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Gestión de procesos</a></li>
              <li><a href="#">Estrategia</a></li>
            </ul>
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
      title: this.$constants.mapaDelSitio.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.mapaDelSitio.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.mapaDelSitio.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.mapaDelSitio.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.mapaDelSitio.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${this.$constants.baseURL}${this.$constants.mapaDelSitio.meta.ogImage}`,
        },
      ],
    }
  },
}
</script>

<style>
.sitemap {
  padding: 50px 0;
}
.sitemap h1 {
  font-family: 'sansationbold';
  font-size: 60px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 30px;
  text-align: center;
  margin-bottom: 30px;
}
.sitemap ul {
  margin: 0;
  margin-left: 15px;
}
.sitemap ul li {
  position: relative;
  padding: 5px 0 5px 15px;
  font-family: Nunito;
  font-size: 18px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  line-height: 32px;
}
.sitemap ul li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 20px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #2f425b;
}
.sitemap ul a:hover {
  color: #ff671b;
}
</style>
