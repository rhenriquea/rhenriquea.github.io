<template>
  <v-row no-gutters>
    <v-col cols="12" sm="6" md="4">
      <v-card flat height="50vh" class="text-center">
        <v-avatar color="grey darken-1 m-auto" size="150">
          <img src="/images/perfil.jpg" alt="Rafael de Almeida" />
        </v-avatar>
        <v-card-text>
          <div>
            <strong align="center">Rafael Henrique de Almeida</strong>
          </div>
          <div>
            <small>Frontend Engineer</small>
          </div>
          <div>Sluistraat 14, 5462CB</div>
          <div>Veghel, NL</div>
          <div>
            <a href="mailto:rafa.almeida.js@gmail.com">rafa.almeida.js@gmail.com</a>
          </div>
          <div>
            <a href="tel:+310683417049">+310683417049</a>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" md="8">
      <v-card elevation="2" flat height="80vh">
        <v-card-title>Contact</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea v-model="message" label="Message" required></v-textarea>

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
              Send
              <v-icon right>mdi-send</v-icon>
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
