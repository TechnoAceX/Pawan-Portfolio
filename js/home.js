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

        // Particle System
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 25;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                container.appendChild(particle);
            }
        }

        // Floating Tech Icons
        function createFloatingIcons() {
            const container = document.getElementById('floating-icons');
            const icons = ['🤖', '⚡', '🧠', '💫', '🔮', '⚙️', '🌐', '💎'];
            
            setInterval(() => {
                const icon = document.createElement('div');
                icon.className = 'tech-icon';
                icon.textContent = icons[Math.floor(Math.random() * icons.length)];
                icon.style.top = Math.random() * 80 + 10 + 'vh';
                icon.style.animationDuration = (10 + Math.random() * 10) + 's';
                container.appendChild(icon);
                
                setTimeout(() => {
                    icon.remove();
                }, 20000);
            }, 3000);
        }

        // Update HUD Time
        function updateHUDTime() {
            const now = new Date();
            const options = {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: 'Asia/Kolkata'
            };
            
            const timeString = now.toLocaleString('en-US', options).toUpperCase();
            document.getElementById('hud-time').textContent = timeString + ' | JAIPUR';
        }

        // Music Toggle
        document.getElementById('music-toggle').addEventListener('click', function() {
            const button = this;
            const isPlaying = button.textContent === '⏸️';
            
            if (isPlaying) {
                button.textContent = '🎵';
                button.style.color = '#00f0ff';
            } else {
                button.textContent = '⏸️';
                button.style.color = '#9f00ff';
            }
        });

        // Initialize everything
        window.addEventListener('load', function() {
            createParticles();
            createFloatingIcons();
            updateHUDTime();
            setInterval(updateHUDTime, 1000);
        });

        // Add some interactive hover effects
        document.addEventListener('mousemove', function(e) {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            particles.forEach((particle, index) => {
                const speed = (index % 3 + 1) * 0.5;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                particle.style.transform = `translate(${x}px, ${y}px)`;
            });
        });