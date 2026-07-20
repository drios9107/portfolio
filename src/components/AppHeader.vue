<script setup lang="ts">
const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

function scrollToSection(event: Event, href: string) {
    event.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', window.location.pathname + window.location.search)
}
</script>

<template>
    <header class="app-header glass-card">
        <a href="#top" class="brand text-weight-bold" @click="scrollToSection($event, '#top')">
            Home
        </a>
        <nav class="nav">
            <a v-for="link in links" :key="link.href" :href="link.href" class="nav-link"
                @click="scrollToSection($event, link.href)">
                {{ link.label }}
            </a>
        </nav>
    </header>
</template>

<style scoped>
.app-header {
    position: sticky;
    top: 12px;
    z-index: 100;
    grid-column: span 12;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 20px;
    margin-bottom: 0;
    transform: none !important;
}

.app-header:hover {
    transform: none !important;
}

.brand {
    color: #e8ecf8;
    text-decoration: none;
    font-size: 1.05rem;
    letter-spacing: 0.02em;
    white-space: nowrap;
}

.nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 4px 12px;
}

.nav-link {
    color: #a8b0c8;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 4px 8px;
    border-radius: 8px;
    transition: color 160ms ease, background-color 160ms ease;
}

.nav-link:hover {
    color: #e8ecf8;
    background: rgba(108, 99, 255, 0.15);
}

@media (max-width: 640px) {
    .app-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

    .nav {
        justify-content: flex-start;
    }
}
</style>
