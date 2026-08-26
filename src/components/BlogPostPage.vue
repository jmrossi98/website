<script setup>
import { useRoute } from 'vue-router'
import { getPost } from '../lib/posts.js'

const route = useRoute()
const post = getPost(route.params.slug)
</script>

<template>
  <section class="section" v-reveal>
    <div class="container">
      <router-link to="/blog" class="back">&larr; Back to Blog</router-link>

      <template v-if="post">
        <h1 class="title">{{ post.title }}</h1>
        <div class="meta">
          <p class="date">{{ post.date }}</p>
          <div v-if="post.tags.length" class="chips">
            <span v-for="t in post.tags" :key="t" class="chip">{{ t }}</span>
          </div>
        </div>
        <div class="prose" v-html="post.html"></div>
      </template>

      <p v-else class="empty">
        Couldn't find that post. <router-link to="/blog">Back to Blog</router-link>
      </p>
    </div>
  </section>
</template>

<style scoped>
.back {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.back:hover {
  color: var(--accent);
}

.title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  letter-spacing: -0.02em;
}

.meta {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.date {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.empty {
  color: var(--text-muted);
}
</style>
