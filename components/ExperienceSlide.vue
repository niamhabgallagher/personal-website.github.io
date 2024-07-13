<template>
    <v-sheet
      class="mx-auto"
      max-width="800"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-primary"
        show-arrows
      >
        <v-slide-group-item
          v-for="n in content"
          :key="n.name"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            :class="['ma-4', selectedClass]"
            height="150"
            width="150"
            @click="toggle"
            :style="'background-image: url(' + n.imageUrl + ');'"
            style="background-color: $primary-2; background-size: cover;"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  icon="mdi-eye"
                  size="48"
                ></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
  
      <v-expand-transition>
        <v-sheet
          v-if="model != null"
          height="200"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-card elevation="0" class="content-card">
              <v-card-title>
                <h2>
                  {{ content[model].name }} Experience
                </h2>
              </v-card-title>
              <v-card-text>
                <p>I have {{ content[model].years }} years experience in {{ content[model].name }}.</p>
                <p>{{ content[model].shortDescription }}</p>
              </v-card-text>
            </v-card>
          </div>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </template>

<script>
export default {
  data: () => ({
    model: null,
    content: [
      {
        name: 'Vuejs',
        imageUrl: '/images/experience-logos/vuejs.webp',
        years: '3',
        shortDescription: 'I use Vue in my current job at vTime and enjoy using it in my personal projects outside of work too.'
      },
      {
        name: 'Nuxt',
        imageUrl: '/images/experience-logos/nuxt.png',
        years: '3',
        shortDescription: 'I love using Nuxt with Vue as it steamlines setup, has built in file based routing and is really customisable.'
      },
      {
        name: 'Javascript',
        imageUrl: '/images/experience-logos/JavaScript.png',
        years: '5',
        shortDescription: 'I have used javascript since my placement year at gloversure, where I used it for hybrid apps.'
      },
      {
        name: 'HTML',
        imageUrl: '/images/experience-logos/html.png',
        years: '5+',
        shortDescription: 'I have been using HTML since school but more extensively in my professtional career, to build on my apps and website.'
      },
      {
        name: 'CSS',
        imageUrl: '/images/experience-logos/css.webp',
        years: '5',
        shortDescription: 'I have also been using CSS since school but more extensively in my professtional career, to customise my apps and websites more.'
      },
      {
        name: 'Typescript',
        imageUrl: '/images/experience-logos/typescript.png',
        years: '1',
        shortDescription: 'I have been using Typescript this past year as it is the preffered language to use with Nuxt3 and have been enjoying learning the differences with Javascript.'
      },
    ]
  }),
}
</script>

<style scoped lang="scss">
.v-sheet {
  background-color: $primary;
}

.content-card {
  background-color: $primary !important;
}
</style>