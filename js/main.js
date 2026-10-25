/**
 * main.js — Logique du portfolio
 * Gestion : preloader, thème, i18n, rendu dynamique, aperçu des projets, formulaires mailto
 */

(function () {
  "use strict";

  /* ── État global ── */
  let currentLang = readStorage("portfolio-lang") || "fr";

  /* ── Utilitaires ── */
  function readStorage(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function writeStorage(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* stockage indisponible */ }
  }

  function t(key) {
    return translations[currentLang][key] || translations.fr[key] || key;
  }

  function getLocalized(obj) {
    if (!obj) return "";
    if (typeof obj === "string" || Array.isArray(obj)) return obj;
    return obj[currentLang] || obj.fr || "";
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ══════════════════════════════════════
     PRELOADER — démarrage court (< 1,2 s)
  ══════════════════════════════════════ */
  function initPreloader() {
    const preloader = document.getElementById("preloader");
    const textEl = document.getElementById("preloader-text");
    if (!preloader || !textEl) return;

    const initText = t("preloader_init");
    let charIndex = 0;

    function typeChar() {
      if (charIndex < initText.length) {
        textEl.textContent += initText[charIndex];
        charIndex++;
        setTimeout(typeChar, 28);
      } else {
        setTimeout(() => {
          textEl.textContent = t("preloader_ready");
          preloader.classList.add("preloader--done");
          document.body.classList.remove("is-loading");
          setTimeout(() => preloader.remove(), 500);
        }, 250);
      }
    }

    document.body.classList.add("is-loading");
    setTimeout(typeChar, 150);
  }

  /* ══════════════════════════════════════
     THÈME CLAIR / SOMBRE
  ══════════════════════════════════════ */
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function updateThemeButton() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.setAttribute("aria-label", currentTheme() === "dark" ? t("aria_theme_light") : t("aria_theme_dark"));
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", currentTheme() === "dark" ? "#0c121c" : "#f1f4f8");
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
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    updateThemeButton();
    renderDynamicContent();
  }

  function toggleLanguage() {
    currentLang = currentLang === "fr" ? "en" : "fr";
    writeStorage("portfolio-lang", currentLang);
    applyTranslations();
    // Le contenu re-rendu s'affiche tout de suite, sans rejouer l'apparition
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  /* ══════════════════════════════════════
     RENDU DYNAMIQUE depuis data.js
  ══════════════════════════════════════ */
  function renderDynamicContent() {
    const { personal, hero, about } = portfolioData;

    const heroTitle = document.getElementById("hero-title");
    const heroTagline = document.getElementById("hero-tagline");
    const heroCvBtn = document.getElementById("hero-cv-btn");
    const profileImg = document.getElementById("profile-img");

    if (heroTitle) heroTitle.textContent = getLocalized(personal.title);
    if (heroTagline) heroTagline.textContent = getLocalized(hero.tagline);
    if (heroCvBtn) heroCvBtn.href = personal.cvPath;
    if (profileImg) profileImg.alt = getLocalized(hero.profileAlt);

    const aboutText = document.getElementById("about-text");
    if (aboutText) {
      aboutText.innerHTML = getLocalized(about)
        .map((p) => `<p class="about__text">${escapeHtml(p)}</p>`)
        .join("");
    }

    ["contact-location-display", "profile-location"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = getLocalized(personal.location);
    });

    renderStats();
    renderEntries("experience-list", portfolioData.experience);
    renderProjects();
    renderEntries("engagement-list", portfolioData.engagement);
    renderEvents();
    renderSkills();
    renderLanguages();
    renderInterests();
    renderTimeline();
    renderTraining();
    renderPosts();
    renderCertificates();
    observeRevealElements();
  }

  function renderStats() {
    const container = document.getElementById("stats");
    if (!container) return;

    container.innerHTML = portfolioData.stats
      .map(
        (stat) => `
        <div class="stats__item">
          <dt class="stats__value">${escapeHtml(stat.value)}</dt>
          <dd class="stats__label">${escapeHtml(getLocalized(stat.label))}</dd>
        </div>
      `
      )
      .join("");
  }

  /* Expérience et engagement partagent le même gabarit */
  function renderEntries(containerId, entries) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = entries
      .map(
        (entry, i) => `
        <article class="entry reveal" style="--stagger: ${i}">
          <div class="entry__head">
            <h3 class="entry__role">${escapeHtml(getLocalized(entry.role))}</h3>
            <time class="entry__period mono">${escapeHtml(getLocalized(entry.period))}</time>
          </div>
          <p class="entry__company">${escapeHtml(getLocalized(entry.company))}</p>
          <ul class="entry__bullets">
            ${getLocalized(entry.bullets).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
          </ul>
          ${
            entry.stack && entry.stack.length
              ? `<div class="tag-row">${entry.stack.map((s) => `<span class="stack-tag mono">${escapeHtml(s)}</span>`).join("")}</div>`
              : ""
          }
        </article>
      `
      )
      .join("");
  }

  function renderEvents() {
    const container = document.getElementById("events-list");
    if (!container) return;

    container.innerHTML = portfolioData.events
      .map(
        (ev, i) => `
        <li class="event reveal" style="--stagger: ${i}">
          <div class="event__meta mono">
            <time>${escapeHtml(getLocalized(ev.period))}</time>
            <span class="event__status event__status--${ev.status}">${ev.status === "upcoming" ? t("event_upcoming") : t("event_done")}</span>
          </div>
          <div class="event__body">
            <h4 class="event__title">${escapeHtml(getLocalized(ev.title))}</h4>
            <p class="event__role mono">${escapeHtml(getLocalized(ev.role))} · ${escapeHtml(getLocalized(ev.place))}</p>
            <p class="event__text">${escapeHtml(getLocalized(ev.text))}</p>
          </div>
        </li>
      `
      )
      .join("");
  }

  function renderTimeline() {
    const container = document.getElementById("timeline-academic");
    if (!container) return;

    container.innerHTML = portfolioData.academicEducation
      .map(
        (item, i) => `
        <article class="timeline__item reveal" style="--stagger: ${i}">
          <div class="timeline__marker" aria-hidden="true"></div>
          <div class="timeline__content">
            <time class="timeline__period mono">${escapeHtml(getLocalized(item.period))}</time>
            <h4 class="timeline__degree">${escapeHtml(getLocalized(item.degree))}</h4>
            <p class="timeline__institution">${escapeHtml(getLocalized(item.institution))}</p>
            ${item.highlight ? `<p class="timeline__highlight mono">★ ${escapeHtml(getLocalized(item.highlight))}</p>` : ""}
            ${item.detail ? `<p class="timeline__detail">${escapeHtml(getLocalized(item.detail))}</p>` : ""}
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
        <article class="training-card reveal" style="--stagger: ${i}">
          <div class="training-card__header">
            <h4 class="training-card__title">${escapeHtml(getLocalized(item.title))}</h4>
            <span class="badge badge--${item.status === "completed" ? "completed" : "progress"}">
              <span class="badge__dot"></span>
              ${item.status === "completed" ? t("status_completed") : t("status_in_progress")}
            </span>
          </div>
          <p class="training-card__provider">${escapeHtml(getLocalized(item.provider))}</p>
          <p class="training-card__date mono">${escapeHtml(getLocalized(item.date))}</p>
        </article>
      `
      )
      .join("");
  }

  function renderSkills() {
    const container = document.getElementById("skills-grid");
    if (!container) return;

    container.innerHTML = portfolioData.skills
      .map(
        (cat, catIndex) => `
        <div class="skills-category reveal" style="--stagger: ${catIndex}">
          <h3 class="skills-category__title mono">${escapeHtml(getLocalized(cat.label))}</h3>
          <ul class="skills-category__list">
            ${cat.items.map((skill) => `<li class="skill-chip">${escapeHtml(getLocalized(skill))}</li>`).join("")}
          </ul>
        </div>
      `
      )
      .join("");
  }

  function renderLanguages() {
    const container = document.getElementById("languages-list");
    if (!container) return;

    container.innerHTML = portfolioData.languages
      .map(
        (lang) => `
        <li class="lang-list__item">
          <span class="lang-list__name">${escapeHtml(getLocalized(lang.name))}</span>
          <span class="lang-list__level mono">${escapeHtml(getLocalized(lang.level))}</span>
        </li>
      `
      )
      .join("");
  }

  function renderInterests() {
    const container = document.getElementById("interests-grid");
    if (!container) return;

    container.innerHTML = portfolioData.interests
      .map(
        (interest) => `
        <li class="interest-item">
          <span class="interest-item__icon" aria-hidden="true">${interest.icon}</span>
          <span>${escapeHtml(getLocalized(interest))}</span>
        </li>
      `
      )
      .join("");
  }

  /* ══════════════════════════════════════
     PAGE ACTUALITÉS — publications et attestations
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
      container.innerHTML = `<p class="news-empty">${t("news_empty_posts")}</p>`;
      return;
    }

    container.innerHTML = posts
      .map((url, i) => {
        const embed = linkedinEmbedUrl(url);
        return `
        <article class="post-card reveal" style="--stagger: ${i % 4}">
          ${
            embed
              ? `<div class="post-card__embed"><iframe src="${escapeHtml(embed)}" title="${t("news_tab_posts")} ${i + 1}" loading="lazy" allowfullscreen></iframe></div>`
              : ""
          }
          <div class="post-card__footer">
            <span class="post-card__meta mono">LinkedIn</span>
            <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="btn-action btn-action--primary mono"><span>${t("news_view_post")}</span>${ICON_ARROW}</a>
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
      container.innerHTML = `<p class="news-empty">${t("news_empty_certificates")}</p>`;
      return;
    }

    container.innerHTML = items
      .map(
        (cert, i) => `
        <article class="certificate-card reveal" style="--stagger: ${i % 4}">
          ${cert.image ? `<button type="button" class="certificate-card__preview" data-cert="${i}"><img src="${escapeHtml(cert.image)}" alt="${escapeHtml(getLocalized(cert.title))}" loading="lazy"></button>` : ""}
          <div class="certificate-card__body">
            <h2 class="certificate-card__title">${escapeHtml(getLocalized(cert.title))}</h2>
            <p class="certificate-card__issuer">${escapeHtml(getLocalized(cert.issuer))}</p>
            <p class="certificate-card__date mono">${escapeHtml(getLocalized(cert.date))}</p>
            ${cert.file ? `<a href="${escapeHtml(cert.file)}" target="_blank" rel="noopener noreferrer" class="btn-action mono">${t("news_view_file")} ${ICON_ARROW}</a>` : ""}
          </div>
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

    let images = [];
    let index = 0;

    const show = () => {
      img.src = images[index];
      box.classList.toggle("lightbox--single", images.length < 2);
    };
    const open = (list, start) => {
      images = list;
      index = start;
      show();
      box.hidden = false;
      document.body.classList.add("nav-open");
    };
    const close = () => {
      box.hidden = true;
      img.removeAttribute("src");
      document.body.classList.remove("nav-open");
    };
    const step = (d) => {
      index = (index + d + images.length) % images.length;
      show();
    };

    document.addEventListener("click", (e) => {
      const cert = e.target.closest(".certificate-card__preview");
      if (cert) open([actualitesData.certificates[Number(cert.dataset.cert)].image], 0);
    });

    document.getElementById("lightbox-close").addEventListener("click", close);
    document.getElementById("lightbox-prev").addEventListener("click", () => step(-1));
    document.getElementById("lightbox-next").addEventListener("click", () => step(1));
    box.addEventListener("click", (e) => { if (e.target === box) close(); });
    document.addEventListener("keydown", (e) => {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  /* Pastilles de statut */
  function getStatusBadge(project) {
    const badges = [];
    const statusLabel = {
      completed: t("status_completed"),
      in_progress: t("status_in_progress"),
      idea: t("status_idea")
    }[project.status];
    const statusClass = { completed: "completed", in_progress: "progress", idea: "idea" }[project.status];

    if (statusLabel) {
      badges.push(`<span class="badge badge--${statusClass}"><span class="badge__dot" aria-hidden="true"></span>${statusLabel}</span>`);
    }
    if (project.badge) {
      badges.push(`<span class="badge badge--note">${escapeHtml(getLocalized(project.badge))}</span>`);
    }
    if (project.confidential) {
      badges.push(`<span class="badge badge--confidential">${t("status_confidential")}</span>`);
    }
    return badges.join("");
  }

  /* ══════════════════════════════════════
     PROJETS — carte et aperçu en direct
  ══════════════════════════════════════ */
  const ICON_EYE = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
  const ICON_COPY = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
  const ICON_ARROW = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;

  function renderProjects() {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    container.innerHTML = portfolioData.projects
      .map((project, i) => {
        const demoUrl = (project.links && project.links.demo || "").trim();
        const repoUrl = (project.links && project.links.repo || "").trim();
        const hasDemo = demoUrl !== "";
        const title = escapeHtml(getLocalized(project.title));

        let actions = "";
        if (hasDemo) {
          actions = `
            <button type="button" class="btn-flip-trigger btn-action mono">${ICON_EYE}<span>${t("flip_preview")}</span></button>
            <button type="button" class="btn-copy-link btn-action mono" data-url="${escapeHtml(demoUrl)}">${ICON_COPY}<span class="copy-text">${t("copy_link")}</span></button>
            <a href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-action btn-action--primary mono"><span>${t("open_project")}</span>${ICON_ARROW}</a>`;
        } else if (repoUrl) {
          actions = `<a href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-action btn-action--primary mono"><span>${t("view_code")}</span>${ICON_ARROW}</a>`;
        } else {
          actions = `<span class="no-link-tag mono">${t("demo_soon")}</span>`;
        }

        return `
        <article class="project-card reveal" style="--stagger: ${i % 6}" data-project="${project.id}">
          <div class="project-card__flipper">

            <div class="project-card__face project-card__front">
              <div class="project-card__titlebar">
                <span class="project-card__filename mono">${escapeHtml(project.filename)}</span>
                <div class="project-card__badges">${getStatusBadge(project)}</div>
              </div>
              <div class="project-card__body">
                <h3 class="project-card__name">${title}</h3>
                <p class="project-card__desc">${escapeHtml(getLocalized(project.description))}</p>
                ${
                  project.stack && project.stack.length
                    ? `<div class="tag-row">${project.stack.map((s) => `<span class="stack-tag mono">${escapeHtml(s)}</span>`).join("")}</div>`
                    : ""
                }
              </div>
              <div class="project-card__actions">${actions}</div>
            </div>

            ${
              hasDemo
                ? `
            <div class="project-card__face project-card__back">
              <div class="project-card__titlebar">
                <span class="project-card__filename mono">${escapeHtml(demoUrl.replace(/^https?:\/\//, ""))}</span>
                <button type="button" class="btn-flip-back btn-close-flip" aria-label="${t("close_preview")}">✕</button>
              </div>
              <div class="project-card__preview-body">
                <div class="preview-iframe-wrapper">
                  <iframe data-src="${escapeHtml(demoUrl)}" title="${t("flip_preview")} ${title}" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
              </div>
              <div class="project-card__actions">
                <button type="button" class="btn-flip-back btn-action mono">← ${t("back")}</button>
                <a href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-action btn-action--primary mono"><span>${t("open_project")}</span>${ICON_ARROW}</a>
              </div>
            </div>`
                : ""
            }

          </div>
        </article>
      `;
      })
      .join("");

    initProjectEvents();
  }

  /* Interactivité des cartes projets (aperçu et copie du lien) */
  function initProjectEvents() {
    document.querySelectorAll(".btn-flip-trigger, .btn-flip-back").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const card = btn.closest(".project-card");
        if (!card) return;
        // L'aperçu ne se charge qu'à la première ouverture
        const frame = card.querySelector("iframe[data-src]");
        if (frame && !frame.src) frame.src = frame.dataset.src;
        card.classList.toggle("is-flipped");
      });
    });

    document.querySelectorAll(".btn-copy-link").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const url = btn.getAttribute("data-url");
        if (!url) return;

        try {
          await navigator.clipboard.writeText(url);
          const copyTextEl = btn.querySelector(".copy-text");
          const originalText = copyTextEl ? copyTextEl.textContent : "";
          if (copyTextEl) copyTextEl.textContent = t("link_copied");
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

      const subject = encodeURIComponent(currentLang === "fr" ? `Contact portfolio — ${name}` : `Portfolio contact — ${name}`);
      const body = encodeURIComponent(`${currentLang === "fr" ? "Nom" : "Name"}: ${name}\nEmail: ${email}\n\n${message}`);

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
      const body = encodeURIComponent(`${currentLang === "fr" ? "De" : "From"}: ${name}\n\n${message}`);

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

    window.addEventListener(
      "scroll",
      () => {
        if (header) header.classList.toggle("header--scrolled", window.scrollY > 40);
      },
      { passive: true }
    );

    if (toggle && menu) {
      const closeMenu = () => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", t("aria_menu"));
        menu.classList.remove("nav__menu--open");
        document.body.classList.remove("nav-open");
      };

      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        if (expanded) return closeMenu();
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", t("aria_close"));
        menu.classList.add("nav__menu--open");
        document.body.classList.add("nav-open");
      });

      navLinks.forEach((link) => link.addEventListener("click", closeMenu));
    }

    /* Lien actif selon la section visible */
    const sections = [...navLinks]
      .filter((link) => link.getAttribute("href").startsWith("#"))
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) =>
            link.classList.toggle("nav__link--active", link.getAttribute("href") === `#${entry.target.id}`)
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) langToggle.addEventListener("click", toggleLanguage);
  }

  /* ══════════════════════════════════════
     BOUTON RETOUR EN HAUT
  ══════════════════════════════════════ */
  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      () => btn.classList.toggle("back-to-top--visible", window.scrollY > 600),
      { passive: true }
    );
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ══════════════════════════════════════
     INTERSECTION OBSERVER — apparition
  ══════════════════════════════════════ */
  let revealObserver = null;

  function observeRevealElements() {
    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const stagger = entry.target.style.getPropertyValue("--stagger") || 0;
          entry.target.style.transitionDelay = `${Number(stagger) * 0.06}s`;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));
  }

  /* ══════════════════════════════════════
     FOOTER ET IMAGE DE PROFIL
  ══════════════════════════════════════ */
  function initFooter() {
    const yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

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
    initContactForm();
    initGuestbookForm();
    initProfileImage();
    initTabs();
    initLightbox();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
