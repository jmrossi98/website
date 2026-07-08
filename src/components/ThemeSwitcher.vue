<script setup>
import { ref, onMounted } from 'vue'
import { THEME_STORAGE_KEY, DEFAULT_THEME, VALID_THEMES } from '../theme.js'

const THEMES = [
  { value: 'ff', label: 'FF' },
  { value: 'teal', label: 'Teal' },
  { value: 'solarpunk', label: 'Solarpunk' },
]

const theme = ref(DEFAULT_THEME)

function onChange() {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem(THEME_STORAGE_KEY, theme.value)
}

onMounted(() => {
  const current = document.documentElement.getAttribute('data-theme')
  theme.value = VALID_THEMES.includes(current) ? current : DEFAULT_THEME
})
</script>

<template>
  <div class="theme-switcher">
    <label for="theme-select" class="sr-only">Color theme</label>
    <div class="select-wrap">
      <select id="theme-select" v-model="theme" class="theme-select" @change="onChange">
        <option v-for="t in THEMES" :key="t.value" :value="t.value">{{ t.label }}</option>
      </select>
      <svg class="caret" viewBox="0 0 10 6" aria-hidden="true">
        <path d="M1 1l4 4 4-4" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.select-wrap {
  position: relative;
  display: inline-flex;
}

.theme-select {
  appearance: none;
  -webkit-appearance: none;
  color-scheme: light;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 8px 26px 8px 12px;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.theme-select:hover,
.theme-select:focus-visible {
  border-color: var(--accent);
  outline: none;
}

.theme-select option {
  background: var(--bg-elevated);
  color: var(--text);
}

.caret {
  position: absolute;
  top: 50%;
  right: 10px;
  width: 9px;
  height: 6px;
  transform: translateY(-50%);
  pointer-events: none;
  fill: none;
  stroke: var(--accent);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
