<script setup>
import ContactFooter from './components/ContactFooter.vue';
import JobsSection from './components/JobsSection.vue';
import ProfileSection from './components/ProfileSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';

</script>

<template>
  <q-layout view="hHh Lpr fFf" class="bg-dark-page text-grey-2">
    <q-page-container>
      <q-page class="q-pa-md q-pa-lg-xl">
        <div class="dashboard-grid">
          <ProfileSection />
          <SkillsSection />
          <JobsSection />
          <ProjectsSection />
          <ContactFooter />
        </div>

        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="primary" />
        </q-page-scroller>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>