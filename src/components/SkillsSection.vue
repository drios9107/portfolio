<script setup lang="ts">
import { skills } from 'src/utils/constants';

</script>

<template>
    <q-card flat bordered class="glass-card scroll-reveal">
        <q-card-section>
            <div class="text-h6 text-weight-medium">Core Skills</div>
            <div class="q-mt-sm q-gutter-sm">
                <q-chip v-for="skill in skills" :key="skill" color="grey-9" text-color="grey-2" class="skill-chip">
                    {{ skill }}
                </q-chip>
            </div>
        </q-card-section>
    </q-card>
</template>

<style scoped>
.skill-chip {
    margin: 4px;
    user-select: none;
}
</style>