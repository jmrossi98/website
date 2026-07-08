<script setup>
import { profile } from '../content.js'
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
</script>

<template>
  <section class="hero" aria-label="Introduction">
    <div class="container">
      <p class="kicker">
        <span aria-hidden="true">&gt;</span> whoami<span class="terminal-cursor"></span>
      </p>
      <h1 class="glitch-hover" :data-text="profile.name">{{ profile.name }}</h1>
      <h2>I build software that ships and scales</h2>
      <p class="tagline">
        {{ profile.title }} at <strong>{{ profile.company }}</strong
        >. {{ profile.tagline }}
      </p>
      <div class="actions">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a :href="profile.resumeUrl" target="_blank" rel="noopener" class="btn btn-outline">
          Download Resume
        </a>
      </div>
      <div class="socials">
        <a :href="profile.github" target="_blank" rel="noopener" aria-label="GitHub">
          <IconGithub />
        </a>
        <a :href="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
          <IconLinkedin />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  /* Stable height on mobile browsers whose URL bar collapses */
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-height);
  background:
    radial-gradient(ellipse 60% 50% at 70% 20%, rgba(var(--accent-rgb), 0.08), transparent),
    radial-gradient(ellipse 50% 40% at 20% 80%, rgba(var(--accent-2-rgb), 0.06), transparent);
}

.kicker {
  display: flex;
  align-items: center;
  line-height: 1;
  font-family: var(--font-mono);
  color: var(--accent);
  margin-bottom: 20px;
}

h1 {
  font-size: clamp(2.6rem, 7vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
}

h2 {
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: -0.02em;
  margin-top: 8px;
}

.tagline {
  max-width: 560px;
  margin-top: 24px;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.tagline strong {
  color: var(--text);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
}

.socials {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.socials a {
  color: var(--text-muted);
  transition: color 0.2s ease, transform 0.2s ease;
}

.socials a:hover {
  color: var(--accent);
  transform: translateY(-2px);
}

.socials svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 480px) {
  .actions {
    flex-direction: column;
    align-items: stretch;
  }

  .actions .btn {
    justify-content: center;
  }
}

</style>
