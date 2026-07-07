<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { profile } from '../content.js'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const menuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('')

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

// Lock body scroll while the mobile menu overlay is open
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

let observer

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeSection.value = `#${entry.target.id}`
      }
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )
  document.querySelectorAll('main section[id]').forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<template>
  <header class="navbar" :class="{ scrolled }">
    <nav class="container nav-inner" aria-label="Primary">
      <a href="#" class="logo" @click="menuOpen = false">
        <span class="glitch-hover" :data-text="profile.name">{{ profile.name }}</span>
        <img :src="profile.blackMage" alt="" class="logo-mage" />
      </a>

      <button
        class="menu-toggle"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="bar" :class="{ open: menuOpen }"></span>
      </button>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="(link, i) in links" :key="link.href">
          <a
            :href="link.href"
            :class="{ active: activeSection === link.href }"
            @click="menuOpen = false"
          >
            <span class="index">0{{ i + 1 }}.</span> {{ link.label }}
          </a>
        </li>
        <li>
          <a :href="profile.resumeUrl" target="_blank" rel="noopener" class="btn btn-outline resume-btn">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: var(--nav-height);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.navbar.scrolled {
  background: rgba(10, 17, 32, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px -10px rgba(2, 6, 15, 0.7);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-weight: 800;
  font-size: 1.6rem;
  color: var(--heading);
  letter-spacing: -0.02em;
}

.logo-mage {
  height: 1.4em;
  width: auto;
  position: relative;
  top: 3px;
  transition: transform 0.25s ease;
}

.logo:hover .logo-mage {
  transform: scale(1.15) rotate(-8deg);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-links a:not(.resume-btn) {
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:not(.resume-btn):hover,
.nav-links a.active {
  color: var(--accent);
}

.nav-links .index {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
}

.resume-btn {
  padding: 10px 20px;
  font-size: 0.85rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  position: relative;
  cursor: pointer;
  z-index: 110;
}

.bar,
.bar::before,
.bar::after {
  content: '';
  position: absolute;
  left: 4px;
  width: 24px;
  height: 2px;
  background: var(--accent);
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.bar {
  top: 15px;
}

.bar::before {
  top: -8px;
}

.bar::after {
  top: 8px;
}

.bar.open {
  transform: rotate(45deg);
}

.bar.open::before {
  opacity: 0;
}

.bar.open::after {
  transform: rotate(-90deg) translateX(8px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    inset: 0;
    flex-direction: column;
    justify-content: center;
    background: rgba(10, 17, 32, 0.97);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-links a:not(.resume-btn) {
    font-size: 1.2rem;
  }
}
</style>
