<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-container">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="navbar-brand">
          <img src="/lion-icon.svg" alt="TaskTiger" class="brand-icon" />
          <span class="brand-text">TaskTiger</span>
        </router-link>

        <div class="navbar-menu">
          <a href="#services" class="navbar-item">Dienste</a>
          <a href="#how-it-works" class="navbar-item">So funktioniert's</a>
          <a href="#kontakt" class="navbar-item">Kontakt</a>
        </div>

        <div class="navbar-actions">
          <router-link to="/signup" class="navbar-btn secondary">Registrieren</router-link>
          <router-link to="/signup" class="navbar-btn primary">Registrieren</router-link>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <router-view />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
html,
body {
  margin: 0 !important;
  padding: 0 !important;
  scroll-behavior: smooth;
}

#app {
  margin: 0 !important;
  padding: 0 !important;
}
</style>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  font-family:
    'SF Pro Display',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  line-height: 1.6;
  color: #1d1d1f;
  background: #f5f5f7;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* Navbar Styles */
.navbar {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #1d1d1f;
}

.brand-icon {
  width: 71px;
  height: 71px;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1d1d1f;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-item {
  color: #1d1d1f;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
  position: relative;
}

.navbar-item:hover {
  color: #666;
}

.navbar-item:hover::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1d1d1f;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.navbar-btn.secondary {
  background: white;
  color: #1d1d1f;
  border-color: #e5e7eb;
}

.navbar-btn.secondary:hover {
  background: #f9f9f9;
  border-color: #d1d5db;
}

.navbar-btn.primary {
  background: #1d1d1f;
  color: white;
}

.navbar-btn.primary:hover {
  background: #333;
  transform: translateY(-1px);
}

/* Hero Header Styles */
.hero-header {
  text-align: center;
  padding: 5rem 2rem 3rem;
  background: linear-gradient(135deg, #f5f5f7 0%, #e8e8ea 100%);
  max-width: 100%;
  margin: 0 auto;
}

.hero-header .main-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-header .subtitle {
  font-size: 1.25rem;
  color: #666;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

.hero {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #f5f5f7;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-content {
  color: #1d1d1f;
}

.hero-title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.08;
  letter-spacing: -0.003em;
  color: #1d1d1f;
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #86868b;
  line-height: 1.47;
  font-weight: 400;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: #1d1d1f;
  font-weight: 400;
}

.feature-icon {
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  border-radius: 50%;
}

.phone-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.download-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.download-btn {
  transition: transform 0.3s ease;
  text-decoration: none;
}

.download-btn:hover {
  transform: scale(1.05);
}

.badge-content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #000;
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  min-width: 140px;
}

.badge-icon {
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.badge-icon svg {
  width: 100%;
  height: 100%;
}

.badge-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.badge-subtitle {
  font-size: 0.7rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 1px;
}

.app-store .badge-content {
  background: linear-gradient(135deg, #000 0%, #333 100%);
}

.google-play .badge-content {
  background: linear-gradient(135deg, #01875f 0%, #4285f4 100%);
}

.iphone-mockup {
  position: relative;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
}

.iphone-frame {
  width: 300px;
  height: 600px;
  background: #1a1a1a;
  border-radius: 40px;
  padding: 8px;
  position: relative;
}

.iphone-frame::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: #333;
  border-radius: 2px;
}

.iphone-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background: white;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.signal-icons {
  display: flex;
  gap: 0.5rem;
}

.chat-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.chat-title h3 {
  font-size: 1.1rem;
  font-weight: 600;
}

.online-status {
  color: #000;
  font-size: 0.8rem;
}

.chat-content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
}

.user-message {
  flex-direction: row-reverse;
}

.avatar {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.message-bubble {
  background: white;
  padding: 0.7rem 1rem;
  border-radius: 18px;
  max-width: 80%;
  font-size: 0.85rem;
  line-height: 1.4;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.user-message .message-bubble {
  background: #000;
  color: white;
}

.helper-cards {
  margin-top: 0.5rem;
}

.helper-card {
  background: white;
  border-radius: 12px;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.helper-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.helper-avatar {
  font-size: 1.5rem;
}

.helper-details {
  display: flex;
  flex-direction: column;
}

.helper-name {
  font-weight: 600;
  font-size: 0.85rem;
}

.helper-rating {
  font-size: 0.75rem;
  color: #666;
}

.helper-time {
  font-size: 0.75rem;
  color: #000;
  font-weight: 500;
}

.contact-btn {
  background: #000;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: -0.01em;
}

.contact-btn:hover {
  background: #333;
  transform: translateY(-1px);
}

.chat-input {
  display: flex;
  padding: 1rem;
  background: white;
  border-top: 1px solid #eee;
  gap: 0.5rem;
}

.chat-input input {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
}

.send-btn {
  background: #000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.how-it-works {
  background: #f5f5f7;
  padding: 5rem 2rem;
  text-align: center;
}

.how-it-works h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 600;
  color: #1d1d1f;
  letter-spacing: -0.003em;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.step {
  text-align: center;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: #000;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
}

.step h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #1d1d1f;
}

.step p {
  font-size: 1.1rem;
  line-height: 1.47;
  color: #86868b;
  font-weight: 400;
}

.footer {
  background: #f5f5f7;
  border-top: 1px solid #d2d2d7;
  color: #86868b;
  text-align: center;
  padding: 2rem;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1rem;
  }

  .navbar-menu {
    display: none;
  }

  .navbar-actions {
    gap: 0.5rem;
  }

  .navbar-btn {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .brand-text {
    font-size: 1.25rem;
  }

  .brand-icon {
    width: 71px;
    height: 71px;
  }

  .hero-header {
    padding: 3rem 1rem 2rem;
  }

  .hero-header .main-title {
    font-size: 2.5rem;
  }

  .hero-header .subtitle {
    font-size: 1.1rem;
  }

  .hero {
    padding: 2rem 1rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .iphone-frame {
    width: 250px;
    height: 500px;
  }

  .download-buttons {
    flex-direction: column;
    align-items: center;
  }

  .steps {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
