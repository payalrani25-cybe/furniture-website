/**
 * dynamic-details.js - The engine for details.html
 * Fetches product specific data and renders it with premium styles.
 */

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

async function loadProductDetails() {
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }

    try {
        const res = await fetch(`${API_URL}/products/${productId}`);
        const product = await res.json();
        
        if (product && product.id) {
            renderDetails(product);
            loadRelatedProducts(product.category);
        } else {
            document.body.innerHTML = "<h1 class='text-center py-40'>Product Not Found</h1>";
        }
    } catch (err) {
        console.error("Failed to load product details", err);
    }
}

function renderDetails(p) {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.classList.add('hidden');
    
    const container = document.getElementById('details-container');
    if (container) container.classList.remove('hidden');

    // Text Content
    document.title = `Patodi Furniture - ${p.title}`;
    document.getElementById('p-title').innerText = p.title;
    document.getElementById('p-category').innerText = p.category;
    document.getElementById('p-price').innerText = `₹${p.price.toLocaleString()}`;
    document.getElementById('p-desc').innerText = p.desc || "No description available for this premium piece.";
    document.getElementById('p-specs').innerHTML = p.specs || "Contact shop for details.";
    document.getElementById('p-rating').innerText = `(${p.rating || 4.8}/5)`;

    // Main Image
    const mainImg = document.getElementById('main-display-img');
    if (mainImg) mainImg.src = p.img;

    // Gallery / Thumbnails
    const thumbContainer = document.getElementById('thumb-container');
    if (thumbContainer) {
        thumbContainer.innerHTML = '';
        
        // Add main image and gallery images as thumbnails
        const galleryItems = [p.img];
        if (p.gallery && Array.isArray(p.gallery)) {
            p.gallery.forEach(url => {
                if (url !== p.img) galleryItems.push(url);
            });
        }
        
        galleryItems.forEach((url, idx) => {
            const img = document.createElement('img');
            img.src = url;
            img.className = `w-24 h-24 object-cover rounded-3xl cursor-pointer border-4 border-transparent hover:border-[#c8a165] transition-all bg-white shadow-md flex-shrink-0 ${idx === 0 ? 'active-thumb' : ''}`;
            
            img.onclick = () => {
                mainImg.src = url;
                document.querySelectorAll('#thumb-container img').forEach(t => t.classList.remove('active-thumb'));
                img.classList.add('active-thumb');
            };
            
            thumbContainer.appendChild(img);
        });
    }

    // Button Logic
    const cartBtn = document.getElementById('add-to-cart-btn');
    if (cartBtn) cartBtn.onclick = () => addToCartGlobal(p);
    
    const bookBtn = document.getElementById('book-now-btn');
    if (bookBtn) {
        bookBtn.onclick = () => {
            window.location.href = `booking.html?id=${p.id}&title=${encodeURIComponent(p.title)}`;
        };
    }
}

async function loadRelatedProducts(category) {
    try {
        const res = await fetch(`${API_URL}/products`);
        const allProducts = await res.json();
        
        // Filter by category and exclude current product
        let related = allProducts.filter(p => p.category === category && String(p.id) !== String(productId));
        
        // If not enough related from same category, add some more
        if (related.length < 4) {
            const others = allProducts.filter(p => String(p.id) !== String(productId) && !related.find(r => r.id === p.id));
            related = [...related, ...others].slice(0, 4);
        } else {
            related = related.slice(0, 4);
        }
        
        const grid = document.getElementById('related-grid');
        if (grid) {
            grid.innerHTML = related.map(p => `
                <div class="product-card group relative p-4 bg-white rounded-[2.5rem] border border-slate-50 hover:shadow-2xl transition-all cursor-pointer overflow-hidden" 
                     onclick="window.location.href='details.html?id=${p.id}'">
                    <div class="relative h-64 overflow-hidden rounded-[2rem] bg-slate-50 mb-4">
                        <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                        <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div class="px-2">
                        <h3 class="text-lg font-black text-[#1a2a3a] line-clamp-1">${p.title}</h3>
                        <div class="flex items-center justify-between mt-2">
                            <p class="text-xl font-black text-[#c8a165]">₹${p.price.toLocaleString()}</p>
                            <span class="text-[10px] font-black uppercase text-slate-400 border border-slate-200 px-3 py-1 rounded-full">${p.category}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    } catch (e) {
        console.error("Failed to load related products", e);
    }
}

// Initial Run
document.addEventListener('DOMContentLoaded', loadProductDetails);
