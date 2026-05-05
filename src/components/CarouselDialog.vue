<script setup lang="ts">
import { projects } from 'src/utils/constants';
import { type IProject } from 'src/utils/types'
import { computed, ref } from 'vue';

const slides = ref<number[]>(projects.map(() => 0))

const props = defineProps<{
    project: IProject
    getImageClasses:(string | { [key: string]: boolean })[]
}>()
const dialog = defineModel<boolean>('dialog', { required: true })

</script>

<template>
    <q-dialog v-model="dialog" persistent>
        <q-card class="dialog-card">
            <div class="project-thumbnail" v-if="props.project?.images?.length === 1">
                <img :src="props.project?.images?.[0]" :class="props.getImageClasses" />
            </div>
            <q-carousel v-if="props.project" v-model="slides[projects.indexOf(props.project)]" animated swipeable arrows
                navigation height="400px" autoplay infinite control-color="primary" :transition-duration="500"
                :autoplay-duration="3000" class="carousel-container">
                <q-carousel-slide v-for="(img, i) in props.project.images" :key="i" :name="i" class="flex flex-center">
                    <img :src="img" :class="props.getImageClasses" />
                </q-carousel-slide>
            </q-carousel>

            <q-card-actions align="right">
                <q-btn flat label="Close" color="primary" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<style scoped>
.carousel-container {
    border-radius: 12px;
}

.carousel-img {
    border-radius: 12px;
}

.dialog-card {
    width: 600px;
    max-width: 90vw;
}

.fit-contain-mobile {
    object-fit: contain;
    max-height: 100%;
    width: auto;
    border: none;
    border-radius: 12px;
}
</style>