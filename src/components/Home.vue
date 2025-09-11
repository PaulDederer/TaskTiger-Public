<script setup lang="ts"></script>

<template>
  <div class="home-container">
    <!-- Hero Header Section -->
    <header class="hero-header">
      <h1 class="main-title">Verwandeln Sie Ihre Wünsche in echte Hilfe</h1>
      <p class="subtitle">
        TaskTiger verbindet Sie mit echten Helfern, die Ihre Aufgaben erledigen. Einfach per Chat
        anfragen und professionelle Unterstützung erhalten.
      </p>
    </header>

    <!-- Hero Section -->
    <section id="services" class="hero">
      <div class="hero-content">
        <div class="text-content">
          <div class="features">
            <div class="feature">
              <div class="feature-icon">🤖</div>
              <span>KI-gesteuerte Aufgabenerkennung</span>
            </div>
            <div class="feature">
              <div class="feature-icon">👥</div>
              <span>Echte Helfer in Ihrer Nähe</span>
            </div>
            <div class="feature">
              <div class="feature-icon">⚡</div>
              <span>Schnelle Aufgabenerledigung</span>
            </div>
          </div>
        </div>

        <!-- iPhone Mockup with Download Icons -->
        <div class="phone-section">
          <div class="download-buttons">
            <!-- App Store Button -->
            <a href="#" class="download-btn app-store">
              <div class="badge-content">
                <div class="badge-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="badge-text">
                  <div class="badge-subtitle">Laden im</div>
                  <div class="badge-title">App Store</div>
                </div>
              </div>
            </a>

            <!-- Google Play Button -->
            <a href="#" class="download-btn google-play">
              <div class="badge-content">
                <div class="badge-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                      fill="#34A853"
                    />
                    <path
                      d="M14.54,11.15L16.81,8.88L20.16,10.81C20.5,11.08 20.75,11.5 20.75,12L17.89,14.5L14.54,11.15Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M6.05,21.34L16.81,15.12L14.54,12.85L3.84,21.85C4.25,22.05 4.75,21.99 5.16,21.64L6.05,21.34Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M6.05,2.66L14.54,11.15L17.89,9.5L20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L3.84,2.15C4.25,1.95 4.75,2.01 5.16,2.36L6.05,2.66Z"
                      fill="#4285F4"
                    />
                  </svg>
                </div>
                <div class="badge-text">
                  <div class="badge-subtitle">Jetzt bei</div>
                  <div class="badge-title">Google Play</div>
                </div>
              </div>
            </a>
          </div>

          <div class="iphone-mockup">
            <div class="iphone-frame">
              <div class="iphone-screen">
                <div class="chat-header">
                  <div class="status-bar">
                    <span class="time">14:32</span>
                    <div class="signal-icons">
                      <span class="signal">📶</span>
                      <span class="battery">🔋</span>
                    </div>
                  </div>
                  <div class="chat-title">
                    <h3>TaskTiger</h3>
                    <span class="online-status">● Online</span>
                  </div>
                </div>

                <div class="chat-content">
                  <div class="message bot-message">
                    <div class="avatar">🤖</div>
                    <div class="message-bubble">
                      Hallo! Wie kann ich Ihnen heute helfen? Ich kann Ihnen bei verschiedenen
                      Aufgaben vermitteln.
                    </div>
                  </div>

                  <div class="message user-message">
                    <div class="message-bubble">Ich brauche Hilfe beim Umzug am Samstag</div>
                  </div>

                  <div class="message bot-message">
                    <div class="avatar">🤖</div>
                    <div class="message-bubble">
                      Perfekt! Ich finde Umzugshelfer für Sie. Wie viele Stunden benötigen Sie und
                      welche Uhrzeit passt Ihnen?
                    </div>
                  </div>

                  <div class="message user-message">
                    <div class="message-bubble">4 Stunden, ab 9:00 Uhr morgens</div>
                  </div>

                  <div class="message bot-message">
                    <div class="avatar">🤖</div>
                    <div class="message-bubble">
                      Ich habe 2 verfügbare Umzugshelfer gefunden. Soll ich den Termin für Samstag
                      9:00-13:00 Uhr buchen?
                    </div>
                  </div>

                  <div class="helper-cards">
                    <div class="helper-card">
                      <div class="helper-info">
                        <div class="helper-avatar">📦</div>
                        <div class="helper-details">
                          <span class="helper-name">Stefan K.</span>
                          <span class="helper-rating">⭐ 4.8</span>
                          <span class="helper-time">Sa. 9:00-13:00</span>
                        </div>
                      </div>
                      <button class="contact-btn">Buchen</button>
                    </div>
                  </div>
                </div>

                <div class="chat-input">
                  <input type="text" placeholder="Nachricht eingeben..." />
                  <button class="send-btn">📤</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works Section -->
    <section id="how-it-works" class="how-it-works">
      <h2>So einfach funktioniert's</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Aufgabe beschreiben</h3>
          <p>Teilen Sie uns einfach mit, wobei Sie Hilfe benötigen</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Helfer finden</h3>
          <p>Unser KI-System findet passende Helfer in Ihrer Nähe</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Aufgabe erledigen</h3>
          <p>Lehnen Sie sich zurück und lassen Sie die Profis arbeiten</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 TaskTiger. Powered by JP Codelabs GmbH.</p>
    </footer>
  </div>
</template>

<style scoped>
.home-container {
  background: #f5f5f7;
  scroll-behavior: smooth;
}

/* Add smooth scrolling to all elements */
* {
  scroll-behavior: smooth;
}

/* Adjust scroll positioning to account for sticky navbar */
#services,
#how-it-works {
  scroll-margin-top: 100px;
}

/* Hero Header Styles */
.hero-header {
  text-align: center;
  padding: 5rem 2rem 3rem;
  background: linear-gradient(135deg, #f5f5f7 0%, #e8e8ea 100%);
  max-width: 1200px;
  margin: 0 auto;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.subtitle {
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
  .hero-header {
    padding: 3rem 1rem 2rem;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .hero {
    padding: 2rem 1rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
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
