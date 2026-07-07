<script setup>
import { profile, experience, education } from '../content.js'
</script>

<template>
  <section id="experience" class="section" v-reveal>
    <div class="container">
      <h2 class="section-title"><span class="index">02.</span> Experience</h2>

      <ol class="timeline">
        <li v-for="job in experience" :key="`${job.company}-${job.role}`" class="entry">
          <div class="marker" :class="{ current: job.period.includes('Present') }" aria-hidden="true"></div>
          <div class="entry-body card">
            <div class="entry-header">
              <div>
                <h3>{{ job.role }}</h3>
                <p class="company">{{ job.company }}</p>
              </div>
              <div class="meta">
                <p class="period">
                  {{ job.period }}
                  <span v-if="job.period.includes('Present')" class="active-badge">active</span>
                </p>
                <p class="location">{{ job.location }}</p>
              </div>
            </div>
            <ul class="bullets">
              <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
            <div class="chips">
              <span v-for="t in job.tech" :key="t" class="chip">{{ t }}</span>
            </div>
          </div>
        </li>

        <li class="entry">
          <div class="marker" aria-hidden="true"></div>
          <div class="entry-body card">
            <div class="entry-header">
              <div>
                <h3>{{ education.degree }}</h3>
                <p class="company">{{ education.school }}</p>
              </div>
              <div class="meta">
                <p class="period">{{ education.period }}</p>
                <p class="location">{{ education.location }}</p>
              </div>
            </div>
          </div>
        </li>
      </ol>

      <div class="resume-cta">
        <a :href="profile.resumeUrl" target="_blank" rel="noopener" class="btn btn-outline">
          Download Full Resume (PDF)
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  position: relative;
  padding-left: 28px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: var(--border);
}

.entry {
  position: relative;
  margin-bottom: 32px;
}

.marker {
  position: absolute;
  left: -28px;
  top: 30px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.marker.current {
  background: var(--accent-2);
  animation: marker-pulse 2s ease-in-out infinite;
}

@keyframes marker-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 4px var(--accent-2-soft);
  }
  50% {
    box-shadow: 0 0 0 8px var(--accent-2-soft);
  }
}

.active-badge {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-2);
  border: 1px solid var(--accent-2);
  border-radius: 999px;
  padding: 2px 8px;
  margin-left: 6px;
}

.entry-body {
  padding: 28px;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

h3 {
  font-size: 1.15rem;
}

.company {
  color: var(--accent);
  font-weight: 500;
  margin-top: 2px;
}

.meta {
  text-align: right;
}

.period {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.location {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.bullets {
  margin: 16px 0 0 18px;
  color: var(--text-muted);
}

.bullets li {
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.resume-cta {
  margin-top: 40px;
  text-align: center;
}

@media (max-width: 600px) {
  .meta {
    text-align: left;
  }

  .timeline {
    padding-left: 20px;
  }

  .marker {
    left: -20px;
    width: 9px;
    height: 9px;
  }

  .entry-body {
    padding: 20px;
  }

  .bullets {
    margin-left: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marker.current {
    animation: none;
  }
}
</style>
