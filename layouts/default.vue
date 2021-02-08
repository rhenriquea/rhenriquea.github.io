<template>
  <v-app id="inspire" color="gray">
    <v-sheet class="overflow-hidden">
      <v-app-bar dark flat color="primary">
        <v-container class="py-0 fill-height">
          <v-avatar class="mr-10" color="grey darken-1" size="32">
            <img src="/images/perfil.jpg" alt="Rafael de Almeida" />
          </v-avatar>

          <v-btn
            v-for="(link, index) in links"
            :key="`${link.name}_${index}`"
            nuxt
            text
            :to="link.url"
          >
            {{ link.name }}
          </v-btn>

          <v-spacer></v-spacer>
        </v-container>
      </v-app-bar>

      <v-main>
        <v-container>
          <Nuxt keep-alive />
        </v-container>
      </v-main>
    </v-sheet>

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
          <v-btn
            v-bind="attrs"
            v-on="on"
            color="amber darken-4"
            dark
            bottom
            fixed
            right
            fab
            to="/contact"
          >
            <v-icon>mdi-email-send</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <span>Send message</span>
    </v-tooltip>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="blue-grey darken-4">
          <v-container class="py-0 fill-height">
            <span>Find more in my social networks!</span>

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon :href="icon.url">
              <v-icon size="24px">
                {{ icon.id }}
              </v-icon>
            </v-btn>
          </v-container>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center" color="black">
          <strong>&copy; Rafael de Almeida </strong>{{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    icons: [
      { id: 'mdi-github', url: 'https://github.com/rhenriquea' },
      { id: 'mdi-linkedin', url: 'https://www.linkedin.com/in/rhenriquea/' },
      { id: 'mdi-behance', url: 'https: //www.behance.net/rhenriquea' },
      { id: 'mdi-medium', url: 'https://rhenriquea.medium.com/' },
      { id: 'mdi-twitter', url: 'https://twitter.com/therafahenrique' },
      { id: 'mdi-instagram', url: 'https://www.instagram.com/rafael_alm3ida_/' },
    ],
    links: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
  }),
};
</script>
