<script setup>
import { posts } from '../lib/posts.js'
</script>

<template>
  <section class="section" v-reveal>
    <div class="container">
      <h1 class="section-title">Blog</h1>

      <p v-if="!posts.length" class="empty">Nothing published yet - check back soon.</p>

      <ul v-else class="list">
        <li v-for="post in posts" :key="post.slug">
          <router-link :to="`/blog/${post.slug}`" class="card entry">
            <div class="entry-header">
              <h2>{{ post.title }}</h2>
              <p class="date">{{ post.date }}</p>
            </div>
            <p class="summary">{{ post.summary }}</p>
            <div v-if="post.tags.length" class="chips">
              <span v-for="t in post.tags" :key="t" class="chip">{{ t }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.empty {
  color: var(--text-muted);
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.entry {
  display: block;
  padding: 24px 28px;
  color: inherit;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
}

.entry h2 {
  font-size: 1.15rem;
}

.entry:hover h2 {
  color: var(--accent);
}

.date {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.summary {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-top: 12px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}
</style>
