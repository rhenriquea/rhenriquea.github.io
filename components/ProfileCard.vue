<template>
  <div class="profile-card">
    <div class="profile-card__content p">
      <img class="profile-card__img mr-m-2x" :src="author.avatar.url" :alt="author.name" />
      <div>
        <h2>{{ author.name }}</h2>
        <div class="profile-card__biography">
          {{ author.biography }}
        </div>
        <ul class="profile-card__social mt">
          <li v-for="(link, i) in links" :key="link.name">
            <a :href="link.url" target="_blank">
              <font-awesome-icon class="mx mx-m-0 mr-m" size="2x" :icon="['fab', link.name]" />
              <span>{{ link.name }} </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    links: [
      { url: 'https://linkedin.com/in/rhenriquea', name: 'linkedin' },
      { url: 'https://twitter.com/therafahenrique', name: 'twitter' },
      { url: 'https://github.com/rhenriquea', name: 'github' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.profile-card {
  border: 1px solid $light-gray;
  border-radius: 5px;

  &__content {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    @include mq($breakpoint-s) {
      flex-direction: row;
    }

    div {
      text-align: center;
      @include mq($breakpoint-s) {
        text-align: left;
      }
    }
  }

  &__img {
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
  &__biography {
    font-size: 14px;
    margin-bottom: $spacing-m;
  }
  &__social {
    display: flex;
    justify-content: center;

    @include mq($breakpoint-m) {
      justify-content: start;
    }

    li {
      border: 1px solid $light-gray;
      border-radius: 5px;
      font-size: 14px;
      margin-right: $spacing-xs;

      @include mq($breakpoint-s) {
        border: 0;
      }

      &:first {
        margin-right: 0;
      }

      a {
        color: $orange;
        font-size: 14px;
        padding: $spacing-xs;
        text-decoration: none;
        text-transform: capitalize;

        @include mq($breakpoint-s) {
          align-items: center;
          border: 1px solid $light-gray;
          border-radius: 5px;
          display: flex;
        }

        span {
          margin-left: $spacing-xs;
        }

        &:hover {
          background: $orange;
          color: $white;
        }
      }
    }
  }
}
</style>
