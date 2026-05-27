<script setup lang="ts">
import { profile } from 'src/utils/constants';
import LinksSection from './LinksSection.vue';

</script>

<template>
    <q-card flat bordered class="glass-card hero-card scroll-reveal">
        <q-card-section>
            <div class="row items-center header-row">
                <q-avatar size="72px" class="profile-avatar">
                    <img :src="profile.photoUrl" class="profile-avatar-img" />
                </q-avatar>

                <div class="col">
                    <div class="text-h4 text-weight-bold">{{ profile.name }}</div>
                    <div class="text-subtitle1 text-primary">{{ profile.title }}</div>
                    <div class="text-caption text-grey-5 q-mt-xs">
                        {{ profile.location }} - {{ profile.years }}
                    </div>
                </div>
            </div>
            <p class="q-mt-md text-body1">
                {{ profile.summary }}
            </p>
            <LinksSection />
        </q-card-section>
    </q-card>
</template>

<style scoped>
.profile-avatar {
    position: relative;
    overflow: visible;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.17);
    border-radius: 50%;
}

.profile-avatar::before {
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
}

.profile-avatar:hover::before {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.25);
}

.profile-avatar::after {
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
}

.profile-avatar:hover::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
}

.profile-avatar-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    z-index: 1;
}

.hero-card {
    grid-column: span 8;
}
</style>