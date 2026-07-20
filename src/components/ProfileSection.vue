<script setup lang="ts">
import { profile } from 'src/utils/constants';

function scrollToProjects(event: Event) {
    event.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
    <q-card id="top" flat bordered class="glass-card hero-card scroll-reveal">
        <q-card-section class="hero-section">
            <div class="row no-wrap q-col-gutter-xl items-center justify-between hero-row">
                <div class="col-12 col-md-6 text-content">
                    <div class="text-h2 text-weight-bold profile-name q-mb-none">
                        {{ profile.name }}
                    </div>
                    <div class="text-h4 text-weight-bold profile-title q-mb-md">
                        {{ profile.title }}
                    </div>

                    <div class="description-box q-mb-xl">
                        <div class="description-text text-body1">
                            {{ profile.tagline }}
                        </div>
                    </div>

                    <div class="row no-wrap q-gutter-md button-row">
                        <q-btn
                            label="View projects"
                            icon-right="arrow_forward"
                            color="primary"
                            class="rounded-btn text-weight-medium"
                            no-caps
                            size="md"
                            href="#projects"
                            @click="scrollToProjects"
                        />
                        <q-btn
                            label="Download CV"
                            icon-right="download"
                            outline
                            color="primary"
                            class="rounded-btn text-weight-medium cv-btn"
                            no-caps
                            size="md"
                            :href="profile.cvUrl"
                            target="_blank"
                            download
                        />
                    </div>
                </div>

                <div class="col-12 col-md-6 flex justify-center relative-position image-wrapper">
                    <div class="dot-pattern top-right" aria-hidden="true" />
                    <div class="dot-pattern top-left" aria-hidden="true" />

                    <div class="avatar-circle-container relative-position">
                        <q-img :src="profile.photoUrl" class="avatar-image" fit="cover" alt="" />
                        <div class="floating-dot" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<style scoped>
.hero-card {
    grid-column: span 12;
    scroll-margin-top: 88px;
    overflow: hidden;
}

.hero-section {
    padding: 28px 20px;
}

.greeting {
    color: #8b93ab;
    font-size: 1rem;
    letter-spacing: 0.02em;
}

.profile-name {
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: #e8ecf8;
}

.profile-title {
    line-height: 1.25;
    letter-spacing: -0.02em;
    color: #7b8cff;
}

.description-box {
    border-left: 2px solid rgba(123, 140, 255, 0.7);
    padding-left: 1.25rem;
    max-width: 420px;
}

.description-text {
    color: #a8b0c8;
    line-height: 1.65;
}

.rounded-btn {
    border-radius: 9999px;
}

.cv-btn {
    background: rgba(20, 24, 35, 0.6);
}

.image-wrapper {
    min-height: 280px;
}

.avatar-circle-container {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    position: relative;
    background: rgba(14, 17, 26, 0.9);
    overflow: visible;
    box-shadow:
        0 12px 40px rgba(0, 0, 0, 0.35),
        0 0 40px rgba(108, 99, 255, 0.12);
}

.avatar-circle-container::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100% + 12px);
    height: calc(100% + 12px);
    border-radius: 9999px;
    border: 1px solid rgba(90, 160, 255, 0.55);
    box-shadow: 0 0 22px rgba(90, 160, 255, 0.35);
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.6);
    transition:
        transform 840ms cubic-bezier(0.2, 0.8, 0.2, 1),
        opacity 480ms ease;
    pointer-events: none;
    z-index: 2;
}

.avatar-circle-container:hover::before {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.25);
}

.avatar-circle-container::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100% + 14px);
    height: calc(100% + 14px);
    border-radius: 9999px;
    border: 2px solid rgba(90, 160, 255, 0.38);
    box-shadow: 0 0 16px rgba(90, 160, 255, 0.18);
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.6);
    transition:
        transform 420ms cubic-bezier(0.2, 0.8, 0.2, 1),
        opacity 280ms ease;
    pointer-events: none;
    z-index: 2;
}

.avatar-circle-container:hover::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
}

.avatar-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;
    position: relative;
}

.floating-dot {
    position: absolute;
    top: 28%;
    right: -10px;
    width: 14px;
    height: 14px;
    background: #7b8cff;
    border-radius: 50%;
    z-index: 3;
    border: 2px solid #090b10;
    box-shadow: 0 0 12px rgba(123, 140, 255, 0.7);
}

.dot-pattern {
    position: absolute;
    z-index: 0;
    pointer-events: none;
    background-image: radial-gradient(rgba(123, 140, 255, 0.28) 2px, transparent 2px);
    background-size: 14px 14px;
}

.dot-pattern.top-right {
    width: 90px;
    height: 90px;
    top: 12px;
    right: 8px;
}

.dot-pattern.top-left {
    width: 140px;
    height: 140px;
    top: -20px;
    left: 10%;
    opacity: 0.45;
}

@media (max-width: 1024px) {
    .hero-row {
        flex-wrap: wrap;
    }

    .text-content {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    .description-box {
        border-left: none;
        border-top: 2px solid rgba(123, 140, 255, 0.5);
        padding-left: 0;
        padding-top: 1rem;
        text-align: center;
    }

    .avatar-circle-container {
        width: 260px;
        height: 260px;
    }

    .button-row {
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media (max-width: 600px) {
    .button-row {
        flex-direction: column;
        width: 100%;
        max-width: 280px;
    }

    .button-row .q-btn {
        width: 100%;
    }

    .avatar-circle-container {
        width: 220px;
        height: 220px;
    }
}
</style>
