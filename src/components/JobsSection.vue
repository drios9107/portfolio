<script setup lang="ts">
import { experience } from 'src/utils/constants';

</script>

<template>
    <q-card flat bordered class="glass-card">
        <q-card-section>
            <div class="text-h6 text-weight-medium">Professional Experience</div>
            <q-timeline color="primary" class="q-mt-md">
                <q-timeline-entry v-for="job in experience" :key="job.company" :title="job.company"
                    :subtitle="`${job.role} • ${job.period}`" icon="work">
                    <ul class="job-list q-pl-md">
                        <li v-for="item in job.highlights" :key="item">{{ item }}</li>
                    </ul>
                </q-timeline-entry>
            </q-timeline>
        </q-card-section>
    </q-card>
</template>

<style scoped>
.job-list {
    margin: 0;
}

.job-list li {
    margin-bottom: 6px;
    color: #c7cde0;
}
</style>