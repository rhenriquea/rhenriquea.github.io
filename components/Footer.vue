<template>
  <footer class="footer p">
    <ul class="footer__links-list">
      <li v-for="link in links" :key="link.name">
        <a :href="link.url" target="_blank">
          <span aria-hidden="true">Link to {{ link.name }} </span>
          <font-awesome-icon class="mx" size="2x" :icon="['fab', link.name]" />
        </a>
      </li>
    </ul>
    <p>Copyright © 2020 Rafael Almeida</p>
    <p>All rights reserved</p>
  </footer>
</template>

<script>
import LogoIcon from './svg/LogoIcon.vue';

export default {
  components: {
    LogoIcon,
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
.footer {
  align-items: center;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    color: $brown;
    font-size: 14px;
    margin: 0;
  }

  ul {
    display: flex;
    li {
      a {
        color: $orange;
        span {
          display: none;
        }
      }
    }
  }
}
</style>
