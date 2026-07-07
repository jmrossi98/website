<script setup>
import { profile } from '../content.js'
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="socials">
      <a :href="profile.github" target="_blank" rel="noopener" aria-label="GitHub">
        <IconGithub />
      </a>
      <a :href="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
        <IconLinkedin />
      </a>
    </div>
    <p>© {{ year }} {{ profile.name }} · Built with Vue</p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 40px 24px;
  text-align: center;
  border-top: 1px solid var(--border);
}

.socials {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 16px;
}

.socials a {
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.socials a:hover {
  color: var(--accent);
}

.socials svg {
  width: 20px;
  height: 20px;
}

p {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>
