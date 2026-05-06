<script setup lang="ts">
import { skills } from 'src/utils/constants';


const skillGroups = [
    { label: 'Frontend', items: skills.frontend },
    { label: 'Backend', items: skills.backend },
    { label: 'Database', items: skills.database },
    { label: 'API', items: skills.api },
];

</script>

<template>
    <q-card flat bordered class="glass-card scroll-reveal">
        <q-card-section>
            <div class="text-h6 text-weight-medium">Core Skills</div>

            <div class="q-mt-md column q-gutter-sm">
                <div v-for="group in skillGroups" :key="group.label">

                    <div class="text-caption text-grey-5 q-mb-sm select-none">
                        {{ group.label }}
                    </div>

                    <div class="row q-gutter-sm">
                        <q-chip v-for="skill in group.items" :key="skill.name || skill"
                            :color="skill.main ? 'primary' : 'grey-9'" text-color="white"
                            class="skill-chip select-none">
                            {{ skill.name || skill }}
                        </q-chip>
                    </div>

                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<style scoped>
.select-none {
    user-select: none;
}

.skill-chip {
    margin: 2px;
    transition: transform 0.15s ease;
}

.skill-chip:hover {
    transform: translateY(-2px);
}
</style>