/**
 * What Happens When You Enter a URL
 * Interactive Educational Web App
 */

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
        if (this.isAutoPlaying) {
            this.autoBtn.classList.add('playing');
            this.autoBtn.querySelector('span').textContent = 'Pause';
        } else {
            this.autoBtn.classList.remove('playing');
            this.autoBtn.querySelector('span').textContent = 'Auto Play';
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
        switch(stepNum) {
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
document.addEventListener('DOMContentLoaded', () => {
    const app = new URLJourneyApp();
    const tooltip = new Tooltip();
    const smoothScroll = new SmoothScroll();
    const scrollAnimations = new ScrollAnimations();
    
    // Expose app to window for debugging
    window.urlJourneyApp = app;
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function() {}, {passive: true});

// Preload animation assets
window.addEventListener('load', () => {
    // Force a reflow after everything is loaded
    document.body.classList.add('loaded');
});
