<script setup lang="ts">
import { projects } from 'src/utils/constants';
import { type IProject } from 'src/utils/types'
import { ref } from 'vue';

const slides = ref<number[]>(projects.map(() => 0))

const props = defineProps<{
    project: IProject
}>()
const dialog = defineModel<boolean>('dialog', { required: true })

</script>

<template>
    <q-dialog v-model="dialog" persistent>
        <q-card class="dialog-card">
            <div class="project-thumbnail" v-if="props.project?.images?.length === 1">
                <img :src="props.project?.images?.[0]" class="full-width full-height fit-cover carousel-img" />
            </div>
            <q-carousel v-if="props.project" v-model="slides[projects.indexOf(props.project)]" animated
                swipeable arrows navigation height="400px" autoplay infinite control-color="primary"
                :transition-duration="500" :autoplay-duration="3000">
                <q-carousel-slide v-for="(img, i) in props.project.images" :key="i" :name="i">
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