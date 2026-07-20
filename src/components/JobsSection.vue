<script setup lang="ts">
import { experience } from 'src/utils/constants';

</script>

<template>
    <q-card id="experience" flat bordered class="glass-card scroll-reveal jobs-card">
        <q-card-section>
            <div class="text-h6 text-weight-medium">Professional Experience</div>
            <q-timeline color="primary" class="q-mt-md">
                <q-timeline-entry v-for="job in experience" :key="job.company" :title="job.company"
                    :subtitle="`${job.role} • ${job.period}`" :avatar="job.logo" :icon="job.logo ? undefined : 'work'"
                    style="user-select: none;">
                    <ul class="job-list q-pl-md">
                        <li v-for="item in job.highlights" :key="item">
                            <span class="job-item-text">{{ item }}</span>
                        </li>
                    </ul>
                </q-timeline-entry>
            </q-timeline>
        </q-card-section>
    </q-card>
</template>

<style scoped>
.job-list {
    margin: 0;
    list-style: none;
    padding-left: 0;
}

.job-list li {
    position: relative;
    margin-bottom: 6px;
    color: #c7cde0;
    padding-left: 14px;
}

.job-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.8em;
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background: transparent;
    border: 1.5px solid rgba(165, 203, 249, 0.6);
    transform: translateY(-50%);
    transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.job-list li:hover::before {
    background: rgba(90, 160, 255, 0.95);
    border-color: rgba(90, 160, 255, 0.95);
    transform: translateY(-50%) scale(1.05);
}

.job-item-text {
    position: relative;
    display: inline-block;
}

.job-item-text::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    bottom: -2px;
    height: 2px;
    background: rgba(90, 160, 255, 0.55);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 180ms ease, opacity 180ms ease;
    opacity: 0;
    pointer-events: none;
}

.job-list li:hover .job-item-text::after {
    transform: scaleX(1);
    opacity: 1;
}

.jobs-card {
    grid-column: span 12;
    scroll-margin-top: 88px;
}
</style>