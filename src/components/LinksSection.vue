<script setup lang="ts">
import { profile } from 'src/utils/constants';
import ChipLink from './ChipLink.vue';

const whatsappHref = `https://wa.me/${profile.whatsapp.replace(/\s/g, '')}`;
const phoneHref = `tel:${profile.phone.replace(/\s/g, '')}`;
</script>

<template>
    <div class="q-mt-md row q-gutter-sm">
        <chip-link :title="profile.email" :href="`mailto:${profile.email}`" icon="mail" color="primary" />
        <chip-link :title="profile.phone" :href="phoneHref" icon="phone" color="green-8" />
        <chip-link title="WhatsApp" :href="whatsappHref" icon="fa-brands fa-whatsapp" color="secondary" />
        <chip-link title="LinkedIn" :href="profile.linkedin" icon="fa-brands fa-linkedin" color="info" />
    </div>
</template>
