// Video Resume Interactive Script with Analytics, Dark Mode, and Language Support

// ============= CONFIGURATION LOADING =============
// Load sensitive config from external file
let ANALYTICS_ID = '';
let FORMSPREE_ENDPOINT = '';

// Try to load config
if (window.ANALYTICS_ID) {
    ANALYTICS_ID = window.ANALYTICS_ID;
}
if (window.FORMSPREE_ENDPOINT) {
    FORMSPREE_ENDPOINT = window.FORMSPREE_ENDPOINT;
    document.getElementById('contactForm').action = FORMSPREE_ENDPOINT;
}

// ============= ANALYTICS SETUP =============
const Analytics = {
    track: function(eventName, eventData = {}) {
        if (ANALYTICS_ID && typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
        console.log('Analytics Event:', eventName, eventData);
    },
    
    trackPageView: function() {
        if (ANALYTICS_ID && typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href
            });
        }
    },
    
    trackVideoEvent: function(action, time) {
        this.track('video_interaction', {
            action: action,
            video_time: time
        });
    },
    
    trackClick: function(element) {
        const analyticsLabel = element.getAttribute('data-analytics');
        if (analyticsLabel) {
            this.track('click', {
                element: analyticsLabel,
                text: element.textContent.trim()
            });
        }
    }
};

// ============= COMPLETE TRANSLATIONS =============
const translations = {
    en: {
        downloadCV: "DOWNLOAD PDF",
        getInTouch: "GET IN TOUCH",
        videoNotSupported: "Your browser does not support the video tag.",
        profileTitle: "University of Bonn Student | Physics MSc",
        profileSubtitle: "Machine Learning & Computational Modeling",
        contactTitle: "Contact Information",
        summaryTitle: "Professional Summary",
        summaryText: "I'm an applied scientist and physics MSc student who loves taming complex systems with machine learning, computational modeling, or a touch of clever automation. I believe innovation moves fastest when people talk plainly, work together turning big questions into small & doable steps. Even in the middle of code or simulations, I try to keep the general goal in my mind.",
        skillsTitle: "Key Skills & Expertise",
        skill1: "Machine Learning & Deep Learning (CNN, RNN, Transformers)",
        skill2: "Reinforcement Learning & Optimization",
        skill3: "Python (PyTorch, TensorFlow, NumPy, SciPy)",
        skill4: "Time Series Analysis & Kalman Filters",
        skill5: "Finite Element Methods & COMSOL",
        skill6: "Statistical Methods & Monte Carlo Simulations",
        skill7: "CAD Design (Autodesk, Creo) & Manufacturing",
        skill8: "Experimental Automation & Control Systems",
        educationTitle: "Education",
        edu1Title: "M.Sc. Physics",
        edu1Org: "University of Bonn, Germany",
        edu1Date: "Nov 2023 - Apr 2026 (expected)",
        edu1Detail1: "GPA: 2.2 (IT courses GPA: 1.3)",
        edu2Title: "B.Sc. Applied Math & Physics",
        edu2Org: "Saint-Petersburg State University, Russia",
        edu2Date: "Sep 2019 - Jul 2023",
        edu2Detail1: "Graduated with distinctions (GPA: 4.9/5.0, Top 1%)",
        edu2Detail2: "Awarded an academic scholarship",
        experienceTitle: "Experience",
        exp1Title: "Aerodynamics Team Member",
        exp1Org: "GET Racing, Dortmund, Germany",
        exp1Date: "Jan 2025 - Present",
        exp1Detail1: "Designed aerodynamic components (Creo) and manufactured carbon-fiber parts",
        exp1Detail2: "Contributed to a 30% increase in downforce",
        exp2Title: "Research Assistant",
        exp2Org: "University of Bonn, Germany",
        exp2Date: "Aug 2024 - Oct 2024",
        exp2Detail1: "Automated laser experiment setup with Python/PyQt5 multi-threaded controller",
        exp2Detail2: "Applied optimization methods (Nelder-Mead, Adam)",
        competitionsTitle: "Competitions & Achievements",
        comp1Title: "DeepRacer Cup (Audi & AWS) - Top 20 Finalist",
        comp1Date: "Aug 2025 - Oct 2025",
        comp1Detail: "Position 19/400 in autonomous racing with reinforcement learning",
        comp2Title: "Tech Arena - Huawei (Sweden) - Top 7 Finalist",
        comp2Date: "Jul 2025 - Aug 2025",
        comp2Detail: "AI-enabled SVD operator with hybrid CNN & Transformer model",
        comp3Title: "Tech Arena - Huawei (Nuremberg) - 3rd Place",
        comp3Date: "Sep 2024 - Jan 2025",
        comp3Detail: "State-of-Charge estimation using Extended Kalman Filter",
        comp4Title: "IFM Hackathon 2025 - 1st Place",
        comp4Detail: "RFID initialization app with SAP BTP integration",
        modalTitle: "Get in Touch",
        formName: "Full Name",
        formEmail: "Email Address",
        formMessage: "Message",
        formSubmit: "Send Message"
    },
    de: {
        downloadCV: "PDF HERUNTERLADEN",
        getInTouch: "KONTAKT AUFNEHMEN",
        videoNotSupported: "Ihr Browser unterstützt das Video-Tag nicht.",
        profileTitle: "Universität Bonn Student | Physik MSc",
        contactTitle: "Kontaktinformationen",
        summaryTitle: "Berufliches Profil",
        summaryText: "Ich bin ein angewandter Wissenschaftler und Physik-MSc-Student, der es liebt, komplexe Systeme mit maschinellem Lernen, computergestützter Modellierung oder etwas cleverer Automatisierung zu bändigen. Ich glaube, dass Innovation am schnellsten voranschreitet, wenn Menschen klar sprechen und zusammenarbeiten, um große Fragen in kleine, machbare Schritte zu verwandeln. Selbst mitten im Code oder in Simulationen versuche ich, das allgemeine Ziel im Blick zu behalten.",
        skillsTitle: "Hauptkompetenzen",
        skill1: "Machine Learning & Deep Learning (CNN, RNN, Transformers)",
        skill2: "Reinforcement Learning & Optimierung",
        skill3: "Python (PyTorch, TensorFlow, NumPy, SciPy)",
        skill4: "Zeitreihenanalyse & Kalman-Filter",
        skill5: "Finite-Elemente-Methoden & COMSOL",
        skill6: "Statistische Methoden & Monte-Carlo-Simulationen",
        skill7: "CAD-Design (Autodesk, Creo) & Fertigung",
        skill8: "Experimentelle Automatisierung & Steuerungssysteme",
        educationTitle: "Ausbildung",
        edu1Title: "M.Sc. Physik",
        edu1Org: "Universität Bonn, Deutschland",
        edu1Date: "Nov 2023 - Apr 2026 (voraussichtlich)",
        edu1Detail1: "Notendurchschnitt: 2,2 (IT-Kurse: 1,3)",
        edu2Title: "B.Sc. Angewandte Mathematik & Physik",
        edu2Org: "Sankt-Petersburger Staatsuniversität, Russland",
        edu2Date: "Sep 2019 - Jul 2023",
        edu2Detail1: "Abschluss mit Auszeichnung (Notendurchschnitt: 4,9/5,0, Top 1%)",
        edu2Detail2: "Stipendium erhalten",
        experienceTitle: "Berufserfahrung",
        exp1Title: "Aerodynamik-Teammitglied",
        exp1Org: "GET Racing, Dortmund, Deutschland",
        exp1Date: "Jan 2025 - Heute",
        exp1Detail1: "Entwurf aerodynamischer Komponenten (Creo) und Herstellung von Karbonfaserteilen",
        exp1Detail2: "Beitrag zu einer 30%igen Erhöhung des Abtriebs",
        exp2Title: "Wissenschaftlicher Mitarbeiter",
        exp2Org: "Universität Bonn, Deutschland",
        exp2Date: "Aug 2024 - Okt 2024",
        exp2Detail1: "Automatisierung des Laser-Experimentaufbaus mit Python/PyQt5 Multi-Thread-Controller",
        exp2Detail2: "Anwendung von Optimierungsmethoden (Nelder-Mead, Adam)",
        competitionsTitle: "Wettbewerbe & Erfolge",
        comp1Title: "DeepRacer Cup (Audi & AWS) - Top 20 Finalist",
        comp1Date: "Aug 2025 - Okt 2025",
        comp1Detail: "Platz 19/400 im autonomen Rennen mit Reinforcement Learning",
        comp2Title: "Tech Arena - Huawei (Schweden) - Top 7 Finalist",
        comp2Date: "Jul 2025 - Aug 2025",
        comp2Detail: "KI-gestützter SVD-Operator mit hybridem CNN- & Transformer-Modell",
        comp3Title: "Tech Arena - Huawei (Nürnberg) - 3. Platz",
        comp3Date: "Sep 2024 - Jan 2025",
        comp3Detail: "State-of-Charge-Schätzung mit erweitertem Kalman-Filter",
        comp4Title: "IFM Hackathon 2025 - 1. Platz",
        comp4Detail: "RFID-Initialisierungs-App mit SAP BTP-Integration",
        modalTitle: "Kontakt aufnehmen",
        formName: "Vollständiger Name",
        formEmail: "E-Mail-Adresse",
        formMessage: "Nachricht",
        formSubmit: "Nachricht senden"
    }
};

// ============= LANGUAGE SWITCHER =============
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    document.getElementById('currentLang').textContent = lang.toUpperCase();
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
    
    Analytics.track('language_change', { language: lang });
}

// ============= DARK MODE =============
const isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    const body = document.body;
    const themeIcon = document.querySelector('#themeToggle i');
    
    body.classList.toggle('dark-mode');
    const isNowDark = body.classList.contains('dark-mode');
    
    localStorage.setItem('darkMode', isNowDark);
    themeIcon.className = isNowDark ? 'fas fa-sun' : 'fas fa-moon';
    
    Analytics.track('theme_toggle', { theme: isNowDark ? 'dark' : 'light' });
}

// ============= SOCIAL SHARING =============
function initSocialSharing() {
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    
    // LinkedIn Share
    document.getElementById('shareLinkedIn').addEventListener('click', () => {
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
        window.open(linkedInUrl, '_blank', 'width=600,height=400');
        Analytics.track('social_share', { platform: 'linkedin' });
    });
    
    // Email Share
    document.getElementById('shareEmail').addEventListener('click', () => {
        const subject = pageTitle;
        const body = `I thought you might be interested in this: ${window.location.href}`;
        window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(body)}`;
        Analytics.track('social_share', { platform: 'email' });
    });
    
    // Copy Link
    document.getElementById('copyLink').addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            const btn = document.getElementById('copyLink');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
            }, 2000);
            Analytics.track('social_share', { platform: 'copy_link' });
        });
    });
}

// ============= MAIN INITIALIZATION =============
document.addEventListener('DOMContentLoaded', () => {
    Analytics.trackPageView();
    
    // Initialize dark mode
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
    
    // Initialize language
    updateLanguage(currentLanguage);
    
    // Initialize social sharing
    initSocialSharing();
    
    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleDarkMode);
    
    // ===== LANGUAGE SWITCHER =====
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            updateLanguage(lang);
            langDropdown.classList.remove('active');
        });
    });
    
    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });
    
    // ===== MODAL FUNCTIONALITY =====
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');
    
    const openModalFunc = () => {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        Analytics.track('modal_open', { modal: 'contact' });
    };
    
    const closeModalFunc = () => {
        contactModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        Analytics.track('modal_close', { modal: 'contact' });
    };
    
    contactBtn.addEventListener('click', openModalFunc);
    closeModal.addEventListener('click', closeModalFunc);
    
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            closeModalFunc();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal.classList.contains('active')) {
            closeModalFunc();
        }
    });
    
    // ===== FORM SUBMISSION =====
    contactForm.addEventListener('submit', (e) => {
        if (!FORMSPREE_ENDPOINT) {
            e.preventDefault();
            alert('Contact form is not configured. Please add your Formspree endpoint.');
            return;
        }
        
        Analytics.track('form_submit', {
            form: 'contact'
        });
    });
    
    // ===== VIDEO PLAYER ANALYTICS =====
    const videoPlayer = document.getElementById('videoPlayer');
    let videoStarted = false;
    let videoWatchTime = 0;
    let videoInterval;
    
    videoPlayer.addEventListener('play', () => {
        if (!videoStarted) {
            Analytics.trackVideoEvent('start', 0);
            videoStarted = true;
        } else {
            Analytics.trackVideoEvent('resume', videoPlayer.currentTime);
        }
        
        videoInterval = setInterval(() => {
            videoWatchTime++;
        }, 1000);
    });
    
    videoPlayer.addEventListener('pause', () => {
        Analytics.trackVideoEvent('pause', videoPlayer.currentTime);
        clearInterval(videoInterval);
    });
    
    videoPlayer.addEventListener('ended', () => {
        Analytics.trackVideoEvent('complete', videoPlayer.duration);
        clearInterval(videoInterval);
    });
    
    videoPlayer.addEventListener('seeked', () => {
        Analytics.trackVideoEvent('seek', videoPlayer.currentTime);
    });
    
    // ===== ANALYTICS TRACKING FOR LINKS =====
    document.querySelectorAll('[data-analytics]').forEach(element => {
        element.addEventListener('click', () => {
            Analytics.trackClick(element);
        });
    });
    
    // ===== SECTION ANIMATION ON SCROLL =====
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.resume-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
    
    // ===== TIMELINE HOVER EFFECTS =====
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftColor = 'var(--secondary-color)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftColor = 'var(--accent-color)';
        });
    });
    
    // ===== TRACK TIME ON PAGE =====
    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage++;
        if (timeOnPage % 30 === 0) {
            Analytics.track('engagement', {
                time_on_page: timeOnPage,
                video_watch_time: videoWatchTime
            });
        }
    }, 1000);
    
    // ===== PAGE VISIBILITY TRACKING =====
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            Analytics.track('page_hidden', { time_on_page: timeOnPage });
        } else {
            Analytics.track('page_visible', { time_on_page: timeOnPage });
        }
    });
    
    console.log('Video Resume page loaded successfully');
});