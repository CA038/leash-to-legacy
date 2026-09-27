document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-form-status');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const name = (contactForm.querySelector('input[name="name"]') || {}).value;
            const email = (contactForm.querySelector('input[name="email"]') || {}).value;
            const phone = (contactForm.querySelector('input[name="phone"]') || {}).value;
            const message = (contactForm.querySelector('textarea[name="message"]') || {}).value;

            if (contactStatus) {
                contactStatus.textContent = '';
                contactStatus.removeAttribute('class');
            }
            if (btn) {
                btn.disabled = true;
                btn.textContent = 'Sending...';
            }

            // TODO: Implementar envío con Supabase
            setTimeout(() => {
                if (contactStatus) {
                    contactStatus.textContent = '✓ Message sent! (Demo mode - Preparando Supabase)';
                    contactStatus.className = 'contact-form-status success';
                }
                contactForm.reset();
                if (btn) {
                    btn.disabled = false;
                    btn.textContent = 'SEND MESSAGE';
                }
            }, 1000);
        });
    }

    const loginBtn = document.querySelector('.login');
    const modal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeLoginModal');
    const form = document.getElementById('login-form');

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('username')?.value?.trim();
            const password = document.getElementById('password')?.value?.trim();

            if (!username || !password) {
                alert('Please enter username and password');
                return;
            }

            if (username === 'admin' && password === 'leash2025') {
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('user', username);
                window.location.href = 'panel.html';
            } else {
                alert('Incorrect username or password');
            }
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
});