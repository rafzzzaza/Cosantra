        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        navToggle.addEventListener('click', () => {
            const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isOpen));
            navMenu.classList.toggle('is-open', !isOpen);
        });

        const navLinks = [...document.querySelectorAll('.nav-menu a')];
        const sections = [...document.querySelectorAll('.page-section')];

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => {
                    const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
                    link.classList.toggle('is-active', isCurrent);
                    if (isCurrent) {
                        link.setAttribute('aria-current', 'page');
                    } else {
                        link.removeAttribute('aria-current');
                    }
                });
            });
        }, { rootMargin: '-40% 0px -50% 0px' });

        sections.forEach((section) => sectionObserver.observe(section));