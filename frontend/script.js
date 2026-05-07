fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

/* script.js - Unified Logic for Furniture Website */
const API_URL = 'http://localhost:5000/api';

// 🔒 First-visit redirect to Login
if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', '1');
    if (!localStorage.getItem('token')) {
        window.location.href = 'login.html';
    }
}

// 1. STATE MANAGEMENT
let cart = JSON.parse(localStorage.getItem('furnitureCart')) || [];
let wish = JSON.parse(localStorage.getItem('furnitureWishlist')) || [];

// 2. PREMIUM TOAST NOTIFICATION SYSTEM
function showToast(msg, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background: rgba(26, 42, 58, 0.95);
            backdrop-filter: blur(20px);
            color: #fff;
            padding: 16px 32px;
            border-radius: 50px;
            font-size: 15px;
            font-weight: 700;
            font-family: 'Outfit', sans-serif;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            z-index: 99999;
            display: flex;
            align-items: center;
            gap: 12px;
            border: 1px solid rgba(200, 161, 101, 0.4);
            opacity: 0;
            pointer-events: none;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            white-space: nowrap;
        `;
        document.body.appendChild(container);
    }

    const icon = type === 'wish' ? '❤️' : '✅';
    const color = type === 'wish' ? '#ef4444' : '#c8a165';
    container.innerHTML = `<span style="font-size:20px">${icon}</span> <span style="color:${color}">${msg}</span>`;
    container.style.opacity = '1';
    container.style.transform = 'translateX(-50%) translateY(0)';
    container.style.pointerEvents = 'auto';

    clearTimeout(container._timer);
    container._timer = setTimeout(() => {
        container.style.opacity = '0';
        container.style.transform = 'translateX(-50%) translateY(20px)';
        container.style.pointerEvents = 'none';
    }, 3000);
}

// 3. UNIVERSAL SEARCH FUNCTION
function searchProduct() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    
    const filter = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.product-card');
    let found = 0;

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = 'block';
            found++;
        } else {
            card.style.display = 'none';
        }
    });

    const titleEl = document.getElementById('grid-title');
    if (titleEl) {
        if (filter === "") titleEl.innerText = "All Products";
        else titleEl.innerText = found > 0 ? `Results for "${filter}"` : "No matching products found";
    }
}

// 4. UI UPDATES
function updateBadges() {
    const cartBadge = document.getElementById('cart-count');
    const wishBadge = document.getElementById('wishlist-count');
    
    if (cartBadge) cartBadge.innerText = cart.reduce((a, b) => a + (b.qty || 1), 0);
    if (wishBadge) wishBadge.innerText = wish.length;
    
    localStorage.setItem('furnitureCart', JSON.stringify(cart));
    localStorage.setItem('furnitureWishlist', JSON.stringify(wish));
    
    updateUI();
    syncWithBackend();
}

function updateUI() {
    const wishBox = document.getElementById('wish-content');
    if (wishBox) {
        wishBox.innerHTML = wish.length ? wish.map(x => `
            <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4 hover:border-yellow-500 transition-colors">
                <img src="${x.img}" class="w-20 h-20 object-cover rounded-xl bg-slate-100">
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start">
                        <h4 class="font-bold text-sm text-[#1a2a3a] truncate">${x.title}</h4>
                        <button onclick='toggleWishGlobal(${JSON.stringify(x).replace(/'/g, "\\'")})' class="text-slate-300 hover:text-red-500"><i class="fa-solid fa-trash-can text-xs"></i></button>
                    </div>
                    <p class="text-yellow-600 font-black text-sm mt-1">₹${x.price.toLocaleString()}</p>
                    <button onclick='addToCartGlobal(${JSON.stringify(x).replace(/'/g, "\\'")})' class="mt-2 text-[10px] font-black uppercase text-yellow-500 border border-yellow-500 px-3 py-1 rounded-full hover:bg-yellow-500 hover:text-white transition-all shadow-sm">Move To Cart</button>
                </div>
            </div>
        `).join('') : '<div class="py-20 text-center text-slate-400 font-medium whitespace-normal">Wishlist empty... <br> Add luxury products.</div>';
    }

    const cartBox = document.getElementById('cart-content');
    let total = 0;
    if (cartBox) {
        cartBox.innerHTML = cart.length ? cart.map(x => {
            total += (x.price * (x.qty || 1));
            return `
                <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                    <img src="${x.img}" class="w-20 h-20 object-cover rounded-xl bg-slate-100">
                    <div class="flex-1 min-w-0">
                        <div class="flex justify-between items-start">
                            <h4 class="font-bold text-sm text-[#1a2a3a] truncate">${x.title}</h4>
                            <button onclick="removeFromCartGlobal('${x.id}')" class="text-slate-300 hover:text-red-500"><i class="fa-solid fa-trash-can text-xs"></i></button>
                        </div>
                        <div class="flex justify-between items-center mt-3">
                            <p class="text-[#1a2a3a] font-black text-sm">₹${x.price.toLocaleString()}</p>
                            <div class="flex items-center gap-3 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 shadow-inner">
                                <button onclick="changeQtyGlobal('${x.id}', -1)" class="text-slate-500 hover:text-[#1a2a3a] font-black">-</button>
                                <span class="text-xs font-black min-w-[12px] text-center">${x.qty}</span>
                                <button onclick="changeQtyGlobal('${x.id}', 1)" class="text-slate-500 hover:text-[#1a2a3a] font-black">+</button>
                            </div>
                        </div>
                    </div>
                </div>`;
        }).join('') : '<div class="py-20 text-center text-slate-400 font-medium whitespace-normal">Cart is empty.</div>';
        
        const totalEl = document.getElementById('grand-total');
        if (totalEl) totalEl.innerText = '₹' + total.toLocaleString();
    }
}

function changeQtyGlobal(id, delta) {
    const item = cart.find(x => String(x.id) === String(id));
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(x => String(x.id) !== String(id));
        }
        updateBadges();
    }
}

function removeFromCartGlobal(id) {
    cart = cart.filter(x => String(x.id) !== String(id));
    updateBadges();
}

// 5. GLOBAL ACTIONS
function openPage(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePage(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    updateBadges();
});

function toggleWishGlobal(item) {
    const idx = wish.findIndex(x => String(x.id) === String(item.id));
    if (idx === -1) {
        wish.push(item);
        showToast("❤️ Wishlist me add ho gaya!", 'wish');
    } else {
        wish.splice(idx, 1);
        showToast("Wishlist se hata diya", 'success');
    }
    updateBadges();
}

function addToCartGlobal(item) {
    const cartItem = cart.find(x => String(x.id) === String(item.id));
    if (cartItem) {
        cartItem.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    showToast("🛒 Cart me add ho gaya!", 'success');
    updateBadges();
}

// 7. BACKEND SYNC (NEW)
async function syncWithBackend() {
    const userData = localStorage.getItem('user');
    if (!userData) return;
    try {
        const user = JSON.parse(userData);
        if (!user || !user.email) return;

        await fetch(`${API_URL}/auth/sync`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: user.email,
                cart: cart,
                wishlist: wish
            })
        });
    } catch (err) {
        console.error("Sync failed", err);
    }
}
