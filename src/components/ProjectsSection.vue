<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '../utils/constants'
import { IProject } from '../utils/types'

const slides = ref<number[]>(projects.map(() => 0))
const dialog = ref<boolean>(false)

const activeProject = ref<IProject | null>(null)

const openModal = (project: IProject) => {
  if (project.images?.[0]) {
    activeProject.value = project;
    dialog.value = true
  }
}
</script>

<template>
  <q-card flat bordered class="glass-card projects-card">
    <q-card-section class="row items-center justify-between">
      <div class="text-h6 text-weight-medium">Project Showcase</div>
    </q-card-section>

    <q-card-section>
      <div class="row q-col-gutter-md">
        <div v-for="project in projects" :key="project.name" class="col-12 col-sm-6" v-if="projects.length">
          <q-card flat class="row flex justify-between project-item">
            <div class="thumbnail" @click="() => openModal(project)">
              <img :src="project?.images?.[0] ?? '/no-img.svg'"
                :class="`fit-cover ${project?.images?.[0] && 'cursor-pointer'} project-thumbnail`"
                style="border-radius: 12px;" />
            </div>

            <q-card-section style="flex:1">
              <div class="text-subtitle1 text-weight-medium">{{ project.name }}</div>
              <div class="text-caption text-primary">{{ project.stack }}</div>
              <p class="q-mt-sm text-body2 text-grey-4">{{ project.description }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>


  <q-dialog v-model="dialog" persistent>
    <q-card class="dialog-card">
      <div class="project-thumbnail" v-if="activeProject?.images?.length === 1">
        <img :src="activeProject?.images?.[0]" class="full-width full-height fit-cover carousel-img" />
      </div>
      <q-carousel v-if="activeProject" v-model="slides[projects.indexOf(activeProject)]" animated swipeable arrows
        navigation height="400px" autoplay infinite control-color="primary" :transition-duration="500"
        :autoplay-duration="3000">
        <q-carousel-slide v-for="(img, i) in activeProject.images" :key="i" :name="i">
          <img :src="img" class="full-width full-height fit-cover" style="border-radius: 12px;" />
        </q-carousel-slide>
      </q-carousel>

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>


<style scoped>
.project-thumbnail {
  width: 200px;
  height: 160px;
}

.carousel-img {
  border: 4px solid grey;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.dialog-card {
  width: 600px;
  max-width: 90vw;
}
</style>