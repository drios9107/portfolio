<script setup>
import LinksSection from './components/LinksSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
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

          <q-card flat bordered class="glass-card">
            <q-card-section>
              <div class="text-h6 text-weight-medium">Core Skills</div>
              <div class="q-mt-sm q-gutter-sm">
                <q-chip v-for="skill in skills" :key="skill" color="grey-9" text-color="grey-2" class="skill-chip">
                  {{ skill }}
                </q-chip>
              </div>
            </q-card-section>
          </q-card>

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

          <q-card flat bordered class="glass-card projects-card">
            <q-card-section class="row items-center justify-between">
              <div class="text-h6 text-weight-medium">Project Showcase</div>
            </q-card-section>
            <q-card-section>
              <ProjectsSection />
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.chip {
  user-select: none;
  height: 28px;
  margin: 8px 4px 4px 8px;
}
</style>