/**
 * main.js — Logique du portfolio
 * Gestion : preloader, i18n, rendu dynamique, animations, formulaires mailto
 */

(function () {
  "use strict";

  /* ── État global ── */
  let currentLang = localStorage.getItem("portfolio-lang") || "fr";

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

    renderDynamicContent();
  }

  function toggleLanguage() {
    currentLang = currentLang === "fr" ? "en" : "fr";
    localStorage.setItem("portfolio-lang", currentLang);

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
    renderExperience();
    renderInterests();
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

  function getStatusBadge(project) {
    const badges = [];

    if (project.status === "completed") {
      badges.push(`<span class="badge badge--completed">${t("status_completed")}</span>`);
    } else if (project.status === "in_progress") {
      badges.push(`<span class="badge badge--progress">${t("status_in_progress")}</span>`);
    }

    if (project.confidential) {
      badges.push(`<span class="badge badge--confidential">
        <svg class="badge__lock" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        ${t("status_confidential")}
      </span>`);
    }

    return badges.join("");
  }

  function renderProjects() {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    container.innerHTML = portfolioData.projects
      .map(
        (project, i) => `
        <article class="project-card reveal" style="--stagger: ${i}" data-project="${project.id}">
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
                project.stack.length
                  ? `<div class="project-card__stack">${project.stack.map((s) => `<span class="stack-tag mono">${escapeHtml(s)}</span>`).join("")}</div>`
                  : ""
              }
              <h3 class="project-card__name">${escapeHtml(getLocalized(project.title))}</h3>
              <p class="project-card__desc">${escapeHtml(getLocalized(project.description))}</p>
            </div>
          </div>
        </article>
      `
      )
      .join("");
  }

  function renderExperience() {
    const container = document.getElementById("experience-list");
    if (!container) return;

    container.innerHTML = portfolioData.experience
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
     FORMULAIRES → mailto:
     Ouvre le client mail du visiteur.
     Les messages ne sont PAS stockés ni affichés publiquement.
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

      // mailto: — ouvre le client mail local, pas de backend
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

      // mailto: dédié — message privé, non publié sur le site
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

    /* Rétrécissement au scroll */
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

    /* Menu mobile */
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

    /* Lang toggle */
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
    applyTranslations();
    initPreloader();
    initNavigation();
    initBackToTop();
    initParallaxGrid();
    initContactForm();
    initGuestbookForm();
    initProfileImage();
    observeRevealElements();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
