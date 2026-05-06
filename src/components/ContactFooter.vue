<script setup lang="ts">
import ChipLink from './ChipLink.vue';

</script>

<template>
    <q-card flat bordered class="glass-card text-center scroll-reveal full-span">
        <q-card-section>
            <div class="text-h6 text-weight-medium">
                Let's build something together
            </div>

            <div class="text-body2 text-grey-5 q-mt-sm">
                I'm currently open to remote opportunities and collaborations.
            </div>

            <div class="q-mt-md">
                <ChipLink href="mailto:drios9107@gmail.com" title="Email Me" color="primary" icon="mail" />
                <ChipLink href="https://linkedin.com/in/david-rios-9492001b2" title="LinkedIn" color="blue"
                    icon="fab fa-linkedin" />
            </div>
        </q-card-section>
    </q-card>
</template>

<style scoped>
.full-span {
    grid-column: span 12;
}
</style>