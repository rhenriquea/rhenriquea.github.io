<template>
  <div>
    <v-img :src="'/images/cover.jpg'"> </v-img>

    <v-row>
      <v-col cols="12" md="8">
        <v-card class="mt-3" flat>
          <v-card-title class="pa-0"><h2 class="display-1">Introduction</h2></v-card-title>
          <v-card-text class="pa-0">
            Experienced tech professional with vast knowledge in Javascript, Typescript, CSS and
            Pre-Processors (Less, Sass, SCSS), HTML, Vue.js and Angular. Currently working with SSR
            solutions with Nuxt.js (Vue.js), managing REST api’s with GraphQL for a Supermarket
            company. Already worked for big companies like KLM – Royal Dutch Airlines and GFT Group.
            Fluent English, Native Portuguese and Basic Dutch.
          </v-card-text>
        </v-card>

        <v-card class="mx-auto mt-3" flat>
          <v-card-title class="pa-0">
            <h2 class="display-1">Know more</h2>
          </v-card-title>

          <v-card-text class="pa-0 mb-3">
            <span class="subheading">Choose a category to navigate and know more about me</span>
          </v-card-text>

          <div class="d-flex flex-column flex-sm-row align-center justify-sm-space-around">
            <div v-for="n in 5">
              <v-btn class="mb-3" outlined color="primary">Example</v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <languages-list />
        <programming-list />
        <graphic-design-list />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LanguagesList from '../components/LanguagesList.vue';
import ProgrammingList from '../components/ProgrammingList.vue';
import GraphicDesignList from '../components/GraphicDesignList.vue';
import ExperienceDetails from '../components/ExperienceDetails.vue';
import EducationDetails from '../components/EducationDetails.vue';
import HobbiesDetails from '../components/HobbiesDetails.vue';
import LeadershipDetails from '../components/LeadershipDetails.vue';

export default {
  components: {
    LanguagesList,
    ProgrammingList,
    GraphicDesignList,
    ExperienceDetails,
    EducationDetails,
    HobbiesDetails,
    LeadershipDetails,
  },
  data: () => ({
    tab: null,
    items: ['Education', 'Leadership', 'Hobbies'],
  }),
};
</script>
