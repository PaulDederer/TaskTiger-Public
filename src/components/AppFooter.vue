<script setup lang="ts"></script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="brand-info">
            <img src="/lion-icon.svg" alt="TaskTiger" class="footer-logo" />
            <span class="footer-brand-text">TaskTiger</span>
          </div>
          <p class="footer-tagline">Schnell - Zuverlässig - Professionell.</p>
          <p class="footer-description">
            TaskTiger verbindet Sie mit echten Helfern, die Ihre Aufgaben erledigen. Einfach per
            Chat anfragen und professionelle Unterstützung erhalten.
          </p>
        </div>

        <!-- Services Section -->
        <div class="footer-section">
          <h4 class="footer-title">Dienste</h4>
          <ul class="footer-links">
            <li><a href="#haushaltsservice">Haushaltsservice</a></li>
            <li><a href="#gartenarbeit">Gartenarbeit</a></li>
            <li><a href="#handwerk">Handwerk</a></li>
            <li><a href="#umzugshilfe">Umzugshilfe</a></li>
            <li><a href="#reinigung">Reinigung</a></li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div class="footer-section" id="kontakt">
          <h4 class="footer-title">Kontakt</h4>
          <div class="contact-info">
            <p class="contact-item">
              <a href="mailto:contact.me@jpcodelabs.de" class="contact-link">
                contact.me@jpcodelabs.de
              </a>
            </p>
            <p class="contact-item">
              <a href="tel:+4915755678283" class="contact-link"> +49 1575 5678283 </a>
            </p>
          </div>
        </div>

        <!-- Company Section -->
        <div class="footer-section">
          <h4 class="footer-title">Unternehmen</h4>
          <ul class="footer-links">
            <li><a href="#ueber-uns">Über uns</a></li>
            <li><a href="#karriere">Karriere</a></li>
            <li><a href="#presse">Presse</a></li>
            <li><a href="#partner">Partner werden</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="footer-bottom">
        <div class="footer-legal">
          <router-link to="/impressum" class="legal-link">Impressum</router-link>
          <router-link to="/datenschutz" class="legal-link">Datenschutz</router-link>
        </div>

        <div class="footer-social">
          <p class="footer-copyright">© 2024 JP Codelabs GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #1d1d1f;
  color: #86868b;
  padding: 3rem 0 1.5rem;
  border-top: 1px solid #333;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2.5rem;
}

.footer-brand {
  max-width: 300px;
}

.brand-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-logo {
  width: 40px;
  height: 40px;
}

.footer-brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f5f5f7;
}

.footer-tagline {
  font-size: 1rem;
  font-weight: 600;
  color: #f5f5f7;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.footer-description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #86868b;
  margin: 0;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1rem;
  font-weight: 600;
  color: #f5f5f7;
  margin-bottom: 1.25rem;
  letter-spacing: -0.003em;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: #86868b;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  line-height: 1.4;
}

.footer-links a:hover {
  color: #f5f5f7;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  margin: 0;
  line-height: 1.4;
}

.contact-link {
  color: #86868b;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #f5f5f7;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-legal {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.legal-link {
  color: #86868b;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.legal-link:hover {
  color: #f5f5f7;
}

.footer-social {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footer-copyright {
  font-size: 0.875rem;
  color: #86868b;
  margin: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .app-footer {
    padding: 2rem 0 1rem;
  }

  .footer-container {
    padding: 0 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-brand {
    max-width: none;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .footer-legal {
    gap: 1rem;
    order: 2;
  }

  .footer-social {
    order: 1;
  }
}

@media (max-width: 480px) {
  .footer-legal {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
