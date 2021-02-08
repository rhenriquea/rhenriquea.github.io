<template>
  <v-row no-gutters>
    <v-col cols="12" sm="6" md="4">
      <v-card flat height="50vh" class="text-center">
        <v-avatar color="grey darken-1 m-auto" size="150">
          <img src="/images/perfil.jpg" alt="Rafael de Almeida" />
        </v-avatar>
        <v-card-text>
          <div class="text-h5 font-weight-medium">
            <strong align="center">Rafael Henrique de Almeida</strong>
          </div>
          <div class="text-button font-weight-regular">
            <small>Frontend Engineer</small>
          </div>
          <div>Sluistraat 14, 5462CB</div>
          <div>Veghel, NL</div>
          <div></div>
          <div>
            <a href="tel:+310683417049"></a>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col sm="6" md="8">
      <v-card elevation="2" flat height="80vh">
        <v-card-title>Contact</v-card-title>
        <v-list>
          <v-list-item v-for="contact in contacts" :key="contact.title">
            <v-list-item-avatar>
              <v-icon :class="contact.color" dark v-text="contact.icon"></v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="contact.title"></v-list-item-title>

              <v-list-item-subtitle>
                <a :href="contact.href">{{ contact.content }}</a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    contacts: [
      {
        color: 'blue',
        icon: 'mdi-email',
        href: 'tel:+310683417049',
        title: 'Email',
        content: 'rafa.almeida.js@gmail.com',
      },
      {
        color: 'amber',
        icon: 'mdi-phone',
        href: 'mailto:rafa.almeida.js@gmail.com',
        title: 'Phone',
        content: '+310683417049',
      },
    ],
  }),
};
</script>
