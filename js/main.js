/**
 * main.js — Logique du portfolio
 * Gestion : preloader, i18n, rendu dynamique, 3D card flip & live preview, formulaires mailto
 */

(function () {
  "use strict";

  /* ── État global ── */
  let currentLang = readStorage("portfolio-lang") || "fr";

  function readStorage(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function writeStorage(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* stockage indisponible */ }
  }

  /* ── Utilitaires ── */
  function t(key) {
    return translations[currentLang][key] || translations.fr[key] || key;
  }

  function getLocalized(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[currentLang] || obj.fr || "";
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ══════════════════════════════════════
     PRELOADER — boot terminal (< 1,5 s)
  ══════════════════════════════════════ */
  function initPreloader() {
    const preloader = document.getElementById("preloader");
    const textEl = document.getElementById("preloader-text");
    if (!preloader || !textEl) return;

    const initText = t("preloader_init");
    const readyText = t("preloader_ready");
    let charIndex = 0;
    const typeSpeed = 35;

    function typeChar() {
      if (charIndex < initText.length) {
        textEl.textContent += initText[charIndex];
        charIndex++;
        setTimeout(typeChar, typeSpeed);
      } else {
        setTimeout(() => {
          textEl.textContent = readyText;
          preloader.classList.add("preloader--done");
          document.body.classList.remove("is-loading");
          setTimeout(() => {
            preloader.remove();
          }, 500);
        }, 400);
      }
    }

    document.body.classList.add("is-loading");
    setTimeout(typeChar, 200);
  }

  /* ══════════════════════════════════════
     THÈME SOMBRE / CLAIR
  ══════════════════════════════════════ */
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function updateThemeButton() {
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-label", currentTheme() === "dark" ? t("aria_theme_light") : t("aria_theme_dark"));
  }

  function initTheme() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      writeStorage("portfolio-theme", next);
      updateThemeButton();
    });
    updateThemeButton();
  }

  /* ══════════════════════════════════════
     INTERNATIONALISATION
  ══════════════════════════════════════ */
  function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", t(key));
    });

    updateThemeButton();
    renderDynamicContent();
  }

  function toggleLanguage() {
    currentLang = currentLang === "fr" ? "en" : "fr";
    writeStorage("portfolio-lang", currentLang);

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.classList.add("lang-toggle--switching");
      setTimeout(() => toggle.classList.remove("lang-toggle--switching"), 400);
    }

    applyTranslations();
  }

  /* ══════════════════════════════════════
     RENDU DYNAMIQUE depuis data.js
  ══════════════════════════════════════ */
  function renderDynamicContent() {
    const { personal, hero, about } = portfolioData;

    /* Hero */
    const heroTitle = document.getElementById("hero-title");
    const heroTagline = document.getElementById("hero-tagline");
    const heroCvBtn = document.getElementById("hero-cv-btn");
    const profileImg = document.getElementById("profile-img");

    if (heroTitle) heroTitle.textContent = getLocalized(personal.title);
    if (heroTagline) heroTagline.textContent = getLocalized(hero.tagline);
    if (heroCvBtn) heroCvBtn.href = personal.cvPath;
    if (profileImg) profileImg.alt = getLocalized(hero.profileAlt);

    /* About */
    const aboutText = document.getElementById("about-text");
    if (aboutText) aboutText.textContent = getLocalized(about);

    /* Contact info */
    const locationDisplay = document.getElementById("contact-location-display");
    if (locationDisplay) locationDisplay.textContent = getLocalized(personal.location);

    renderTimeline();
    renderTraining();
    renderSkills();
    renderProjects();
    renderExperience("experience-list", portfolioData.experience);
    renderExperience("engagement-list", portfolioData.engagement);
    renderExperience("events-list", portfolioData.events);
    renderInterests();
    renderPosts();
    renderCertificates();
    observeRevealElements();
  }

  function renderTimeline() {
    const container = document.getElementById("timeline-academic");
    if (!container) return;

    container.innerHTML = portfolioData.academicEducation
      .map(
        (item, i) => `
        <article class="timeline__item reveal" style="--stagger: ${i}">
          <div class="timeline__marker" aria-hidden="true"></div>
          <div class="timeline__content card">
            <time class="timeline__period mono">${escapeHtml(getLocalized(item.period))}</time>
            <h4 class="timeline__degree">${escapeHtml(getLocalized(item.degree))}</h4>
            <p class="timeline__institution mono">${escapeHtml(getLocalized(item.institution))}</p>
            ${getLocalized(item.detail) ? `<p class="timeline__detail">${escapeHtml(getLocalized(item.detail))}</p>` : ""}
          </div>
        </article>
      `
      )
      .join("");
  }

  function renderTraining() {
    const container = document.getElementById("training-complementary");
    if (!container) return;

    container.innerHTML = portfolioData.complementaryTraining
      .map(
        (item, i) => `
        <article class="training-card card reveal" style="--stagger: ${i}">
          <div class="training-card__header">
            <h4 class="training-card__title">${escapeHtml(getLocalized(item.title))}</h4>
            <span class="badge badge--${item.status === "completed" ? "completed" : "progress"}">
              <span class="badge__dot badge__dot--pulse"></span>
              ${item.status === "completed" ? t("status_completed") : t("status_in_progress")}
            </span>
          </div>
          <p class="training-card__provider mono">${escapeHtml(getLocalized(item.provider))}</p>
          <p class="training-card__date mono">${escapeHtml(getLocalized(item.date))}</p>
        </article>
      `
      )
      .join("");
  }

  function renderSkills() {
    const container = document.getElementById("skills-grid");
    if (!container) return;

    const categories = Object.values(portfolioData.skills);

    container.innerHTML = categories
      .map(
        (cat, catIndex) => `
        <div class="skills-category reveal" style="--stagger: ${catIndex}">
          <h3 class="skills-category__title mono">${escapeHtml(t(cat.labelKey))}</h3>
          <ul class="skills-category__list">
            ${cat.items
              .map(
                (skill, i) =>
                  `<li class="skill-chip" style="--chip-delay: ${i * 0.04}s">${escapeHtml(skill)}</li>`
              )
              .join("")}
          </ul>
        </div>
      `
      )
      .join("");
  }

  /* Status Chips */
  function getStatusBadge(project) {
    const badges = [];

    if (project.badge) {
      badges.push(`<span class="badge badge--hackathon">🏆 ${escapeHtml(project.badge)}</span>`);
    }

    if (project.note) {
      badges.push(`<span class="badge badge--note">${escapeHtml(getLocalized(project.note))}</span>`);
    }

    if (project.status === "completed") {
      badges.push(`
        <span class="badge badge--completed">
          <span class="badge__dot badge__dot--pulse" aria-hidden="true"></span>
          ${t("status_completed")}
        </span>
      `);
    } else if (project.status === "in_progress") {
      badges.push(`
        <span class="badge badge--progress">
          <span class="badge__dot badge__dot--pulse" aria-hidden="true"></span>
          ${t("status_in_progress")}
        </span>
      `);
    } else if (project.status === "idea") {
      badges.push(`
        <span class="badge badge--idea">
          <span class="badge__dot badge__dot--pulse" aria-hidden="true"></span>
          ${t("status_idea")}
        </span>
      `);
    }

    if (project.confidential) {
      badges.push(`
        <span class="badge badge--confidential">
          <svg class="badge__lock" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          ${t("status_confidential")}
        </span>
      `);
    }

    return badges.join("");
  }

  /* ══════════════════════════════════════
     PROJETS — Rendu 3D Flip & Preview
  ══════════════════════════════════════ */
  function renderProjects() {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    container.innerHTML = portfolioData.projects
      .map((project, i) => {
        const hasLink = project.links && project.links.demo && project.links.demo.trim() !== "";
        const demoUrl = hasLink ? project.links.demo : "";

        return `
        <article class="project-card reveal" style="--stagger: ${i}" data-project="${project.id}">
          <div class="project-card__perspective">
            <div class="project-card__flipper">

              <!-- FACE AVANT (Standard Card) -->
              <div class="project-card__face project-card__front">
                <div class="project-card__window">
                  <div class="project-card__titlebar">
                    <div class="project-card__dots" aria-hidden="true">
                      <span></span><span></span><span></span>
                    </div>
                    <span class="project-card__filename mono">${escapeHtml(project.filename)}</span>
                    <div class="project-card__badges">${getStatusBadge(project)}</div>
                  </div>

                  <div class="project-card__body">
                    ${
                      project.stack && project.stack.length
                        ? `<div class="project-card__stack">${project.stack
                            .map((s) => `<span class="stack-tag mono">${escapeHtml(s)}</span>`)
                            .join("")}</div>`
                        : ""
                    }
                    <h3 class="project-card__name">${escapeHtml(getLocalized(project.title))}</h3>
                    <p class="project-card__desc">${escapeHtml(getLocalized(project.description))}</p>
                  </div>

                  <div class="project-card__actions">
                    <button type="button" class="btn-flip-trigger btn-action btn-action--flip mono" title="${t("flip_preview")}">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span>${t("flip_preview")}</span>
                    </button>

                    ${
                      hasLink
                        ? `
                        <button type="button" class="btn-copy-link btn-action mono" data-url="${escapeHtml(demoUrl)}" title="${t("copy_link")}">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                          <span class="copy-text">${t("copy_link")}</span>
                        </button>

                        <a href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-action btn-action--primary mono">
                          <span>${t("open_project")}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      `
                        : `
                        <span class="no-link-tag mono">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          ${t("demo_soon")}
                        </span>
                      `
                    }
                  </div>
                </div>
              </div>

              <!-- FACE ARRIÈRE (Live Preview / Technical Mockup) -->
              <div class="project-card__face project-card__back">
                <div class="project-card__window project-card__window--back">
                  <div class="project-card__titlebar">
                    <div class="project-card__dots" aria-hidden="true">
                      <span></span><span></span><span></span>
                    </div>
                    <span class="project-card__filename mono">
                      ${hasLink ? `preview://${escapeHtml(demoUrl.replace("https://", ""))}` : `mockup://${project.id}.view`}
                    </span>
                    <button type="button" class="btn-flip-back btn-close-flip" title="Fermer l'aperçu">
                      ✕
                    </button>
                  </div>

                  <div class="project-card__preview-body">
                    ${
                      hasLink
                        ? `
                        <div class="preview-iframe-wrapper">
                          <iframe
                            src="${escapeHtml(demoUrl)}"
                            title="Aperçu ${escapeHtml(getLocalized(project.title))}"
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin"
                          ></iframe>
                          <div class="preview-overlay">
                            <a href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm mono">
                              ${t("open_project")} ↗
                            </a>
                          </div>
                        </div>
                      `
                        : `
                        <div class="preview-mockup-fallback">
                          <div class="mockup-icon" aria-hidden="true">⚡</div>
                          <h4 class="mockup-title mono">${escapeHtml(getLocalized(project.title))}</h4>
                          <p class="mockup-desc">${escapeHtml(getLocalized(project.description))}</p>
                          <div class="mockup-badge-row">${getStatusBadge(project)}</div>
                          <p class="mockup-note mono">⚙️ ${t("demo_soon")}</p>
                        </div>
                      `
                    }
                  </div>

                  <div class="project-card__actions project-card__actions--back">
                    <button type="button" class="btn-flip-back btn-action mono">
                      ← ${currentLang === "fr" ? "Retour" : "Back"}
                    </button>
                    ${
                      hasLink
                        ? `
                        <button type="button" class="btn-copy-link btn-action mono" data-url="${escapeHtml(demoUrl)}">
                          <span class="copy-text">${t("copy_link")}</span>
                        </button>
                        <a href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-action btn-action--primary mono">
                          ${t("open_project")} ↗
                        </a>
                      `
                        : ""
                    }
                  </div>
                </div>
              </div>

            </div>
          </div>
        </article>
      `;
      })
      .join("");

    initProjectEvents();
  }

  /* Interactivité des cartes projets (Flip & Copier le lien) */
  function initProjectEvents() {
    // Boutons de Flip
    document.querySelectorAll(".btn-flip-trigger, .btn-flip-back").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const card = btn.closest(".project-card");
        if (card) {
          card.classList.toggle("is-flipped");
        }
      });
    });

    // Boutons Copier le lien
    document.querySelectorAll(".btn-copy-link").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const url = btn.getAttribute("data-url");
        if (!url) return;

        try {
          await navigator.clipboard.writeText(url);
          const copyTextEl = btn.querySelector(".copy-text");
          const originalText = copyTextEl ? copyTextEl.textContent : "";

          if (copyTextEl) {
            copyTextEl.textContent = t("link_copied");
          }
          btn.classList.add("btn-action--copied");

          setTimeout(() => {
            if (copyTextEl) copyTextEl.textContent = originalText;
            btn.classList.remove("btn-action--copied");
          }, 2000);
        } catch (err) {
          console.error("Échec de la copie : ", err);
        }
      });
    });
  }

  function renderExperience(containerId, entries) {
    const container = document.getElementById(containerId);
    if (!container || !entries) return;

    container.innerHTML = entries
      .map(
        (exp, i) => `
        <article class="experience-card card reveal" style="--stagger: ${i}">
          <div class="experience-card__header">
            <h3 class="experience-card__role mono">${escapeHtml(getLocalized(exp.role))}</h3>
            <time class="experience-card__period mono">${escapeHtml(getLocalized(exp.period))}</time>
          </div>
          <p class="experience-card__company">
            <span class="experience-card__at mono">${t("experience_at")}</span>
            ${escapeHtml(exp.company)}
          </p>
          <p class="experience-card__desc">${escapeHtml(getLocalized(exp.description))}</p>
        </article>
      `
      )
      .join("");
  }

  function renderInterests() {
    const container = document.getElementById("interests-grid");
    if (!container) return;

    container.innerHTML = portfolioData.interests
      .map(
        (interest, i) => `
        <div class="interest-item reveal" style="--stagger: ${i}">
          <span class="interest-item__icon" aria-hidden="true">${interest.icon}</span>
          <span class="interest-item__label">${escapeHtml(getLocalized(interest))}</span>
        </div>
      `
      )
      .join("");
  }

  /* ══════════════════════════════════════
     PAGE ACTUALITÉS — publications LinkedIn et attestations
  ══════════════════════════════════════ */
  function hasNews() {
    return typeof actualitesData !== "undefined";
  }

  /* Transforme le lien d'une publication LinkedIn en adresse d'intégration */
  function linkedinEmbedUrl(url) {
    const match = String(url).match(/(?:activity|share|ugcPost)[:-](\d{15,})/);
    if (!match) return "";
    const kind = /share[:-]\d/.test(url) ? "share" : /ugcPost[:-]\d/.test(url) ? "ugcPost" : "activity";
    return `https://www.linkedin.com/embed/feed/update/urn:li:${kind}:${match[1]}`;
  }

  function renderPosts() {
    const container = document.getElementById("posts-grid");
    if (!container || !hasNews()) return;
    const posts = (actualitesData.posts || []).filter((url) => String(url).trim() !== "");
    const count = document.getElementById("count-posts");
    if (count) count.textContent = posts.length;

    if (!posts.length) {
      container.innerHTML = `<p class="news-empty mono">${t("news_empty_posts")}</p>`;
      return;
    }

    container.innerHTML = posts
      .map((url, i) => {
        const embed = linkedinEmbedUrl(url);
        return `
        <article class="post-card reveal" style="--stagger: ${i % 4}">
          <div class="project-card__window">
            <div class="project-card__titlebar">
              <div class="project-card__dots" aria-hidden="true"><span></span><span></span><span></span></div>
              <span class="project-card__filename mono">linkedin.com/post</span>
            </div>
            ${embed ? `<div class="post-card__embed"><iframe src="${escapeHtml(embed)}" title="${t("news_tab_posts")} ${i + 1}" loading="lazy" allowfullscreen></iframe></div>` : ""}
            <div class="project-card__actions">
              <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="btn-action btn-action--primary mono">
                <span>${t("news_view_post")}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </div>
          </div>
        </article>`;
      })
      .join("");
  }

  function renderCertificates() {
    const container = document.getElementById("certificates-grid");
    if (!container || !hasNews()) return;
    const items = actualitesData.certificates || [];
    const count = document.getElementById("count-certificates");
    if (count) count.textContent = items.length;

    if (!items.length) {
      container.innerHTML = `<p class="news-empty mono">${t("news_empty_certificates")}</p>`;
      return;
    }

    container.innerHTML = items
      .map(
        (cert, i) => `
        <article class="certificate-card card reveal" style="--stagger: ${i % 4}">
          ${cert.image ? `<button type="button" class="certificate-card__preview" data-cert="${i}"><img src="${escapeHtml(cert.image)}" alt="${escapeHtml(getLocalized(cert.title))}" loading="lazy"></button>` : ""}
          <h4 class="training-card__title">${escapeHtml(getLocalized(cert.title))}</h4>
          <p class="training-card__provider mono">${escapeHtml(getLocalized(cert.issuer))}</p>
          <p class="training-card__date mono">${escapeHtml(getLocalized(cert.date))}</p>
          ${cert.file ? `<a href="${escapeHtml(cert.file)}" target="_blank" rel="noopener noreferrer" class="btn-action mono certificate-card__file">${t("news_view_file")} ↗</a>` : ""}
        </article>`
      )
      .join("");
  }

  /* Onglets Publications / Attestations */
  function initTabs() {
    const buttons = document.querySelectorAll(".tabs__btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-selected", String(active));
          const panel = document.getElementById(b.getAttribute("aria-controls"));
          if (panel) panel.hidden = !active;
        });
        document.querySelectorAll(".tabs__panel:not([hidden]) .reveal").forEach((el) => el.classList.add("is-visible"));
      });
    });
  }

  /* Visionneuse des attestations */
  function initLightbox() {
    const box = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    if (!box || !img || !hasNews()) return;

    const close = () => {
      box.hidden = true;
      img.removeAttribute("src");
      document.body.classList.remove("nav-open");
    };

    document.addEventListener("click", (e) => {
      const cert = e.target.closest(".certificate-card__preview");
      if (!cert) return;
      img.src = actualitesData.certificates[Number(cert.dataset.cert)].image;
      box.hidden = false;
      document.body.classList.add("nav-open");
    });
    document.getElementById("lightbox-close").addEventListener("click", close);
    box.addEventListener("click", (e) => { if (e.target === box) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !box.hidden) close(); });
  }

  /* ══════════════════════════════════════
     FORMULAIRES → mailto:
  ══════════════════════════════════════ */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) return;

      const subject = encodeURIComponent(
        currentLang === "fr"
          ? `Contact portfolio — ${name}`
          : `Portfolio contact — ${name}`
      );
      const body = encodeURIComponent(
        `${currentLang === "fr" ? "Nom" : "Name"}: ${name}\nEmail: ${email}\n\n${message}`
      );

      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    });
  }

  function initGuestbookForm() {
    const form = document.getElementById("guestbook-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("guestbook-name").value.trim();
      const message = document.getElementById("guestbook-message").value.trim();

      if (!name || !message) return;

      const subject = encodeURIComponent("Nouveau mot laissé sur le portfolio");
      const body = encodeURIComponent(
        `${currentLang === "fr" ? "De" : "From"}: ${name}\n\n${message}`
      );

      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    });
  }

  /* ══════════════════════════════════════
     NAVIGATION
  ══════════════════════════════════════ */
  function initNavigation() {
    const header = document.getElementById("header");
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav__link");

    let lastScroll = 0;
    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;
        if (header) {
          header.classList.toggle("header--scrolled", scrollY > 60);
        }
        lastScroll = scrollY;
      },
      { passive: true }
    );

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        menu.classList.toggle("nav__menu--open");
        document.body.classList.toggle("nav-open");
        toggle.setAttribute(
          "aria-label",
          expanded ? t("aria_menu") : t("aria_close")
        );
      });

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          toggle.setAttribute("aria-expanded", "false");
          menu.classList.remove("nav__menu--open");
          document.body.classList.remove("nav-open");
        });
      });
    }

    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      langToggle.addEventListener("click", toggleLanguage);
    }
  }

  /* ══════════════════════════════════════
     BOUTON RETOUR EN HAUT
  ══════════════════════════════════════ */
  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      () => {
        btn.classList.toggle("back-to-top--visible", window.scrollY > 500);
      },
      { passive: true }
    );

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ══════════════════════════════════════
     GRILLE PARALLAXE
  ══════════════════════════════════════ */
  function initParallaxGrid() {
    const grid = document.getElementById("bg-grid");
    if (!grid) return;

    window.addEventListener(
      "scroll",
      () => {
        const offset = window.scrollY * 0.15;
        grid.style.transform = `translateY(${offset}px)`;
      },
      { passive: true }
    );
  }

  /* ══════════════════════════════════════
     TIMELINE — ligne animée au scroll
  ══════════════════════════════════════ */
  function initTimelineAnimation() {
    const timeline = document.querySelector(".timeline");
    if (!timeline) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline--animated");
          }
        });
      },
      { threshold: 0.2 }
    );

    const checkTimeline = () => {
      const tl = document.querySelector(".timeline");
      if (tl) observer.observe(tl);
    };
    checkTimeline();
  }

  /* ══════════════════════════════════════
     INTERSECTION OBSERVER — reveal
  ══════════════════════════════════════ */
  let revealObserver = null;

  function observeRevealElements() {
    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stagger = entry.target.style.getPropertyValue("--stagger") || 0;
            entry.target.style.transitionDelay = `${Number(stagger) * 0.1}s`;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      revealObserver.observe(el);
    });

    initTimelineAnimation();
  }

  /* ══════════════════════════════════════
     FOOTER — année dynamique
  ══════════════════════════════════════ */
  function initFooter() {
    const yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* ══════════════════════════════════════
     IMAGE DE PROFIL — fallback placeholder
  ══════════════════════════════════════ */
  function initProfileImage() {
    const img = document.getElementById("profile-img");
    if (!img) return;

    img.addEventListener("error", () => {
      img.src = "assets/img/profile-placeholder.svg";
      img.classList.add("profile-frame__img--placeholder");
    });
  }

  /* ══════════════════════════════════════
     INIT
  ══════════════════════════════════════ */
  function init() {
    initFooter();
    initTheme();
    applyTranslations();
    initPreloader();
    initNavigation();
    initBackToTop();
    initParallaxGrid();
    initContactForm();
    initGuestbookForm();
    initProfileImage();
    initTabs();
    initLightbox();
    observeRevealElements();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
