<script setup>
import JobsSection from './components/JobsSection.vue';
import LinksSection from './components/LinksSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import { experience, profile, skills } from './utils/constants';

</script>

<template>
  <q-layout view="hHh Lpr fFf" class="bg-dark-page text-grey-2">
    <q-page-container>
      <q-page class="q-pa-md q-pa-lg-xl">
        <div class="dashboard-grid">
          <q-card flat bordered class="glass-card hero-card">
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
              <LinksSection/>
            </q-card-section>
          </q-card>

          <SkillsSection/>
          <JobsSection/>
          <ProjectsSection />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>