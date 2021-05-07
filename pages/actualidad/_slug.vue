<template>
  <main>
    <section class="details-listing">
      <div class="very-sm-container margin-0-auto">
        <b-breadcrumb class="ff-sans-r">
          <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
          <b-breadcrumb-item to="/actualidad">Actualidad</b-breadcrumb-item>
          <b-breadcrumb-item active v-if="article">{{
            article.title
          }}</b-breadcrumb-item>
        </b-breadcrumb>

        <div class="listing-here">
          <div class="one-blg">
            <h2 class="ff-sans-b line-he-1">
              {{ article.title }}
            </h2>
            <div class="img-bx">
              <img :src="article.imgURL" alt="" class="object-fit-cover" />
            </div>
            <div class="publish-date">
              <div class="d-flex align-items-center ff-sans-r">
                <p>{{ article.date }}</p>
                <span class="s-dot"></span>
                <p>{{ article.time }}</p>
              </div>
            </div>
          </div>
          <div class="one-blg" v-for="(d, i) of article.description" :key="i">
            <h3
              class="ff-sans-b line-he-1"
              v-if="d.title"
              v-html="d.title"
            ></h3>
            <div class="pra-p ff-nunito" v-if="d.text" v-html="d.text">
              <p>
                {{ d.text }}
              </p>
            </div>
            <div class="video-part" v-if="d.video">
              <iframe
                :src="d.video"
                :title="d.title"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="img-bx b" v-if="d.images">
              <div class="d-flex flex-wrap">
                <div class="full-img" v-for="(img, i) of d.images" :key="i">
                  <img :src="img" alt="" class="object-fit-cover" />
                </div>
              </div>
            </div>
          </div>
          <div class="soical-media position-relative after-po">
            <a
              target="_blank"
              :href="
                'https://www.facebook.com/sharer/sharer.php?u=' +
                $constants.baseURL +
                $route.fullPath
              "
            >
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                overflow="visible"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <g>
                  <path
                    xmlns:default="http://www.w3.org/2000/svg"
                    id="facebook"
                    d="M16.5,3.46c-0.79-0.09-1.58-0.13-2.37-0.12c-1.07-0.05-2.11,0.33-2.89,1.06c-0.76,0.81-1.15,1.89-1.08,3v2.28  H7.5v3.08h2.65v7.9h3.19v-7.9H16l0.41-3.08h-3.07v-2c-0.03-0.4,0.08-0.79,0.31-1.12c0.33-0.29,0.77-0.43,1.21-0.37h1.64V3.46  L16.5,3.46z"
                    style="fill: rgb(17, 24, 32)"
                    vector-effect="non-scaling-stroke"
                  />
                </g>
              </svg>
            </a>
            <a
              target="_blank"
              :href="
                'https://www.linkedin.com/sharing/share-offsite/?url=' +
                $constants.baseURL +
                $route.fullPath
              "
            >
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                overflow="visible"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <g>
                  <path
                    xmlns:default="http://www.w3.org/2000/svg"
                    id="linkedin"
                    d="M4.19,9.32v10.32h3.44V9.32H4.19z M7.85,6.14C7.86,5.66,7.67,5.2,7.32,4.86c-0.37-0.34-0.87-0.52-1.38-0.5  c-0.51-0.02-1.01,0.16-1.4,0.5C4.18,5.19,3.98,5.65,3.99,6.14C3.98,6.62,4.17,7.08,4.51,7.41c0.37,0.35,0.86,0.53,1.37,0.51l0,0  C6.4,7.94,6.91,7.76,7.29,7.41c0.35-0.33,0.55-0.79,0.53-1.27l0,0H7.85z M19.99,13.73c0.09-1.25-0.3-2.48-1.08-3.46  c-0.74-0.79-1.78-1.22-2.86-1.18c-0.4,0-0.8,0.05-1.19,0.16c-0.32,0.1-0.61,0.25-0.87,0.45c-0.21,0.16-0.41,0.34-0.59,0.54  c-0.16,0.18-0.3,0.38-0.43,0.58l0,0v-1.5H9.52v0.5c0,0.33,0,1.36,0,3.08s0,3.97,0,6.74h3.47v-5.76c-0.03-0.3,0-0.59,0.07-0.88  c0.14-0.35,0.37-0.65,0.66-0.89c0.31-0.25,0.7-0.37,1.1-0.36c0.52-0.04,1.02,0.2,1.32,0.62c0.31,0.52,0.45,1.11,0.42,1.71v5.52h3.43  V13.73L19.99,13.73z"
                    style="fill: rgb(17, 24, 32)"
                    vector-effect="non-scaling-stroke"
                  />
                </g>
              </svg>
            </a>
            <a
              target="_blank"
              :href="
                'https://twitter.com/intent/tweet/?text=' +
                article.title +
                '&url=' +
                $constants.baseURL +
                $route.fullPath
              "
            >
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                overflow="visible"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <g>
                  <path
                    xmlns:default="http://www.w3.org/2000/svg"
                    id="twitter"
                    d="M20.2,6.92c-0.62,0.27-1.27,0.45-1.94,0.52c0.71-0.41,1.24-1.07,1.48-1.85c-0.66,0.39-1.38,0.67-2.13,0.81  c-1.27-1.36-3.41-1.43-4.76-0.15c-0.03,0.02-0.05,0.05-0.08,0.07c-0.65,0.62-1.01,1.48-1,2.38c0,0.26,0.03,0.52,0.08,0.77  C10.51,9.41,9.19,9.05,8,8.43C6.82,7.84,5.78,7.01,4.94,6C4.35,7.02,4.33,8.27,4.89,9.3C5.16,9.77,5.54,10.16,6,10.45  C5.46,10.43,4.93,10.27,4.46,10l0,0c-0.01,0.78,0.26,1.54,0.77,2.14c0.49,0.6,1.17,1.01,1.93,1.16c-0.29,0.07-0.58,0.11-0.88,0.11  c-0.21,0-0.43-0.02-0.64-0.05c0.44,1.37,1.7,2.3,3.14,2.33c-1.17,0.97-2.65,1.5-4.17,1.51c-0.27,0.02-0.54,0.02-0.81,0  c1.55,0.99,3.36,1.5,5.2,1.46c1.14,0.01,2.28-0.19,3.36-0.57c0.96-0.34,1.86-0.85,2.64-1.51c0.74-0.63,1.39-1.37,1.92-2.19  c0.52-0.8,0.93-1.67,1.2-2.59c0.26-0.88,0.4-1.79,0.4-2.7c0-0.19,0-0.34,0-0.44C19.18,8.18,19.75,7.59,20.2,6.92L20.2,6.92z"
                    style="fill: rgb(17, 24, 32)"
                    vector-effect="non-scaling-stroke"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container full-con">
        <div class="slider-sec d-none-767">
          <h3 class="ff-sans-b">Otros artículos interesantes</h3>
          <div class="for-marg-1">
            <client-only>
              <carousel
                :per-page="4"
                :navigationEnabled="true"
                :paginationEnabled="false"
              >
                <slide v-for="(item, i) of otherArticles" :key="i">
                  <div class="position-relative">
                    <div class="slid-img-bx">
                      <NuxtLink :to="'/actualidad/' + item.slug">
                        <img
                          :src="item.imgURL"
                          :alt="item.title"
                          class="object-fit-cover"
                        />
                      </NuxtLink>
                    </div>
                    <div class="blg-txt-info">
                      <div class="tags">
                        <a
                          v-for="(tag, i) of item.tags"
                          :key="i"
                          :href="tag.url"
                          >{{ tag.title }}</a
                        >
                      </div>
                      <NuxtLink :to="'/actualidad/' + item.slug">
                        <h4 class="ff-sans-b">{{ item.title }}</h4>
                      </NuxtLink>
                      <div class="dates ff-sans-i">{{ item.date }}</div>
                      <p class="ff-sans-r">
                        {{ item.shortDescription }}
                      </p>
                    </div>
                  </div>
                </slide>
              </carousel>
            </client-only>
          </div>
        </div>

        <div class="slider-sec d-block-767 d-none-n mob">
          <h3 class="ff-sans-b text-center">Te puede interesar</h3>
          <div class="for-marg-1">
            <div
              v-for="(item, i) of otherArticles"
              :key="i"
              class="position-relative for-m-t"
            >
              <div class="slid-img-bx">
                <img
                  :src="item.imgURL"
                  :alt="item.title"
                  class="object-fit-cover"
                />
              </div>
              <div class="blg-txt-info">
                <div class="tags">
                  <a v-for="(tag, i) of item.tags" :key="i" :href="tag.url">{{
                    tag.title
                  }}</a>
                </div>
                <NuxtLink :to="'/actualidad/' + item.slug">
                  <h4 class="ff-sans-b">{{ item.title }}</h4>
                </NuxtLink>
                <div class="dates ff-sans-i">{{ item.date }}</div>
                <p class="ff-sans-r">
                  {{ item.shortDescription }}
                </p>
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
    article() {
      return this.$constants.actualidad.articles.find(
        (a) => a.slug === this.$route.params.slug
      )
    },
    otherArticles() {
      return this.$constants.actualidad.articles.filter(
        (a) => a.slug !== this.$route.params.slug
      )
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.article.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.article.shortDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.shortDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$constants.baseURL + this.article.imgURL,
        },
      ],
    }
  },
}
</script>