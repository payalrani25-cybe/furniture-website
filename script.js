/* eslint-env browser */
/* global alert, document, window */
/// <reference lib="dom" />

// 1. Dynamic Translation System 🌐
function changeLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('.translate');
    const currentLangText = document.getElementById('current-lang');
    const searchInput = document.getElementById('search-input');

    if (currentLangText) currentLangText.innerText = lang;

    if (lang === 'हिन्दी') {
        elementsToTranslate.forEach(el => el.innerText = el.getAttribute('data-hi'));
        if (searchInput) searchInput.placeholder = "फर्नीचर खोजें...";
    } else {
        elementsToTranslate.forEach(el => el.innerText = el.getAttribute('data-en'));
        if (searchInput) searchInput.placeholder = "Search furniture...";
    }

    const langDropdown = document.getElementById('lang-dropdown');
    if (langDropdown) langDropdown.classList.remove('show');
}
window.changeLanguage = changeLanguage;


function searchProduct() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    const searchVal = input.value.toLowerCase().trim();

    // agar empty hai → sab dikhao
    if (searchVal === "") {
        displayProducts(productsDatabase);
        document.getElementById('grid-title').innerText = "All Products";
        return;
    }

    const filtered = productsDatabase.filter(product =>
        product.name.toLowerCase().includes(searchVal)
    );

    displayProducts(filtered);

    document.getElementById('grid-title').innerText =
        filtered.length > 0
            ? `Results for "${searchVal}"`
            : "No products found";
}

// Country Selector
function selectCountry(country) {
    const currentCountry = document.getElementById('current-country');
    const countryDropdown = document.getElementById('country-dropdown');

    if (currentCountry) currentCountry.innerText = country;
    if (countryDropdown) countryDropdown.classList.remove('show');
    alert(`Country changed to ${country}`);
}

// Back to Top
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Cart
let items = 0;
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');

if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        items++;
        if (cartCount) cartCount.textContent = items;
        alert(`Item added! Total: ${items}`);
    });
}

// Wishlist button
const wishlistBtn = document.getElementById('wishlist-btn');
let liked = false;

if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => {
        liked = !liked;
        const icon = wishlistBtn.querySelector('i');
        if (!icon) return;

        icon.classList.toggle('fa-solid', liked);
        icon.classList.toggle('fa-regular', !liked);
        icon.style.color = liked ? '#d15a24' : '#333';

        alert(liked ? 'Saved!' : 'Removed!');
    });
}

// PRODUCTS DATA (same as yours)
const products = [ /* 👉 same data as you sent (no change needed) */ ];

// STATE
let cart = [];
let wish = [];

// PAGE CONTROL
function openPage(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePage(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// INIT GRID
function init() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;

    grid.innerHTML = '';

    products.forEach((product) => {
        grid.innerHTML += `
        <div class="bg-white p-4 rounded-2xl shadow">
            <img src="${product.img}" class="w-full h-52 object-cover cursor-pointer" onclick="goToDetails(${product.id})">
            <h3>${product.title}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.img}', ${product.price})">Add</button>
        </div>`;
    });
}

function goToDetails(index) {
    window.location.href = `product-detail.html?id=${index}`;
}

// WISHLIST
function toggleWish(id, img, price) {
    const idx = wish.findIndex(x => x.id === id);
    if (idx === -1) wish.push({ id, img, price });
    else wish.splice(idx, 1);
    update();
}

// CART
function addToCart(id, img, price) {
    const item = cart.find(x => x.id === id);
    if (item) item.qty++;
    else cart.push({ id, img, price, qty: 1 });
    update();
}

function changeQty(id, delta) {
    const item = cart.find(x => x.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    update();
}

function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    update();
}

// UPDATE UI
function update() {
    const wishBadge = document.getElementById('wish-badge');
    const cartBadge = document.getElementById('cart-badge');

    if (wishBadge) wishBadge.innerText = wish.length;
    if (cartBadge) cartBadge.innerText = cart.reduce((a, b) => a + b.qty, 0);

    // ✅ FIXED PART (IMPORTANT)
    products.forEach((_, i) => {
        const icon = document.getElementById(`h-main-${i}`);
        if (icon) {
            const isWished = wish.some(x => x.id === i);
            icon.className = isWished
                ? "fa-solid fa-heart text-red-500"
                : "fa-regular fa-heart text-red-500";
        }
    });
}

// SEARCH
function doSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;

    const val = input.value.trim();
    alert(val ? `Searching: ${val}` : 'Type something!');
}

// EVENTS
const searchIcon = document.getElementById('search-icon');
if (searchIcon) searchIcon.addEventListener('click', doSearch);

const userBtn = document.getElementById('user-btn');
if (userBtn) userBtn.addEventListener('click', () => alert('User panel'));

// INIT CALL
init();