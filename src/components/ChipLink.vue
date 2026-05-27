<script setup lang="ts">
const props = defineProps({
    href: String,
    title: String,
    color: String,
    icon: String
})
</script>
<template>
    <a :href="props.href" target="_blank" class="no-margin">
        <q-chip :color="props.color" text-color="white" :icon="props.icon" class="chip">
            {{ props.title }}
        </q-chip>
    </a>
</template>

<style scoped>
.chip {
    user-select: none;
    height: 28px;
    margin: 8px 4px 4px 8px;
    transition: transform 0.15s ease;
}

.chip:hover {
    transform: translateY(-2px);
}
</style>