<script setup lang="ts">
import { profile } from 'src/utils/constants';
import LinksSection from './LinksSection.vue';
</script>

<template>
    <q-card id="about" flat bordered class="glass-card scroll-reveal about-card">
        <q-card-section class="about-section">
            <div>
                <div class="text-h6 text-weight-medium">About Me</div>
                <p class="q-mt-md text-body1 about-text">
                    {{ profile.summary }}
                </p>
            </div>
            <LinksSection />
        </q-card-section>
    </q-card>
</template>

<style scoped>
.about-card {
    grid-column: span 12;
    scroll-margin-top: 88px;
}

.about-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.about-text {
    color: #c7cde0;
    line-height: 1.65;
    /* max-width: 72ch; */
}
</style>
