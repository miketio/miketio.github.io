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
        edu1Detail1: "Overall GPA: 2.2",
        edu1Detail2: "IT Courses GPA: 1.3 (Scientific Programming with Python, Machine Learning for Quantum Scientists, Computational Physics)",
        edu1Detail3: "Physics Courses: Advanced Quantum Theory, Condensed Matter Physics, Quantum Optics (GPA: 2.5)",
        edu2Title: "B.Sc. Applied Math & Physics",
        edu2Org: "Saint-Petersburg State University, Russia",
        edu2Date: "Sep 2019 - Jul 2023",
        edu2Detail1: "Graduated with distinctions (GPA: 4.9/5.0, Top 1%)",
        edu2Detail2: "Awarded an academic scholarship",
        edu2Detail3: "Bachelor Thesis: \"Analysis of numerical models describing the aging of lithium-ion batteries due to the formation of a solid electrolyte interphase layer\"",
        experienceTitle: "Experience",
        exp1Title: "Aerodynamics Team Member",
        exp1Org: "GET Racing, Dortmund, Germany",
        exp1Date: "Jan 2025 - Present",
        exp1Detail1: "Designed advanced aerodynamic components using Creo CAD for Formula Student race cars",
        exp1Detail2: "Manufactured carbon-fiber aero parts, mastering composite materials fabrication",
        exp1Detail3: "Contributed to 30% increase in downforce, helping achieve P23 at FSG 2025",
        exp1Detail4: "Improved manufacturing quality standards and team processes",
        exp2Title: "Research Assistant",
        exp2Org: "University of Bonn, Germany",
        exp2Date: "Aug 2024 - Oct 2024",
        exp2Detail1: "Developed real-time PyQt5 GUI with multi-threaded architecture for laser intensity optimization",
        exp2Detail2: "Applied optimization algorithms (Nelder-Mead, ADAM) for system efficiency and precision",
        exp2Detail3: "Transformed full day of manual setup into one-click automated solution",
        exp2Detail4: "GitHub Project ↗",
        exp3Title: "Logistics Automation Intern",
        exp3Org: "Schneider Electric, St. Petersburg, Russia",
        exp3Date: "Jul 2021 - Sep 2021",
        exp3Detail1: "Automated logistics workflows with VBA, saving 45 minutes/day per teammate",
        exp3Detail2: "Processed SAP data for large-scale inventory management",
        exp3Detail3: "Developed custom Excel-based automation tools for workflow efficiency",
        exp3Detail4: "Gained exposure to enterprise-level ERP systems",
        competitionsTitle: "Competitions & Achievements",
        comp1Title: "DeepRacer Cup (Audi & AWS) - Top 20 Finalist",
        comp1Date: "Aug 2025 - Oct 2025",
        comp1Detail1: "Position 19/400 in autonomous racing with reinforcement learning",
        comp1Detail2: "Optimized action space using Metropolis-Hastings algorithm; ran local PyTorch simulations",
        comp1Detail3: "Deployed and trained models on AWS cloud infrastructure",
        comp1Detail4: "GitHub ↗",
        comp2Title: "Tech Arena - Huawei (Sweden) - Top 7 Finalist",
        comp2Date: "Jul 2025 - Aug 2025",
        comp2Detail1: "AI-enabled SVD operator for wireless communications (128×128 → rank-64)",
        comp2Detail2: "Hybrid CNN & Transformer model, ranked 7/80 participants",
        comp2Detail3: "Optimized for <8M MACs: Approximation error 0.62, Orthogonality error 0.02",
        comp2Detail4: "Addressed real-world wireless communication challenges with practical AI solutions",
        comp3Title: "Tech Arena - Huawei (Nuremberg 2024) - 3rd Place",
        comp3Date: "Sep 2024 - Dec 2024",
        comp3Detail1: "State-of-Charge estimation using Extended Kalman Filter from noisy voltage/current data",
        comp3Detail2: "Tuned parameters with Nelder-Mead optimization for maximum accuracy",
        comp3Detail3: "Achieved maxAE <3%, MSE <5% exceeding competition requirements",
        comp3Detail4: "Applied statistical filtering to real-world battery management system challenges",
        comp4Title: "IFM Hackathon 2025 - 1st Place",
        comp4Date: "Oct 2025",
        comp4Detail1: "RFID initialization app with SAP BTP middleware integration",
        comp4Detail2: "Ultra-fast tag initialization with immediate backend synchronization",
        comp4Detail3: "Built review/delete functionality for post-sync corrections",
        comp5Title: "Bundesliga (DFL) Hackathon - Participant",
        comp5Date: "Feb 2025 - Mar 2025",
        comp5Detail1: "Dynamic pricing model based on Bellman's equation for ticket sales optimization",
        comp5Detail2: "Implemented Monte Carlo simulations to optimize expected revenue",
        comp5Detail3: "Balanced revenue maximization with stadium attendance goals",
        publicationsTitle: "Publications",
        pub1Title: "The Combined Effect of a Corona Discharge and Moisture on Hydrophobicity of Silicone Rubber",
        pub1Authors: "K.D. Poluektova, S.A. Vasilkov, M.I. Tiuterev",
        pub1Date: "IEEE | May 2022",
        pub1Description: "Investigated combined effects of corona discharge and moisture on silicone rubber hydrophobicity, demonstrating complete loss under active electrode and identifying additional affected zones with slower water flow.",
        pub1Link: "IEEE Xplore ↗",
        volunteeringTitle: "Volunteering",
        vol1Title: "Volunteer Staff",
        vol1Org: "Culture x Climate Forum - Entertainment + Culture Pavilion",
        vol1Date: "Jun 2025",
        vol1Detail: "Supported environment-focused international forum on culture and climate action",
        vol2Title: "Volunteer",
        vol2Org: "St. Petersburg International Economic Forum 2022 (SPIEF) - The Roscongress Foundation",
        vol2Date: "May 2022 - Jun 2022",
        vol2Detail1: "Participated in preparing and performing at major international economic forum",
        vol2Detail2: "Supported Science and Technology track sessions",
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
        summaryText: "Ich bin ein angewandter Wissenschaftler und Physik-MSc-Student, der es liebt, komplexe Systeme mit maschinellem Lernen, computergestützter Modellierung oder etwas cleverer Automatisierung zu bändigen. Ich glaube, dass Innovation am schnellsten voranschreitet, wenn Menschen klar sprechen und zusammenarbeiten, um große Fragen in kleine, machbare Schritte zu verwandeln. Selbst inmitten von Code oder Simulationen versuche ich, das allgemeine Ziel im Auge zu behalten.",
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
        edu1Detail1: "Gesamt-Notendurchschnitt: 2,2",
        edu1Detail2: "IT-Kurse Notendurchschnitt: 1,3 (Wissenschaftliches Programmieren mit Python, Machine Learning für Quantenwissenschaftler, Computerphysik)",
        edu1Detail3: "Physikkurse: Fortgeschrittene Quantentheorie, Festkörperphysik, Quantenoptik (Notendurchschnitt: 2,5)",
        edu2Title: "B.Sc. Angewandte Mathematik & Physik",
        edu2Org: "Sankt-Petersburger Staatsuniversität, Russland",
        edu2Date: "Sep 2019 - Jul 2023",
        edu2Detail1: "Abschluss mit Auszeichnung (Notendurchschnitt: 4,9/5,0, Top 1%)",
        edu2Detail2: "Stipendium erhalten",
        edu2Detail3: "Bachelorarbeit: \"Analyse numerischer Modelle zur Beschreibung der Alterung von Lithium-Ionen-Batterien durch die Bildung einer Festelektrolytgrenzschicht\"",
        experienceTitle: "Berufserfahrung",
        exp1Title: "Aerodynamik-Teammitglied",
        exp1Org: "GET Racing, Dortmund, Deutschland",
        exp1Date: "Jan 2025 - Heute",
        exp1Detail1: "Entwurf fortschrittlicher aerodynamischer Komponenten mit Creo CAD für Formula Student Rennwagen",
        exp1Detail2: "Herstellung von Karbonfaser-Aeroteilen, Beherrschung der Verbundwerkstoff-Fertigung",
        exp1Detail3: "Beitrag zu 30% Erhöhung des Abtriebs, Erreichen von P23 bei FSG 2025",
        exp1Detail4: "Verbesserung der Fertigungsqualitätsstandards und Teamprozesse",
        exp2Title: "Wissenschaftlicher Mitarbeiter",
        exp2Org: "Universität Bonn, Deutschland",
        exp2Date: "Aug 2024 - Okt 2024",
        exp2Detail1: "Entwicklung einer Echtzeit-PyQt5-GUI mit Multithread-Architektur für Laserintensitätsoptimierung",
        exp2Detail2: "Anwendung von Optimierungsalgorithmen (Nelder-Mead, ADAM) für Systemeffizienz und Präzision",
        exp2Detail3: "Verwandlung einer ganztägigen manuellen Einrichtung in eine Ein-Klick-Automatisierungslösung",
        exp2Detail4: "GitHub-Projekt ↗",
        exp3Title: "Praktikant Logistikautomatisierung",
        exp3Org: "Schneider Electric, St. Petersburg, Russland",
        exp3Date: "Jul 2021 - Sep 2021",
        exp3Detail1: "Automatisierung von Logistikabläufen mit VBA, Zeitersparnis von 45 Minuten/Tag pro Teammitglied",
        exp3Detail2: "Verarbeitung von SAP-Daten für umfangreiches Bestandsmanagement",
        exp3Detail3: "Entwicklung maßgeschneiderter Excel-basierter Automatisierungstools für Workflow-Effizienz",
        exp3Detail4: "Erfahrung mit ERP-Systemen auf Unternehmensebene gesammelt",
        competitionsTitle: "Wettbewerbe & Erfolge",
        comp1Title: "DeepRacer Cup (Audi & AWS) - Top 20 Finalist",
        comp1Date: "Aug 2025 - Okt 2025",
        comp1Detail1: "Platz 19/400 im autonomen Rennen mit Reinforcement Learning",
        comp1Detail2: "Optimierung des Aktionsraums mit Metropolis-Hastings-Algorithmus; lokale PyTorch-Simulationen durchgeführt",
        comp1Detail3: "Modelle auf AWS-Cloud-Infrastruktur bereitgestellt und trainiert",
        comp1Detail4: "GitHub ↗",
        comp2Title: "Tech Arena - Huawei (Schweden) - Top 7 Finalist",
        comp2Date: "Jul 2025 - Aug 2025",
        comp2Detail1: "KI-gestützter SVD-Operator für drahtlose Kommunikation (128×128 → Rang-64)",
        comp2Detail2: "Hybrides CNN & Transformer-Modell, Platz 7/80 Teilnehmer",
        comp2Detail3: "Optimiert für <8M MACs: Approximationsfehler 0,62, Orthogonalitätsfehler 0,02",
        comp2Detail4: "Bewältigung realer Herausforderungen in der drahtlosen Kommunikation mit praktischen KI-Lösungen",
        comp3Title: "Tech Arena - Huawei (Nürnberg 2024) - 3. Platz",
        comp3Date: "Sep 2024 - Dez 2024",
        comp3Detail1: "State-of-Charge-Schätzung mit erweitertem Kalman-Filter aus verrauschten Spannungs-/Stromdaten",
        comp3Detail2: "Parameteroptimierung mit Nelder-Mead-Optimierung für maximale Genauigkeit",
        comp3Detail3: "Erreichte maxAE <3%, MSE <5% über Wettbewerbsanforderungen hinaus",
        comp3Detail4: "Anwendung statistischer Filterung auf reale Batteriemanagementsystem-Herausforderungen",
        comp4Title: "IFM Hackathon 2025 - 1. Platz",
        comp4Date: "Okt 2025",
        comp4Detail1: "RFID-Initialisierungs-App mit SAP BTP Middleware-Integration",
        comp4Detail2: "Ultraschnelle Tag-Initialisierung mit sofortiger Backend-Synchronisierung",
        comp4Detail3: "Review-/Löschfunktionalität für Korrekturen nach der Synchronisierung entwickelt",
        comp5Title: "Bundesliga (DFL) Hackathon - Teilnehmer",
        comp5Date: "Feb 2025 - Mär 2025",
        comp5Detail1: "Dynamisches Preismodell basierend auf Bellman-Gleichung für Ticketverkaufsoptimierung",
        comp5Detail2: "Monte-Carlo-Simulationen zur Optimierung des erwarteten Umsatzes implementiert",
        comp5Detail3: "Ausgleich zwischen Umsatzmaximierung und Stadiongastziele",
        publicationsTitle: "Veröffentlichungen",
        pub1Title: "Die kombinierte Wirkung einer Koronaentladung und Feuchtigkeit auf die Hydrophobie von Silikonkautschuk",
        pub1Authors: "K.D. Poluektova, S.A. Vasilkov, M.I. Tiuterev",
        pub1Date: "IEEE | Mai 2022",
        pub1Description: "Untersuchung der kombinierten Auswirkungen von Koronaentladung und Feuchtigkeit auf die Hydrophobie von Silikonkautschuk, mit Nachweis vollständigen Verlusts unter der aktiven Elektrode und Identifizierung zusätzlicher betroffener Zonen mit langsamerem Wasserfluss.",
        pub1Link: "IEEE Xplore ↗",
        volunteeringTitle: "Freiwilligenarbeit",
        vol1Title: "Freiwilliger Mitarbeiter",
        vol1Org: "Culture x Climate Forum - Entertainment + Culture Pavilion",
        vol1Date: "Jun 2025",
        vol1Detail: "Unterstützung eines umweltorientierten internationalen Forums zu Kultur und Klimaschutz",
        vol2Title: "Freiwilliger",
        vol2Org: "St. Petersburger Internationales Wirtschaftsforum 2022 (SPIEF) - The Roscongress Foundation",
        vol2Date: "Mai 2022 - Jun 2022",
        vol2Detail1: "Beteiligung an der Vorbereitung und Durchführung eines großen internationalen Wirtschaftsforums",
        vol2Detail2: "Unterstützung der Sitzungen des Wissenschafts- und Technologie-Tracks",
        modalTitle: "Kontakt aufnehmen",
        formName: "Vollständiger Name",
        formEmail: "E-Mail-Adresse",
        formMessage: "Nachricht",
        formSubmit: "Nachricht senden"
    }
};

// Google Analytics Event Tracking
function trackEvent(eventName, eventCategory, eventLabel) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': eventCategory,
            'event_label': eventLabel
        });
    }
}

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
    
    // Track language change
    trackEvent('language_change', 'Settings', lang);
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
    
    // Track theme change
    trackEvent('theme_change', 'Settings', isNowDark ? 'dark' : 'light');
}

// Copy to clipboard helper
function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = buttonElement.innerHTML;
        buttonElement.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            buttonElement.innerHTML = originalHTML;
        }, 2000);
        
        // Track copy action
        trackEvent('copy_to_clipboard', 'Interaction', text.substring(0, 20));
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
        trackEvent('social_click', 'Social', 'LinkedIn');
    });
    
    // GitHub - Redirect to profile
    document.getElementById('shareGitHub').addEventListener('click', () => {
        window.open('https://github.com/miketio', '_blank');
        trackEvent('social_click', 'Social', 'GitHub');
    });
    
    // Phone - Copy phone number
    document.getElementById('copyPhone').addEventListener('click', (e) => {
        const phoneNumber = '+4915731323284';
        copyToClipboard(phoneNumber, e.currentTarget);
        trackEvent('contact_action', 'Contact', 'Phone Copy');
    });
    
    // Copy Link - Copy current page URL
    document.getElementById('copyLink').addEventListener('click', (e) => {
        copyToClipboard(window.location.href, e.currentTarget);
        trackEvent('share_action', 'Social', 'Copy Link');
    });
}

// Contact Form with Formspree
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const modal = document.getElementById('contactModal');
    
    // Set form action from config
    const formEndpoint = window.FORMSPREE_ENDPOINT || 'https://formspree.io/f/xgvrvaoa';
    form.setAttribute('action', formEndpoint);
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('.btn-submit');
        const originalText = submitButton.textContent;
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Create JSON object from form data
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            message: form.querySelector('#message').value
        };
        
        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.innerHTML = '<p style="color: #27ae60; margin-top: 1rem;">✓ Message sent successfully!</p>';
                form.reset();
                
                // Track successful form submission
                trackEvent('form_submit', 'Contact', 'Success');
                
                // Close modal after 2 seconds
                setTimeout(() => {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    formStatus.innerHTML = '';
                }, 2000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Form submission failed');
            }
        } catch (error) {
            console.error('Form error:', error);
            formStatus.innerHTML = '<p style="color: #e74c3c; margin-top: 1rem;">✗ Failed to send message. Please try again.</p>';
            
            // Track failed form submission
            trackEvent('form_submit', 'Contact', 'Error');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}

// Video Analytics
function initVideoTracking() {
    const video = document.getElementById('videoPlayer');
    let videoPlayed = false;
    let video25 = false;
    let video50 = false;
    let video75 = false;
    
    video.addEventListener('play', () => {
        if (!videoPlayed) {
            trackEvent('video_play', 'Video', 'Started');
            videoPlayed = true;
        }
    });
    
    video.addEventListener('pause', () => {
        trackEvent('video_pause', 'Video', 'Paused');
    });
    
    video.addEventListener('ended', () => {
        trackEvent('video_complete', 'Video', 'Completed');
    });
    
    video.addEventListener('timeupdate', () => {
        const percent = (video.currentTime / video.duration) * 100;
        
        if (percent >= 25 && !video25) {
            trackEvent('video_progress', 'Video', '25%');
            video25 = true;
        }
        if (percent >= 50 && !video50) {
            trackEvent('video_progress', 'Video', '50%');
            video50 = true;
        }
        if (percent >= 75 && !video75) {
            trackEvent('video_progress', 'Video', '75%');
            video75 = true;
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Track page view
    trackEvent('page_view', 'Engagement', 'Initial Load');
    
    // Apply saved dark mode preference
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
    
    // Apply saved language
    updateLanguage(currentLanguage);
    
    // Initialize all features
    initSocialSharing();
    initContactForm();
    initVideoTracking();
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
    
    // Track download button click
    document.querySelector('[data-analytics="download-cv"]').addEventListener('click', () => {
        trackEvent('download_cv', 'Downloads', 'PDF Resume');
    });
    
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
        trackEvent('modal_open', 'Interaction', 'Contact Form');
    };
    
    const closeModalFunc = () => {
        contactModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        trackEvent('modal_close', 'Interaction', 'Contact Form');
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