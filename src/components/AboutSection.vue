<script setup>
import { profile, about } from '../content.js'
</script>

<template>
  <section id="about" class="section" v-reveal>
    <div class="container">
      <h2 class="section-title"><span class="index">01.</span> About Me</h2>
      <div class="about-grid">
        <div class="bio">
          <p v-for="(paragraph, i) in about.paragraphs" :key="i">{{ paragraph }}</p>
        </div>
        <div class="photo-wrap">
          <img :src="profile.photo" alt="Photo of Jakob Rossi" loading="lazy" />
        </div>
      </div>
      <div class="skills">
        <div v-for="group in about.skills" :key="group.group" class="skill-group">
          <h3><span class="comment-prefix">// </span>{{ group.group }}</h3>
          <div class="chips">
            <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  align-items: start;
}

.bio p {
  color: var(--text-muted);
  margin-bottom: 16px;
}

.photo-wrap {
  position: relative;
  border-radius: var(--radius);
  max-width: 300px;
  justify-self: center;
}

.photo-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid var(--accent);
  border-radius: var(--radius);
  transform: translate(14px, 14px);
  z-index: -1;
  transition: transform 0.25s ease;
}

.photo-wrap:hover::after {
  transform: translate(8px, 8px);
}

.photo-wrap img {
  border-radius: var(--radius);
  filter: saturate(0.9);
}

.skills {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 24px;
}

.skill-group h3 {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.comment-prefix {
  color: var(--accent-2);
  text-transform: none;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .photo-wrap {
    order: -1;
  }
}
</style>
