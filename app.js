const itinerary = [
  {
    date: "Mercredi 11 novembre",
    title: "Bruxelles & arrivée à Bruges",
    text: "Eurostar le matin, journée à Bruxelles, puis train vers Bruges et installation à l'Hôtel Die Swaene en chambre Superior dans la soirée.",
    sections: [
      {
        title: "Matin · direction Bruxelles",
        highlights: [
          "Eurostar Paris Gare du Nord → Bruxelles-Midi : <strong>9 h 24 → 10 h 24</strong>",
        ],
      },
      {
        title: "Journée · visites à Bruxelles",
        places: [
          {
            name: "Manneken Pis",
            address: "1000 Bruxelles, Belgique",
            mapUrl: "https://www.google.com/maps/place/Manneken+Pis/@50.8461968,4.3513601,17.11z/data=!4m6!3m5!1s0x47c3c479195e3dd1:0x17b840a620b0c11f!8m2!3d50.844993!4d4.349989!16zL20vMGZqeDY?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D",
          },
          {
            name: "Grand-Place",
            address: "Grote Markt, 1000 Brussel, Belgique",
            mapUrl: "https://www.google.com/maps/place/Grand-Place/@50.8461968,4.3513601,17.11z/data=!4m6!3m5!1s0x47c3c47f4614f1f1:0xb03c355d8fe2cfb6!8m2!3d50.8467887!4d4.3524356!16zL20vMGx5OWc?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D",
          },
          {
            name: "Jeanneke Pis",
            address: "Imp. de la Fidélité 10-12, 1000 Bruxelles, Belgique",
            mapUrl: "https://www.google.com/maps/place/Jeanneke+Pis/@50.8461968,4.3513601,17.11z/data=!4m6!3m5!1s0x47c3c38097ed35f5:0xf1c10adbebd94f71!8m2!3d50.8484807!4d4.3540406!16zL20vMDcwajli?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D",
          },
          {
            name: "Brussels COMICS Figurines Museum",
            address: "Rue du Marché aux Herbes 116, 1000 Bruxelles, Belgique",
            mapUrl: "https://www.google.com/maps/place/Brussels+COMICS+Figurines+Museum/@50.8465355,4.3555023,17.11z/data=!4m6!3m5!1s0x47c3c350506346ad:0x98133fc2f0204c1d!8m2!3d50.8462404!4d4.3556829!16s%2Fg%2F1hhjvwryt?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D",
          },
        ],
      },
      {
        title: "Soir · arrivée à Bruges",
        highlights: [
          "Train belge Bruxelles-Midi → Bruges : <strong>17 h 51 → 18 h 50</strong>",
          "Marche de 25 à 30 min jusqu'à l'hôtel : arrivée estimée entre <strong>19 h 15 et 19 h 20</strong>",
          "Première balade selon l'envie : hôtel → Rozenhoedkaai → Dijver → retour par les petites ruelles",
          "Dîner au <a href=\"diner.html\">'t Huidevettershuis</a> : <strong>20 h 30 · réservation confirmée</strong>, à 5 minutes à pied de l'hôtel",
        ],
      },
    ],
  },
  {
    date: "Jeudi 12 & vendredi 13 novembre",
    title: "Deux jours à notre rythme",
    text: "Détente, chocolat, visites et balades à répartir selon l'envie et la météo, avec notre soirée d'anniversaire le vendredi.",
    sections: [
      {
        title: "Détente · prendre son temps",
        highlights: [
          "Petit-déjeuner à l'hôtel chaque matin",
          "Jeudi : piscine et sauna en couple, gratuits à l'hôtel",
          "Temps libre : shopping, café, ou dernière séance spa à l'hôtel",
        ],
      },
      {
        title: "Balade & visites · selon l'envie",
        highlights: [
          "Une visite, une pause gourmande ou une promenade selon la météo",
          "Balade chocolat de 45 min à 1 h : hôtel → The Chocolate Line → chocolatiers autour de la Grand-Place",
          "Option Choco-Story : visite rapide si l'envie est là, 1 h 30 max",
          "Balade romantique de 45 min à 1 h : hôtel → Minnewater, le lac d'amour → parc → retour par les ruelles calmes",
          '<a href="#activites">Idées pour jeudi et vendredi</a>',
        ],
      },
      {
        title: "Soirées · Bruges & nos 5 ans",
        highlights: [
          "Jeudi : café typique, bières belges, cuisine flamande et balade nocturne",
          "Vendredi · nos 5 ans : soirée d'anniversaire libre, dîner selon l'envie",
        ],
      },
    ],
  },
  {
    date: "Samedi 14 novembre",
    title: "Départ",
    text: "Une dernière journée douce à Bruges avant le train de fin d'après-midi et le retour vers Paris.",
    sections: [
      {
        title: "Journée · derniers instants à Bruges",
        highlights: [
          "Petit-déjeuner à l'hôtel, puis check-out",
          "Petite balade libre : Grand-Place, dernière photo, derniers achats",
        ],
      },
      {
        title: "Retour · Bruxelles puis Paris",
        highlights: [
          "Prévoir le temps de rejoindre la gare avant le départ",
          "Train belge Bruges → Bruxelles-Midi : <strong>17 h 37 → 18 h 31</strong>",
          "Correspondance de <strong>45 min</strong> à Bruxelles-Midi",
          "Eurostar Bruxelles-Midi → Paris Gare du Nord : <strong>19 h 16 → 20 h 38</strong>",
        ],
      },
    ],
  },
];

const activities = [
  {
    name: "Beffroi de Bruges",
    group: "culture",
    preview: "366 marches · vue sur Bruges",
    category: "Culture & panorama",
    description: "Tour médiévale historique avec un carillon de 47 cloches et une vue panoramique après 366 marches.",
    address: "Markt 7, 8000 Brugge",
    atmosphere: "Monument historique, visite culturelle et panorama.",
  },
  {
    name: "Historium Bruges",
    group: "culture",
    preview: "Bruges médiéval · expérience immersive",
    category: "Immersion · à l'abri",
    description: "Musée immersif et interactif sur le Bruges médiéval avec réalité virtuelle et effets spéciaux.",
    address: "Markt 1, 8000 Brugge",
    atmosphere: "Attraction culturelle, expérience immersive 100 % à l'abri.",
  },
  {
    name: "Käthe Wohlfahrt Bruges",
    group: "shopping",
    preview: "Noël toute l'année · au sec",
    category: "Shopping · au sec",
    description: "Féerique boutique de Noël allemande ouverte toute l'année, à deux pas de Wollestraat.",
    address: "Breidelstraat 16, 8000 Brugge",
    atmosphere: "Shopping, découverte artisanale et ambiance magique au sec.",
  },
  {
    name: "Musée de la Torture Bruges",
    group: "culture",
    preview: "Caves voûtées · environ 1 h",
    category: "Insolite · à l'abri",
    description: "Musée thématique installé dans d'anciennes caves voûtées présentant des instruments de torture historiques.",
    address: "Wollestraat 29, 8000 Brugge",
    atmosphere: "Visite insolite et sombre, à l'abri (environ 1 h).",
  },
  {
    name: "House of Waffles",
    group: "gourmandise",
    preview: "Gaufres de Bruxelles & de Liège",
    category: "Pause gourmande · au chaud",
    description: "Salon de dégustation spécialisé dans les véritables gaufres belges artisanales de Bruxelles et de Liège.",
    address: "Wollestraat 31, 8000 Brugge",
    atmosphere: "Pause gourmande et conviviale bien au chaud.",
  },
  {
    name: "Frietmuseum Bruges",
    group: "gourmandise",
    preview: "Histoire de la frite · dégustation",
    category: "Musée gourmand · à l'abri",
    description: "Le premier musée au monde dédié à l'histoire de la pomme de terre et de la frite belge, avec dégustation finale.",
    address: "Vlamingstraat 33, 8000 Brugge",
    atmosphere: "Musée ludique, familial et gourmand, à l'abri.",
  },
  {
    name: "Koningin Astridpark",
    group: "balade",
    preview: "Étang & kiosque · beau temps",
    category: "Promenade · beau temps",
    description: "Parc urbain bucolique et romantique avec étang, kiosque à musique et bancs ombragés.",
    address: "Park 1, 8000 Brugge",
    atmosphere: "Promenade au calme et au vert, à privilégier lorsqu'il fait beau.",
  },
  {
    name: "Minnewater Park",
    group: "balade",
    preview: "Lac d'amour · balade romantique",
    category: "Promenade · au bord de l'eau",
    description: "Parc au bord du Minnewater, le lac d'amour, pour une balade romantique et un moment de calme.",
    address: "Minnewater 1/15, 8000 Brugge",
    atmosphere: "Promenade romantique et verdure, à privilégier lorsqu'il fait beau.",
  },
];

const letterScene = document.querySelector(".letter-scene");
const envelope = document.querySelector("[data-envelope]");
const site = document.querySelector("[data-site]");
const openButtons = document.querySelectorAll("[data-open-letter]");
const daysContainer = document.querySelector("[data-days]");
const activitiesContainer = document.querySelector("[data-activities]");
const navLinks = document.querySelectorAll("[data-nav-page]");

const renderItinerary = () => {
  if (!daysContainer) return;

  daysContainer.innerHTML = itinerary
    .map(
      (day) => `
        <article class="day-card">
          <header class="day-card__header">
            <span class="day-card__date">${day.date}</span>
            <h2>${day.title}</h2>
            <p>${day.text}</p>
          </header>
          <div class="day-card__sections">
              ${day.sections.map((section) => `
                <section class="day-card__section">
                  <h3>${section.title}</h3>
                  ${section.places ? `
                    <ul class="day-card__places">
                      ${section.places.map((place) => `
                        <li>
                          <a href="${place.mapUrl}" target="_blank" rel="noopener noreferrer">
                            <strong>${place.name}</strong>
                            <span class="day-card__map-label" aria-hidden="true">↗</span>
                            <span class="visually-hidden"> — Google Maps, nouvel onglet</span>
                            <span class="day-card__address">${place.address}</span>
                          </a>
                        </li>
                      `).join("")}
                    </ul>
                  ` : `
                    <ul class="day-card__list">
                      ${section.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
                    </ul>
                  `}
                </section>
              `).join("")}
          </div>
        </article>
      `,
    )
    .join("");
};

const renderActivities = () => {
  if (!activitiesContainer) return;

  const groups = [
    { id: "all", label: "Toutes les envies" },
    { id: "culture", label: "Culture" },
    { id: "gourmandise", label: "Gourmandise" },
    { id: "shopping", label: "Shopping" },
    { id: "balade", label: "Balade" },
  ];
  const icons = {
    culture: '<path d="M4 10 12 4l8 6M5 10h14M6 20V10m6 10V10m6 10V10M4 20h16"/>',
    gourmandise: '<path d="M5 9h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5ZM17 10h2a3 3 0 0 1 0 6h-2M8 3v3m5-3v3"/>',
    shopping: '<path d="M5 8h14l1 13H4ZM9 8V6a3 3 0 0 1 6 0v2"/>',
    balade: '<path d="m12 3-6 8h3l-5 6h16l-5-6h3ZM12 17v4M8 21h8"/>',
  };
  const icon = (group) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[group]}</svg>`;
  let selectedIndex = 0;

  activitiesContainer.innerHTML = `
    <div class="activities__filters" role="group" aria-label="Filtrer par envie">
      ${groups.map((group) => `
        <button type="button" data-activity-filter="${group.id}" aria-pressed="${group.id === "all"}">${group.label}</button>
      `).join("")}
    </div>
    <div class="activities__browser">
      <div class="activities__choices" role="group" aria-label="Choisir une activité">
        ${activities.map((activity, index) => `
          <button type="button" class="activity-choice" data-activity-index="${index}" data-group="${activity.group}" aria-pressed="${index === 0}" aria-controls="activity-detail">
            <span class="activity-choice__icon">${icon(activity.group)}</span>
            <span>
              <span class="activity-choice__name">${activity.name}</span>
              <span class="activity-choice__preview">${activity.preview}</span>
            </span>
          </button>
        `).join("")}
      </div>
      <section class="activity-detail" id="activity-detail" aria-labelledby="activity-detail-title"></section>
    </div>
    <p class="activities__hint" role="status" aria-live="polite" data-activity-status></p>
  `;

  const detail = activitiesContainer.querySelector("#activity-detail");
  const status = activitiesContainer.querySelector("[data-activity-status]");
  const choices = activitiesContainer.querySelectorAll("[data-activity-index]");
  const filters = activitiesContainer.querySelectorAll("[data-activity-filter]");
  const browser = activitiesContainer.querySelector(".activities__browser");
  const mobileLayout = window.matchMedia("(max-width: 800px)");

  const positionDetail = () => {
    if (mobileLayout.matches) {
      choices[selectedIndex].after(detail);
    } else {
      browser.append(detail);
    }
  };

  const selectActivity = (index) => {
    selectedIndex = index;
    const activity = activities[index];
    choices.forEach((choice) => {
      choice.setAttribute("aria-pressed", Number(choice.dataset.activityIndex) === index);
    });
    detail.innerHTML = `
      <div class="activity-detail__heading">
        <span class="activity-detail__icon">${icon(activity.group)}</span>
        <span class="activity-detail__category">${activity.category}</span>
      </div>
      <h3 id="activity-detail-title">${activity.name}</h3>
      <p>${activity.description}</p>
      <p class="activity-detail__atmosphere">${activity.atmosphere}</p>
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${activity.name}, ${activity.address}`)}" target="_blank" rel="noopener noreferrer">
        <span>${activity.address}</span>
        Voir sur Google Maps ↗<span class="visually-hidden"> — nouvel onglet</span>
      </a>
    `;
    positionDetail();
    status.textContent = `Détails affichés : ${activity.name}. Pour jeudi ou vendredi, selon l'envie.`;
  };

  activitiesContainer.addEventListener("click", (event) => {
    const choice = event.target.closest("[data-activity-index]");
    if (choice) {
      selectActivity(Number(choice.dataset.activityIndex));
      return;
    }

    const filter = event.target.closest("[data-activity-filter]");
    if (!filter) return;
    const group = filter.dataset.activityFilter;
    filters.forEach((button) => {
      button.setAttribute("aria-pressed", button === filter);
    });
    choices.forEach((button) => {
      button.hidden = group !== "all" && button.dataset.group !== group;
    });
    if (group !== "all" && activities[selectedIndex].group !== group) {
      selectActivity(activities.findIndex((activity) => activity.group === group));
    }
    const count = activities.filter((activity) => group === "all" || activity.group === group).length;
    status.textContent = `${count} idée${count > 1 ? "s" : ""} · Détails affichés : ${activities[selectedIndex].name}. Pour jeudi ou vendredi.`;
  });

  mobileLayout.addEventListener("change", positionDetail);
  selectActivity(0);
};

const initializeInvitation = () => {
  if (!envelope || !letterScene || !site) return;

  const title = document.querySelector("[data-home-title]");
  const replayButton = document.querySelector("[data-replay-letter]");
  const returnButton = document.querySelector("[data-close-letter]");
  const notice = document.querySelector("[data-invitation-notice]");
  const storageKey = "bruges-invitation-opened";
  const initialOverflow = document.body.style.overflow;
  let opening = false;
  let storageAvailable = true;

  const reportStorageError = (error) => {
    storageAvailable = false;
    console.warn("Impossible de mémoriser l'ouverture de l'invitation.", error);
    notice.hidden = false;
    notice.textContent = "Le navigateur ne permet pas de mémoriser l'ouverture : l'invitation pourra réapparaître à la prochaine visite.";
  };

  const showSite = (focusContent = true) => {
    letterScene.hidden = true;
    letterScene.inert = true;
    letterScene.setAttribute("aria-hidden", "true");
    site.classList.remove("is-concealed");
    site.inert = false;
    site.removeAttribute("aria-hidden");
    document.body.style.overflow = initialOverflow;
    if (focusContent) title.focus({ preventScroll: true });
  };

  const showInvitation = (isReplay) => {
    envelope.classList.remove("is-opening");
    site.inert = true;
    site.setAttribute("aria-hidden", "true");
    site.classList.add("is-concealed");
    letterScene.hidden = false;
    letterScene.inert = false;
    letterScene.removeAttribute("aria-hidden");
    returnButton.hidden = !isReplay;
    document.body.style.overflow = "hidden";
    envelope.focus({ preventScroll: true });
  };

  const openLetter = () => {
    if (opening) return;
    opening = true;
    envelope.classList.add("is-opening");
    openButtons.forEach((button) => { button.disabled = true; });
    returnButton.disabled = true;

    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1050;
    window.setTimeout(() => {
      if (storageAvailable) {
        try {
          localStorage.setItem(storageKey, "true");
        } catch (error) {
          reportStorageError(error);
        }
      }
      showSite();
      openButtons.forEach((button) => { button.disabled = false; });
      returnButton.disabled = false;
      opening = false;
    }, delay);
  };

  let alreadyOpened = false;
  try {
    alreadyOpened = localStorage.getItem(storageKey) === "true";
  } catch (error) {
    reportStorageError(error);
  }

  replayButton.hidden = false;
  openButtons.forEach((button) => button.addEventListener("click", openLetter));
  replayButton.addEventListener("click", () => showInvitation(true));
  returnButton.addEventListener("click", () => {
    showSite(false);
    replayButton.focus({ preventScroll: true });
  });
  letterScene.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !returnButton.hidden && !opening) {
      returnButton.click();
    }
  });

  if (alreadyOpened) {
    showSite(false);
  } else {
    showInvitation(false);
  }
};

const setActivePage = () => {
  const currentPage = document.body.dataset.page || "home";

  navLinks.forEach((link) => {
    const active = link.dataset.navPage === currentPage;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
};

const initializeNavigation = () => {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const links = nav.querySelector(".nav__links");
  const mobile = window.matchMedia("(max-width: 880px)");
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "nav__toggle";
  toggle.innerHTML = '<span class="nav__toggle-icon" aria-hidden="true"></span><span>Menu</span>';
  toggle.setAttribute("aria-controls", "navigation-links");
  links.id = "navigation-links";
  nav.insertBefore(toggle, links);

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    nav.classList.toggle("is-open", open);
    links.hidden = mobile.matches && !open;
  };

  const reset = () => {
    const focusInside = nav.contains(document.activeElement);
    toggle.hidden = !mobile.matches;
    setOpen(false);
    if (focusInside) {
      (mobile.matches ? toggle : nav.querySelector(".nav__brand")).focus();
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobile.matches && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
  links.addEventListener("click", (event) => {
    if (event.target.closest("a") && mobile.matches) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && mobile.matches) setOpen(false);
  });
  document.addEventListener("focusin", (event) => {
    if (!nav.contains(event.target) && mobile.matches) setOpen(false);
  });
  mobile.addEventListener("change", reset);
  reset();
};

renderItinerary();
renderActivities();
setActivePage();
initializeNavigation();

initializeInvitation();