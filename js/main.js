// ===================================
// GoodHabit Landing Page - JavaScript
// ===================================

(function() {
    'use strict';

    // ===================================
    // Variables
    // ===================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    // ===================================
    // Navigation Mobile
    // ===================================
    function toggleMobileMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Empêcher le scroll du body quand le menu est ouvert
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    function closeMobileMenu() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event Listeners pour le menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Si c'est un lien d'ancre (commence par #)
            if (this.getAttribute('href').startsWith('#')) {
                closeMobileMenu();
            }
        });
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // ===================================
    // Smooth Scroll pour les ancres
    // ===================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Vérifier si c'est une ancre interne
            if (href.startsWith('#') && href.length > 1) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Calculer la hauteur du header pour l'offset
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===================================
    // FAQ Accordion
    // ===================================
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Fermer tous les autres items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Ouvrir l'item cliqué s'il n'était pas déjà ouvert
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // ===================================
    // Animations au scroll
    // ===================================
    function initScrollAnimations() {
        const elementsToAnimate = document.querySelectorAll(
            '.feature-card, .benefit-item, .testimonial-card, .step'
        );

        elementsToAnimate.forEach(element => {
            element.classList.add('fade-in');
        });
    }

    function checkScrollAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');
        const windowHeight = window.innerHeight;

        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // Distance avant que l'élément soit visible

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    // ===================================
    // Header qui change au scroll
    // ===================================
    function handleHeaderScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }

        lastScrollTop = scrollTop;
    }

    // ===================================
    // Gestion des événements de scroll
    // ===================================
    let scrollTimeout;
    function handleScroll() {
        // Utiliser requestAnimationFrame pour de meilleures performances
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                checkScrollAnimations();
                if (header) {
                    handleHeaderScroll();
                }
                scrollTimeout = null;
            }, 10);
        }
    }

    // ===================================
    // Détection du support du touch
    // ===================================
    function isTouchDevice() {
        return (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0));
    }

    // Ajouter une classe au body si c'est un appareil tactile
    if (isTouchDevice()) {
        document.body.classList.add('touch-device');
    }

    // ===================================
    // Amélioration de l'accessibilité
    // ===================================
    
    // Gérer la navigation au clavier pour le menu
    if (menuToggle) {
        menuToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMobileMenu();
            }
        });
    }

    // Gérer la touche Échap pour fermer le menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
            menuToggle.focus();
        }
    });

    // Améliorer l'accessibilité des FAQ
    faqQuestions.forEach((question, index) => {
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', `faq-answer-${index}`);
        
        const answer = question.nextElementSibling;
        if (answer) {
            answer.setAttribute('id', `faq-answer-${index}`);
            answer.setAttribute('role', 'region');
        }

        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    });

    // ===================================
    // Performance - Lazy Loading des images
    // ===================================
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ===================================
    // Initialisation
    // ===================================
    function init() {
        // Initialiser les animations au scroll
        initScrollAnimations();
        checkScrollAnimations();

        // Ajouter l'écouteur de scroll
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Lazy loading des images si supporté
        if ('IntersectionObserver' in window) {
            lazyLoadImages();
        }

        // Vérifier les animations au chargement
        setTimeout(checkScrollAnimations, 100);

        console.log('GoodHabit Landing Page initialisée avec succès! 🎉');
    }

    // ===================================
    // Démarrage quand le DOM est prêt
    // ===================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ===================================
    // Gestion du redimensionnement
    // ===================================
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Fermer le menu mobile si on passe en desktop
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
            // Recalculer les animations
            checkScrollAnimations();
        }, 250);
    });

    // ===================================
    // Analytics et tracking (optionnel)
    // ===================================
    
    // Tracker les clics sur les boutons de téléchargement
    const downloadButtons = document.querySelectorAll('a[href*="app"], a[href*="play"]');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            console.log(`Bouton de téléchargement cliqué: ${buttonText}`);
            // Ici vous pouvez ajouter votre code de tracking (Google Analytics, etc.)
        });
    });

    // Tracker les clics sur les liens sociaux
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.getAttribute('aria-label');
            console.log(`Lien social cliqué: ${platform}`);
            // Ici vous pouvez ajouter votre code de tracking
        });
    });

    // ===================================
    // Détection de la préférence de mouvement réduit
    // ===================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Désactiver les animations si l'utilisateur préfère réduire le mouvement
        document.body.classList.add('reduced-motion');
    }

    // ===================================
    // Amélioration progressive
    // ===================================
    
    // Ajouter une classe pour indiquer que JavaScript est actif
    document.documentElement.classList.add('js-enabled');

})();
