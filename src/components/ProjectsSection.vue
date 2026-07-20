<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { projects } from '../utils/constants'
import { IProject } from '../utils/types'
import CarouselDialog from './CarouselDialog.vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const dialog = ref<boolean>(false)
const activeProject = ref<IProject | null>(null)
let lockedScrollY = 0

const openModal = (project: IProject) => {
  if (!project.images?.[0]) return
  lockedScrollY = window.scrollY
  // Avoid hash-driven scroll after dialog unlocks body scroll
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }
  activeProject.value = project
  dialog.value = true
}

const onDialogHide = async () => {
  const y = lockedScrollY
  activeProject.value = null
  await nextTick()
  window.scrollTo(0, y)
}

const getThumbnailClasses = (project: IProject) => [
  'project-thumbnail',
  'shadow-2',
  project.extraClasses,
  {
    'cursor-pointer': !!project.images?.[0],
    'project-thumbnail2': !!project.images?.[0],
    'fit-contain-mobile-thumb': project.extraClasses === 'fit-contain'
  },
]
</script>

<template>
  <q-card id="projects" flat bordered class="glass-card projects-card scroll-reveal">
    <q-card-section class="row items-center justify-between">
      <div class="text-h6 text-weight-medium">Project Showcase</div>
    </q-card-section>

    <q-card-section>
      <div class="row q-col-gutter-md">
        <div v-for="project in projects" :key="project.name" class="col-12 col-sm-6" v-if="projects.length">
          <q-card flat :class="[
            $q.screen.lt.md ? 'column' : 'row',
            'flex justify-between items-center project-item'
          ]">
            <div @click="() => openModal(project)">
              <img :src="project?.images?.[0] ?? '/no-img.svg'" :class="getThumbnailClasses(project)"
                style="border-radius: 12px;" />
            </div>

            <q-card-section style="flex:1; user-select: none">
              <div class="text-subtitle1 text-weight-medium">{{ project.name }}</div>
              <div class="text-caption text-primary">{{ project.stack }}</div>
              <p class="q-mt-sm text-body2 text-grey-4">{{ project.description }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>


  <carousel-dialog
    v-if="activeProject"
    :project="activeProject"
    v-model:dialog="dialog"
    @hide="onDialogHide"
  />
</template>


<style>
.project-thumbnail {
  width: 150px;
  height: 110px;
  transition: transform 0.2s ease;
}

.project-thumbnail2:hover {
  transform: scale(1.03);
}

.project-item {
  background: rgba(12, 15, 23, 0.9);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  min-height: 160px;
}

.project-item:hover {
  background: #45557ee6
}

.fit-contain-mobile-thumb {
  object-fit: contain;
  background: rgba(12, 15, 23, 0.9);
}

.projects-card {
  grid-column: span 12;
  scroll-margin-top: 88px;
}
</style>