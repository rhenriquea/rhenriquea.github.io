<template>
  <v-card flat>
    <v-card-title class="pb-0">Language Skills</v-card-title>
    <v-list dense class="pa-0">
      <v-list-item v-for="language in languages" :key="language.flag">
        <v-list-item-avatar two-line size="32">
          <v-img
            :src="`https://www.countryflags.io/${language.flag}/flat/64.png`"
            :alt="`${language.title} Flag`"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ language.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ language.level }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    languages: [
      { title: 'Portuguese', level: 'Native', flag: 'br' },
      { title: 'English', level: 'Fluent', flag: 'us' },
      { title: 'Dutch', level: 'A1+ Basic', flag: 'nl' },
    ],
  }),
};
</script>
