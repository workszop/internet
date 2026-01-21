/**
 * What Happens When You Enter a URL
 * Interactive Educational Web App
 * 
 * Combined script with translations and i18n functionality
 */

// ============================================================================
// Translations Module
// ============================================================================

const translations = {
    en: {
        // Page meta
        page_title: "What Happens When You Enter a URL | Interactive Guide",
        page_description: "Learn what happens behind the scenes when you type a website URL in your browser and press Enter. Interactive educational visualization.",

        // Header
        title_prefix: "Behind the Scenes:",
        title_main: "What Happens When You Enter a URL",
        subtitle: "An interactive journey through the web request lifecycle",

        // Timeline labels
        step_1_label: "Enter URL",
        step_2_label: "Check Cache",
        step_3_label: "DNS Lookup",
        step_4_label: "TCP Connect",
        step_5_label: "TLS Handshake",
        step_6_label: "HTTP Request",
        step_7_label: "Server Response",
        step_8_label: "Render Page",

        // Step 1
        speech_bubble: "I want to visit",
        step_1_title: "Step 1: User Enters URL",
        step_1_desc: "The journey begins when you type a website address (URL) into your browser's address bar and press Enter. The browser now needs to figure out how to reach that website.",
        step_1_card_title: "What is a URL?",
        step_1_card_desc: "<strong>URL</strong> stands for <em>Uniform Resource Locator</em>. It's the address that tells your browser where to find a specific resource on the internet.",

        // Step 2
        browser_cache: "Browser Cache",
        os_cache: "OS Cache",
        router_cache: "Router Cache",
        isp_cache: "ISP Cache",
        cache_miss: "MISS",
        cache_hit: "HIT",
        cache_arrow_label: "Cache miss → Query DNS server",
        step_2_title: "Step 2: Check Cache",
        step_2_desc: "Before making any network requests, the browser checks if it already knows the IP address for this domain. It searches through multiple cache layers.",
        step_2_card_title: "Cache Hierarchy",
        step_2_li_browser: "<strong>Browser Cache:</strong> Recently visited sites stored in browser memory",
        step_2_li_os: "<strong>OS Cache:</strong> Operating system's DNS resolver cache",
        step_2_li_router: "<strong>Router Cache:</strong> Your home router's cached DNS entries",
        step_2_li_isp: "<strong>ISP Cache:</strong> Your Internet Service Provider's DNS cache",

        // Step 3
        root_server: "Root Server",
        root_response: '"Ask .com TLD"',
        tld_server: ".com TLD Server",
        tld_response: '"Ask Google\'s NS"',
        auth_server: "Authoritative NS",
        resolved_ip: "Resolved IP Address",
        step_3_title: "Step 3: DNS Resolution",
        step_3_desc: "DNS (Domain Name System) translates human-readable domain names into IP addresses that computers use to identify each other on the network.",
        step_3_card_title: "DNS Hierarchy",
        step_3_li_root: "<strong>Root Server:</strong> Knows where to find TLD servers (.com, .org, etc.)",
        step_3_li_tld: "<strong>TLD Server:</strong> Knows which authoritative servers handle specific domains",
        step_3_li_auth: "<strong>Authoritative NS:</strong> Has the actual IP address for the domain",

        // Step 4
        your_browser: "Your Browser",
        google_server: "Google Server",
        tcp_established: "TCP Connection Established",
        step_4_title: "Step 4: TCP 3-Way Handshake",
        step_4_desc: "Before any data can be exchanged, a reliable connection must be established using the TCP (Transmission Control Protocol) three-way handshake.",
        step_4_card_title: "The Three-Way Handshake",
        step_4_li_syn: "<strong>SYN:</strong> Client sends a synchronization request",
        step_4_li_synack: "<strong>SYN-ACK:</strong> Server acknowledges and sends its own sync",
        step_4_li_ack: "<strong>ACK:</strong> Client acknowledges, connection is now established",

        // Step 5
        client_hello: "Client Hello",
        server_hello: "Server Hello + Certificate",
        key_exchange: "Key Exchange",
        secure_channel: "Secure Channel",
        step_5_title: "Step 5: TLS Handshake",
        step_5_desc: "For HTTPS connections, a TLS (Transport Layer Security) handshake establishes an encrypted communication channel to protect your data.",
        step_5_card_title: "TLS Handshake Steps",
        step_5_li_hello: "<strong>Client Hello:</strong> Browser sends supported encryption methods",
        step_5_li_server: "<strong>Server Hello:</strong> Server sends its certificate and chosen encryption",
        step_5_li_key: "<strong>Key Exchange:</strong> Both parties establish shared encryption keys",
        step_5_li_secure: "<strong>Secure Channel:</strong> All further communication is encrypted",

        // Step 6
        step_6_title: "Step 6: HTTP Request",
        step_6_desc: "Your browser sends an HTTP GET request to the server, asking for the webpage content. The request includes headers with information about your browser and what content you can accept.",
        step_6_card_title: "HTTP Request Components",
        step_6_li_method: "<strong>Method:</strong> GET (retrieve), POST (submit), etc.",
        step_6_li_path: "<strong>Path:</strong> The specific resource being requested",
        step_6_li_headers: "<strong>Headers:</strong> Metadata about the request",
        step_6_li_body: "<strong>Body:</strong> Optional data (mainly for POST requests)",

        // Step 7
        step_7_title: "Step 7: Server Response",
        step_7_desc: "The server processes your request and sends back a response containing the HTML document, along with CSS stylesheets and JavaScript files needed to render the page.",
        step_7_card_title: "Response Contents",
        step_7_li_html: "<strong>HTML:</strong> The structure and content of the page",
        step_7_li_css: "<strong>CSS:</strong> Styling rules for visual presentation",
        step_7_li_js: "<strong>JavaScript:</strong> Code for interactivity and dynamic behavior",
        step_7_li_status: "<strong>Status Code:</strong> 200 OK, 404 Not Found, etc.",

        // Step 8
        parse_html: "Parse HTML",
        tokenizer: "Tokenizer",
        dom_tree: "DOM Tree",
        parse_css: "Parse CSS",
        cssom_tree: "CSSOM Tree",
        load_js: "Load JavaScript",
        render_tree: "Render Tree",
        layout: "Layout",
        paint: "Paint",
        page_success: "Page Successfully Loaded!",
        step_8_title: "Step 8: Browser Rendering",
        step_8_desc: "The browser processes all received files to construct and display the final webpage. This involves parsing, building tree structures, and painting pixels on screen.",
        step_8_card_title: "Rendering Pipeline",
        step_8_li_dom: "<strong>DOM Tree:</strong> HTML is parsed into a Document Object Model",
        step_8_li_cssom: "<strong>CSSOM Tree:</strong> CSS is parsed into a style object model",
        step_8_li_render: "<strong>Render Tree:</strong> DOM + CSSOM combined for visible elements",
        step_8_li_layout: "<strong>Layout:</strong> Calculate exact position and size of elements",
        step_8_li_paint: "<strong>Paint:</strong> Fill in pixels on the screen",

        // Navigation
        previous: "Previous",
        auto_play: "Auto Play",
        pause: "Pause",
        next: "Next",

        // Footer
        footer_text: "An interactive educational visualization • Learn how the web works"
    },

    pl: {
        // Page meta
        page_title: "Co się dzieje gdy wpisujesz URL | Interaktywny przewodnik",
        page_description: "Dowiedz się, co dzieje się za kulisami, gdy wpisujesz adres strony w przeglądarce i naciskasz Enter. Interaktywna wizualizacja edukacyjna.",

        // Header
        title_prefix: "Za kulisami:",
        title_main: "Co się dzieje gdy wpisujesz URL",
        subtitle: "Interaktywna podróż przez cykl życia żądania sieciowego",

        // Timeline labels
        step_1_label: "Wpisz URL",
        step_2_label: "Sprawdź cache",
        step_3_label: "DNS Lookup",
        step_4_label: "TCP Connect",
        step_5_label: "TLS Handshake",
        step_6_label: "Żądanie HTTP",
        step_7_label: "Odpowiedź serwera",
        step_8_label: "Renderuj stronę",

        // Step 1
        speech_bubble: "Chcę odwiedzić",
        step_1_title: "Krok 1: Użytkownik wpisuje URL",
        step_1_desc: "Podróż zaczyna się, gdy wpisujesz adres strony internetowej (URL) w pasek adresu przeglądarki i naciskasz Enter. Przeglądarka musi teraz dowiedzieć się, jak dotrzeć do tej strony.",
        step_1_card_title: "Czym jest URL?",
        step_1_card_desc: "<strong>URL</strong> to skrót od <em>Uniform Resource Locator</em> (Jednolity Lokalizator Zasobów). To adres, który mówi przeglądarce, gdzie znaleźć konkretny zasób w internecie.",

        // Step 2
        browser_cache: "Cache przeglądarki",
        os_cache: "Cache systemu",
        router_cache: "Cache routera",
        isp_cache: "Cache ISP",
        cache_miss: "BRAK",
        cache_hit: "TRAFIENIE",
        cache_arrow_label: "Brak w cache → Zapytaj serwer DNS",
        step_2_title: "Krok 2: Sprawdź cache",
        step_2_desc: "Przed wykonaniem jakichkolwiek żądań sieciowych, przeglądarka sprawdza, czy już zna adres IP dla tej domeny. Przeszukuje wiele warstw cache.",
        step_2_card_title: "Hierarchia cache",
        step_2_li_browser: "<strong>Cache przeglądarki:</strong> Ostatnio odwiedzane strony zapisane w pamięci przeglądarki",
        step_2_li_os: "<strong>Cache systemu:</strong> Cache resolvera DNS systemu operacyjnego",
        step_2_li_router: "<strong>Cache routera:</strong> Zapisane wpisy DNS w routerze domowym",
        step_2_li_isp: "<strong>Cache ISP:</strong> Cache DNS dostawcy usług internetowych",

        // Step 3
        root_server: "Serwer root",
        root_response: '"Zapytaj .com TLD"',
        tld_server: "Serwer TLD .com",
        tld_response: '"Zapytaj NS Google"',
        auth_server: "Autorytatywny NS",
        resolved_ip: "Rozwiązany adres IP",
        step_3_title: "Krok 3: Rozwiązywanie DNS",
        step_3_desc: "DNS (Domain Name System - System Nazw Domen) tłumaczy czytelne dla ludzi nazwy domen na adresy IP, których komputery używają do identyfikacji w sieci.",
        step_3_card_title: "Hierarchia DNS",
        step_3_li_root: "<strong>Serwer root:</strong> Wie, gdzie znaleźć serwery TLD (.com, .org, itd.)",
        step_3_li_tld: "<strong>Serwer TLD:</strong> Wie, które serwery autorytatywne obsługują konkretne domeny",
        step_3_li_auth: "<strong>Autorytatywny NS:</strong> Ma rzeczywisty adres IP dla domeny",

        // Step 4
        your_browser: "Twoja przeglądarka",
        google_server: "Serwer Google",
        tcp_established: "Połączenie TCP ustanowione",
        step_4_title: "Krok 4: Trójstronny handshake TCP",
        step_4_desc: "Zanim jakiekolwiek dane mogą być wymieniane, musi zostać ustanowione niezawodne połączenie za pomocą trójstronnego handshake'u TCP (Transmission Control Protocol).",
        step_4_card_title: "Trójstronny handshake",
        step_4_li_syn: "<strong>SYN:</strong> Klient wysyła żądanie synchronizacji",
        step_4_li_synack: "<strong>SYN-ACK:</strong> Serwer potwierdza i wysyła własną synchronizację",
        step_4_li_ack: "<strong>ACK:</strong> Klient potwierdza, połączenie jest ustanowione",

        // Step 5
        client_hello: "Client Hello",
        server_hello: "Server Hello + certyfikat",
        key_exchange: "Wymiana kluczy",
        secure_channel: "Bezpieczny kanał",
        step_5_title: "Krok 5: TLS handshake",
        step_5_desc: "Dla połączeń HTTPS, handshake TLS (Transport Layer Security) ustanawia zaszyfrowany kanał komunikacyjny, aby chronić Twoje dane.",
        step_5_card_title: "Kroki TLS handshake",
        step_5_li_hello: "<strong>Client Hello:</strong> Przeglądarka wysyła obsługiwane metody szyfrowania",
        step_5_li_server: "<strong>Server Hello:</strong> Serwer wysyła swój certyfikat i wybrane szyfrowanie",
        step_5_li_key: "<strong>Wymiana kluczy:</strong> Obie strony ustalają wspólne klucze szyfrowania",
        step_5_li_secure: "<strong>Bezpieczny kanał:</strong> Cała dalsza komunikacja jest szyfrowana",

        // Step 6
        step_6_title: "Krok 6: Żądanie HTTP",
        step_6_desc: "Twoja przeglądarka wysyła żądanie HTTP GET do serwera, prosząc o zawartość strony. Żądanie zawiera nagłówki z informacjami o Twojej przeglądarce i jaką zawartość może zaakceptować.",
        step_6_card_title: "Komponenty żądania HTTP",
        step_6_li_method: "<strong>Metoda:</strong> GET (pobierz), POST (wyślij), itd.",
        step_6_li_path: "<strong>Ścieżka:</strong> Konkretny zasób, który jest żądany",
        step_6_li_headers: "<strong>Nagłówki:</strong> Metadane o żądaniu",
        step_6_li_body: "<strong>Treść:</strong> Opcjonalne dane (głównie dla żądań POST)",

        // Step 7
        step_7_title: "Krok 7: Odpowiedź serwera",
        step_7_desc: "Serwer przetwarza Twoje żądanie i odsyła odpowiedź zawierającą dokument HTML, wraz z arkuszami stylów CSS i plikami JavaScript potrzebnymi do wyrenderowania strony.",
        step_7_card_title: "Zawartość odpowiedzi",
        step_7_li_html: "<strong>HTML:</strong> Struktura i zawartość strony",
        step_7_li_css: "<strong>CSS:</strong> Reguły stylów dla prezentacji wizualnej",
        step_7_li_js: "<strong>JavaScript:</strong> Kod dla interaktywności i dynamicznego zachowania",
        step_7_li_status: "<strong>Kod statusu:</strong> 200 OK, 404 Not Found, itd.",

        // Step 8
        parse_html: "Parsuj HTML",
        tokenizer: "Tokenizer",
        dom_tree: "Drzewo DOM",
        parse_css: "Parsuj CSS",
        cssom_tree: "Drzewo CSSOM",
        load_js: "Załaduj JavaScript",
        render_tree: "Drzewo renderowania",
        layout: "Układ",
        paint: "Malowanie",
        page_success: "Strona załadowana pomyślnie!",
        step_8_title: "Krok 8: Renderowanie przeglądarki",
        step_8_desc: "Przeglądarka przetwarza wszystkie otrzymane pliki, aby skonstruować i wyświetlić finalną stronę. Obejmuje to parsowanie, budowanie struktur drzewiastych i malowanie pikseli na ekranie.",
        step_8_card_title: "Pipeline renderowania",
        step_8_li_dom: "<strong>Drzewo DOM:</strong> HTML jest parsowany do Document Object Model",
        step_8_li_cssom: "<strong>Drzewo CSSOM:</strong> CSS jest parsowany do modelu obiektów stylów",
        step_8_li_render: "<strong>Drzewo renderowania:</strong> DOM + CSSOM połączone dla widocznych elementów",
        step_8_li_layout: "<strong>Układ:</strong> Oblicza dokładną pozycję i rozmiar elementów",
        step_8_li_paint: "<strong>Malowanie:</strong> Wypełnia piksele na ekranie",

        // Navigation
        previous: "Poprzedni",
        auto_play: "Auto Play",
        pause: "Pauza",
        next: "Następny",

        // Footer
        footer_text: "Interaktywna wizualizacja edukacyjna • Dowiedz się jak działa internet"
    }
};

// ============================================================================
// Internationalization (i18n) Module
// ============================================================================

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.translations = translations;
        this.init();
    }

    init() {
        this.setLanguage(this.currentLang);
        this.bindLanguageSwitcher();
    }

    bindLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`Language ${lang} not found`);
            return;
        }

        this.currentLang = lang;
        localStorage.setItem('language', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update all elements with data-i18n attribute
        this.translatePage();

        // Update active language button
        this.updateLanguageButtons();
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.translations[this.currentLang][key];

            if (translation) {
                // Check if we need to set an attribute instead of text content
                if (element.dataset.i18nAttr) {
                    const attr = element.dataset.i18nAttr;
                    element.setAttribute(attr, translation);
                } else {
                    // Use innerHTML to preserve HTML tags in translations
                    element.innerHTML = translation;
                }
            } else {
                console.warn(`Translation key "${key}" not found for language "${this.currentLang}"`);
            }
        });

        // Handle auto-play button state preservation
        const autoBtn = document.getElementById('autoBtn');
        if (autoBtn && window.urlJourneyApp) {
            window.urlJourneyApp.updateAutoPlayButton();
        }
    }

    updateLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    t(key) {
        // Helper method to get translation by key
        return this.translations[this.currentLang][key] || key;
    }
}

// ============================================================================
// Main Application
// ============================================================================

class URLJourneyApp {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 8;
        this.isAutoPlaying = false;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 4000; // 4 seconds per step

        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.updateUI();
        this.animateTyping();
    }

    cacheElements() {
        // Navigation
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.autoBtn = document.getElementById('autoBtn');

        // Timeline
        this.timelineSteps = document.querySelectorAll('.timeline-step');
        this.timelineProgress = document.getElementById('timelineProgress');

        // Content sections
        this.stepContents = document.querySelectorAll('.step-content');

        // URL bar
        this.urlText = document.getElementById('urlText');
        this.cursor = document.getElementById('cursor');
    }

    bindEvents() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.goToPrevStep());
        this.nextBtn.addEventListener('click', () => this.goToNextStep());
        this.autoBtn.addEventListener('click', () => this.toggleAutoPlay());

        // Timeline step clicks
        this.timelineSteps.forEach(step => {
            step.addEventListener('click', () => {
                const stepNum = parseInt(step.dataset.step);
                this.goToStep(stepNum);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.goToPrevStep();
            if (e.key === 'ArrowRight') this.goToNextStep();
            if (e.key === ' ') {
                e.preventDefault();
                this.toggleAutoPlay();
            }
        });
    }

    goToStep(stepNum) {
        if (stepNum < 1 || stepNum > this.totalSteps) return;

        this.currentStep = stepNum;
        this.updateUI();
        this.triggerStepAnimation(stepNum);
    }

    goToNextStep() {
        if (this.currentStep < this.totalSteps) {
            this.goToStep(this.currentStep + 1);
        }
    }

    goToPrevStep() {
        if (this.currentStep > 1) {
            this.goToStep(this.currentStep - 1);
        }
    }

    toggleAutoPlay() {
        this.isAutoPlaying = !this.isAutoPlaying;

        if (this.isAutoPlaying) {
            this.startAutoPlay();
        } else {
            this.stopAutoPlay();
        }

        this.updateAutoPlayButton();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            if (this.currentStep < this.totalSteps) {
                this.goToNextStep();
            } else {
                // Loop back to start
                this.goToStep(1);
            }
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    updateAutoPlayButton() {
        const buttonText = this.autoBtn.querySelector('span');
        if (this.isAutoPlaying) {
            this.autoBtn.classList.add('playing');
            buttonText.setAttribute('data-i18n', 'pause');
            buttonText.textContent = window.i18n ? window.i18n.t('pause') : 'Pause';
        } else {
            this.autoBtn.classList.remove('playing');
            buttonText.setAttribute('data-i18n', 'auto_play');
            buttonText.textContent = window.i18n ? window.i18n.t('auto_play') : 'Auto Play';
        }
    }

    updateUI() {
        this.updateTimelineSteps();
        this.updateTimelineProgress();
        this.updateStepContents();
        this.updateNavigationButtons();
    }

    updateTimelineSteps() {
        this.timelineSteps.forEach(step => {
            const stepNum = parseInt(step.dataset.step);

            step.classList.remove('active', 'completed');

            if (stepNum === this.currentStep) {
                step.classList.add('active');
            } else if (stepNum < this.currentStep) {
                step.classList.add('completed');
            }
        });
    }

    updateTimelineProgress() {
        const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
        this.timelineProgress.style.width = `${progress}%`;
    }

    updateStepContents() {
        this.stepContents.forEach((content, index) => {
            const stepNum = index + 1;

            if (stepNum === this.currentStep) {
                content.classList.add('active');
                // Reset animations by removing and re-adding the content
                this.resetAnimations(content);
            } else {
                content.classList.remove('active');
            }
        });
    }

    resetAnimations(container) {
        // Clone and replace to reset CSS animations
        const animatedElements = container.querySelectorAll('[data-delay], [data-tls], [data-render]');

        animatedElements.forEach(el => {
            // Force reflow to restart animations
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
            el.style.animation = null;
        });
    }

    updateNavigationButtons() {
        this.prevBtn.disabled = this.currentStep === 1;
        this.nextBtn.disabled = this.currentStep === this.totalSteps;
    }

    triggerStepAnimation(stepNum) {
        // Special animations for specific steps
        switch (stepNum) {
            case 1:
                this.animateTyping();
                break;
            case 3:
                this.animateDNSResolution();
                break;
            case 4:
                this.animateTCPHandshake();
                break;
            case 8:
                this.animateRenderingPipeline();
                break;
        }
    }

    animateTyping() {
        const url = 'www.google.com';
        this.urlText.textContent = '';
        this.cursor.style.opacity = '1';

        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < url.length) {
                this.urlText.textContent += url[i];
                i++;
            } else {
                clearInterval(typingInterval);
                // Keep cursor blinking for a moment then hide
                setTimeout(() => {
                    this.cursor.style.opacity = '0';
                }, 1000);
            }
        }, 100);
    }

    animateDNSResolution() {
        // DNS resolution is handled by CSS animations
        // This method can be used for additional effects
    }

    animateTCPHandshake() {
        // TCP handshake is handled by CSS animations
        // This method can be used for additional effects
    }

    animateRenderingPipeline() {
        // Rendering pipeline is handled by CSS animations
        // This method can be used for additional effects
    }
}

// Tooltip functionality
class Tooltip {
    constructor() {
        this.tooltip = null;
        this.init();
    }

    init() {
        this.createTooltip();
        this.bindEvents();
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tooltip';
        this.tooltip.style.cssText = `
            position: fixed;
            background: rgba(26, 31, 46, 0.95);
            backdrop-filter: blur(10px);
            color: #E6EDF3;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 0.85rem;
            max-width: 250px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s ease;
            z-index: 1000;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        `;
        document.body.appendChild(this.tooltip);
    }

    bindEvents() {
        const tooltipTriggers = document.querySelectorAll('[data-tooltip]');

        tooltipTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', (e) => this.show(e));
            trigger.addEventListener('mouseleave', () => this.hide());
            trigger.addEventListener('mousemove', (e) => this.move(e));
        });
    }

    show(e) {
        const text = e.target.dataset.tooltip;
        if (!text) return;

        this.tooltip.textContent = text;
        this.tooltip.style.opacity = '1';
        this.move(e);
    }

    hide() {
        this.tooltip.style.opacity = '0';
    }

    move(e) {
        const x = e.clientX + 15;
        const y = e.clientY + 15;

        // Keep tooltip in viewport
        const rect = this.tooltip.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width - 10;
        const maxY = window.innerHeight - rect.height - 10;

        this.tooltip.style.left = `${Math.min(x, maxX)}px`;
        this.tooltip.style.top = `${Math.min(y, maxY)}px`;
    }
}

// Smooth scroll for internal links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Intersection Observer for scroll-triggered animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        document.querySelectorAll('.step-content').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize app when DOM is ready
let i18n, app;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18n();
    app = new URLJourneyApp();
    const tooltip = new Tooltip();
    const smoothScroll = new SmoothScroll();
    const scrollAnimations = new ScrollAnimations();

    // Expose to window for debugging and cross-module access
    window.i18n = i18n;
    window.urlJourneyApp = app;
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function () { }, { passive: true });

// Preload animation assets
window.addEventListener('load', () => {
    // Force a reflow after everything is loaded
    document.body.classList.add('loaded');
});
