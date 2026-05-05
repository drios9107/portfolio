<script setup lang="ts">
import { projects } from 'src/utils/constants';
import { type IProject } from 'src/utils/types'
import { computed, ref } from 'vue';

const slides = ref<number[]>(projects.map(() => 0))

const props = defineProps<{
    project: IProject
}>()
const dialog = defineModel<boolean>('dialog', { required: true })

const getImageClasses = computed(() => props.project ?
    [
        'carousel-img shadow-4', {
            'fit-cover full-width full-height': !props.project.useFitContainImage,
            'fit-contain-mobile': props.project.useFitContainImage
        }] :
    [])

const hasManyProjects = computed(() => props.project?.images?.length > 1)
console.log('***here', props.project.images)
</script>

<template>
    <q-dialog v-model="dialog" persistent>
        <q-card class="dialog-card">
            <div v-if="!hasManyProjects" class="flex flex-center q-pa-md" style="height: 400px;">
                <img :src="props.project.images[0]" :class="getImageClasses" />
            </div>
            <q-carousel v-if="hasManyProjects" v-model="slides[projects.indexOf(props.project)]" animated swipeable
                arrows navigation autoplay infinite :autoplay-duration="3000" :transition-duration="500" height="400px"
                control-color="primary" class="carousel-container">
                <q-carousel-slide v-for="(img, i) in props.project.images" :key="i" :name="i" class="flex flex-center">
                    <img :src="img" :class="getImageClasses" />
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
    border-radius: 12px;
}

.carousel-container {
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