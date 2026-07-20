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
    <q-card id="skills" flat bordered class="glass-card scroll-reveal skills-card">
        <q-card-section>
            <div class="text-h6 text-weight-medium">Core Skills</div>

            <div class="q-mt-md column q-gutter-sm">
                <div v-for="group in skillGroups" :key="group.label">
                    <div class="text-caption text-grey-5 q-mb-sm select-none">
                        {{ group.label }}
                    </div>

                    <div class="row q-gutter-sm">
                        <q-chip
                            v-for="skill in group.items"
                            :key="skill.name"
                            :color="skill.main ? 'primary' : 'grey-9'"
                            text-color="white"
                            class="skill-chip select-none"
                        >
                            <img
                                v-if="skill.icon"
                                :src="skill.icon"
                                :alt="skill.name"
                                class="skill-icon"
                            />
                            {{ skill.name }}
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
    transition: transform 0.15s ease, box-shadow 0.18s ease, filter 0.18s ease;
}

.skill-chip:hover {
    transform: translateY(-2px);
    box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, 0.08),
        inset 0 0 18px rgba(108, 99, 255, 0.22);
    filter: brightness(1.06);
}

.skill-icon {
    width: 16px;
    height: 16px;
    margin-right: 6px;
    flex-shrink: 0;
    object-fit: contain;
}

.skill-chip :deep(.q-chip__content) {
    display: inline-flex;
    align-items: center;
}

.skills-card {
    grid-column: span 4;
    scroll-margin-top: 88px;
}

.skill-chip:hover :deep(.q-chip__content) {
    text-shadow: 0 0 10px rgba(108, 99, 255, 0.35);
}
</style>
