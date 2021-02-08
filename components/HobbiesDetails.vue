<template>
  <div>
    <v-card>
      <v-card-title class="pa-0 display-1">Drawings</v-card-title>
      <v-divider class="mb-3"></v-divider>

      <v-carousel height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(slide, i) in behanceImages"
          :key="i"
          :position="slide.position"
          :src="`https://mir-s3-cdn-cf.behance.net/project_modules/${slide.id}`"
        >
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card class="mt-3">
      <v-card-title class="pa-0 display-1">Videos</v-card-title>
      <v-divider class="mb-3"></v-divider>

      <v-carousel height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in ytVideos" :key="i" class="text-center">
          <iframe
            width="100%"
            height="100%"
            :src="`https://www.youtube.com/embed/${slide.id}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
    slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    behanceImages: [
      { id: '1400_opt_1/585ea8112001827.600c5765b1c6f.jpg', position: 'bottom center' },
      { id: '1400/547132107481807.5fa858eddc644.jpg', position: 'center center' },
      { id: '2800_opt_1/45867f107750397.5fade428592de.jpg', position: 'center center' },
      { id: '1400_opt_1/ee5882112001827.600c5765b34f9.jpg', position: 'top center' },
      { id: '1400_opt_1/caeda4112001827.600c5765b3a19.jpg', position: 'bottom center' },
    ],
    ytVideos: [
      { id: 'T3ZJ2B8SbBY' },
      { id: 'CvI09Y81DTo' },
      { id: 'ExrNUgEilvM' },
      { id: 'ihz26xStv5I' },
    ],
  }),
};
</script>
