<script setup lang="ts">
const props = defineProps({
    href: String,
    title: String,
    color:String,
    icon:String
})
</script>
<template>
    <a :href="props.href" target="_blank" class="no-margin">
        <q-chip :color="props.color" text-color="white" :icon="props.icon" class="chip">
            {{ props.title }}
        </q-chip>
    </a>
</template>