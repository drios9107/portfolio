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

            <div class="skills-grid q-mt-md">
                <q-card
                    v-for="group in skillGroups"
                    :key="group.label"
                    flat
                    bordered
                    class="skill-group-card"
                >
                    <q-card-section class="skill-group-section">
                        <div class="text-subtitle2 text-weight-medium skill-group-label select-none">
                            {{ group.label }}
                        </div>

                        <div class="row justify-center q-gutter-md q-mt-sm chip-row">
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
                    </q-card-section>
                </q-card>
            </div>
        </q-card-section>
    </q-card>
</template>

<style scoped>
.select-none {
    user-select: none;
}

.skills-card {
    grid-column: span 12;
    scroll-margin-top: 88px;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

.skill-group-card {
    background: rgba(14, 17, 26, 0.65);
    border: 1px solid rgba(108, 99, 255, 0.18);
    border-radius: 12px;
    height: 100%;
    transition: border-color 160ms ease, box-shadow 160ms ease;
}

.skill-group-card:hover {
    border-color: rgba(108, 99, 255, 0.4);
    box-shadow: inset 0 0 24px rgba(108, 99, 255, 0.08);
    transform: none;
}

.skill-group-label {
    color: #a8b0c8;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 0.75rem;
    text-align: center;
}

.skill-group-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.chip-row {
    row-gap: 12px;
    justify-content: center;
}

.skill-chip {
    height: 40px;
    padding: 0 14px;
    font-size: 0.95rem;
    margin: 4px 6px;
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
    width: 20px;
    height: 20px;
    margin-right: 8px;
    flex-shrink: 0;
    object-fit: contain;
}

.skill-chip :deep(.q-chip__content) {
    display: inline-flex;
    align-items: center;
}

.skill-chip:hover :deep(.q-chip__content) {
    text-shadow: 0 0 10px rgba(108, 99, 255, 0.35);
}

@media (max-width: 1024px) {
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .skills-grid {
        grid-template-columns: 1fr;
    }
}
</style>
