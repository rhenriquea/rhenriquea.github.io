<template>
  <header ref="header" class="py">
    <nav class="px px-m-5x" :class="{ 'fixed-nav': showFixed }">
      <NuxtLink to="/">
        <LogoComplete class="logo" :class="{ animate: showFixed }" />
      </NuxtLink>
      <ul class="nav-links">
        <li
          class="mr"
          :class="{ 'mr-0': index === links.length - 1 }"
          v-for="(link, index) in links"
        >
          <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import LogoComplete from './svg/LogoComplete.vue';
import LogoIcon from './svg/LogoIcon.vue';

export default {
  components: {
    LogoComplete,
    LogoIcon,
  },
  data: () => ({
    links: [
      { name: 'Home', to: '/' },
      { name: 'Posts', to: '/posts' },
      { name: 'Contato', to: '/contato' },
    ],
    showFixed: false,
  }),
  mounted() {
    this.addListener();
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollListener);
  },
  methods: {
    addListener() {
      window.addEventListener('scroll', this.scrollListener);
    },
    scrollListener(e) {
      const el = e.srcElement.body;
      const top = el.getBoundingClientRect().top * -1;
      this.showFixed = top > 15;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  box-shadow: 1px 3px 0 -1px #0000001a;
  nav {
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: $spacing-l;
    z-index: 10;

    @include mq($breakpoint-s) {
      flex-direction: row;
    }

    .logo {
      display: none;

      @include mq($breakpoint-s) {
        display: block;
      }

      &.animate {
        animation: grow 0.2s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-timing-function: linear;
        margin-left: -54px;
      }
    }

    &.fixed-nav {
      box-shadow: 1px 3px 0 -1px #0000001a;
      margin-top: 0;
      position: fixed;
      top: 0;
      width: 100%;

      ul {
        margin-top: $spacing-m;
        li {
          margin-bottom: $spacing-s;
        }
      }
    }
    ul {
      display: flex;
      li {
        margin-right: $spacing-m;
        a {
          color: $blue;
          font-weight: 500;
          text-decoration: none;

          &:hover {
            color: $red;
          }
        }
      }
    }
  }
}

@keyframes grow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
</style>
