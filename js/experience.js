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
            });
        });

        // Active link management (only prevent for # links)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault(); // only stop scrolling links
                    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });


        // Add smooth scrolling and entrance animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });

        // Add interactive hover effects
        document.querySelectorAll('.timeline-content').forEach(content => {
            content.addEventListener('mouseenter', () => {
                content.style.transform = 'translateY(-10px) scale(1.02)';
                content.style.boxShadow = '0 20px 40px rgba(0, 240, 255, 0.4)';
            });

            content.addEventListener('mouseleave', () => {
                content.style.transform = 'translateY(0) scale(1)';
                content.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            });
        });

        // Add dynamic particles
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'floating-element';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 15000);
        }

        setInterval(createParticle, 3000);