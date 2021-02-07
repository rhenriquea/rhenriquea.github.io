<template>
  <div>
    <section
      class="featured"
      :style="{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.cover.url})`,
      }"
    >
      <div class="featured--horizontal-transparency">
        <div class="featured--vertical-transparency">
          <div class="featured__content p p-m-5x">
            <h1 class="featured__title">{{ post.title }}</h1>
            <div v-for="tag in post.tags" :key="tag.tagname" class="featured__tag">
              {{ tag.tagname }}
            </div>
            <div class="featured__reading-time">{{ readingTime }} read</div>
            <div class="featured__excerpt">{{ post.excerpt }}</div>
            <div class="mt">
              <NuxtLink :to="`/posts/${post.slug}`" class="featured__read-more py px-3x" tag="a">
                Ler</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    readingTime() {
      const { reading_time: readingTime } = this.post || {};
      return readingTime === 1 ? `${readingTime} min` : `${readingTime} mins`;
    },
  },
};
</script>

<style lang="scss">
$img-height: 70vh;
.featured {
  min-height: $img-height;

  &--horizontal-transparency {
    background: linear-gradient(to top, #fff 10%, transparent 90%);
    height: inherit;
    min-height: $img-height;
    width: inherit;
  }

  &--vertical-transparency {
    background: linear-gradient(to right, #fff 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: center;
    min-height: $img-height;
    width: inherit;
  }

  &__title {
    font-size: 2em;
    font-weight: bold;
    line-height: 1;
    margin-bottom: $spacing-m;

    @include mq($breakpoint-s) {
      font-size: 40px;
      line-height: 40px;
      max-width: 40%;
    }
  }
  &__tag {
    background-color: $orange;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    margin-right: 15px;
    padding: 0 5px;
  }

  &__reading-time {
    display: inline-block;
    font-size: 16px;
    margin-right: 15px;
  }

  &__excerpt {
    margin-top: $spacing-m;

    @include mq($breakpoint-s) {
      font-size: 14px;
      margin-bottom: $spacing-m;
      margin-right: 30px;
      max-width: 40%;
    }
  }

  &__read-more {
    background-color: $blue;
    border-radius: 5px;
    color: #fff;
    display: block;
    text-align: center;
    text-decoration: none;
    width: 100%;

    @include mq($breakpoint-s) {
      display: block;
      width: 150px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
