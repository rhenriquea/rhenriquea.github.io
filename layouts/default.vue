<template>
  <v-app id="inspire">
    <v-sheet class="overflow-hidden">
      <v-app-bar dark flat color="primary">
        <v-container class="py-0 fill-height">
          <v-app-bar-nav-icon @click="drawer = true" v-if="isMobile"></v-app-bar-nav-icon>
          <v-avatar class="mr-10" color="grey darken-1" size="32">
            <img src="/images/perfil.jpg" alt="Rafael de Almeida" />
          </v-avatar>

          <v-btn v-for="link in links" :key="link" text v-if="!isMobile">
            {{ link }}
          </v-btn>

          <v-spacer></v-spacer>
        </v-container>
      </v-app-bar>

      <v-main>
        <v-container>
          <Nuxt keep-alive />
        </v-container>
      </v-main>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-footer dark padless absolute>
        <v-card class="flex" flat tile>
          <v-card-title>
            <v-container class="py-0 fill-height">
              <strong class="subheading">Get connected with us on social networks!</strong>

              <v-spacer></v-spacer>

              <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-container>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    links: ['Curriculum', 'About Me', 'another'],
  }),

  computed: {
    isMobile() {
      return false;
    },
  },
};
</script>
