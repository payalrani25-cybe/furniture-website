/* Unified Premium Header Injection */
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const hideSearchOn = ['about.html', 'contact.html', 'login.html', 'admin.html'];
    const hideSearch = hideSearchOn.includes(currentPage);

    // Category mapping for navigation
    const categories = [
        { id: 'sofas', name: 'Sofas', icon: 'fa-couch', link: 'sofa.html' },
        { id: 'beds', name: 'Beds', icon: 'fa-bed', link: 'bed.html' },
        { id: 'chairs', name: 'Chairs', icon: 'fa-chair', link: 'chairs.html' },
        { id: 'almira', name: 'Almirah', icon: 'fa-door-closed', link: 'almira.html' },
        { id: 'table', name: 'Tables', icon: 'fa-table', link: 'table.html' },
        { id: 'wardrobes', name: 'Wardrobes', icon: 'fa-door-open', link: 'wardrobes.html' }
    ];

    const headerHTML = `
    <!-- Top Navbar -->
    <header class="premium-header bg-[#1a2a3a] text-white sticky top-0 z-[1000] shadow-2xl">
        <div class="container mx-auto px-6 py-4 flex flex-col xl:flex-row items-center justify-between gap-4">
            <!-- 1. LOGO & NAV -->
            <div class="flex items-center gap-10 flex-shrink-0">
                <a href="index.html" class="text-2xl font-black text-yellow-500 tracking-tighter no-underline whitespace-nowrap hover:scale-105 transition-transform">
                    PATODI <span class="text-white font-light">FURNITURE</span>
                </a>
                <nav class="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest">
                    <a href="index.html" class="nav-link text-slate-300 hover:text-yellow-500 transition-colors whitespace-nowrap">Home</a>
                    <a href="about.html" class="nav-link text-slate-300 hover:text-yellow-500 transition-colors whitespace-nowrap">About</a>
                    <a href="home.html#products-section" class="nav-link text-slate-300 hover:text-yellow-500 transition-colors whitespace-nowrap">Products</a>
                    <a href="contact.html" class="nav-link text-slate-300 hover:text-yellow-500 transition-colors whitespace-nowrap">Contact</a>
                    <a href="history.html" class="nav-link text-slate-300 hover:text-yellow-500 transition-colors whitespace-nowrap">History</a>
                    <a href="reviews.html" class="nav-link text-slate-300 hover:text-yellow-500 transition-colors whitespace-nowrap">Reviews</a>
                </nav>
            </div>

            <!-- 2. SEARCH BAR - Conditional -->
            ${!hideSearch ? `
            <div class="flex-1 max-w-2xl mx-auto relative w-full">
                <div class="search-container flex items-center px-5 py-2 bg-white/10 rounded-full border border-white/20 focus-within:border-yellow-500 transition-all">
                    <i class="fa-solid fa-magnifying-glass text-slate-400 mr-3 flex-shrink-0"></i>
                    <input type="text" id="globalSearchInput"
                           placeholder="Search sofas, beds, chairs..."
                           autocomplete="off"
                           class="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm font-light"
                           oninput="handleGlobalSearch(this.value)"
                           onkeydown="if(event.key==='Enter') submitGlobalSearch(this.value)">
                    <button onclick="submitGlobalSearch(document.getElementById('globalSearchInput').value)"
                            class="ml-2 bg-yellow-500 text-[#1a2a3a] text-xs font-black px-4 py-1.5 rounded-full hover:bg-white transition-all flex-shrink-0">
                        SEARCH
                    </button>
                </div>
                <!-- Live Search Dropdown -->
                <div id="search-dropdown" class="hidden absolute top-full mt-2 left-0 right-0 bg-[#1a2a3a] border border-white/10 rounded-2xl shadow-2xl z-[2000] max-h-96 overflow-y-auto"></div>
            </div>
            ` : '<div class="flex-1"></div>'}

            <!-- 3. ACTION ICONS -->
            <div class="flex gap-6 items-center flex-shrink-0">
                <div class="relative cursor-pointer group hover:scale-110 transition-transform" onclick="openPage('wishlist-page')">
                    <i class="fa-regular fa-heart text-2xl group-hover:text-red-500 transition-colors"></i>
                    <span id="wishlist-count" class="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black px-1.5 rounded-full border-2 border-[#1a2a3a]">0</span>
                </div>

                <div class="relative cursor-pointer group hover:scale-110 transition-transform" onclick="openPage('cart-page')">
                    <i class="fa-solid fa-cart-shopping text-2xl group-hover:text-yellow-500 transition-colors"></i>
                    <span id="cart-count" class="absolute -top-2 -right-2 bg-yellow-500 text-[#1a2a3a] text-[10px] font-black px-1.5 rounded-full border-2 border-[#1a2a3a]">0</span>
                </div>

                <!-- Dark Mode Toggle Button -->
                <button id="dark-mode-btn" onclick="toggleDarkMode()"
                    title="Dark / Light Mode"
                    class="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-yellow-500 hover:scale-110 transition-all bg-white/5 cursor-pointer">
                    <i id="dark-icon" class="fa-solid fa-moon text-lg text-slate-300 hover:text-yellow-400 transition-colors"></i>
                </button>

                <div id="user-auth-section">
                    <a href="login.html" class="bg-yellow-500 text-[#1a2a3a] px-5 py-2 rounded-full font-bold text-xs hover:bg-white transition-all shadow-lg whitespace-nowrap">
                        LOGIN
                    </a>
                </div>
            </div>
        </div>

        <!-- CATEGORY NAVIGATION STRIP -->
        <div class="bg-white border-b border-slate-200">
            <div class="container mx-auto px-6 overflow-x-auto no-scrollbar py-3 flex items-center justify-start md:justify-center gap-8">
                ${categories.map(cat => `
                    <a href="${cat.link}" class="flex items-center gap-2 group decoration-none shrink-0">
                        <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-yellow-500 group-hover:scale-110 transition-all border border-slate-100">
                            <i class="fa-solid ${cat.icon} text-slate-500 group-hover:text-[#1a2a3a] text-sm"></i>
                        </div>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#1a2a3a] transition-colors whitespace-nowrap">${cat.name}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    </header>

    <!-- UNIFIED OVERLAYS (Sidebars) -->
    <div id="wishlist-page" class="fixed inset-0 z-[2000] flex justify-end invisible opacity-0 transition-all duration-500">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closePage('wishlist-page')"></div>
        <div class="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col translate-x-full transition-transform duration-500 panel-content border-l border-slate-200">
            <div class="p-6 border-b flex justify-between items-center bg-[#1a2a3a] text-white">
                <h2 class="text-xl font-black italic">YOUR WISHLIST</h2>
                <button onclick="closePage('wishlist-page')" class="text-2xl hover:rotate-90 transition-transform">&times;</button>
            </div>
            <div id="wish-content" class="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
                <div class="py-20 text-center text-slate-400">Wishlist empty...</div>
            </div>
        </div>
    </div>

    <div id="cart-page" class="fixed inset-0 z-[2000] flex justify-end invisible opacity-0 transition-all duration-500">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closePage('cart-page')"></div>
        <div class="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col translate-x-full transition-transform duration-500 panel-content border-l border-slate-200">
            <div class="p-6 border-b flex justify-between items-center bg-[#1a2a3a] text-white">
                <h2 class="text-xl font-black italic">YOUR CART</h2>
                <button onclick="closePage('cart-page')" class="text-2xl hover:rotate-90 transition-transform">&times;</button>
            </div>
            <div id="cart-content" class="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
                <div class="py-20 text-center text-slate-400">Cart is empty...</div>
            </div>
            <div class="p-6 border-t bg-white">
                <div class="flex justify-between items-center mb-6">
                    <span class="text-slate-500 font-bold">TOTAL AMOUNT</span>
                    <span id="grand-total" class="text-2xl font-black text-[#1a2a3a]">&#8377;0</span>
                </div>
                <button onclick="window.location.href='booking.html'" class="w-full bg-yellow-500 text-[#1a2a3a] py-4 rounded-2xl font-black text-lg hover:bg-[#1a2a3a] hover:text-white transition-all shadow-xl">
                    PROCEED TO BOOK
                </button>
            </div>
        </div>
    </div>

    <!-- Hidden stubs: product JS (wish-badge / cart-badge) ke null errors rokne ke liye -->
    <div id="wish-badge" style="display:none">0</div>
    <div id="cart-badge" style="display:none">0</div>

    <style>
        #wishlist-page.active, #cart-page.active { visibility: visible; opacity: 1; }
        #wishlist-page.active .panel-content, #cart-page.active .panel-content { transform: translateX(0); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .nav-link.text-yellow-500 { border-bottom: 2px solid #eab308; }

        /* ===== TOAST NOTIFICATION ===== */
        #patodi-toast {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(80px);
            background: #1a2a3a;
            color: #fff;
            padding: 14px 28px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 700;
            font-family: 'Outfit', sans-serif;
            box-shadow: 0 20px 60px rgba(0,0,0,0.4);
            z-index: 99999;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid rgba(234,179,8,0.5);
            opacity: 0;
            pointer-events: none;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            white-space: nowrap;
        }
        #patodi-toast.show {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }

        /* ===== DARK MODE ===== */
        html.dark body {
            background-color: #0f172a !important;
            color: #e2e8f0 !important;
        }
        html.dark .bg-white {
            background-color: #1e293b !important;
        }
        html.dark .bg-slate-50 {
            background-color: #0f172a !important;
        }
        html.dark .bg-gray-100, html.dark .bg-slate-100 {
            background-color: #1e293b !important;
        }
        html.dark .text-slate-800, html.dark .text-slate-700 {
            color: #e2e8f0 !important;
        }
        html.dark .text-slate-400, html.dark .text-slate-500 {
            color: #94a3b8 !important;
        }
        html.dark .border-gray-100, html.dark .border-slate-100, html.dark .border-slate-200 {
            border-color: #334155 !important;
        }
        html.dark .shadow-sm, html.dark .shadow-2xl {
            box-shadow: 0 4px 24px rgba(0,0,0,0.5) !important;
        }
        html.dark .bg-[#1a2a3a] {
            background-color: #0a1628 !important;
        }
        html.dark input, html.dark textarea, html.dark select {
            background-color: #1e293b !important;
            color: #e2e8f0 !important;
            border-color: #334155 !important;
        }
        html.dark .bg-white\/10 {
            background-color: rgba(255,255,255,0.05) !important;
        }
        html.dark section, html.dark main, html.dark article {
            background-color: #0f172a;
            color: #e2e8f0;
        }
        html.dark h1, html.dark h2, html.dark h3, html.dark h4, html.dark h5, html.dark h6 {
            color: #f1f5f9 !important;
        }
        html.dark p {
            color: #cbd5e1;
        }
        html.dark a:not(.bg-yellow-500):not(.nav-link) {
            color: #94a3b8;
        }
        /* Category strip dark */
        html.dark .premium-header .bg-white.border-b {
            background-color: #111827 !important;
            border-color: #1e293b !important;
        }
        html.dark .premium-header .bg-slate-50 {
            background-color: #1e293b !important;
        }
        html.dark .premium-header .text-slate-400 {
            color: #64748b !important;
        }
        /* Transition for smooth dark mode */
        body, body * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
    </style>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.premium-header');
        if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ===== DARK MODE LOGIC =====
    // localStorage se dark preference load karo
    function applyDarkMode(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Icon update karo
        const icon = document.getElementById('dark-icon');
        if (icon) {
            icon.className = isDark
                ? 'fa-solid fa-sun text-lg text-yellow-400 transition-colors'
                : 'fa-solid fa-moon text-lg text-slate-300 hover:text-yellow-400 transition-colors';
        }
    }

    // Page load par saved preference apply karo
    const savedDark = localStorage.getItem('patodiDarkMode') === 'true';
    applyDarkMode(savedDark);

    // Global toggle function — button onclick mein use hota hai
    window.toggleDarkMode = function() {
        const isDark = document.documentElement.classList.contains('dark');
        const newDark = !isDark;
        localStorage.setItem('patodiDarkMode', newDark);
        applyDarkMode(newDark);
        // Toast show karo
        if (window.showPatodiToast) {
            showPatodiToast(
                newDark ? 'Dark Mode ON ho gaya!' : 'Light Mode ON ho gaya!',
                newDark ? '🌙' : '☀️',
                newDark ? '#94a3b8' : '#eab308'
            );
        }
    };


    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('search-dropdown');
        if (dropdown && !e.target.closest('#globalSearchInput') && !e.target.closest('#search-dropdown')) {
            dropdown.classList.add('hidden');
        }
    });

    // Auth Status check
    const checkAuthStatus = () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const authSection = document.getElementById('user-auth-section');
                if (authSection && user) {
                    authSection.innerHTML = `
                        <div class="flex items-center gap-3">
                            <div class="hidden lg:block text-right">
                                <p class="text-[10px] font-black text-yellow-500 uppercase">Premium Member</p>
                                <p class="text-xs font-bold text-white">${user.name}</p>
                            </div>
                            <button onclick="logout()" class="text-slate-400 hover:text-white text-[10px] font-bold border border-slate-600 px-3 py-1.5 rounded-full hover:border-white transition-all">LOGOUT</button>
                            ${user.role === 'admin' ? '<a href="admin.html" class="bg-yellow-500 text-[#1a2a3a] text-[10px] font-black px-3 py-1.5 rounded-full">ADMIN</a>' : ''}
                        </div>
                    `;
                }
            } catch(e) {}
        }
    };
    checkAuthStatus();

    // Initial UI render if script.js is loaded
    if (typeof updateUI === 'function') updateUI();

    // ===================================================================
    // TOAST FUNCTION - Sab pages par use hogi
    // ===================================================================
    function showPatodiToast(msg, icon, color) {
        let toast = document.getElementById('patodi-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'patodi-toast';
            document.body.appendChild(toast);
        }
        toast.innerHTML = '<span style="font-size:20px">' + icon + '</span> <span style="color:' + color + '">' + msg + '</span>';
        toast.classList.add('show');
        clearTimeout(toast._t);
        toast._t = setTimeout(() => toast.classList.remove('show'), 3000);
    }
    // Global bhi banana hai taaki product JS call kar sake
    window.showPatodiToast = showPatodiToast;

    // ===================================================================
    // BADGE UPDATE - Har page par localStorage se badges update
    // ===================================================================
    function updateHeaderBadgesFromStorage() {
        try {
            const cartData = JSON.parse(localStorage.getItem('furnitureCart')) || [];
            const wishData = JSON.parse(localStorage.getItem('furnitureWishlist')) || [];
            const cartBadge = document.getElementById('cart-count');
            const wishBadge = document.getElementById('wishlist-count');
            if (cartBadge) cartBadge.innerText = cartData.reduce((a, b) => a + (b.qty || 1), 0);
            if (wishBadge) wishBadge.innerText = wishData.length;
        } catch(e) {}
    }
    // Global expose
    window.updateHeaderBadgesFromStorage = updateHeaderBadgesFromStorage;

    // Turant page load par update
    updateHeaderBadgesFromStorage();

    // Cross-tab update
    window.addEventListener('storage', updateHeaderBadgesFromStorage);

    // Same-tab polling - har 300ms refresh
    setInterval(updateHeaderBadgesFromStorage, 300);

    // ===================================================================
    // PRODUCT JS FUNCTION PATCHING
    // window.load ke baad chalega jab product JS poori tarah load ho jaye
    // Koi bhi product file change nahi hogi - sirf wrap hogi
    // ===================================================================
    window.addEventListener('load', function() {

        // --- addToCart patch: localStorage save + toast ---
        if (typeof window.addToCart === 'function' && !window.addToCart._patched) {
            const _orig = window.addToCart;
            window.addToCart = function(id) {
                _orig(id);
                try {
                    if (typeof cart !== 'undefined') {
                        localStorage.setItem('furnitureCart', JSON.stringify(cart));
                    }
                } catch(e) {}
                showPatodiToast('Product cart mein successfully add ho gaya!', '🛒', '#eab308');
                updateHeaderBadgesFromStorage();
            };
            window.addToCart._patched = true;
        }

        // --- toggleWish patch: localStorage save + toast ---
        if (typeof window.toggleWish === 'function' && !window.toggleWish._patched) {
            const _orig = window.toggleWish;
            window.toggleWish = function(id) {
                const wasWished = (typeof wish !== 'undefined') && wish.some(x => x.id === id);
                _orig(id);
                try {
                    if (typeof wish !== 'undefined') {
                        localStorage.setItem('furnitureWishlist', JSON.stringify(wish));
                        if (!wasWished) {
                            showPatodiToast('Wishlist mein add ho gaya!', '❤️', '#ef4444');
                        } else {
                            showPatodiToast('Wishlist se hata diya gaya.', '🗑️', '#94a3b8');
                        }
                    }
                } catch(e) {}
                updateHeaderBadgesFromStorage();
            };
            window.toggleWish._patched = true;
        }

        // --- removeFromCart patch ---
        if (typeof window.removeFromCart === 'function' && !window.removeFromCart._patched) {
            const _orig = window.removeFromCart;
            window.removeFromCart = function(id) {
                _orig(id);
                try {
                    if (typeof cart !== 'undefined') {
                        localStorage.setItem('furnitureCart', JSON.stringify(cart));
                    }
                } catch(e) {}
                updateHeaderBadgesFromStorage();
            };
            window.removeFromCart._patched = true;
        }

        // --- changeQty patch ---
        if (typeof window.changeQty === 'function' && !window.changeQty._patched) {
            const _orig = window.changeQty;
            window.changeQty = function(id, delta) {
                _orig(id, delta);
                try {
                    if (typeof cart !== 'undefined') {
                        localStorage.setItem('furnitureCart', JSON.stringify(cart));
                    }
                } catch(e) {}
                updateHeaderBadgesFromStorage();
            };
            window.changeQty._patched = true;
        }

        // Final sync after load
        updateHeaderBadgesFromStorage();
    });
});

// ===== GLOBAL LIVE SEARCH ENGINE =====
let _allProducts = null;

async function _fetchAllProducts() {
    if (_allProducts) return _allProducts;
    try {
        const res = await fetch('http://localhost:5000/api/products');
        _allProducts = await res.json();
        return _allProducts;
    } catch(e) { return []; }
}

async function handleGlobalSearch(query) {
    const dropdown = document.getElementById('search-dropdown');
    if (!dropdown) return;

    if (!query || query.trim().length < 1) {
        dropdown.classList.add('hidden');
        return;
    }

    const q = query.toLowerCase().trim();
    const all = await _fetchAllProducts();
    const results = all.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.desc || '').toLowerCase().includes(q)
    ).slice(0, 8);

    if (results.length === 0) {
        dropdown.innerHTML = '<div class="px-6 py-4 text-slate-400 text-sm">No products found for "<b class="text-white">' + query + '</b>"</div>';
        dropdown.classList.remove('hidden');
        return;
    }

    dropdown.innerHTML = results.map(p =>
        '<a href="details.html?id=' + p.id + '" class="flex items-center gap-4 px-5 py-3 hover:bg-white/10 transition-colors cursor-pointer border-b border-white/5 last:border-0">' +
            '<img src="' + p.img + '" class="w-12 h-12 rounded-xl object-cover bg-slate-700 flex-shrink-0">' +
            '<div class="flex-1 min-w-0">' +
                '<div class="text-white font-bold text-sm truncate">' + p.title + '</div>' +
                '<div class="text-slate-400 text-xs capitalize">' + p.category + '</div>' +
            '</div>' +
            '<div class="text-yellow-400 font-black text-sm flex-shrink-0">&#8377;' + p.price.toLocaleString() + '</div>' +
        '</a>'
    ).join('') +
        '<div onclick="submitGlobalSearch(document.getElementById(\'globalSearchInput\').value)" class="px-5 py-3 text-center text-yellow-400 text-xs font-bold hover:bg-white/10 cursor-pointer">' +
            'See all results for "' + query + '" \u2192' +
        '</div>';
    dropdown.classList.remove('hidden');
}

function submitGlobalSearch(query) {
    if (!query || !query.trim()) return;
    document.getElementById('search-dropdown')?.classList.add('hidden');
    window.location.href = 'index.html?search=' + encodeURIComponent(query.trim());
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
}
