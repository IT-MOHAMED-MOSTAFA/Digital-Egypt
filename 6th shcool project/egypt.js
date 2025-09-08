// Update your dark mode toggle function in egypt.js
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const isDark = currentTheme === 'dark';
  
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  
  // Update icon
  const icon = this.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Set correct icon on page load
if (savedTheme === 'dark') {
  document.getElementById('dark-mode-toggle').querySelector('i').classList.replace('fa-moon', 'fa-sun');
}
        // Toggle Language
        const languageToggle = document.getElementById('language-toggle');
        let currentLanguage = 'ar';
        
        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
            document.body.classList.toggle('language-ar');
            document.body.classList.toggle('language-en');
            
            // Update all text elements with data attributes
            document.querySelectorAll('[data-ar], [data-en]').forEach(element => {
                element.textContent = element.getAttribute(`data-${currentLanguage}`);
            });
            
            // Update direction
            document.body.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
        });

        // JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Fade-in animation on scroll
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(element => {
                fadeInObserver.observe(element);
            });
            
            // Counter animation
            const counters = document.querySelectorAll('.counter');
            const speed = 200;
            
           // دالة لتحريك العداد بسلاسة
const animateCounter = (element, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.innerText = Math.ceil(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.innerText = target;
        }
    };
    
    updateCounter();
};

// مراقبة العدادات عند ظهورها على الشاشة
let animated = Array(counters.length).fill(false);

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(counters).indexOf(entry.target);
            if (!animated[index]) {
                const target = +entry.target.getAttribute('data-target');
                animateCounter(entry.target, target, 2000); // 2000ms = 2 ثواني
                animated[index] = true;
            }
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});
            
            // Progress bar animation
            const progressBars = document.querySelectorAll('.progress-value');
            
            const progressObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.style.width;
                        entry.target.style.width = '0';
                        setTimeout(() => {
                            entry.target.style.width = width;
                        }, 300);
                    }
                });
            }, { threshold: 0.5 });
            
            progressBars.forEach(bar => {
                progressObserver.observe(bar);
            });
        });