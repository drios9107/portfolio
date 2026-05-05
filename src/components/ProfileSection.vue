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
.hero-card {
    grid-column: span 8;
}

.profile-avatar {
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
    border-radius: 50%;
}

.profile-avatar-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
</style>