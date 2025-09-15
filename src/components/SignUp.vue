<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const phone = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  if (!email.value) return

  isSubmitting.value = true

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  isSubmitting.value = false
  isSubmitted.value = true
}
</script>

<template>
  <div class="signup-container">
    <!-- Main Content -->
    <main class="signup-main">
      <div class="signup-content">
        <div v-if="!isSubmitted" class="signup-form-container">
          <div class="signup-header">
            <h1 class="signup-title">Hier können Sie Interesse an TaskTiger anmelden.</h1>
            <p class="signup-subtitle">
              Seien Sie unter den Ersten, die TaskTiger erleben, wenn wir starten. Erhalten Sie
              exklusiven frühen Zugang und besondere Vorteile.
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="signup-form">
            <div class="form-group">
              <label for="email" class="form-label">E-Mail-Adresse *</label>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="form-input"
                placeholder="Geben Sie Ihre E-Mail-Adresse ein"
              />
            </div>

            <div class="form-group">
              <label for="phone" class="form-label">Telefonnummer (optional)</label>
              <input
                id="phone"
                v-model="phone"
                type="tel"
                class="form-input"
                placeholder="Geben Sie Ihre Telefonnummer ein"
              />
            </div>

            <button type="submit" :disabled="!email || isSubmitting" class="submit-btn">
              <span v-if="isSubmitting">Interesse anmelden beitreten...</span>
              <span v-else>Interesse anmelden</span>
            </button>
          </form>

          <div class="signup-benefits">
            <h3>Was Sie erhalten:</h3>
            <ul class="benefits-list">
              <li>✅ Prioritätszugang bei unserem Start</li>
              <li>✅ Exklusive Preise für frühe Nutzer</li>
              <li>✅ Direkter Feedback-Kanal zu unserem Team</li>
              <li>✅ Updates zu neuen Funktionen und Verbesserungen</li>
            </ul>
          </div>
        </div>

        <div v-else class="success-message">
          <div class="success-icon">🎉</div>
          <h2 class="success-title">Willkommen in der TaskTiger Familie!</h2>
          <p class="success-text">
            Vielen Dank, dass Sie unserer Warteliste beigetreten sind. Wir halten Sie über unseren
            Fortschritt auf dem Laufenden und benachrichtigen Sie, sobald TaskTiger verfügbar ist.
          </p>
          <router-link to="/" class="back-home-btn">Zurück zur Startseite</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.signup-container {
  font-family:
    'SF Pro Display',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f7 0%, #e8e8ea 100%);
}

/* Main Content Styles */
.signup-main {
  padding: 4rem 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.signup-content {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.signup-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.signup-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.signup-subtitle {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
}

.signup-form {
  margin-bottom: 2.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1d1d1f;
}

.form-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: #1d1d1f;
}

.form-input::placeholder {
  color: #9ca3af;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: #1d1d1f;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #333;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.signup-benefits {
  border-top: 1px solid #e5e7eb;
  padding-top: 2rem;
}

.signup-benefits h3 {
  color: #1d1d1f;
  margin-bottom: 1rem;
  font-weight: 600;
}

.benefits-list {
  list-style: none;
  padding: 0;
}

.benefits-list li {
  padding: 0.5rem 0;
  color: #666;
  display: flex;
  align-items: center;
}

.success-message {
  text-align: center;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.success-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 1rem;
}

.success-text {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.back-home-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #1d1d1f;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.back-home-btn:hover {
  background: #333;
  transform: translateY(-1px);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .signup-main {
    padding: 2rem 1rem;
  }

  .signup-content {
    padding: 2rem;
  }

  .signup-title {
    font-size: 2rem;
  }

  .signup-subtitle {
    font-size: 1rem;
  }
}
</style>
