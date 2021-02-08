<template>
  <v-timeline align-top dense>
    <v-timeline-item v-for="company in companies" :key="company.logo" small>
      <template v-slot:icon>
        <v-avatar>
          <img :src="`/images/companies/${company.logo}.png`" :alt="company.title" />
        </v-avatar>
      </template>
      <div>
        <div class="font-weight-normal">
          <strong>{{ company.role }}</strong
          ><v-btn class="py-0" :nuxt="false" color="primary" text :href="company.url"
            >@ {{ company.title }}</v-btn
          >
        </div>
        <small>{{ company.period }}</small>
        <ul
          v-for="(responsability, index) in company.responsabilities"
          :key="`${company.logo}_${index}`"
        >
          <li>
            {{ responsability }}
          </li>
        </ul>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    companies: [
      {
        logo: 'jumbo',
        title: `Jumbo Supermarkten`,
        role: 'Frontend Engineer',
        url: 'https://www.jumbo.com/',
        period: 'October 2019 – Current',
        responsabilities: [
          'Worked in the Selling Team, following Scrum/Agile methodologies with other 9 collaborators',
          'Migrated the legacy system to an SSR Nuxt application solution using Microservices and GraphQL',
          'Launched the Refund Project for customers, leading two other Engineers',
          'Engineered the consistency of different projects such as Promotions, Orders and Basket',
        ],
      },
      {
        logo: 'klm',
        title: `KLM – ROYAL DUTCH AIRLINES`,
        role: 'Frontend Engineer',
        url: 'https://www.klm.com/',
        period: 'October 2018 – October 2019',
        responsabilities: [
          'Worked in the Sales Team, following Scrum/Agile methodologies with other 6 collaborators',
          'Developed the implementation of an Angular application using GraphQL',
          'Introduced the integration of the Design System created by the Design Team',
          'Monitored the stability of the customer journey on the sales process.',
        ],
      },
      {
        logo: 'techifide',
        title: `TECHIFIDE`,
        role: 'Senior Frontend Developer',
        url: 'https://www.techifide.com/',
        period: 'September 2016 – October 2018',
        responsabilities: [
          'Coordinated remotely a small developer’s team on a London based startup',
          'Founded a new system for employee management using Angular 2.',
          'Offered support to the Node.js server when needed',
        ],
      },
      {
        logo: 'gft',
        title: `GFT GROUP`,
        role: 'Senior Frontend Developer',
        url: 'https://www.gft.com/int/en/index/',
        period: 'September 2015 – September 2016',
        responsabilities: [
          'Launched the implementation of a new leasing system in the city of Padova, IT',
          'Kept contact with managers and an International Italian team',
          'Implemented the migration of the old system to Angular v.1.6',
          'Secured the maintenance of the Cardini`s website remotely',
        ],
      },
    ],
  }),
};
</script>
