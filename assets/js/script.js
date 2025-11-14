// ==========================================
// Navbar Scroll Effect
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ==========================================
// Mobile Menu Toggle
// ==========================================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Intersection Observer for Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards, benefit cards, and tech items
const animateElements = document.querySelectorAll(
    '.feature-card, .benefit-card, .tech-list li, .tech-feature, .about-text, .visual-card'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// Contact Form Handling
// ==========================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Get the submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Odesílám...';

    try {
        // Here you would normally send the form data to your backend
        // For now, we'll just simulate a successful submission
        console.log('Form data:', formData);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success message
        showNotification('Zpráva byla úspěšně odeslána!', 'success');

        // Reset form
        contactForm.reset();
    } catch (error) {
        // Show error message
        showNotification('Něco se pokazilo. Zkuste to prosím znovu.', 'error');
        console.error('Form submission error:', error);
    } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// ==========================================
// Notification System
// ==========================================
function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
        color: 'white',
        fontWeight: '600',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        maxWidth: '400px'
    });

    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Add to page
    document.body.appendChild(notification);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ==========================================
// Active Navigation Link on Scroll
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + navbar.offsetHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// Parallax Effect for Hero Orbs
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');

    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==========================================
// Counter Animation for Stats
// ==========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stats and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent;

            // Extract number from text like "100%", "50+", "24/7"
            if (text.includes('%')) {
                const num = parseInt(text);
                statNumber.textContent = '0%';
                animateCounter(statNumber, num, 1500);
                setTimeout(() => {
                    statNumber.textContent = text;
                }, 1500);
            } else if (text.includes('+')) {
                const num = parseInt(text);
                statNumber.textContent = '0+';
                animateCounter(statNumber, num, 1500);
                setTimeout(() => {
                    statNumber.textContent = text;
                }, 1500);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ==========================================
// Form Input Validation & Styling
// ==========================================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });

    // Real-time validation
    input.addEventListener('input', () => {
        if (input.validity.valid) {
            input.style.borderColor = '#10b981';
        } else if (input.value) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '';
        }
    });
});

// ==========================================
// Add Ripple Effect to Buttons
// ==========================================
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');

    // Style the ripple
    Object.assign(ripple.style, {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        transform: 'scale(0)',
        animation: 'ripple 0.6s ease-out',
        pointerEvents: 'none'
    });

    // Add ripple animation if not exists
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            .btn {
                position: relative;
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
    }

    const rippleElement = button.querySelector('.ripple');
    if (rippleElement) {
        rippleElement.remove();
    }

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// ==========================================
// Page Load Animation
// ==========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// Console Easter Egg
// ==========================================
console.log(`
%c
   _____           _
  / ____|         | |
 | |     ___ _ __ | |_ ___ _ __ __ _
 | |    / _ \\ '_ \\| __/ _ \\ '__/ _\` |
 | |___|  __/ | | | ||  __/ | | (_| |
  \\_____\\___|_| |_|\\__\\___|_|  \\__,_|

Moderní systém pro správu obchodních center
Vytvořeno firmou Cognera - www.cognera.cz

Zajímá vás, jak toto funguje? Kontaktujte nás!
`, 'color: #1a3a52; font-weight: bold;');

// ==========================================
// Debug Mode (for development)
// ==========================================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔧 Debug mode enabled');
    console.log('📱 Viewport:', window.innerWidth, 'x', window.innerHeight);

    window.addEventListener('resize', () => {
        console.log('📱 Viewport resized:', window.innerWidth, 'x', window.innerHeight);
    });
}
