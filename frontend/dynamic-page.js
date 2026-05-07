/**
 * dynamic-page.js - ONE SCRIPT TO RULE THEM ALL
 * This script automatically handles any category page (Sofa, Bed, Chair, etc.)
 */

let product = [];
const pageFile = window.location.pathname.split('/').pop().split('.')[0];

// Map filename → actual DB category name
const categoryMap = {
    'sofa': 'sofas',
    'bed': 'beds',
    'chairs': 'chairs',
    'almira': 'almira',
    'table': 'table',
    'center': 'center',
    'wardrobes': 'wardrobes'
};
const currentCategory = categoryMap[pageFile] || pageFile;

async function loadCategoryData() {
    try {
        const res = await fetch(`${API_URL}/products?category=${currentCategory}`);
        product = await res.json();
        renderGrid();
    } catch (err) {
        console.error(`Failed to load ${currentCategory}`, err);
    }
}

function renderGrid() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (product.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-20 text-center text-slate-400">No products found in ${currentCategory}.</div>`;
        return;
    }

    product.forEach((item) => {
        const itemStr = JSON.stringify(item).replace(/"/g, '&quot;');
        const isWished = wish.some(x => String(x.id) === String(item.id));

        grid.innerHTML += `
            <div class="product-card bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 group transition-all hover:shadow-2xl relative">
                <div class="relative overflow-hidden rounded-[2rem] mb-4 h-60 cursor-pointer" 
                     onclick="goToDetails('${item.id}')"> 
                    <img src="${item.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    
                    <button onclick="event.stopPropagation(); toggleWishGlobal(${itemStr})" 
                            class="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg z-10 transition-transform active:scale-90">
                        <i id="h-main-${item.id}" class="${isWished ? 'fa-solid' : 'fa-regular'} fa-heart text-red-500 text-lg"></i>
                    </button>
                </div>
                <div class="px-2 text-center md:text-left">
                    <h3 class="text-xl font-bold text-slate-800 line-clamp-1">${item.title}</h3>
                    <p class="text-[#c8a165] font-black text-2xl mt-1">₹${item.price.toLocaleString()}</p>
                    <div class="flex flex-col sm:flex-row gap-2 mt-5">
                        <button onclick="addToCartGlobal(${itemStr})" 
                                class="flex-1 bg-[#1a2a3a] text-white py-3 rounded-2xl font-bold text-sm hover:bg-[#c8a165] hover:text-[#1a2a3a] transition-all">
                            Add To Cart
                        </button>
                        <button onclick="handleBooking('${item.title}')" 
                                class="flex-1 bg-slate-100 text-[#1a2a3a] py-3 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-all">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>`;
    });
}

function updateUI() {
    renderGrid(); // Refresh grid state (e.g. heart icons)
}

function goToDetails(id) {
    window.location.href = `details.html?id=${id}`;
}

function handleBooking(itemName) {
    window.location.href = `booking.html?item=${encodeURIComponent(itemName)}`;
}

// Initial Load
document.addEventListener('DOMContentLoaded', loadCategoryData);
