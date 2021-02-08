<template>
  <v-card class="pa-2" flat>
    <v-card-title class="pb-0">Programming Skills</v-card-title>
    <v-list dense class="pa-0">
      <v-list-item v-for="skill in programming" :key="skill.icon">
        <v-list-item-avatar two-line size="32">
          <v-img :src="`/images/icons/${skill.icon}.png`"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ skill.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ skill.level }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    programming: [
      { title: 'HTML', level: 'Advanced', icon: 'html' },
      { title: 'CSS', level: 'Advanced', icon: 'css' },
      { title: 'Javascript', level: 'Advanced', icon: 'js' },
      { title: 'Git', level: 'Advanced', icon: 'git' },
      { title: 'GraphQL', level: 'Advanced', icon: 'graphql' },
      { title: 'Vue.js', level: 'Advanced', icon: 'vue' },
      { title: 'Nuxt.js', level: 'Advanced', icon: 'nuxt' },
      { title: 'Sass', level: 'Advanced', icon: 'sass' },
      { title: 'Typescript', level: 'Intermediate', icon: 'typescript' },
      { title: 'AWS S3', level: 'Intermediate', icon: 's3aws' },
      { title: 'Docker', level: 'Intermediate', icon: 'docker' },
      { title: 'Angular', level: 'Intermediate', icon: 'angular' },
      { title: 'React', level: 'Intermediate', icon: 'react' },
    ],
  }),
};
</script>
