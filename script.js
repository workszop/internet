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
        page_description: "Eight steps from pressing Enter to a finished page: cache, DNS, TCP, TLS, HTTP and rendering. An interactive animation with explanations.",

        // Header
        title_main: "What Happens When You Enter a URL",
        subtitle: "Eight steps from pressing Enter to a finished page. Play the animation or move through it step by step.",

        // Timeline labels
        step_1_label: "Enter URL",
        step_2_label: "Check cache",
        step_3_label: "DNS lookup",
        step_4_label: "TCP connection",
        step_5_label: "TLS encryption",
        step_6_label: "HTTP request",
        step_7_label: "Server response",
        step_8_label: "Rendering",
        step_of: "Step {n} of {total}",

        // Step 1
        you: "You",
        url_protocol: "Protocol",
        url_subdomain: "Subdomain",
        url_domain: "Domain",
        url_path: "Path",
        url_query: "Query",
        step_1_title: "You type an address",
        step_1_desc: "You type www.google.com into the address bar and press Enter. At this point the browser only knows a name. To fetch the page it has to find the server that holds it, and for that it needs the server's IP address.",
        step_1_card_title: "The parts of a URL",
        step_1_li_proto: "<code>https://</code> is the protocol, the way the browser talks to the server. The “s” means the connection is encrypted. If you leave it out, the browser adds it for you.",
        step_1_li_sub: "<code>www.</code> is a subdomain, a part of the address the domain owner chooses",
        step_1_li_domain: "<code>google.com</code> is the domain, the name DNS will turn into an IP address",
        step_1_li_path: "<code>/search</code> is the path to a specific page on the server. An empty path means the home page, <code>/</code>",
        step_1_li_query: "<code>?q=hello</code> is the query, extra data for the server, such as a search phrase",

        // Step 2
        browser_cache: "Browser cache",
        os_cache: "OS cache",
        router_cache: "Router cache",
        isp_cache: "ISP cache",
        cache_miss: "MISS",
        cache_arrow_label: "No address found → ask DNS",
        step_2_title: "Looking for the address in the cache",
        step_2_desc: "Before sending anything to the internet, the browser checks whether the IP address of google.com is already stored somewhere along the way. A cache is a short-term memory of recent answers, and every entry expires after a set time (TTL). In this animation every layer comes up empty, so the browser has to ask DNS.",
        step_2_card_title: "Where it looks, in order",
        step_2_li_browser: "<strong>Browser:</strong> IP addresses of domains you visited recently",
        step_2_li_os: "<strong>Operating system:</strong> one DNS memory shared by every program on the computer",
        step_2_li_router: "<strong>Router:</strong> a home router often remembers DNS answers for every device on the network",
        step_2_li_isp: "<strong>ISP resolver:</strong> your internet provider's DNS server. It has the biggest cache, and if the address is missing there too, it asks the next DNS servers itself (step 3).",

        // Step 3
        root_server: "Root server",
        root_response: "“Ask the .com server”",
        tld_server: ".com server",
        tld_response: "“Ask Google's server”",
        auth_server: "Authoritative server",
        resolved_ip: "IP address found",
        step_3_title: "DNS lookup",
        step_3_desc: "DNS turns domain names into IP addresses, much like a phone book turns a name into a number. No single machine knows every address, so the provider's resolver asks three servers in turn, from the most general to the most specific. It then stores the answer in its cache so the next lookup is faster.",
        step_3_card_title: "Who knows the answer",
        step_3_li_root: "<strong>Root server:</strong> does not know the address of google.com, but knows who handles .com, .org, .pl and the other endings",
        step_3_li_tld: "<strong>.com server (TLD):</strong> knows which server is responsible for google.com",
        step_3_li_auth: "<strong>Authoritative server:</strong> belongs to the domain owner and gives the final IP address, here 142.250.185.46",

        // Step 4
        your_browser: "Your browser",
        google_server: "Google server",
        tcp_established: "TCP connection open",
        step_4_title: "TCP connection",
        step_4_desc: "The browser now knows the server's IP address. Before it asks for the page, the two computers set up a connection using TCP. TCP makes sure data arrives complete and in the right order, and resends any packets that get lost. Three short messages are enough to start.",
        step_4_card_title: "Three-way handshake",
        step_4_li_syn: "<strong>SYN:</strong> the browser asks to connect and sends the number it will start counting its data from",
        step_4_li_synack: "<strong>SYN-ACK:</strong> the server confirms and sends its own starting number",
        step_4_li_ack: "<strong>ACK:</strong> the browser confirms the server's number. The connection is open.",

        // Step 5
        client_hello: "Client Hello",
        server_hello: "Server Hello + certificate",
        key_exchange: "Key exchange",
        secure_channel: "Encrypted channel",
        step_5_title: "TLS encryption",
        step_5_desc: "The address starts with https, so before any content is sent, the browser and the server agree on a shared secret key (the TLS handshake). From then on nobody along the way, whether a router or the internet provider, can read or change the data.",
        step_5_card_title: "How the shared key is made",
        step_5_li_hello: "<strong>Client Hello:</strong> the browser sends the list of ciphers it supports and its part of the key",
        step_5_li_server: "<strong>Server Hello + certificate:</strong> the server picks a cipher and sends back its part of the key and a certificate proving it really is google.com",
        step_5_li_key: "<strong>Key exchange:</strong> the browser checks the certificate, and each side computes the same session key from the exchanged parts. The key itself never travels over the network.",
        step_5_li_secure: "<strong>Encrypted channel:</strong> everything that follows, including the HTTP request and response, is encrypted with that key",

        // Step 6
        step_6_title: "HTTP request",
        step_6_desc: "The connection is open and encrypted, so the browser asks for the page. It sends an HTTP request: the GET method (“give me”), the path / (the home page) and headers with information about itself, such as which language it prefers.",
        step_6_card_title: "What a request contains",
        step_6_li_method: "<strong>Method:</strong> what the browser wants to do. GET fetches a page, POST sends data, such as a form.",
        step_6_li_path: "<strong>Path:</strong> which resource on the server; / is the home page",
        step_6_li_headers: "<strong>Headers:</strong> extra information, such as Host (the site name), Accept-Language (the language) or User-Agent (the browser name and version)",
        step_6_li_body: "<strong>Body:</strong> data to send, such as a filled-in form. A GET request usually has none.",

        // Step 7
        step_7_title: "Server response",
        step_7_desc: "The server sends back a status code, headers and the HTML document. The HTML refers to other files: CSS stylesheets, JavaScript and images. The browser fetches them with further requests, often over the same connection and several at a time.",
        step_7_card_title: "What comes back",
        step_7_li_status: "<strong>Status code:</strong> the short result of the request: 200 OK (all fine), 301 (the page has moved), 404 (no such page)",
        step_7_li_html: "<strong>HTML:</strong> the content and structure of the page: headings, paragraphs, links, images",
        step_7_li_css: "<strong>CSS:</strong> the look: colours, fonts, spacing, layout",
        step_7_li_js: "<strong>JavaScript:</strong> a program that responds to clicks and can change the page after it loads",

        // Step 8
        parse_html: "HTML",
        tokenizer: "Tokenizer",
        dom_tree: "DOM tree",
        parse_css: "CSS",
        cssom_tree: "CSSOM tree",
        load_js: "JavaScript",
        render_tree: "Render tree",
        layout: "Layout",
        paint: "Paint",
        page_success: "Page ready",
        step_8_title: "Rendering the page",
        step_8_desc: "The browser has all the files. Now it turns HTML and CSS text into pixels: it builds two trees from them, combines them, works out where everything goes, and only then draws the page on screen.",
        step_8_card_title: "Rendering stages",
        step_8_li_dom: "<strong>DOM tree:</strong> the HTML split into tags and arranged as a tree of page elements",
        step_8_li_cssom: "<strong>CSSOM tree:</strong> the CSS rules as a tree that gives the style of every element",
        step_8_li_js: "<strong>JavaScript:</strong> a script can change the DOM and CSSOM. A <code>&lt;script&gt;</code> tag without async or defer pauses HTML parsing until the script has run.",
        step_8_li_render: "<strong>Render tree:</strong> DOM and CSSOM combined. Only visible elements end up here, so anything with display: none is left out.",
        step_8_li_layout: "<strong>Layout:</strong> the browser calculates the exact position and size of every element",
        step_8_li_paint: "<strong>Paint:</strong> elements become pixels: text, colours, borders, images",

        // Navigation
        previous: "Back",
        auto_play: "Play",
        pause: "Pause",
        next: "Next",
        kbd_steps: "steps",
        kbd_space: "Space",
        kbd_auto: "play",

        // Footer
        footer_text: "An interactive lesson on how the web works"
    },

    pl: {
        // Page meta
        page_title: "Co się dzieje, gdy wpisujesz URL | Interaktywny przewodnik",
        page_description: "Osiem kroków od naciśnięcia Enter do gotowej strony: cache, DNS, TCP, TLS, HTTP i renderowanie. Interaktywna animacja z objaśnieniami.",

        // Header
        title_main: "Co się dzieje, gdy wpisujesz URL",
        subtitle: "Osiem kroków od naciśnięcia Enter do gotowej strony. Włącz odtwarzanie albo przechodź krok po kroku.",

        // Timeline labels
        step_1_label: "Wpisanie adresu",
        step_2_label: "Sprawdzenie cache",
        step_3_label: "Zapytanie DNS",
        step_4_label: "Połączenie TCP",
        step_5_label: "Szyfrowanie TLS",
        step_6_label: "Żądanie HTTP",
        step_7_label: "Odpowiedź serwera",
        step_8_label: "Renderowanie",
        step_of: "Krok {n} z {total}",

        // Step 1
        you: "Ty",
        url_protocol: "Protokół",
        url_subdomain: "Subdomena",
        url_domain: "Domena",
        url_path: "Ścieżka",
        url_query: "Zapytanie",
        step_1_title: "Wpisujesz adres",
        step_1_desc: "Wpisujesz www.google.com w pasek adresu i naciskasz Enter. Przeglądarka zna na razie tylko nazwę. Żeby pobrać stronę, musi znaleźć serwer, na którym ona leży, a do tego potrzebuje jego adresu IP.",
        step_1_card_title: "Z czego składa się URL",
        step_1_li_proto: "<code>https://</code> to protokół, czyli sposób rozmowy z serwerem. Litera „s” oznacza połączenie szyfrowane. Jeśli go nie wpiszesz, przeglądarka dopisze go sama.",
        step_1_li_sub: "<code>www.</code> to subdomena, część adresu, którą wybiera właściciel domeny",
        step_1_li_domain: "<code>google.com</code> to domena, czyli nazwa, którą DNS zamieni na adres IP",
        step_1_li_path: "<code>/search</code> to ścieżka do konkretnej strony na serwerze. Pusta ścieżka oznacza stronę główną, <code>/</code>",
        step_1_li_query: "<code>?q=hello</code> to zapytanie, czyli dodatkowe dane dla serwera, na przykład szukana fraza",

        // Step 2
        browser_cache: "Cache przeglądarki",
        os_cache: "Cache systemu",
        router_cache: "Cache routera",
        isp_cache: "Cache dostawcy",
        cache_miss: "BRAK",
        cache_arrow_label: "Brak adresu → pytamy DNS",
        step_2_title: "Szukanie adresu w cache",
        step_2_desc: "Zanim przeglądarka wyśle cokolwiek do internetu, sprawdza, czy adres IP google.com nie jest już zapisany gdzieś po drodze. Cache to podręczna pamięć ostatnich odpowiedzi, a każdy wpis traci ważność po określonym czasie (TTL). W tej animacji wszystkie warstwy są puste, więc przeglądarka musi zapytać DNS.",
        step_2_card_title: "Gdzie szuka, po kolei",
        step_2_li_browser: "<strong>Przeglądarka:</strong> adresy IP niedawno odwiedzonych domen",
        step_2_li_os: "<strong>System operacyjny:</strong> wspólna pamięć DNS wszystkich programów na komputerze",
        step_2_li_router: "<strong>Router:</strong> domowy router często sam pamięta odpowiedzi DNS dla wszystkich urządzeń w sieci",
        step_2_li_isp: "<strong>Resolver dostawcy (ISP):</strong> serwer DNS Twojego dostawcy internetu. Ma największy cache, a jeśli i tam nie ma adresu, sam pyta kolejne serwery DNS (krok 3).",

        // Step 3
        root_server: "Serwer główny",
        root_response: "„Zapytaj serwer .com”",
        tld_server: "Serwer .com",
        tld_response: "„Zapytaj serwer Google”",
        auth_server: "Serwer autorytatywny",
        resolved_ip: "Adres IP znaleziony",
        step_3_title: "Zapytanie DNS",
        step_3_desc: "DNS zamienia nazwy domen na adresy IP, podobnie jak książka telefoniczna zamienia nazwisko na numer. Żaden pojedynczy komputer nie zna wszystkich adresów, więc resolver dostawcy pyta po kolei trzy serwery, od najogólniejszego do najbardziej szczegółowego. Odpowiedź zapisuje potem w cache, żeby następnym razem było szybciej.",
        step_3_card_title: "Kto zna odpowiedź",
        step_3_li_root: "<strong>Serwer główny (root):</strong> nie zna adresu google.com, ale wie, kto obsługuje końcówki .com, .org, .pl i pozostałe",
        step_3_li_tld: "<strong>Serwer .com (TLD):</strong> wie, który serwer odpowiada za google.com",
        step_3_li_auth: "<strong>Serwer autorytatywny:</strong> należy do właściciela domeny i podaje ostateczny adres IP, tutaj 142.250.185.46",

        // Step 4
        your_browser: "Twoja przeglądarka",
        google_server: "Serwer Google",
        tcp_established: "Połączenie TCP otwarte",
        step_4_title: "Połączenie TCP",
        step_4_desc: "Przeglądarka zna już adres IP serwera. Zanim poprosi o stronę, oba komputery nawiązują połączenie przez protokół TCP. TCP pilnuje, żeby dane dotarły w całości i we właściwej kolejności, a zgubione pakiety wysyła jeszcze raz. Na początek wystarczą trzy krótkie wiadomości.",
        step_4_card_title: "Uzgadnianie w trzech krokach",
        step_4_li_syn: "<strong>SYN:</strong> przeglądarka prosi o połączenie i podaje numer, od którego zacznie liczyć swoje dane",
        step_4_li_synack: "<strong>SYN-ACK:</strong> serwer potwierdza i podaje własny numer początkowy",
        step_4_li_ack: "<strong>ACK:</strong> przeglądarka potwierdza numer serwera. Połączenie jest otwarte.",

        // Step 5
        client_hello: "Client Hello",
        server_hello: "Server Hello + certyfikat",
        key_exchange: "Wymiana kluczy",
        secure_channel: "Kanał szyfrowany",
        step_5_title: "Szyfrowanie TLS",
        step_5_desc: "Adres zaczyna się od https, więc zanim popłynie jakakolwiek treść, przeglądarka i serwer uzgadniają wspólny tajny klucz (TLS handshake). Od tej chwili nikt po drodze, ani router, ani dostawca internetu, nie odczyta przesyłanych danych i ich nie zmieni.",
        step_5_card_title: "Jak powstaje wspólny klucz",
        step_5_li_hello: "<strong>Client Hello:</strong> przeglądarka wysyła listę obsługiwanych szyfrów i swoją część klucza",
        step_5_li_server: "<strong>Server Hello + certyfikat:</strong> serwer wybiera szyfr, odsyła swoją część klucza i certyfikat, który dowodzi, że to naprawdę google.com",
        step_5_li_key: "<strong>Wymiana kluczy:</strong> przeglądarka sprawdza certyfikat, a każda ze stron wylicza z wymienionych części ten sam klucz sesji. Sam klucz nigdy nie przechodzi przez sieć.",
        step_5_li_secure: "<strong>Kanał szyfrowany:</strong> wszystko, co dalej, łącznie z żądaniem i odpowiedzią HTTP, jest szyfrowane tym kluczem",

        // Step 6
        step_6_title: "Żądanie HTTP",
        step_6_desc: "Połączenie jest otwarte i zaszyfrowane, więc przeglądarka prosi o stronę. Wysyła żądanie HTTP: metodę GET („daj mi”), ścieżkę / (strona główna) i nagłówki z informacjami o sobie, na przykład w jakim języku woli dostać odpowiedź.",
        step_6_card_title: "Z czego składa się żądanie",
        step_6_li_method: "<strong>Metoda:</strong> co przeglądarka chce zrobić. GET pobiera stronę, POST wysyła dane, na przykład formularz.",
        step_6_li_path: "<strong>Ścieżka:</strong> który zasób z serwera; / to strona główna",
        step_6_li_headers: "<strong>Nagłówki:</strong> dodatkowe informacje, takie jak Host (nazwa strony), Accept-Language (język) czy User-Agent (nazwa i wersja przeglądarki)",
        step_6_li_body: "<strong>Treść:</strong> dane do wysłania, na przykład wypełniony formularz. Żądanie GET zwykle jej nie ma.",

        // Step 7
        step_7_title: "Odpowiedź serwera",
        step_7_desc: "Serwer odsyła kod statusu, nagłówki i dokument HTML. HTML odwołuje się do kolejnych plików: arkuszy CSS, skryptów JavaScript i obrazków. Przeglądarka pobiera je następnymi żądaniami, często tym samym połączeniem i po kilka naraz.",
        step_7_card_title: "Co przychodzi z serwera",
        step_7_li_status: "<strong>Kod statusu:</strong> krótki wynik żądania: 200 OK (wszystko w porządku), 301 (strona się przeniosła), 404 (nie ma takiej strony)",
        step_7_li_html: "<strong>HTML:</strong> treść i struktura strony: nagłówki, akapity, linki, obrazki",
        step_7_li_css: "<strong>CSS:</strong> wygląd: kolory, czcionki, odstępy, układ",
        step_7_li_js: "<strong>JavaScript:</strong> program, który reaguje na kliknięcia i może zmieniać stronę po załadowaniu",

        // Step 8
        parse_html: "HTML",
        tokenizer: "Tokenizacja",
        dom_tree: "Drzewo DOM",
        parse_css: "CSS",
        cssom_tree: "Drzewo CSSOM",
        load_js: "JavaScript",
        render_tree: "Drzewo renderowania",
        layout: "Układ",
        paint: "Malowanie",
        page_success: "Strona gotowa",
        step_8_title: "Renderowanie strony",
        step_8_desc: "Przeglądarka ma już wszystkie pliki. Teraz zamienia tekst HTML i CSS na piksele: buduje z nich dwa drzewa, łączy je, oblicza, gdzie co ma stać, i dopiero wtedy rysuje stronę na ekranie.",
        step_8_card_title: "Etapy renderowania",
        step_8_li_dom: "<strong>Drzewo DOM:</strong> HTML rozbity na znaczniki i ułożony w drzewo elementów strony",
        step_8_li_cssom: "<strong>Drzewo CSSOM:</strong> reguły CSS ułożone w drzewo, z którego wynika styl każdego elementu",
        step_8_li_js: "<strong>JavaScript:</strong> skrypt może zmienić DOM i CSSOM. Znacznik <code>&lt;script&gt;</code> bez atrybutu async lub defer wstrzymuje parsowanie HTML, dopóki skrypt się nie wykona.",
        step_8_li_render: "<strong>Drzewo renderowania:</strong> DOM i CSSOM połączone w jedno. Trafiają tu tylko widoczne elementy, więc te z display: none wypadają.",
        step_8_li_layout: "<strong>Układ (layout):</strong> przeglądarka oblicza dokładne położenie i rozmiar każdego elementu",
        step_8_li_paint: "<strong>Malowanie (paint):</strong> elementy zamieniają się w piksele: tekst, kolory, ramki, obrazki",

        // Navigation
        previous: "Wstecz",
        auto_play: "Odtwarzaj",
        pause: "Pauza",
        next: "Dalej",
        kbd_steps: "kroki",
        kbd_space: "Spacja",
        kbd_auto: "odtwarzanie",

        // Footer
        footer_text: "Interaktywna lekcja o tym, jak działa internet"
    }
};

// ============================================================================
// Internationalization (i18n) Module
// ============================================================================

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'pl';
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
        document.body.dataset.lang = lang;

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
            window.urlJourneyApp.announceStep();
        }
    }

    updateLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            const isActive = btn.dataset.lang === this.currentLang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive);
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
        this.autoPlayDelay = 6000; // 6 seconds per step: time to watch the animation and read the lead

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
            // Space on a focused button already clicks it; only toggle autoplay elsewhere
            if (e.key === ' ' && !e.target.closest('button, a, input')) {
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
        document.body.dataset.playing = this.isAutoPlaying;
        const buttonText = this.autoBtn.querySelector('.auto-label');
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
        // DOM contract: current step + autoplay state readable without scraping the UI
        document.body.dataset.step = this.currentStep;
        document.body.dataset.playing = this.isAutoPlaying;
        this.updateTimelineSteps();
        this.updateTimelineProgress();
        this.updateStepContents();
        this.updateNavigationButtons();
        this.announceStep();
    }

    announceStep() {
        const status = document.getElementById('stepStatus');
        const title = document.querySelector(`#step${this.currentStep} h2`);
        if (!status || !title) return;
        const position = i18n.t('step_of')
            .replace('{n}', this.currentStep)
            .replace('{total}', this.totalSteps);
        status.textContent = `${position}: ${title.textContent}`;
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
        // Restart every CSS animation in the step (entrances, travelling messages)
        container.getAnimations({ subtree: true }).forEach(a => {
            a.cancel();
            a.play();
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
        // Re-entering step 1 mid-typing must not start a second, interleaved interval
        clearInterval(this.typingInterval);
        this.urlText.textContent = '';
        this.cursor.style.opacity = '1';

        let i = 0;
        this.typingInterval = setInterval(() => {
            if (i < url.length) {
                this.urlText.textContent += url[i];
                i++;
            } else {
                clearInterval(this.typingInterval);
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

// Initialize app when DOM is ready
let i18n, app;
document.addEventListener('DOMContentLoaded', () => {
    // Icons first: <i data-lucide> placeholders become inline SVG (Lucide UMD from CDN)
    if (window.lucide) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.75, 'aria-hidden': 'true' } });
    }
    i18n = new I18n();
    app = new URLJourneyApp();
    const tooltip = new Tooltip();
    const smoothScroll = new SmoothScroll();

    // Expose to window for debugging and cross-module access
    window.i18n = i18n;
    window.urlJourneyApp = app;

    // ─── Reveal ───
    const FONT_WAIT_MS = 1500;
    const BRAND_FONTS = ['400 1em Outfit', '800 1em Outfit', '400 1em "IBM Plex Sans"', '600 1em "IBM Plex Sans"', '400 1em "Roboto Mono"'];
    Promise.race([
        Promise.all(BRAND_FONTS.map(f => document.fonts.load(f).catch(() => null))),
        new Promise(r => setTimeout(r, FONT_WAIT_MS)),
    ]).then(() => document.documentElement.classList.add('app-ready'));
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function () { }, { passive: true });

// Preload animation assets
window.addEventListener('load', () => {
    // Force a reflow after everything is loaded
    document.body.classList.add('loaded');
});
