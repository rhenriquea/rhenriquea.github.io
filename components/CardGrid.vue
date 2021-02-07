<template>
  <div class="grid my-2x">
    <template v-if="loading" v-for="i in 4">
      <content-placeholders :rounded="true">
        <content-placeholders-img />
        <content-placeholders-heading />
        <content-placeholders-text :lines="4" />
      </content-placeholders>
    </template>
    <div v-for="(post, index) in posts" :class="{ 'first-post': index === 0 }">
      <NuxtLink :to="`/posts/${post.slug}`" tag="a" class="card">
        <div class="thumb" :style="{ backgroundImage: `url(${post.cover.url})` }"></div>
        <article>
          <div class="card__header">
            <h1>{{ post.title }}</h1>
            <div class="card__meta mt">
              <div class="card__reading-time">{{ post.reading_time }}mins</div>
              <div class="card__author">
                <div class="card__author--name mr">{{ post.author.name }}</div>
                <img
                  class="card__author--img"
                  :src="post.author.avatar.url"
                  :alt="post.author.name"
                />
              </div>
            </div>
          </div>
          <span>{{ post.excerpt }}</span>
        </article>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(['loading']),
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: 24px;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin: 0 auto;

  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;

  // sets up hover state
  position: relative;
  text-decoration: none;
  top: 0;
  transition: all 0.1s ease-in;

  &:hover {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    top: -2px;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: $spacing-m;
  }

  h1 {
    font-size: 1.2em;
    line-height: 1.3;
    margin: 0;
  }

  p {
    line-height: 1.4;
  }

  span {
    font-size: 12px;
    letter-spacing: 0.05em;
  }

  .thumb {
    background-position: center center;
    background-size: cover;
    padding-bottom: 60%;
  }

  &__meta {
    align-items: center;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    margin-top: 0;
  }

  &__author {
    align-items: center;
    display: inline-flex;

    &--img {
      border-radius: 50%;
      height: 30px;
    }
  }
}

.vue-content-placeholders-img {
  height: 35vh;
}

/* .first-post {
  @media (min-width: 60em) {
    grid-column: 1 / span 2;

    h1 {
      font-size: 24px;
    }
  }
} */
</style>
