<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'
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

const expanded = reactive<Record<string, boolean>>({})
const canExpand = reactive<Record<string, boolean>>({})
const descEls = new Map<string, HTMLElement>()
let descObserver: ResizeObserver | undefined

function registerDesc(name: string, el: unknown) {
  if (el instanceof HTMLElement) descEls.set(name, el)
  else descEls.delete(name)
}

function measureDescriptions() {
  for (const [name, el] of descEls) {
    if (expanded[name]) continue
    canExpand[name] = el.scrollHeight > el.clientHeight + 2
  }
}

function toggleDescription(name: string) {
  const el = descEls.get(name)
  if (!el) return

  if (expanded[name]) {
    el.style.maxHeight = `${el.scrollHeight}px`
    requestAnimationFrame(() => {
      el.style.maxHeight = ''
      expanded[name] = false
    })
    return
  }

  expanded[name] = true
  el.style.maxHeight = `${el.scrollHeight}px`
}

onMounted(() => {
  descObserver = new ResizeObserver(() => measureDescriptions())
  nextTick(() => {
    for (const el of descEls.values()) descObserver?.observe(el)
    measureDescriptions()
  })
})

onUnmounted(() => {
  descObserver?.disconnect()
})
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
            <div @click="() => openModal(project)" class="cursor-pointer relative-position"
              style="width: 150px; height: 110px; border-radius: 12px; overflow: hidden;">
              <q-img :src="project?.images?.[0] ?? '/no-img.svg'" fit="cover" class="fit" style="border-radius: 12px;">
              </q-img>

            </div>

            <q-card-section style="flex:1; user-select: none">
              <div class="text-subtitle1 text-weight-medium">{{ project.name }}</div>
              <div class="text-caption text-primary project-stack">{{ project.stack }}</div>
              <p
                :ref="(el) => registerDesc(project.name, el)"
                class="q-mt-sm text-body2 text-grey-4 project-description"
                :class="{
                  'is-expanded': expanded[project.name],
                  'is-clamped': canExpand[project.name] && !expanded[project.name],
                }"
              >{{ project.description }}</p>
              <button
                v-if="canExpand[project.name]"
                type="button"
                class="see-more"
                :aria-expanded="!!expanded[project.name]"
                @click="toggleDescription(project.name)"
              >
                {{ expanded[project.name] ? 'Ver menos' : 'Ver más' }}
                <q-icon
                  name="expand_more"
                  size="16px"
                  class="see-more-icon"
                  :class="{ 'is-open': expanded[project.name] }"
                />
              </button>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>


  <carousel-dialog v-if="activeProject" :project="activeProject" v-model:dialog="dialog" @hide="onDialogHide" />
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
  transition: background-color 160ms ease, border-color 160ms ease;
}

.project-item:hover {
  background: rgba(69, 85, 126, 0.72);
  border-color: rgba(123, 140, 255, 0.35);
}

.project-item:hover .project-stack {
  color: #d4e4ff !important;
}

.project-stack {
  transition: color 160ms ease;
}

.fit-contain-mobile-thumb {
  object-fit: contain;
  background: rgba(12, 15, 23, 0.9);
}

.projects-card {
  grid-column: span 12;
  scroll-margin-top: 88px;
}

.project-description {
  line-height: 1.5;
  max-height: 4.5em;
  overflow: hidden;
  transition: max-height 420ms cubic-bezier(0.22, 0.8, 0.24, 1);
}

.project-description.is-clamped {
  -webkit-mask-image: linear-gradient(#000 62%, transparent);
  mask-image: linear-gradient(#000 62%, transparent);
}

.see-more {
  display: flex;
  align-items: center;
  gap: 2px;
  width: fit-content;
  margin-top: 6px;
  margin-left: auto;
  padding: 0;
  border: 0;
  background: transparent;
  color: #9eb6ff;
  font: inherit;
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 160ms ease, transform 160ms ease;
}

.see-more:hover {
  color: #d4e4ff;
}

.see-more-icon {
  transition: transform 280ms cubic-bezier(0.22, 0.8, 0.24, 1);
}

.see-more-icon.is-open {
  transform: rotate(180deg);
}
</style>