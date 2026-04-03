/* eslint-env browser */
/* global alert, document, window */
/// <reference lib="dom" />

// 1. Dynamic Translation System 🌐
function changeLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('.translate');
    const currentLangText = document.getElementById('current-lang');
    const searchInput = document.getElementById('search-input');
    
    if (currentLangText) {
        currentLangText.innerText = lang;
    }

    if (lang === 'हिन्दी') {
        // Change text to Hindi
        elementsToTranslate.forEach(el => {
            el.innerText = el.getAttribute('data-hi');
        });
        if (searchInput) searchInput.placeholder = "फर्नीचर खोजें...";
    } else {
        // Fallback or Change to English
        elementsToTranslate.forEach(el => {
            el.innerText = el.getAttribute('data-en');
        });
        if (searchInput) searchInput.placeholder = "Search furniture...";
    }
    
    const langDropdown = document.getElementById('lang-dropdown');
    if (langDropdown) langDropdown.classList.remove('show');
}
window.changeLanguage = changeLanguage;

// Country Selector Alert
function selectCountry(country) {
    const currentCountry = document.getElementById('current-country');
    const countryDropdown = document.getElementById('country-dropdown');
    
    if (currentCountry) currentCountry.innerText = country;
    if (countryDropdown) countryDropdown.classList.remove('show');
    alert(`Country changed to ${country}`);
}

// 2. Smooth "Back to Top" Scroll
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 3. Interactive Add to Cart
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
let items = 0;

if (cartBtn) {
    cartBtn.addEventListener('click', function() {
        items++;
        if (cartCount) cartCount.textContent = items;
        alert(`Item added to your cart! Total items: ${items}`);
    });
}

// 4. Wishlist Heart Toggle
const wishlistBtn = document.getElementById('wishlist-btn');
let liked = false;

if (wishlistBtn) {
    wishlistBtn.addEventListener('click', function() {
        liked = !liked;
        const heartIcon = wishlistBtn.querySelector('i');
        if(liked) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.color = '#d15a24';
            alert('Product saved to wishlist!');
        } else {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = '#333';
            alert('Product removed from wishlist!');
        }
    });
}

// User Icon Alert
const userBtn = document.getElementById('user-btn');
if (userBtn) {
    userBtn.addEventListener('click', function() {
        alert('User account options opening...');
    });
}

// 5. Interactive Search Bar
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');

function doSearch() {
    if (!searchInput) return;
    const val = searchInput.value.trim();
    if(val !== "") {
        alert(`Searching for: "${val}"`);
    } else {
        alert('Please type something in the search bar first!');
    }
}

if (searchIcon) searchIcon.addEventListener('click', doSearch);
if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') doSearch();
    });
}

// 6. Language & Country Dropdowns UI
const langBox = document.getElementById('lang-box');
const langDropdown = document.getElementById('lang-dropdown');
const countryBox = document.getElementById('country-box');
const countryDropdown = document.getElementById('country-dropdown');

if (langBox) {
    langBox.addEventListener('click', function() {
        if (langDropdown) langDropdown.classList.toggle('show');
        if (countryDropdown) countryDropdown.classList.remove('show');
    });
}

if (countryBox) {
    countryBox.addEventListener('click', function() {
        if (countryDropdown) countryDropdown.classList.toggle('show');
        if (langDropdown) langDropdown.classList.remove('show');
    });
}

// Close dropdowns if user clicks outside
window.addEventListener('click', function(e) {
    if (langBox && countryBox) {
        if (!langBox.contains(e.target) && !countryBox.contains(e.target)) {
            if (langDropdown) langDropdown.classList.remove('show');
            if (countryDropdown) countryDropdown.classList.remove('show');
        }
    }
});

const signinBtn = document.getElementById('signin-btn');
if (signinBtn) {
    signinBtn.addEventListener('click', () => alert('Opening Sign In Form!'));
}