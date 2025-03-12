const fadeElements = document.querySelectorAll('.fade-in');
        const appearOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        fadeElements.forEach(element => {
            appearOnScroll.observe(element);
        });

        const countdown = () => {
            const releaseDate = new Date('2026-01-01T00:00:00');
            const now = new Date();
            const diff = releaseDate - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        };
        setInterval(countdown, 1000);
        const facts = [
            "Першою комерційною відеогрою була 'Pong', випущена в 1972 році.",
            "Minecraft є найпродаванішою грою в історії з понад 238 мільйонами копій.",
            "GTA V заробила понад $1 мільярд за перші три дні після релізу.",
            "Перша гра з 3D-графікою була створена в 1974 році і називалася 'Maze War'.",
            "Найдовша гра в історії тривала 138 годин і була встановлена в грі 'World of Warcraft'."
        ];

        const factBtn = document.getElementById('fact-btn');
        const factDisplay = document.getElementById('fact-display');

        factBtn.addEventListener('click', () => {
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            factDisplay.innerHTML = `<p>${randomFact}</p>`;
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });