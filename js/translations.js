/**
 * translations.js — Chaînes d'interface bilingues
 * Utilisées par main.js pour basculer FR ↔ EN sans rechargement
 */

const translations = {
  fr: {
    /* Navigation */
    nav_news: "Actualités",
    news_back_home: "← Portfolio",
    news_kicker: "Journal de bord",
    news_title: "Actualités",
    news_intro: "Mes publications, les activités que je mène et les attestations obtenues en chemin.",
    news_tab_posts: "Publications",
    news_tab_certificates: "Attestations",
    news_view_post: "Voir la publication",
    news_view_file: "Voir le document",
    news_read_more: "Lire la suite",
    news_empty_posts: "Aucune publication pour le moment.",
    news_empty_certificates: "Les attestations arrivent bientôt.",
    news_teaser: "Publications et attestations",
    nav_about: "Profil",
    nav_experience: "Expérience",
    nav_projects: "Projets",
    nav_engagement: "Engagement",
    nav_skills: "Compétences",
    nav_education: "Formation",
    nav_contact: "Contact",

    /* Hero */
    hero_prefix: "Disponible pour un stage ou un emploi",
    hero_cta_projects: "Voir mes projets",
    hero_cta_cv: "Télécharger mon CV",

    /* Sections */
    section_about: "Profil",
    section_experience: "Expérience",
    section_projects: "Projets",
    projects_intro: "Une sélection de ce que j'ai conçu, développé ou mis en ligne.",
    section_engagement: "Engagement",
    section_events: "Événements organisés et participations",
    section_skills: "Compétences",
    section_languages: "Langues",
    section_interests: "Centres d'intérêt",
    section_education: "Formation",
    section_education_complementary: "Formations complémentaires",
    section_contact: "Contact",
    section_guestbook: "Laisser un mot",

    /* Statuts */
    status_completed: "Terminé",
    status_in_progress: "En cours",
    status_idea: "En réflexion",
    status_confidential: "Confidentiel",
    event_done: "Réalisé",
    event_upcoming: "À venir",

    /* Actions des projets */
    open_project: "Ouvrir",
    view_code: "Code",
    copy_link: "Copier le lien",
    link_copied: "Copié !",
    demo_soon: "Démo bientôt disponible",
    flip_preview: "Aperçu",
    back: "Retour",
    close_preview: "Fermer l'aperçu",

    /* Contact */
    contact_intro: "Un projet, une opportunité ou une question ? Écrivez-moi.",
    contact_name: "Nom",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Envoyer par email",
    contact_phone_label: "Téléphone",
    contact_location_label: "Localisation",
    contact_note: "Ce formulaire ouvre votre client mail local. Votre message n'est pas stocké ni affiché publiquement sur ce site — c'est un choix assumé, sans backend.",

    /* Livre d'or */
    guestbook_intro: "Un mot sympa, un encouragement, une critique constructive ? Laissez une trace.",
    guestbook_name: "Votre prénom ou pseudo",
    guestbook_message: "Votre message",
    guestbook_send: "Laisser mon mot",
    guestbook_note: "Votre message sera envoyé par email et ne sera pas publié sur le site.",

    /* Footer */
    footer_back_top: "Retour en haut",
    footer_rights: "Tous droits réservés.",

    /* Divers */
    back_to_top: "Haut de page",
    preloader_init: "chargement du portfolio",
    preloader_ready: "prêt",
    lang_toggle: "EN",
    aria_lang: "Passer en anglais",
    aria_theme_light: "Passer au thème clair",
    aria_theme_dark: "Passer au thème sombre",
    aria_nav: "Navigation principale",
    aria_menu: "Ouvrir le menu",
    aria_close: "Fermer le menu"
  },

  en: {
    nav_news: "News",
    news_back_home: "← Portfolio",
    news_kicker: "Logbook",
    news_title: "News",
    news_intro: "My posts, the activities I run and the certificates earned along the way.",
    news_tab_posts: "Posts",
    news_tab_certificates: "Certificates",
    news_view_post: "View post",
    news_view_file: "View document",
    news_read_more: "Read more",
    news_empty_posts: "No posts yet.",
    news_empty_certificates: "Certificates coming soon.",
    news_teaser: "Posts and certificates",
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_engagement: "Involvement",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_contact: "Contact",

    hero_prefix: "Open to internships and jobs",
    hero_cta_projects: "View my projects",
    hero_cta_cv: "Download my CV",

    section_about: "About",
    section_experience: "Experience",
    section_projects: "Projects",
    projects_intro: "A selection of what I have designed, built or shipped.",
    section_engagement: "Involvement",
    section_events: "Events organised and attended",
    section_skills: "Skills",
    section_languages: "Languages",
    section_interests: "Interests",
    section_education: "Education",
    section_education_complementary: "Additional training",
    section_contact: "Contact",
    section_guestbook: "Leave a note",

    status_completed: "Completed",
    status_in_progress: "In progress",
    status_idea: "Concept",
    status_confidential: "Confidential",
    event_done: "Done",
    event_upcoming: "Upcoming",

    open_project: "Open",
    view_code: "Code",
    copy_link: "Copy link",
    link_copied: "Copied!",
    demo_soon: "Demo coming soon",
    flip_preview: "Preview",
    back: "Back",
    close_preview: "Close preview",

    contact_intro: "A project, an opportunity or a question? Get in touch.",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send via email",
    contact_phone_label: "Phone",
    contact_location_label: "Location",
    contact_note: "This form opens your local mail client. Your message is not stored or displayed publicly on this site — an intentional choice, no backend involved.",

    guestbook_intro: "A kind word, encouragement or constructive feedback? Leave your mark.",
    guestbook_name: "Your name or nickname",
    guestbook_message: "Your message",
    guestbook_send: "Leave my note",
    guestbook_note: "Your message will be sent by email and will not be published on the site.",

    footer_back_top: "Back to top",
    footer_rights: "All rights reserved.",

    back_to_top: "Back to top",
    preloader_init: "loading portfolio",
    preloader_ready: "ready",
    lang_toggle: "FR",
    aria_lang: "Switch to French",
    aria_theme_light: "Switch to light theme",
    aria_theme_dark: "Switch to dark theme",
    aria_nav: "Main navigation",
    aria_menu: "Open menu",
    aria_close: "Close menu"
  }
};
