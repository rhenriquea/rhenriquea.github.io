<template>
  <v-list dense>
    <v-list-item dense v-for="(study, index) in studies" :key="`${study.logo}_${index}`">
      <v-list-item-avatar two-line size="80">
        <v-img :src="`/images/companies/${study.logo}`" :alt="study.subtitle"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ study.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ study.subtitle }}</v-list-item-subtitle>
        <small>{{ study.period }}</small>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    studies: [
      {
        logo: 'byui.png',
        title: 'B.S Web Design and Development',
        subtitle: 'BRIGHAM YOUNG UNIVERSITY IDAHO',
        period: 'April 2017 – December 2021',
      },
      {
        logo: 'byui.png',
        title: 'Web Media Certificate',
        subtitle: 'BRIGHAM YOUNG UNIVERSITY IDAHO',
        period: '2018',
      },
      {
        logo: 'cps.jpg',
        title: 'Mechatronic Technician',
        subtitle: 'CENTRO PAULA SOUZA',
        period: 'September 2008 - December 2010',
      },
    ],
  }),
};
</script>
