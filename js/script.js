// This is a comment
// Function to update content based on current language
        function updateContent() {
          document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = i18next.t(key);
          });
          
          // Update active language button
          document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
          });
          document.querySelector(`.lang-btn[onclick="changeLanguage('${i18next.language}')"]`).classList.add('active');
        }
        
        // Function to change language
        window.changeLanguage = function(lng) {
          i18next.changeLanguage(lng, (err, t) => {
            if (err) return console.error('something went wrong loading', err);
            updateContent();
          });
        };

        document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu-toggle');
    const navLinks = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Optional: Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});
// Initialize i18next for internationalization
        i18next
          .use(i18nextBrowserLanguageDetector)
          .init({
            fallbackLng: 'en',
            debug: false,
            resources: {
              en: {
                translation: {
                  "nav.home": "Home",
                  "nav.about": "About",
                  "nav.services": "Services",
                  "nav.mechanics": "Mechanics",
                  "nav.testimonials": "Testimonials",
                  "nav.resources": "Resources",
                  "nav.community": "Community",
                  "nav.faq": "FAQ",
                  "nav.contact": "Contact",
                  "nav.logo": "Magari",
                  
                  "hero.title": "We Care, We Serve, and We Deliver.",
                  "hero.subtitle": "We're Here for You",
                  "hero.description": "Whether you have questions, need help getting started, or want to learn more — reach out anytime.",
                  "hero.button": "Get in Touch",
                  
                  "about.tagline": "HOW IT WORKS",
                  "about.title": "We'll help you because we Prioritize You and your Car's Health.",
                  "about.description": "Browse mechanics, book a session, and start your repair journey with trusted professionals.",
                  "about.button": "Find A Mechanic",
                  
                  "services.title": "The path to your car Well-being",
                  "services.subtitle": "Discover expert guidance for a healthier engine.",
                  "services.card1.title": "One-on-One consultation",
                  "services.card1.desc": "In-person consultation sessions with qualified mechanics.",
                  "services.card1.button": "Learn more",
                  "services.card2.title": "Get your car sorted",
                  "services.card2.desc": "Are you a first time car owner? Worry not!",
                  "services.card2.button": "Learn more about cars",
                  "services.card3.title": "Free car clinic",
                  "services.card3.desc": "Personalized guidance for efficient service and car care.",
                  "services.card3.button": "Learn more",
                  
                  "howitworks.title": "How It Works",
                  "howitworks.step1": "Find a Mechanic",
                  "howitworks.step1desc": "Connect with licensed mechanics, dealers, and car buyers.",
                  "howitworks.step2": "Book a Session",
                  "howitworks.step2desc": "Schedule an appointment at a time that works for you.",
                  "howitworks.step3": "Get your car checked",
                  "howitworks.step3desc": "Drive without worries!",
                  "howitworks.button": "Get Started",
                  
                  "testimonials.title": "TESTIMONIALS",
                  "testimonials.subtitle": "What Our Clients Are Saying",
                  "testimonials.description": "Positive experiences from users who have benefited from free car clinics.",
                  "testimonials.card1": "\"Magari made it so easy to find the right mechanic for me. The sessions have truly made car servicing easy, and I feel more in control of my car than ever before!\"",
                  "testimonials.client1": "Client since 2022",
                  "testimonials.card2": "\"I was struggling finding a mechanic who understands my vehicle properly, but magari have helped me find everything cars.\"",
                  "testimonials.client2": "Client since 2021",
                  "testimonials.card3": "\"The convenience and quality of care I've received from magari is unmatched. My technician understands what needs to be done perfectly and has helped me maintain my car's performance.\"",
                  "testimonials.client3": "Client since 2023",
                  
                  "partners.title": "Our Partners",
                  
                  "faq.title": "Frequently Asked Questions",
                  "faq.subtitle": "Find answers to common questions about our services.",
                  "faq.q1": "How do I book a session with a mechanic?",
                  "faq.a1": "You can book a repair session through our website by selecting a services and choosing an available time slot that works for you. Alternatively, you can call our support line for assistance with booking.",
                  "faq.q2": "Do you offer car detailing services?",
                  "faq.a2": "Yes, we offer car detailing services.",
                  "faq.q3": "Do you sell cars?",
                  "faq.a3": "Yes we do sell new and old cars, we also sell cars on behalf of our customers.",
                  
                  "resources.title": "Resources for car maintenance",
                  "resources.subtitle": "We provide a variety of resources to help you navigate your car journey.",
                  "resources.card1.title": "Articles & Guides",
                  "resources.card1.desc": "Practical care tips for your car.",
                  "resources.card1.button": "Explore",
                  "resources.card2.title": "Driving tips",
                  "resources.card2.desc": "Audio sessions on good driving practices and safety.",
                  "resources.card2.button": "Explore",
                  "resources.card3.title": "Webinars & Workshops",
                  "resources.card3.desc": "Live sessions on how to get good performance from your car.",
                  "resources.card3.button": "Explore",
                  
                  "community.title": "You're Not Alone on This Journey",
                  "community.subtitle": "Anything cars count on us we listen, we care and we deliver.",
                  "community.button": "Join the Community",
                  
                  "contact.title": "Get in Touch",
                  "contact.info": "Contact Details:",
                  "contact.response": "We typically respond within 12 hours.",
                  "contact.formtitle": "Send Us a Message",
                  "contact.email": "Email",
                  "contact.message": "Message",
                  "contact.send": "Send Message",
                  
                  "footer.magari": "Magari",
                  "footer.tagline": "We help, We care.",
                  "footer.quicklinks": "Quick Links",
                  "footer.support": "Support",
                  "footer.newsletter": "Subscribe to our newsletter for car caring tips and updates.",
                  "footer.subscribebtn": "Subscribe",
                  "footer.privacy": "Privacy Policy",
                  "footer.terms": "Terms of Use",
                  "footer.guidelines": "Community Guidelines",
                  "footer.copyright": "© 2025 RunTechnologies. All rights reserved."
                }
              },
              fr: {
                translation: {
                  "nav.home": "Accueil",
                  "nav.about": "À propos",
                  "nav.services": "Services",
                  "nav.mechanics": "Mécaniciens",
                  "nav.testimonials": "Témoignages",
                  "nav.resources": "Ressources",
                  "nav.community": "Communauté",
                  "nav.faq": "FAQ",
                  "nav.contact": "Contact",
                  "nav.logo": "Magari",
                  
                  "hero.title": "Nous prenons soin, nous servons et nous livrons.",
                  "hero.subtitle": "Nous sommes là pour vous",
                  "hero.description": "Que vous ayez des questions, besoin d'aide pour démarrer ou que vous souhaitiez en savoir plus, contactez-nous à tout moment.",
                  "hero.button": "Contactez-nous",
                  
                  "about.tagline": "COMMENT ÇA MARCHE",
                  "about.title": "Nous vous aiderons car nous vous privilégions, vous et la santé de votre voiture.",
                  "about.description": "Parcourez les mécaniciens, réservez une séance et commencez votre réparation avec des professionnels de confiance.",
                  "about.button": "Trouver un mécanicien",
                  
                  "services.title": "Le chemin vers le bien-être de votre voiture",
                  "services.subtitle": "Découvrez des conseils d'experts pour un moteur plus sain.",
                  "services.card1.title": "Consultation individuelle",
                  "services.card1.desc": "Séances de consultation en personne avec des mécaniciens qualifiés.",
                  "services.card1.button": "En savoir plus",
                  "services.card2.title": "Faites réparer votre voiture",
                  "services.card2.desc": "Vous êtes un nouveau propriétaire de voiture ? Ne vous inquiétez pas !",
                  "services.card2.button": "En savoir plus sur les voitures",
                  "services.card3.title": "Clinique automobile gratuite",
                  "services.card3.desc": "Conseils personnalisés pour un service efficace et un entretien automobile.",
                  "services.card3.button": "En savoir plus",
                  
                  "howitworks.title": "Comment ça marche",
                  "howitworks.step1": "Trouver un mécanicien",
                  "howitworks.step1desc": "Connectez-vous avec des mécaniciens, concessionnaires et acheteurs de voitures agréés.",
                  "howitworks.step2": "Réserver une séance",
                  "howitworks.step2desc": "Planifiez un rendez-vous à un moment qui vous convient.",
                  "howitworks.step3": "Faites vérifier votre voiture",
                  "howitworks.step3desc": "Conduisez sans soucis !",
                  "howitworks.button": "Commencer",
                  
                  "testimonials.title": "TÉMOIGNAGES",
                  "testimonials.subtitle": "Ce que disent nos clients",
                  "testimonials.description": "Expériences positives d'utilisateurs ayant bénéficié de nos cliniques automobiles gratuites.",
                  "testimonials.card1": "\"Magari a rendu très facile de trouver le bon mécanicien pour moi. Les séances ont vraiment simplifié l'entretien de la voiture, et je me sens plus en contrôle de ma voiture que jamais !\"",
                  "testimonials.client1": "Client depuis 2022",
                  "testimonials.card2": "\"J'avais du mal à trouver un mécanicien qui comprenne correctement mon véhicule, mais magari m'a aidé à trouver tout ce qui concerne les voitures.\"",
                  "testimonials.client2": "Client depuis 2021",
                  "testimonials.card3": "\"La commodité et la qualité des soins que j'ai reçus de magari sont inégalées. Mon technicien comprend parfaitement ce qui doit être fait et m'a aidé à maintenir les performances de ma voiture.\"",
                  "testimonials.client3": "Client depuis 2023",
                  
                  "partners.title": "Nos partenaires",
                  
                  "faq.title": "Questions fréquemment posées",
                  "faq.subtitle": "Trouvez des réponses aux questions courantes sur nos services.",
                  "faq.q1": "Comment réserver une séance avec un mécanicien ?",
                  "faq.a1": "Vous pouvez réserver une séance de réparation via notre site en sélectionnant un service et en choisissant un créneau horaire disponible qui vous convient. Vous pouvez également appeler notre ligne d'assistance pour obtenir de l'aide pour la réservation.",
                  "faq.q2": "Proposez-vous des services de nettoyage automobile ?",
                  "faq.a2": "Oui, nous proposons des services de nettoyage automobile.",
                  "faq.q3": "Vendez-vous des voitures ?",
                  "faq.a3": "Oui, nous vendons des voitures neuves et d'occasion, nous vendons également des voitures pour le compte de nos clients.",
                  
                  "resources.title": "Ressources pour l'entretien automobile",
                  "resources.subtitle": "Nous proposons une variété de ressources pour vous aider dans votre parcours automobile.",
                  "resources.card1.title": "Articles & Guides",
                  "resources.card1.desc": "Conseils pratiques pour l'entretien de votre voiture.",
                  "resources.card1.button": "Explorer",
                  "resources.card2.title": "Conseils de conduite",
                  "resources.card2.desc": "Séances audio sur les bonnes pratiques et la sécurité au volant.",
                  "resources.card2.button": "Explorer",
                  "resources.card3.title": "Webinaires & Ateliers",
                  "resources.card3.desc": "Sessions en direct sur la façon d'obtenir de bonnes performances de votre voiture.",
                  "resources.card3.button": "Explorer",
                  
                  "community.title": "Vous n'êtes pas seul dans cette aventure",
                  "community.subtitle": "Pour tout ce qui concerne les voitures, comptez sur nous : nous écoutons, nous prenons soin et nous livrons.",
                  "community.button": "Rejoindre la communauté",
                  
                  "contact.title": "Contactez-nous",
                  "contact.info": "Coordonnées :",
                  "contact.response": "Nous répondons généralement dans les 12 heures.",
                  "contact.formtitle": "Envoyez-nous un message",
                  "contact.email": "Email",
                  "contact.message": "Message",
                  "contact.send": "Envoyer le message",
                  
                  "footer.magari": "Magari",
                  "footer.tagline": "Nous aidons, nous prenons soin.",
                  "footer.quicklinks": "Liens rapides",
                  "footer.support": "Assistance",
                  "footer.newsletter": "Abonnez-vous à notre newsletter pour des conseils d'entretien automobile et des mises à jour.",
                  "footer.subscribebtn": "S'abonner",
                  "footer.privacy": "Politique de confidentialité",
                  "footer.terms": "Conditions d'utilisation",
                  "footer.guidelines": "Règles de la communauté",
                  "footer.copyright": "© 2025 RunTechnologies. Tous droits réservés."
                }
              },
              sw: {
                translation: {
                  "nav.home": "Nyumbani",
                  "nav.about": "Kuhusu",
                  "nav.services": "Huduma",
                  "nav.mechanics": "Fundi",
                  "nav.testimonials": "Ushuhuda",
                  "nav.resources": "Rasilimali",
                  "nav.community": "Jumuiya",
                  "nav.faq": "Maswali",
                  "nav.contact": "Mawasiliano",
                  "nav.logo": "Magari",
                  
                  "hero.title": "Tunajali, Tunahudumu, na Tunatuma.",
                  "hero.subtitle": "Tuko Hapa Kwa Ajili Yako",
                  "hero.description": "Ikiwa una maswali, unahitaji usaidizi kuanza, au unataka kujifunza zaidi — wasiliana nasi wakati wowote.",
                  "hero.button": "Wasiliana Nasi",
                  
                  "about.tagline": "JINSI INAVYOFANYA KAZI",
                  "about.title": "Tutakusaidia kwa sababu Tunakuprioritize Wewe na Afya ya Gari Lako.",
                  "about.description": "Vinjari fundi, weka kikao, na uanze safari yako ya kukarabati gari na wataalamu wa kuaminika.",
                  "about.button": "Tafuta Fundi",
                  
                  "services.title": "Njia ya ustawi wa gari lako",
                  "services.subtitle": "Gundua mwongozo wa wataalamu kwa injini yenye afya zaidi.",
                  "services.card1.title": "Majadiliano ya moja kwa moja",
                  "services.card1.desc": "Vikao vya majadiliano vya uso kwa uso na fundi wenye sifa.",
                  "services.card1.button": "Jifunze zaidi",
                  "services.card2.title": "Pata gari lako kuwekwa sawa",
                  "services.card2.desc": "Je, wewe ni mmiliki wa gari wa mara ya kwanza? Usiwe na wasiwasi!",
                  "services.card2.button": "Jifunze zaidi kuhusu magari",
                  "services.card3.title": "Kliniki ya magari ya bure",
                  "services.card3.desc": "Mwongozo maalum kwa huduma bora na utunzaji wa gari.",
                  "services.card3.button": "Jifunze zaidi",
                  
                  "howitworks.title": "Jinsi Inavyofanya Kazi",
                  "howitworks.step1": "Tafuta fundi",
                  "howitworks.step1desc": "Ungana na fundi stahiki, wauzaji na wanunuzi wa magari.",
                  "howitworks.step2": "Panga kikao",
                  "howitworks.step2desc": "Panga mkutano kwa wakati unaokufaa.",
                  "howitworks.step3": "Pata gari lako kukaguliwa",
                  "howitworks.step3desc": "Endesha bila wasiwasi!",
                  "howitworks.button": "Anza",
                  
                  "testimonials.title": "USHUHUDA",
                  "testimonials.subtitle": "Wateja wetu wanachosema",
                  "testimonials.description": "Uzoefu chanya kutoka kwa watumiaji waliopata faida kutoka kwa kliniki za magari za bure.",
                  "testimonials.card1": "\"Magari ilinifanya niwe rahisi kupata fundi sahihi kwangu. Vikao vimefanya huduma za gari kuwa rahisi, na nahisi nina udhibiti zaidi wa gari yangu kuliko milele!\"",
                  "testimonials.client1": "Mteja tangu 2022",
                  "testimonials.card2": "\"Nilikuwa nikikumbwa kupata fundi anayeelewa gari langu ipasavyo, lakini magari zimenisaidia kupata kila kitu kuhusu magari.\"",
                  "testimonials.client2": "Mteja tangu 2021",
                  "testimonials.card3": "\"Urahisi na ubora wa huduma niliyopokea kutoka kwa magari hauna kifani. Fundi wangu anaelewa kile kinachohitajika kufanywa kikamilifu na amenisaidia kudumisha utendaji wa gari yangu.\"",
                  "testimonials.client3": "Mteja tangu 2023",

                  "partners.title": "Washirika Wetu",
                  
                  "faq.title": "Maswali Yanayoulizwa Mara kwa Mara",
                  "faq.subtitle": "Pata majibu ya maswali ya kawaida kuhusu huduma zetu.",
                  "faq.q1": "Ninawezaje kupanga kikao na fundi?",
                  "faq.a1": "Unaweza kupanga kikao cha ukarabati kupitia tovuti yetu kwa kuchagua huduma na kuchagua nafasi ya muda inayopatikana inayokufaa. Vinginevyo, unaweza kupiga simu kwa mstari wetu wa msaada kwa usaidizi wa upangaji.",
                  "faq.q2": "Je, unatoa huduma za kuosha magari?",
                  "faq.a2": "Ndio, tunatoa huduma za kuosha magari.",
                  "faq.q3": "Je, unauza magari?",
                  "faq.a3": "Ndio, tunauza magari mapya na ya zamani, pia tunauza magari kwa niaba ya wateja wetu.",
                  
                  "resources.title": "Rasilimali kwa matengenezo ya gari",
                  "resources.subtitle": "Tunatoa aina mbalimbali za rasilimali kukusaidia katika safari yako ya gari.",
                  "resources.card1.title": "Makala & Miongozo",
                  "resources.card1.desc": "Vidokezo vyenye manufaa kwa ajili ya kutumikia gari lako.",
                  "resources.card1.button": "Chunguza",
                  "resources.card2.title": "Vidokezo vya kuendesha gari",
                  "resources.card2.desc": "Vikao vya sauti kuhusu mazoea mazuri ya kuendesha gari na usalama.",
                  "resources.card2.button": "Chunguza",
                  "resources.card3.title": "Semina za Mtandaoni na Mafunzo",
                  "resources.card3.desc": "Vikao vya moja kwa moja juu ya jinsi ya kupata utendaji mzuri kutoka kwa gari lako.",
                  "resources.card3.button": "Chunguza",
                  
                  "community.title": "Hauko Peke Yako Katika Safari Hii",
                  "community.subtitle": "Kwa chochote kuhusu magari, tategemea sisi: tunasikiliza, tunajali na tunatuma.",
                  "community.button": "Jiunge na Jumuiya",
                  
                  "contact.title": "Wasiliana Nasi",
                  "contact.info": "Maelezo ya Mawasiliano:",
                  "contact.response": "Kwa kawaida hujibu ndani ya saa 12.",
                  "contact.formtitle": "Tutume Ujumbe",
                  "contact.email": "Barua Pepe",
                  "contact.message": "Ujumbe",
                  "contact.send": "Tuma Ujumbe",
                  
                  "footer.magari": "Magari",
                  "footer.tagline": "Tunasaidia, Tunajali.",
                  "footer.quicklinks": "Viungo vya Haraka",
                  "footer.support": "Msaada",
                  "footer.newsletter": "Jiandikishe kwenye barua pepe yetu kwa vidokezo vya utunzaji wa gari na sasisho.",
                  "footer.subscribebtn": "Jiandikishe",
                  "footer.privacy": "Sera ya Faragha",
                  "footer.terms": "Sheria na Masharti",
                  "footer.guidelines": "Miongozo ya Jumuiya",
                  "footer.copyright": "© 2025 RunTechnologies. Haki zote zimehifadhiwa."
                }
              }
            }
          }, function(err, t) {
            updateContent();
          });
        
        
        // Toggle mobile menu
        document.querySelector('.menu-toggle').addEventListener('click', function() {
          document.querySelector('.nav-links').classList.toggle('show');
        });
        
        // Dark mode toggle
        document.getElementById('darkModeToggle').addEventListener('click', function() {
          document.body.classList.toggle('dark-mode');
        });
        
        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
          question.addEventListener('click', () => {
            const item = question.parentNode;
            item.classList.toggle('active');
          });
        });
        
        // Testimonial navigation
        const testimonialsContainer = document.querySelector('.testimonials-container');
        const prevArrow = document.querySelector('.nav-arrow:first-child');
        const nextArrow = document.querySelector('.nav-arrow:last-child');
        
        nextArrow.addEventListener('click', () => {
          testimonialsContainer.scrollBy({ left: 350, behavior: 'smooth' });
        });
        
        prevArrow.addEventListener('click', () => {
          testimonialsContainer.scrollBy({ left: -350, behavior: 'smooth' });
        });
        
        // Form submission
        document.getElementById('messageForm').addEventListener('submit', function(e) {
          e.preventDefault();
          alert(i18next.t('contact.thanks'));
          this.reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
              });
              
              // Close mobile menu if open
              document.querySelector('.nav-links').classList.remove('show');
            }
          });
        });

        // Initialize the page with the default language
        document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('.partner-carousel');
            const pauseBtn = document.getElementById('pauseBtn');
            const resumeBtn = document.getElementById('resumeBtn');
            
            // Pause animation on hover
            carousel.addEventListener('mouseenter', () => {
                carousel.style.animationPlayState = 'paused';
            });
            
            carousel.addEventListener('mouseleave', () => {
                carousel.style.animationPlayState = 'running';
            });
            
            // Button controls
            pauseBtn.addEventListener('click', () => {
                carousel.style.animationPlayState = 'paused';
            });
            
            resumeBtn.addEventListener('click', () => {
                carousel.style.animationPlayState = 'running';
            });
            
            // Add subtle parallax effect on mouse move
            document.addEventListener('mousemove', (e) => {
                const x = (window.innerWidth / 2 - e.pageX) / 25;
                const y = (window.innerHeight / 2 - e.pageY) / 25;
                document.querySelector('.containe').style.transform = `translate(${x}px, ${y}px)`;
            });
        });