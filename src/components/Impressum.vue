<script setup lang="ts"></script>

<template>
  <div class="impressum-page">
    <div class="impressum-container">
      <h1 class="page-title">Impressum</h1>

      <div class="impressum-content">
        <section class="impressum-section">
          <h2>Kontaktadresse</h2>
          <p>
            JP Codelabs GmbH<br />
            Im Kleinen Eschle 15<br />
            78054 Villingen-Schwenningen<br />
            Deutschland
          </p>
        </section>

        <section class="impressum-section">
          <h2>Vertreten durch</h2>
          <p>
            Geschäftsführer: Paul Dederer<br />
            Geschäftsführer: John Marco Dola
          </p>
        </section>

        <section class="impressum-section">
          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:contact.me@jpcodelabs.de">contact.me@jpcodelabs.de</a><br />
            Telefon: <a href="tel:+4915755678283">+49 1575 5678283</a>
          </p>
        </section>

        <section class="impressum-section">
          <h2>Registereintrag</h2>
          <p>
            Handelsregister: Amtsgericht Freiburg<br />
            HRB 730741
          </p>
        </section>

        <section class="impressum-section">
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE367588952
          </p>
        </section>

        <section class="impressum-section">
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Paul Dederer<br />
            John Marco Dola
          </p>
        </section>

        <section class="impressum-section">
          <h2>Plattform der EU-Kommission zur Online-Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:<br />
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"
              >https://ec.europa.eu/consumers/odr</a
            >
          </p>
        </section>

        <section class="impressum-section">
          <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <div class="impressum-note">
          <p>
            <strong>Hinweis:</strong> Dieses Impressum gilt für TonnenFuchs, betrieben durch JP
            Codelabs GmbH.
          </p>
        </div>
      </div>

      <div class="back-link">
        <router-link to="/" class="btn-back">← Zurück zur Startseite</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.impressum-page {
  font-family:
    'SF Pro Display',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  background: #f5f5f7;
  min-height: 100vh;
  padding: 2rem;
}

.impressum-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1d1d1f;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
}

.impressum-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.impressum-section {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1.5rem;
}

.impressum-section:last-of-type {
  border-bottom: none;
}

.impressum-section h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 1rem;
  letter-spacing: -0.003em;
}

.impressum-section p {
  color: #374151;
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
}

.impressum-section a {
  color: #0a84ff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.impressum-section a:hover {
  color: #409cff;
  text-decoration: underline;
}

.impressum-note {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

.impressum-note p {
  color: #374151;
  margin: 0;
  font-size: 0.9rem;
}

.impressum-note strong {
  color: #1d1d1f;
}

.back-link {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #1d1d1f;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-back:hover {
  background: #333;
  transform: translateY(-1px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .impressum-page {
    padding: 1rem;
  }

  .impressum-container {
    padding: 2rem;
  }

  .page-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .impressum-section h2 {
    font-size: 1.1rem;
  }

  .impressum-section p {
    font-size: 0.9rem;
  }
}
</style>
