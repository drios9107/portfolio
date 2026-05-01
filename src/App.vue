<script setup>
import { ref } from 'vue';
import { experience, profile, projects, skills } from './utils/constants';

const slides = ref(projects.map(() => 0))

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
              <div class="q-mt-md row q-gutter-sm">
                <q-chip color="primary" text-color="white" icon="mail">
                  {{ profile.email }}
                </q-chip>
                <q-chip color="secondary" text-color="white" icon="call">
                  {{ profile.phone }}
                </q-chip>  
                <!-- <a :href="profile.linkedin" target="_blank"> -->
                <q-chip
                  color="info"
                  text-color="white"
                  icon="linkedin"
                  :href="profile.linkedin"
                  >
                  LinkedIn
                </q-chip>
              <!-- </a> -->
              </div>
            </q-card-section>
          </q-card>

          <q-card flat bordered class="glass-card">
            <q-card-section>
              <div class="text-h6 text-weight-medium">Core Skills</div>
              <div class="q-mt-sm q-gutter-sm">
                <q-chip
                  v-for="skill in skills"
                  :key="skill"
                  color="grey-9"
                  text-color="grey-2"
                  class="skill-chip"
                >
                  {{ skill }}
                </q-chip>
              </div>
            </q-card-section>
          </q-card>

          <q-card flat bordered class="glass-card">
            <q-card-section>
              <div class="text-h6 text-weight-medium">Professional Experience</div>
              <q-timeline color="primary" class="q-mt-md">
                <q-timeline-entry
                  v-for="job in experience"
                  :key="job.company"
                  :title="job.company"
                  :subtitle="`${job.role} • ${job.period}`"
                  icon="work"
                >
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
              <q-badge color="accent" text-color="white" label="Add your screenshots in /public" />
            </q-card-section>
            <q-separator dark />
            <q-card-section>
              <div class="row q-col-gutter-md">
                <div v-for="(project,position) in projects" :key="project.name" class="col-12 col-sm-6" v-if="projects.length">
                  <q-card flat class="project-item">
                    <div style="height: 160px;" v-if="project?.images?.length===1">
                      <img :src="project?.images?.[0]" style="width: 100%; height: 100%; object-fit: cover;  border-radius: inherit;" />
                    </div>
                    <q-carousel
                      v-model="slides[position]"
                      animated
                      swipeable
                      arrows
                      navigation
                      height="160px"
                      autoplay
                      infinite
                      control-color="primary"
                      :transition-duration="500"
                      :autoplay-duration="3000"
                      v-if="project?.images?.length>1"
                    >
                      <q-carousel-slide
                        v-for="(img, index) in project.images"
                        :key="index"
                        :name="index"
                      >
                        <img :src="img" style="width: 100%; height: 100%; object-fit: cover;" />
                      </q-carousel-slide>
                    </q-carousel>

                    <q-card-section>
                      <div class="text-subtitle1 text-weight-medium">{{ project.name }}</div>
                      <div class="text-caption text-primary">{{ project.stack }}</div>
                      <p class="q-mt-sm text-body2 text-grey-4">{{ project.description }}</p>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
