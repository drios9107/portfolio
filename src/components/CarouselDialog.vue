<script setup lang="ts">
import { type IProject } from 'src/utils/types'
import { computed, ref, watch } from 'vue';

const slide = ref(0)

const props = defineProps<{
    project: IProject
}>()
const dialog = defineModel<boolean>('dialog', { required: true })
const emit = defineEmits<{
    hide: []
}>()

watch(dialog, (open) => {
    if (open) slide.value = 0
})

const getImageClasses = computed(() => props.project ?
    [
        'carousel-img shadow-4', props.project.extraClasses, {
            'full-width full-height': props.project.extraClasses === 'fit-cover',
            'fit-contain-mobile': props.project.extraClasses === 'fit-contain',
        }
    ] :
    [])

const hasManyProjects = computed(() => (props.project?.images?.length ?? 0) > 1)
</script>

<template>
    <q-dialog v-model="dialog" persistent no-refocus no-focus @hide="emit('hide')">
        <q-card class="dialog-card">
            <div v-if="!hasManyProjects" class="flex flex-center q-pa-md" style="height: 400px;">
                <img :src="props.project.images![0]" :class="getImageClasses" />
            </div>
            <q-carousel v-if="hasManyProjects" v-model="slide" animated swipeable arrows navigation autoplay infinite
                :autoplay-duration="3000" :transition-duration="500" height="400px" control-color="primary"
                class="carousel-container">
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