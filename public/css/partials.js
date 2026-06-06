// Shared header, footer, preloader, scroll-to-top, and active-nav highlighting
(function () {
  const NAV = [
    { href: 'index.html', label: 'Home' },
    { href: 'team.html', label: 'Team' },
    { href: 'matches.html', label: 'Matches' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'about.html', label: 'About' },
    { href: 'blog.html', label: 'Blog' },
  ];
  const path = location.pathname.split('/').pop() || 'index.html';

  // Preloader
  const pre = document.createElement('div');
  pre.id = 'preloader';
  pre.className = 'fixed inset-0 z-[100] bg-stadium flex items-center justify-center transition-opacity duration-500';
  pre.innerHTML = `<div class="flex flex-col items-center gap-6">
    <div class="w-16 h-16 rounded-full border-4 border-t-transparent animate-spin-ball flex items-center justify-center" style="border-color:color-mix(in oklab,var(--secondary) 30%,transparent);border-top-color:var(--secondary)">
      <div class="w-3 h-3 rounded-full bg-primary"></div>
    </div>
    <p class="font-display uppercase tracking-[0.35em] text-secondary text-sm">Loading the Pitch</p>
  </div>`;
  document.body.prepend(pre);
  setTimeout(() => { pre.style.opacity = '0'; pre.style.pointerEvents = 'none'; }, 900);
  setTimeout(() => { pre.remove(); }, 1500);

  // Header
  const headerHTML = `
  <header id="siteHeader" class="fixed top-0 inset-x-0 z-50 transition-all duration-300 py-4">
    <div class="container-x flex items-center justify-between">
      <a href="index.html" class="flex items-center gap-2 group">
        <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
          <i data-lucide="trophy" class="w-5 h-5 text-primary-foreground"></i>
        </div>
        <span class="font-display font-bold text-xl uppercase tracking-wider">Victory<span class="text-primary">Club</span></span>
      </a>
      <nav class="hidden lg:flex items-center gap-1">
        ${NAV.map(n => `<a href="${n.href}" class="nav-link px-4 py-2 text-sm font-display font-semibold uppercase tracking-wider transition-colors ${n.href === path ? 'text-secondary' : 'text-foreground/80 hover:text-secondary'}">${n.label}</a>`).join('')}
      </nav>
      <div class="hidden lg:block"><a href="contact.html" class="btn-primary">Join Club</a></div>
      <button id="menuBtn" class="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
        <i data-lucide="menu" class="w-6 h-6"></i>
      </button>
    </div>
    <div id="mobileMenu" class="hidden lg:hidden glass-navbar mt-2 mx-4 rounded-xl p-4 animate-fade-up">
      <div class="flex flex-col gap-1">
        ${NAV.map(n => `<a href="${n.href}" class="px-4 py-3 rounded-md text-sm font-display font-semibold uppercase tracking-wider hover:bg-primary/10 hover:text-secondary">${n.label}</a>`).join('')}
        <a href="contact.html" class="btn-primary justify-center mt-2">Join Club</a>
      </div>
    </div>
  </header>`;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  const header = document.getElementById('siteHeader');
  const setScrolled = () => {
    if (window.scrollY > 20) { header.classList.add('glass-navbar', 'py-2'); header.classList.remove('py-4'); }
    else { header.classList.remove('glass-navbar', 'py-2'); header.classList.add('py-4'); }
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled);
  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });
  lucide.createIcons();
  // Footer
  const year = new Date().getFullYear();
  const footerHTML = `
  <footer class="relative mt-24 overflow-hidden border-t border-border">
    <div class="h-1.5 w-full flex">
      <span class="flex-1 bg-primary"></span><span class="flex-1 bg-secondary"></span>
      <span class="flex-1 bg-primary"></span><span class="flex-1 bg-secondary"></span>
    </div>
    <div class="absolute inset-0 bg-stadium"></div>
    <div class="absolute inset-0 stripe-bg opacity-60"></div>
    <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
    <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-secondary/15 blur-3xl"></div>
    <div class="relative">
      <div class="container-x pt-16">
        <div data-aos="fade-up" class="relative overflow-hidden rounded-2xl border border-border p-8 md:p-10 bg-card/70 backdrop-blur">
          <div class="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-primary/30 blur-3xl"></div>
          <div class="relative grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <span class="eyebrow"><span class="w-8 h-px bg-secondary"></span><span>Stay in the Game</span></span>
              <h3 class="font-display text-3xl md:text-4xl uppercase mt-3 leading-tight">Match alerts, drops &amp; <span class="text-gradient">trial dates</span></h3>
            </div>
            <form id="newsletterForm" class="flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="your@email.com" class="flex-1 px-5 py-4 rounded-md bg-input border border-border focus:border-primary outline-none">
              <button type="submit" id="subBtn" class="btn-primary justify-center">Subscribe <i data-lucide="send" class="w-4 h-4"></i></button>
            </form>
          </div>
        </div>
      </div>

      <div class="container-x py-16 grid md:grid-cols-2 lg:grid-cols-12 gap-10">
        <div class="lg:col-span-4" data-aos="fade-up">
          <a href="index.html" class="flex items-center gap-2.5 group">
            <div class="w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <i data-lucide="trophy" class="w-5 h-5 text-primary-foreground"></i>
            </div>
            <span class="font-display font-bold text-2xl uppercase tracking-wider">Victory<span class="text-primary">Club</span></span>
          </a>
          <p class="text-muted-foreground text-sm leading-relaxed mt-5 max-w-sm">Forging champions on and off the pitch since 2010. Train hard. Play harder. Wear the green &amp; gold with pride.</p>
          <div class="mt-6 flex flex-wrap gap-2">
            ${["Est. 2010", "20+ Trophies", "500+ Players"].map(b => `<span class="px-3 py-1 rounded-full text-xs font-display uppercase tracking-wider bg-primary/10 text-primary border border-primary/30">${b}</span>`).join('')}
          </div>
          <div class="flex gap-2 mt-6">
            ${[
                ['fa-facebook-f', 'Facebook'],
                ['fa-instagram', 'Instagram'],
                ['fa-x-twitter', 'Twitter'],
                ['fa-youtube', 'YouTube']
              ].map(([i, l]) => `
              <a href="#" aria-label="${l}" 
                class="w-10 h-10 rounded-md bg-muted/60 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 flex items-center justify-center transition-all border border-border">
                <i class="fa-brands ${i} text-sm"></i>
              </a>
            `).join('')}
          </div>
        </div>
        <div class="lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
          <h4 class="font-display uppercase tracking-wider text-secondary mb-5 text-sm footer-explore">Explore</h4>
          <ul class="space-y-2.5 text-sm">
            ${NAV.map(l => `<li><a href="${l.href}" class="group inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"><i data-lucide="arrow-right" class="w-3 h-3 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-primary"></i><span class="font-display uppercase tracking-wider">${l.label}</span></a></li>`).join('')}
          </ul>
        </div>
        <div class="lg:col-span-3" data-aos="fade-up" data-aos-delay="200">
          <h4 class="font-display uppercase tracking-wider text-secondary mb-5 text-sm">Next Match</h4>
          <div class="p-5 rounded-xl bg-card/60 border border-border">
            <div class="flex items-center justify-between text-xs font-display uppercase tracking-widest">
              <span class="text-muted-foreground">Sat 12 Sep</span>
              <span class="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-bold">League</span>
            </div>
            <div class="mt-4 flex items-center justify-between gap-2">
              <div class="text-center flex-1">
                <div class="w-10 h-10 mx-auto rounded-full bg-primary flex items-center justify-center"><i data-lucide="trophy" class="w-5 h-5 text-primary-foreground"></i></div>
                <div class="font-display text-sm uppercase mt-2">Victory</div>
              </div>
              <div class="text-secondary font-display font-bold">VS</div>
              <div class="text-center flex-1">
                <div class="w-10 h-10 mx-auto rounded-full bg-muted flex items-center justify-center"><i data-lucide="trophy" class="w-5 h-5 text-foreground/60"></i></div>
                <div class="font-display text-sm uppercase mt-2">Mwenda FC</div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs">
              <span class="text-muted-foreground flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3 text-primary"></i><span>Stadium Arena</span></span>
              <span class="font-display text-secondary">19:00</span>
            </div>
          </div>
        </div>
        <div class="lg:col-span-3" data-aos="fade-up" data-aos-delay="300">
          <h4 class="font-display uppercase tracking-wider text-secondary mb-5 text-sm">Get in Touch</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"><span class="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0"><i data-lucide="map-pin" class="w-4 h-4"></i></span><span class="pt-1">12 Stadium Road, Greenfield City</span></li>
            <li class="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"><span class="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0"><i data-lucide="phone" class="w-4 h-4"></i></span><a href="tel:+15550101234" class="pt-1">+1 (555) 010-1234</a></li>
            <li class="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"><span class="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0"><i data-lucide="mail" class="w-4 h-4"></i></span><a href="mailto:hello@mugambi.fc" class="pt-1">hello@mugambi.fc</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-border">
        <div class="container-x py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider font-display">
          <p>© ${year} Mugambi FC · All rights reserved</p>
          <p class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>Play Hard · Win Together</p>
          <div class="flex gap-4"><a href="privacy.html" class="hover:text-secondary">Privacy</a><a href="terms.html" class="hover:text-secondary">Terms</a><a href="faq.html" class="hover:text-secondary">FAQs</a></div>
        </div>
      </div>
    </div>
  </footer>
  <button id="toTop" class="hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform animate-pulse-glow items-center justify-center" aria-label="Scroll to top">
    <i data-lucide="chevron-up" class="w-6 h-6"></i>
  </button>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Newsletter
  document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('subBtn').innerHTML = 'Subscribed ✓';
  });

  // Scroll to top
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { toTop.classList.remove('hidden'); toTop.classList.add('flex'); }
    else { toTop.classList.add('hidden'); toTop.classList.remove('flex'); }
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Init libraries
  if (window.lucide) window.lucide.createIcons();
  if (window.AOS) window.AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic', offset: 60 });
})();
