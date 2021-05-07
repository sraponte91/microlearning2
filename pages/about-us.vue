<template>
  <main>
    <section class="full-image">
      <div class="position-absolute">
        <img
          src="/images/seccion-about/portada.jpg"
          alt="About Us"
          class="object-fit-cover"
        />
      </div>
    </section>
    <section class="about-content">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2 text-center">
            <p class="ff-nunito caption">Who we are</p>
            <h1 class="ff-sans-b">About Us</h1>
            <p>
              More than 75 years of experience and support from the Bolívar
              Business Group has enabled our foundation to expand its horizons
              and to provide the trust that has distinguished our organization
              throughout Colombia with our wide array of programs.
            </p>
            <p>
              Our mission is to support and promote life-changing and
              high-impact projects that develop skills in individuals,
              communities and organizations in order to build a more just,
              innovative and equitable society.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="about-lists">
      <div class="container">
        <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
          <div class="txt-points position-relative">
            <div class="pra-p">
              <h3 class="ff-sans-b">Aflora</h3>
              <p>
                Our goal is to work with Colombian companies exhibiting a high
                potential for social impact in order to strengthen their
                management and growth through professional training and
                guidance. These companies work with a network of successful
                business professionals from around the country, as well as
                senior management representatives from the Bolívar Business
                Group, who share their knowledge in order to build
                entrepreneurial initiatives.
              </p>
              <p>
                Thanks to Emprende País, a program of the Fundación Bolívar
                Davivienda, we have supported and strengthened more than 213
                companies that have worked hand-in-hand with our program to
                achieve their goals, creating high-impact in their industries in
                a sustainable and efficient way.
              </p>
              <NuxtLink
                :to="$constants.aboutUs.afloraUrl"
                class="btn btn-primary"
              >
                Learn More
              </NuxtLink>
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/seccion-about/aboutusimg_0006_aflora.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>

        <div
          class="d-flex multiple-reapt align-items-start part-two flex-wrap-991"
        >
          <div class="img-points order-2-991">
            <img
              src="/images/seccion-about/aboutusimg_0003_emprende_pais.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
          <div class="two-div-in-one position-relative order-1-991">
            <div class="txt-points position-relative">
              <div class="pra-p">
                <h3 class="ff-sans-b">Emprende País</h3>
                <p>
                  Our goal is to work with Colombian companies exhibiting a high
                  potential for social impact in order to strengthen their
                  management and growth through professional training and
                  guidance. These companies work with a network of successful
                  business professionals from around the country, as well as
                  senior management representatives from the Bolívar Business
                  Group, who share their knowledge in order to build
                  entrepreneurial initiatives.
                </p>
                <p>
                  Thanks to Emprende País, a program of the Fundación Bolívar
                  Davivienda, we have supported and strengthened more than 213
                  companies that have worked hand-in-hand with our program to
                  achieve their goals, creating high-impact in their industries
                  in a sustainable and efficient way.
                </p>
                <NuxtLink
                  :to="$constants.aboutUs.emprendePaisUrl"
                  class="btn btn-primary"
                >
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
          <div class="txt-points position-relative">
            <div class="pra-p">
              <h3 class="ff-sans-b">Filarmónica Joven de Colombia</h3>
              <p>
                Over 100 musicians form this exemplary orchestra, which has been
                recognized for its talent and world-class performances through
                its array of professional shows on different musical stages
                around the world.
              </p>
              <p>
                Created in 2010, the Filarmónica Joven de Colombia has launched
                the musical careers of more than 400 young musicians who have
                achieved their dreams of showcasing their talent by being part
                of one of the best symphonic youth orchestras. The pride that
                their country has for this orchestra motivates these young
                musicians to continue forward with their careers.
              </p>
              <p>
                The Filarmónica Joven de Colombia partners with multiple
                national and international institutes. Thanks to its partnership
                with the YOA (Orchestra of America), the orchestra maintains a
                strong bond with teachers from the University of Minnesota, the
                University of Kansas, Ball State University, the Minnesota
                Orchestra, and the New York Metropolitan Orchestra. Since 2014,
                the orchestra has developed important relationships with the
                Houston Symphony Orchestra, the Mahler Chamber Orchestra, the
                Vienna Philharmonic Orchestra, and the Escuela Superior de
                Música Reina Sofía in Madrid (with whom the orchestra
                participates in an exchange program agreement).
              </p>
              <NuxtLink
                :to="$constants.aboutUs.filarmonicaJovendeColombiaUrl"
                class="btn btn-primary"
                >Learn More</NuxtLink
              >
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/seccion-about/aboutusimg_0002_filarmonica.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>

        <div
          class="d-flex multiple-reapt align-items-start part-two flex-wrap-991"
        >
          <div class="img-points order-2-991">
            <img
              src="/images/seccion-about/aboutusimg_0000_voluntariado.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
          <div class="two-div-in-one position-relative order-1-991">
            <div class="txt-points position-relative">
              <div class="pra-p">
                <h3 class="ff-sans-b">Voluntariado Familia Bolívar</h3>
                <p>
                  Being a part of the Bolívar Business Group means being part of
                  a family that is committed to the development of the regions
                  in which our offices are located.
                </p>
                <p>
                  Our volunteers are both employees and partners who are
                  committed and willing to work and contribute to the social
                  sector of Colombia. Our 5,000 volunteers have impacted more
                  than 70,000 people with our Great Bolívar Family Volunteering
                  Movement. We are proud to encourage our partners to contribute
                  to the social sector both inside and outside the country.
                </p>
                <NuxtLink
                  :to="$constants.aboutUs.voluntariadoFamiliaBolívarUrl"
                  class="btn btn-primary"
                  >Learn More</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
          <div class="txt-points position-relative">
            <div class="pra-p">
              <h3 class="ff-sans-b">Cultivarte</h3>
              <p>
                This program is supported by Fundación Bolívar Davivienda. It
                offers playful learning spaces where beneficiaries are able to
                enhance their talents and inspire others to achieve their goals
                by developing their skills.
              </p>
              <p>
                In Cultivarte, we focus on five areas to develop our plan. These
                areas stimulate competencies and enable beneficiaries to develop
                in a holistic manner with their environment. This way we rewrite
                history, not only of children and adolescents, but also of their
                communities.
              </p>
              <NuxtLink
                :to="$constants.aboutUs.cultivarteUrl"
                class="btn btn-primary"
              >
                Learn More
              </NuxtLink>
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/seccion-about/aboutusimg_0004_cultivarte.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>

        <div
          class="d-flex multiple-reapt align-items-start part-two flex-wrap-991"
        >
          <div class="img-points order-2-991">
            <img
              src="/images/seccion-about/aboutusimg_0001_inversion social.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
          <div class="two-div-in-one position-relative order-1-991">
            <div class="txt-points position-relative">
              <div class="pra-p">
                <h3 class="ff-sans-b">Inversión Social</h3>
                <p>
                  Our belief in transformative ideas has led us to support
                  projects that build skills, empower communities and promote
                  sustainability.
                </p>
                <p>
                  In order to bring life to these projects and encourage them on
                  their path to self-improvement, we request project proposals
                  from various regions of Colombia, evaluate potential projects
                  and, eventually, co-finance them thanks to the Fundación
                  Bolívar Davivienda – Inversión Social program.
                </p>
                <p>
                  We support organizations that strive to protect children and
                  adolescents and prevent teenage pregnancy, among other social
                  issues, in order to achieve transformative results.
                </p>
                <NuxtLink
                  :to="$constants.aboutUs.inversionSocialUrl"
                  class="btn btn-primary"
                >
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex multiple-reapt align-items-start flex-wrap-991">
          <div class="txt-points position-relative">
            <div class="pra-p">
              <h3 class="ff-sans-b">Becas al Talento</h3>
              <p>
                The education and formation of Colombian youth is very important
                to the Fundación Bolívar Davivienda. Our scholarship program
                aims to support outstanding, high-performing students who do not
                have the resources to pay for their university or to develop
                their talents.
              </p>
              <p>
                Many students have completed their studies thanks to our Becas
                (scholarships) program. We are proud to be part of the
                educational formation of so many students who will become
                skilled professionals prepared to create positive change
                and transform the face of Colombia.
              </p>
              <NuxtLink
                :to="$constants.aboutUs.becasAlTalento"
                class="btn btn-primary"
              >
                Learn More
              </NuxtLink>
            </div>
          </div>
          <div class="img-points">
            <img
              src="/images/seccion-about/aboutusimg_0005_becas.jpg"
              alt=""
              class="object-fit-cover"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="about-download">
      <div class="container">
        <h3>Downloads</h3>
        <ul class="d-flex">
          <li><a href="pdf/About_Us_Privacy_Policy_of_La_Fundacion.pdf">Privacy Policy of La Fundación</a></li>
          <li><a href="pdf/About_Us_Privacy_Policy_of_Cultivarte.pdf">Privacy Policy of Cultivarte</a></li>
          <li><a href="pdf/About_Us_Notice_of_Privacy_of_La_Fundacion.pdf">Notice of Privacy of La Fundación</a></li>
          <li><a href="pdf/About_Us_Notice_of_Privacy_of_Cultivarte.pdf">Notice of Privacy of Cultivarte</a></li>
          <li><a href="pdf/About_Us_Autorization_for_data protection_FBD_FCult.pdf">Autorization for data protection</a></li>
          <li><a href="pdf/About_Us_Specific_regulations_per_project_FBD_FCult.pdf">Specific regulations per project</a></li>
          <li><a href="pdf/About_Us_Terms_and_Conditions_FBD_Fcult.pdf">Terms and Conditions</a></li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.$constants.aboutUs.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$constants.aboutUs.meta.metaTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$constants.aboutUs.meta.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$constants.aboutUs.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$constants.aboutUs.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${this.$constants.baseURL}${this.$constants.aboutUs.meta.ogImage}`,
        },
      ],
    }
  },
}
</script>

<style>
.full-image {
  background: #dadada;
  position: relative;
  height: 433px;
}
.full-image img {
  height: 433px;
}
.about-content {
  padding-top: 70px;
  padding-bottom: 70px;
}
.about-content h1 {
  font-size: 105px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  text-align: center;
  margin-bottom: 15px;
}
.about-content p {
  font-family: Nunito;
  font-size: 20px;
  color: #77777a;
  text-decoration: none solid rgb(119, 119, 122);
  line-height: 32px;
  margin-bottom: 15px;
}
.about-content .caption {
  font-size: 32px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  line-height: 42px;
  letter-spacing: 10px;
  text-align: center;
}

.about-lists {
  padding-bottom: 70px;
}
.about-download {
  padding-bottom: 70px;
}

.about-lists .txt-points {
  padding: 25px;
  background-color: #f7f7f7;
  width: 630px;
  top: -40px;
}
.about-lists .img-points {
  width: 800px;
  margin-left: -120px;
}
.about-lists .multiple-reapt + .multiple-reapt {
  margin-top: 80px;
}
.about-lists .part-two .img-points {
  margin-left: 0;
}
.about-lists .two-div-in-one {
  width: 630px;
  top: -40px;
  margin-left: -120px;
}
.about-lists .part-two .txt-points {
  width: 100%;
  top: 0;
  margin: 0;
}
.about-lists .img-points img {
  height: 460px;
}
.about-lists h3 {
  font-family: 'sansationbold';
  font-size: 48px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
  margin-bottom: 15px;
}
.about-lists p {
  font-family: Nunito;
  font-size: 20px;
  color: #313338;
  text-decoration: none solid rgb(49, 51, 56);
  line-height: 32px;
  margin-bottom: 15px;
}
.about-lists .btn-primary {
  padding: 10px 25px;
  background-color: #ff671b;
  font-family: Nunito;
  font-size: 18px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: center;
  border: none;
  border-radius: 0;
}
.about-download h3 {
  font-family: 'sansationbold';
  font-size: 48px;
  color: #2f425b;
  text-decoration: none solid rgb(47, 66, 91);
}
.about-download ul {
  margin: 20px -10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
}
.about-download ul li {
  padding: 0 10px;
  flex: 1 0 0;
  height: 100%;
}
.about-download ul li a {
  padding: 5px 15px;
  display: block;
  border: 1px solid #ff671b;
  border-radius: 2px;
  background-size: cover;
  font-family: 'sansationregular';
  font-size: 16px;
  color: #ff671b;
  text-decoration: none solid rgb(255, 103, 27);
  text-align: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
}
@media (max-width: 767px) {
  .about-content {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .about-content h1 {
    font-size: 60px;
  }
  .about-content .caption {
    font-size: 24px;
  }
  .about-lists,
  .about-download {
    padding-bottom: 25px;
  }
  .about-lists h3 {
    font-size: 42px;
  }
  .about-lists p {
    font-size: 14px;
    line-height: normal;
  }
  .about-download ul li {
    padding: 10px;
    flex: 0 0 50%;
  }
  .about-download ul li a {
    font-size: 24px;
  }
}
</style>
