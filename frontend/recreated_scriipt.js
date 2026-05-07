const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const container = document.querySelector('.container');
const themeToggler = document.querySelector('.theme-toggler');
const menuBtnMobile = document.querySelector('#menu_bar_mobile');

// ── Sidebar open / close ──────────────────────────────────────────────────────

const toggleSidebar = (show) => {
    if (show) {
        sideMenu.classList.remove('collapsed');
        container.classList.remove('collapsed');
    } else {
        sideMenu.classList.add('collapsed');
        container.classList.add('collapsed');
    }
};

if (menuBtn) {
    menuBtn.addEventListener('click', () => toggleSidebar(true));
}

if (menuBtnMobile) {
    menuBtnMobile.addEventListener('click', () => toggleSidebar(true));
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => toggleSidebar(false));
}

// ── Active sidebar link ───────────────────────────────────────────────────────

const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function () {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ── Dark / Light theme toggle ─────────────────────────────────────────────────

const darkTheme = {
    '--clr-color-background': '#181a1e',
    '--clr-white': '#202528',
    '--clr-dark': '#edeffd',
    '--clr-dark-variant': '#a3bdcc',
    '--clr-dark-light': '#444f5b',
    '--clr-info-dark': '#93a6b9',
    '--clr-light': 'rgba(0, 0, 0, 0.4)',
};

const lightTheme = {
    '--clr-color-background': '#f6f6f9',
    '--clr-white': '#fff',
    '--clr-dark': '#363949',
    '--clr-dark-variant': '#677483',
    '--clr-dark-light': '#dce1eb',
    '--clr-info-dark': '#7d8da1',
    '--clr-light': 'rgba(132, 139, 200, 0.18)',
};

const applyTheme = (isDark) => {
    const theme = isDark ? darkTheme : lightTheme;
    Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });

    if (themeToggler) {
        const lightIcon = themeToggler.querySelector('span:nth-child(1)');
        const darkIcon = themeToggler.querySelector('span:nth-child(2)');
        if (isDark) {
            lightIcon.classList.remove('active');
            darkIcon.classList.add('active');
        } else {
            lightIcon.classList.add('active');
            darkIcon.classList.remove('active');
        }
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Initial load
const savedTheme = localStorage.getItem('theme');
let isDarkTheme = savedTheme === 'dark';
applyTheme(isDarkTheme);

if (themeToggler) {
    themeToggler.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        applyTheme(isDarkTheme);
    });
}