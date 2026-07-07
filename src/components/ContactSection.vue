<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { profile } from '../content.js'

const EMAILJS_SERVICE_ID = 'service_jy9b9iw'
const EMAILJS_TEMPLATE_ID = 'template_b9zur19'
const EMAILJS_PUBLIC_KEY = 'user_nX5HDf3E9etdbtNe42Hei'

const form = ref(null)
const status = ref('idle') // idle | sending | sent | error

async function sendEmail() {
  status.value = 'sending'
  try {
    await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.value, {
      publicKey: EMAILJS_PUBLIC_KEY,
    })
    status.value = 'sent'
    form.value.reset()
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="contact" class="section" v-reveal>
    <div class="container narrow">
      <h2 class="section-title"><span class="index">04.</span> Get In Touch</h2>
      <p class="blurb">
        I'm always open to hearing about new opportunities, interesting projects, or just talking
        shop. My inbox is open — I'll get back to you as soon as I can.
      </p>
      <form ref="form" class="contact-form" @submit.prevent="sendEmail">
        <div class="row">
          <label>
            <span>Name</span>
            <input type="text" name="name" required autocomplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required autocomplete="email" />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit" class="btn btn-primary" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending…' : 'Send Message' }}
        </button>
        <p v-if="status === 'sent'" class="feedback success" role="status">
          Message sent — thanks for reaching out!
        </p>
        <p v-if="status === 'error'" class="feedback error" role="alert">
          Something went wrong. Email me directly at
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </p>
      </form>

      <p class="direct">
        Or reach me directly:
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.narrow {
  max-width: 720px;
}

.blurb {
  color: var(--text-muted);
  margin-bottom: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label span {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
}

input,
textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 13px 16px;
  color: var(--text);
  font-family: inherit;
  font-size: 0.95rem;
  transition: border-color 0.2s ease;
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent);
}

button[type='submit'] {
  align-self: flex-start;
}

button:disabled {
  opacity: 0.6;
  cursor: default;
}

.feedback.success {
  color: var(--accent);
}

.feedback.error {
  color: #f87171;
}

.direct {
  margin-top: 36px;
  color: var(--text-muted);
}

@media (max-width: 600px) {
  .row {
    grid-template-columns: 1fr;
  }
}
</style>
