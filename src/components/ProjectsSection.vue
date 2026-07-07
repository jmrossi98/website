<script setup>
import { projects } from '../content.js'
import IconExternal from './icons/IconExternal.vue'
</script>

<template>
  <section id="projects" class="section" v-reveal>
    <div class="container">
      <h2 class="section-title"><span class="index">03.</span> Projects</h2>
      <div class="grid">
        <a
          v-for="(project, i) in projects"
          :key="project.title"
          :href="project.link"
          target="_blank"
          rel="noopener"
          class="card project"
        >
          <div class="thumb">
            <span class="level-badge">{{ String(i + 1).padStart(2, '0') }}</span>
            <img :src="project.image" :alt="`Screenshot of ${project.title}`" loading="lazy" />
          </div>
          <div class="body">
            <div class="title-row">
              <h3>{{ project.title }}</h3>
              <IconExternal class="ext" />
            </div>
            <p>{{ project.description }}</p>
            <div class="chips">
              <span v-for="t in project.tech" :key="t" class="chip">{{ t }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  /* min(100%, …) keeps cards from overflowing viewports narrower than 300px */
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: 24px;
}

.project {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: inherit;
}

.thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project:hover .thumb img {
  transform: scale(1.04);
}

.level-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--bg);
  background: var(--accent-2);
  padding: 3px 8px;
  border-radius: 4px;
  letter-spacing: 0.04em;
}

.thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(251, 191, 36, 0.15) 50%,
    transparent 100%
  );
  transform: translateY(-100%);
  transition: transform 0.5s ease;
  pointer-events: none;
}

.project:hover .thumb::after {
  transform: translateY(100%);
}

.body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 22px;
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

h3 {
  font-size: 1.1rem;
}

.project:hover h3 {
  color: var(--accent);
}

.ext {
  width: 18px;
  height: 18px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.project:hover .ext {
  color: var(--accent);
}

.body p {
  color: var(--text-muted);
  font-size: 0.92rem;
  margin: 12px 0 18px;
  flex: 1;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .project:hover .thumb img {
    transform: none;
  }

  .thumb::after {
    display: none;
  }
}
</style>
