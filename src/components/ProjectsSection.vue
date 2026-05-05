<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects } from '../utils/constants'
import { IProject } from '../utils/types'
import CarouselDialog from './CarouselDialog.vue'

const dialog = ref<boolean>(false)

const activeProject = ref<IProject | null>(null)

const openModal = (project: IProject) => {
  if (project.images?.[0]) {
    activeProject.value = project;
    dialog.value = true
  }
}

const getImageClasses = computed(() => activeProject.value ?
  [
    'carousel-img shadow-4', {
      'fit-cover full-width full-height': !activeProject.value.useFitContainImage,
      'fit-contain-mobile': activeProject.value.useFitContainImage
    }] :
  [])
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


  <carousel-dialog :project="activeProject" v-model:dialog="dialog" :getImageClasses="getImageClasses"
    v-if="dialog && activeProject" />
</template>


<style>
.project-thumbnail {
  width: 200px;
  height: 160px;
}
</style>