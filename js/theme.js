// js/theme.js
(function() {
    const setTheme = (mode) => {
        const html = document.documentElement;
        const icon = document.getElementById('themeIcon');
        if (mode === 'dark') {
            html.setAttribute('data-theme', 'dark');
            if (icon) icon.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
            if (icon) icon.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    };
    const saved = localStorage.getItem('theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved === 'dark' || (!saved && prefers) ? 'dark' : 'light');
    const btn = document.getElementById('themeBtn');
    if (btn) btn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        setTheme(cur === 'dark' ? 'light' : 'dark');
    });
})();