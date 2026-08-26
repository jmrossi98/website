<script setup>
import { profile } from '../content.js'
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconSteam from './icons/IconSteam.vue'

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
      <a :href="profile.steam" target="_blank" rel="noopener" aria-label="Steam">
        <IconSteam />
      </a>
    </div>
    <p>© {{ year }} {{ profile.name }} · Built with Vue</p>
    <!--
      Visits are logged with IP addresses, which are personal data under GDPR,
      so the site says so rather than logging silently. Not a cookie banner:
      no cookie is set and nothing is shared with a third party, so there is
      nothing to ask consent for -- this is disclosure, which is the part that
      is actually required.
    -->
    <p class="privacy">
      Page visits are logged (IP address, country, page, referrer and browser)
      for 90 days, to my own server. No cookies, no third-party analytics.
    </p>
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

.privacy {
  margin-top: 8px;
  font-size: 0.7rem;
  /* Deliberately quiet, but not hidden: a disclosure nobody can read is not a
     disclosure. Kept above the muted text colour's own contrast, not below. */
  opacity: 0.75;
  max-width: 46ch;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}
</style>
