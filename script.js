const translations = {
  fr: {
    badge: "10 ans d'expérience",
    title: "L'élégance indienne créée pour vous.",
    desc: "Spécialiste en Saree blouses, Lehenga, Salwar et tenues traditionnelles. Essayage personnalisé et retouches incluses à Stains.",
    cta: "Réserver via WhatsApp",
    services: "Nos Créations",
    gallery: "Notre Galerie",
    gallerySub: "Découvrez quelques-unes de nos plus belles créations",
    contact: "Contactez-nous",
    loc: "Ville",
    appt: "Visite",
    apptVal: "Sur rendez-vous uniquement",
    items: [
      { t: "Saree Blouses", d: "Coupes modernes ou traditionnelles, finitions de luxe." },
      { t: "Lehenga / Choli", d: "Tenues de fête élégantes et confortables." },
      { t: "Salwar / Churidar", d: "Ensembles sur-mesure avec un tombé impeccable." },
      { t: "Tenues Enfants", d: "Vêtements traditionnels tamouls pour petites princesses." },
      { t: "Retouches", d: "Ajustements précis pour toutes vos tenues existantes." },
      { t: "Nighties & Robes", d: "Créations personnalisées pour votre confort." }
    ],
    galleryItems: [
      { title: "Lehenga de Luxe", desc: "Broderie dorée sur tulle rose poudré" },
      { title: "Tenue Enfant", desc: "Lehenga traditionnelle jaune et verte" },
      { title: "Collection Salwar", desc: "Ensembles élégants pour toutes occasions" },
      { title: "Blouses Saree", desc: "Designs variés avec dos travaillés" }
    ]
  },
  ta: {
    badge: "10 வருட அனுபவம்",
    title: "உடை அழகை விரும்பும் பெண்களுக்கான தையல் கலை.",
    desc: "சாரி பிளவுஸ், லெஹங்கா, சல்வார் மற்றும் சிறுமிகளுக்கான பாரம்பரிய உடைகள் அனைத்தும் மிகச்சிறந்த முறையில் தைத்து தரப்படும்.",
    cta: "முன்பதிவு செய்ய",
    services: "எங்கள் சேவைகள்",
    gallery: "எங்கள் படத்தொகுப்பு",
    gallerySub: "எங்கள் சிறந்த வேலைப்பாடுகளை காணுங்கள்",
    contact: "தொடர்பு கொள்ளவும்",
    loc: "இடம்",
    appt: "நேரம்",
    apptVal: "முன்பதிவு செய்தவர்கள் மட்டும்",
    items: [
      { t: "சாரி பிளவுஸ்", d: "நவீன மற்றும் பாரம்பரிய முறையிலான நேர்த்தியான தையல்." },
      { t: "லெஹங்கா சோளி", d: "விழாக்களுக்கான அழகான மற்றும் வசதியான உடைகள்." },
      { t: "சல்வார் / சுடிதார்", d: "கச்சிதமான மற்றும் நேர்த்தியான தையல் வேலைப்பாடுகள்." },
      { t: "சிறுமிகளுக்கான உடைகள்", d: "சிறுமிகளுக்கான பாரம்பரிய தமிழ் உடைகள்." },
      { t: "திருத்தங்கள் (Alterations)", d: "அனைத்து உடைகளுக்கும் கச்சிதமான திருத்தங்கள்." },
      { t: "நைட்டீஸ் & டிரஸ்கள்", d: "உங்கள் விருப்பத்திற்கு ஏற்ப தைத்து தரப்படும்." }
    ],
    galleryItems: [
      { title: "ஆடம்பர லெஹங்கா", desc: "இளஞ்சிவப்பு வலையில் தங்க எம்ப்ராய்டரி" },
      { title: "குழந்தைகள் உடை", desc: "மஞ்சள் மற்றும் பச்சை பாரம்பரிய லெஹங்கா" },
      { title: "சல்வார் தொகுப்பு", desc: "அனைத்து சந்தர்ப்பங்களுக்கும் நேர்த்தியான தொகுப்புகள்" },
      { title: "சாரி பிளவுஸ்கள்", desc: "வெவ்வேறு முதுகு வடிவமைப்புகள்" }
    ]
  },
  en: {
    badge: "10 Years Experience",
    title: "Indian elegance tailored just for you.",
    desc: "Specialist in Saree blouses, Lehenga, Salwar and traditional outfits. Personalized fitting and alterations included in Stains.",
    cta: "Book via WhatsApp",
    services: "Our Creations",
    gallery: "Our Gallery",
    gallerySub: "Discover some of our finest creations",
    contact: "Contact Us",
    loc: "Location",
    appt: "Visit",
    apptVal: "By appointment only",
    items: [
      { t: "Saree Blouses", d: "Modern or traditional cuts with luxury finishing." },
      { t: "Lehenga / Choli", d: "Elegant and comfortable festive wear." },
      { t: "Salwar / Churidar", d: "Bespoke sets with a perfect drape." },
      { t: "Kids Wear", d: "Traditional Tamil outfits for little princesses." },
      { t: "Alterations", d: "Precise adjustments for all your existing clothes." },
      { t: "Nighties & Dresses", d: "Customized creations for your daily comfort." }
    ],
    galleryItems: [
      { title: "Luxury Lehenga", desc: "Golden embroidery on powder pink tulle" },
      { title: "Kids Outfit", desc: "Traditional yellow and green lehenga" },
      { title: "Salwar Collection", desc: "Elegant sets for all occasions" },
      { title: "Saree Blouses", desc: "Varied designs with intricate back work" }
    ]
  }
};

// ✅ IMPORTANT : dossier IMAGES (majuscules) pour GitHub Pages
const galleryImages = [
  "IMAGES/Lehenga1.jpg",
  "IMAGES/petites1.jpg",
  "IMAGES/salwar1.png",
  "IMAGES/saree_blouse6.jpg"
];

function changeLang(lang) {
  // boutons actifs
  document.querySelectorAll(".lang-switcher button").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`btn-${lang}`);
  if (activeBtn) activeBtn.classList.add("active");

  const t = translations[lang];

  // textes
  document.getElementById("hero-badge").innerText = t.badge;
  document.getElementById("hero-title").innerText = t.title;
  document.getElementById("hero-desc").innerText = t.desc;
  document.getElementById("main-cta").innerText = t.cta;
  document.getElementById("services-title").innerText = t.services;
  document.getElementById("gallery-title").innerText = t.gallery;
  document.getElementById("gallery-subtitle").innerText = t.gallerySub;
  document.getElementById("contact-title").innerText = t.contact;
  document.getElementById("label-location").innerText = t.loc;
  document.getElementById("label-appt").innerText = t.appt;
  document.getElementById("val-appt").innerText = t.apptVal;

  // services
  const grid = document.getElementById("services-grid");
  grid.innerHTML = "";
  t.items.forEach(item => {
    grid.innerHTML += `
      <div class="card">
        <h3>${item.t}</h3>
        <p>${item.d}</p>
      </div>
    `;
  });

  // galerie
  const galleryGrid = document.getElementById("gallery-grid");
  galleryGrid.innerHTML = "";
  galleryImages.forEach((img, index) => {
    const galleryItem = t.galleryItems[index];
    galleryGrid.innerHTML += `
      <div class="gallery-item" data-img="${img}">
        <img src="${img}" alt="${galleryItem.title}">
        <div class="gallery-overlay">
          <h4>${galleryItem.title}</h4>
          <p>${galleryItem.desc}</p>
        </div>
      </div>
    `;
  });

  // click lightbox (plus propre que onclick inline)
  document.querySelectorAll(".gallery-item").forEach(el => {
    el.addEventListener("click", () => openLightbox(el.dataset.img));
  });
}

function openLightbox(imgSrc) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = imgSrc;
  lb.classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  // Boutons langue
  document.getElementById("btn-fr").addEventListener("click", () => changeLang("fr"));
  document.getElementById("btn-ta").addEventListener("click", () => changeLang("ta"));
  document.getElementById("btn-en").addEventListener("click", () => changeLang("en"));

  // Lightbox close
  document.getElementById("lightbox").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-close").addEventListener("click", (e) => { e.stopPropagation(); closeLightbox(); });

  // Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // year
  document.getElementById("year").innerText = new Date().getFullYear();

  // init
  changeLang("fr");
});
