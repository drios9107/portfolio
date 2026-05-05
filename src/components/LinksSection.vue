<script setup lang="ts">
import { profile } from 'src/utils/constants';
import ChipLink from './ChipLink.vue';
</script>

<template>
    <div class="q-mt-md row q-gutter-sm">
        <chip-link :title="profile.email" :href="`mailto:${profile.email}`" icon="mail" color="primary" />
        <chip-link :title="profile.phone" :href="`https://wa.me/${profile.phone}`" icon="fa-brands fa-whatsapp"
            color="secondary" />
        <chip-link title="LinkedIn" :href="profile.linkedin" icon="fa-brands fa-linkedin" color="info" />
    </div>
</template>