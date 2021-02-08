<template>
  <v-card flat>
    <v-card-title class="pb-0">Graphic Design Skills</v-card-title>
    <v-list dense class="pa-0">
      <v-list-item v-for="skill in design" :key="skill.icon">
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
    design: [
      { title: 'Photoshop', level: 'Advanced', icon: 'photoshop' },
      { title: 'After Effects', level: 'Advanced', icon: 'aftereffects' },
      { title: 'Premiere', level: 'Advanced', icon: 'premiere' },
      { title: 'Illustrator', level: 'Intermediate', icon: 'illustrator' },
      { title: 'InDesign', level: 'Basic', icon: 'indesign' },
    ],
  }),
};
</script>
