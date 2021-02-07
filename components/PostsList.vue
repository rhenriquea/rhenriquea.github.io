<template>
  <ul class="posts__list" v-if="loading">
    <li v-for="i in 5">
      <content-placeholders :rounded="true" class="p">
        <content-placeholders-img />
        <div class="p vue-content-placeholders-content">
          <content-placeholders-heading />
          <content-placeholders-text :lines="2" />
        </div>
      </content-placeholders>
    </li>
  </ul>

  <ul class="posts__list" v-else>
    <li v-for="post in posts" :key="post.id">
      <NuxtLink tag="a" :to="`/posts/${post.slug}`">
        <div class="post__line">
          <div class="post__thumbnail" :style="{ backgroundImage: `url(${post.cover.url})` }"></div>
          <div class="p">
            <div class="post__meta">
              <img
                class="post__author--img"
                :src="post.author.avatar.url"
                :alt="post.author.name"
              />
              <div v-line-clamp:15="1" class="post__author--name">{{ post.author.name }}</div>
              <small>em</small>
              <div class="post__category">{{ post.category.category_type }}</div>
            </div>
            <h3 v-line-clamp:15="1">{{ post.title }}</h3>
            <p v-line-clamp:20="2" class="post__excerpt">
              {{ post.excerpt }}
            </p>
            <p class="post__footer mt">
              {{ formatDate(post.createdAt) }}
              &middot;
              <span> {{ post.reading_time }} min read</span>
            </p>
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import { formatDate } from '../utils';

export default {
  props: {
    posts: {
      type: Array,
      required: true,
      default: [],
    },
  },

  methods: {
    formatDate,
  },

  computed: {
    ...mapGetters(['loading']),
  },
};
</script>

<style lang="scss" scoped>
.posts {
  &__list {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 30px;

    li {
      background-color: #fff;
      border-bottom: 1px solid #ccc;

      a {
        color: unset;
        text-decoration: none;
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
.post {
  &__line {
    display: flex;
    height: 150px;
    max-height: 150px;
    overflow: hidden;

    h3 {
      font-size: 1.2em;
      line-height: 1.3;
      margin: 0;
      margin: 5px 0;
    }
  }

  &__thumbnail {
    background-position: center center;
    background-size: cover;
    height: auto;

    @include mq($breakpoint-s) {
      min-width: 150px;
    }
  }

  &__meta {
    align-items: center;
    display: flex;
    font-size: 14px;
  }

  &__category {
    margin-left: 5px;
  }

  &__author {
    &--name {
      margin-right: 5px;
      margin-right: 5px;
    }
    &--img {
      border-radius: 50%;
      margin-right: 5px;
      width: 25px;
    }
  }

  &__excerpt {
    font-size: 14px;
    line-height: 16px;
  }

  &__footer {
    font-size: 14px;
    line-height: 16px;
  }
}

.vue-content-placeholders {
  display: flex;
  height: 150px;
  &-img {
    height: auto;
    width: 60%;

    @include mq($breakpoint-s) {
      width: 12vw;
    }
  }

  &-content {
    width: 90%;

    @include mq($breakpoint-s) {
      width: 70vw;
    }
  }
}
</style>
