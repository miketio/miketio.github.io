// Complete translations
const translations = {
    en: {
        headerLogo: "Interactive CV",
        downloadCV: "DOWNLOAD PDF",
        getInTouch: "GET IN TOUCH",
        videoNotSupported: "Your browser does not support the video tag.",
        profileTitle: "University of Bonn Student | Physics MSc",
        aboutTitle: "About Me",
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
        headerLogo: "Interaktiver Lebenslauf",
        downloadCV: "PDF HERUNTERLADEN",
        getInTouch: "KONTAKT AUFNEHMEN",
        videoNotSupported: "Ihr Browser unterstützt das Video-Tag nicht.",
        profileTitle: "Universität Bonn Student | Physik MSc",
        aboutTitle: "Über Mich",
        summaryText: "Ich bin ein angewandter Wissenschaftler und Physik-MSc-Student, der es liebt, komplexe Systeme mit maschinellem Lernen, computergestützter Modellierung oder etwas cleverer Automatisierung zu bändigen. Ich glaube, dass Innovation am schnellsten voranschreitet, wenn Menschen klar sprechen und zusammenarbeiten, um große Fragen in kleine, machbare Schritte zu verwandeln.",
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
        exp2Detail1: "Automatisierung des Laser-Experimentaufbaus mit Python/PyQt5",
        exp2Detail2: "Anwendung von Optimierungsmethoden (Nelder-Mead, Adam)",
        competitionsTitle: "Wettbewerbe & Erfolge",
        comp1Title: "DeepRacer Cup (Audi & AWS) - Top 20 Finalist",
        comp1Date: "Aug 2025 - Okt 2025",
        comp1Detail: "Platz 19/400 im autonomen Rennen",
        comp2Title: "Tech Arena - Huawei (Schweden) - Top 7 Finalist",
        comp2Date: "Jul 2025 - Aug 2025",
        comp2Detail: "KI-gestützter SVD-Operator",
        comp3Title: "Tech Arena - Huawei (Nürnberg) - 3. Platz",
        comp3Date: "Sep 2024 - Jan 2025",
        comp3Detail: "State-of-Charge-Schätzung",
        comp4Title: "IFM Hackathon 2025 - 1. Platz",
        comp4Detail: "RFID-Initialisierungs-App",
        modalTitle: "Kontakt aufnehmen",
        formName: "Vollständiger Name",
        formEmail: "E-Mail-Adresse",
        formMessage: "Nachricht",
        formSubmit: "Nachricht senden"
    }
};

// Language management
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
}

// Dark mode
const isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    const body = document.body;
    const themeIcon = document.querySelector('#themeToggle i');
    
    body.classList.toggle('dark-mode');
    const isNowDark = body.classList.contains('dark-mode');
    
    localStorage.setItem('darkMode', isNowDark);
    themeIcon.className = isNowDark ? 'fas fa-sun' : 'fas fa-moon';
}

// Copy to clipboard helper
function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = buttonElement.innerHTML;
        buttonElement.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            buttonElement.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy to clipboard');
    });
}

// Social sharing
function initSocialSharing() {
    // LinkedIn - Redirect to profile
    document.getElementById('shareLinkedIn').addEventListener('click', () => {
        window.open('https://linkedin.com/in/tiuterevmt', '_blank');
    });
    
    // GitHub - Redirect to profile
    document.getElementById('shareGitHub').addEventListener('click', () => {
        window.open('https://github.com/miketio', '_blank');
    });
    
    // Phone - Copy phone number
    document.getElementById('copyPhone').addEventListener('click', (e) => {
        const phoneNumber = '+4915731323284';
        copyToClipboard(phoneNumber, e.currentTarget);
    });
    
    // Copy Link - Copy current page URL
    document.getElementById('copyLink').addEventListener('click', (e) => {
        copyToClipboard(window.location.href, e.currentTarget);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved dark mode preference
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
    
    // Apply saved language
    updateLanguage(currentLanguage);
    
    // Initialize social sharing
    initSocialSharing();
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
    
    // Language switcher
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
    
    // Modal functionality
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    
    const openModalFunc = () => {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    const closeModalFunc = () => {
        contactModal.classList.remove('active');
        document.body.style.overflow = 'auto';
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
});