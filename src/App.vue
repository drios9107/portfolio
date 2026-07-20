<script setup>
import AboutMeSection from './components/AboutMeSection.vue';
import AppHeader from './components/AppHeader.vue';
import ContactFooter from './components/ContactFooter.vue';
import JobsSection from './components/JobsSection.vue';
import ProfileSection from './components/ProfileSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const mouseX = ref(0);
const mouseY = ref(0);

function handleMouseMove(e) {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <q-layout view="hHh Lpr fFf" class="bg-dark-page text-grey-2">
    <q-page-container>
      <q-page class="q-pa-md q-pa-lg-xl">
        <div class="dashboard-grid">
          <AppHeader />
          <ProfileSection />
          <SkillsSection />
          <AboutMeSection />
          <JobsSection />
          <ProjectsSection />
          <ContactFooter />
        </div>

        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="primary" />
        </q-page-scroller>
      </q-page>
    </q-page-container>

    <div class="cursor-glow" :style="{
      transform: `translate3d(${mouseX}px, ${mouseY}px, 0)`,
    }" aria-hidden="true" />
  </q-layout>
</template>

<style scoped>
.cursor-glow {
  position: fixed;
  left: 0;
  top: 0;
  width: 160px;
  height: 160px;
  border-radius: 9999px;
  pointer-events: none;
  z-index: 9999;

  /* center dot on cursor */
  margin-left: -80px;
  margin-top: -80px;

  background: radial-gradient(circle,
      rgba(120, 181, 255, 0.215) 0%,
      rgba(90, 159, 255, 0.077) 28%,
      rgba(70, 129, 255, 0.042) 45%,
      rgba(70, 130, 255, 0) 75%);
  filter: blur(2px);
  mix-blend-mode: screen;
}
</style>
