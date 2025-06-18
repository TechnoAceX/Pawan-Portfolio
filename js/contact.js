 // Mobile menu toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
                
                // Remove active class from all links
                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
            });
        });

        // Add interactive sound effect simulation
        document.querySelectorAll('.contact-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Simulate terminal beep with visual feedback
                card.style.boxShadow = '0 0 30px rgba(79, 195, 247, 0.8)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
            });
        });

        // Add typing effect to status
        const statusText = document.querySelector('.status-indicator span');
        const originalText = statusText.textContent;
        statusText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                statusText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);

        // Add random glitch effect to the title
        const glitchText = document.querySelector('.glitch-text');
        setInterval(() => {
            glitchText.style.textShadow = `
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #2196F3,
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #4FC3F7,
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #1976D2
            `;
            
            setTimeout(() => {
                glitchText.style.textShadow = '';
            }, 50);
        }, 3000);

        // Typing animation for "Let's Connect and Collaborate"
        const typingTextElement = document.getElementById('typingText');
        const textToType = "Let's Connect and Collaborate";
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;

        function typeText() {
            if (!isDeleting && charIndex <= textToType.length) {
                typingTextElement.textContent = textToType.substring(0, charIndex);
                charIndex++;
                setTimeout(typeText, typingSpeed);
            } else if (isDeleting && charIndex >= 0) {
                typingTextElement.textContent = textToType.substring(0, charIndex);
                charIndex--;
                setTimeout(typeText, typingSpeed / 2);
            } else if (!isDeleting && charIndex > textToType.length) {
                // Pause before starting to delete
                setTimeout(() => {
                    isDeleting = true;
                    typeText();
                }, 2000);
            } else if (isDeleting && charIndex < 0) {
                // Pause before starting to type again
                setTimeout(() => {
                    isDeleting = false;
                    charIndex = 0;
                    typeText();
                }, 500);
            }
        }

        // Start typing animation after status animation completes
        setTimeout(() => {
            typeText();
        }, 2500);

        // Add click effect to contact me button
        const contactBtn = document.querySelector('.contact-me-btn');
        contactBtn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);