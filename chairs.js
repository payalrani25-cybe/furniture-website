// --- 1. DATA INITIALIZATION (Load from LocalStorage) ---
let cart = JSON.parse(localStorage.getItem('furnitureCart')) || [];
let wish = JSON.parse(localStorage.getItem('furnitureWishlist')) || [];

const product = [
    {
        id: 0,
        title: "Lux Designer #12",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/51ZxYRxTACL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/81ftGL5yVSL._SX679_.jpg","https://m.media-amazon.com/images/I/91auyHHRDlL._SX679_.jpg","https://m.media-amazon.com/images/I/81+5vdJtlQL._SX679_.jpg","https://m.media-amazon.com/images/I/71cbxUuF8ML._SX679_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath.`,
        specs: `<b>Material:</b> Solid Teak Wood Frame...`
    },
    {
        id: 1,
        title: "Lux Designer #13",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/51xTrz+8p1L._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61N8sF8+SDL._SX679_.jpg","https://m.media-amazon.com/images/I/61z98nWvOpL._SX679_.jpg","https://m.media-amazon.com/images/I/41yQY6cSeuL.jpg","https://m.media-amazon.com/images/I/619L2a0c7IL._SX679_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath.`,
        specs: `<b>Material:</b> Solid Teak Wood Frame...`
    },
    {
        id: 2,
        title: "Lux Designer #14",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/51DDD5anJGL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61iAxKMpsyL._SX679_.jpg","https://m.media-amazon.com/images/I/71J05MmLfCL._SX679_.jpg","https://m.media-amazon.com/images/I/710Ns9kiX9L._SX679_.jpg","https://m.media-amazon.com/images/I/717atqpd81L._SL1500_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath.`,
        specs: `<b>Material:</b> Solid Teak Wood Frame...`
    },
    {
        id: 3,
        title: "Lux Designer #15",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/41tX0lKGG+L._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/515KnsA7REL._SX679_.jpg"],
        desc: `Premium sofa with high-density foam.`,
        specs: `<b>Material:</b> Teak Wood...`
    },
    {
        id: 4,
        title: "Lux Designer #16",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/71wH2MzNDTL._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/41odFeycS1L.jpg"],
        desc: `Ultra-soft fabric and modern design.`,
        specs: `<b>Material:</b> Teak Wood...`
    },
    {
        id: 5,
        title: "Lux Designer #17",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/41daRubniVL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61HI49Zz+KL._SX679_.jpg"],
        desc: `Elegant velvet look for your home.`,
        specs: `<b>Material:</b> Teak Wood...`
    },
    {
        id: 6,
        title: "Lux Designer #18",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/41uAvWYSdML._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/618waBLxEUL._SX679_.jpg"],
        desc: `Royal look for king size living rooms.`,
        specs: `<b>Material:</b> Teak Wood...`
    },
    {
        id: 7,
        title: "Lux Designer #19",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/41OFOsOBA+L._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51Jk2L-frfL._SX679_.jpg"],
        desc: `High-quality stain-resistant fabric.`,
        specs: `<b>Material:</b> Teak Wood...`
    },
    {
        id: 8,
        title: "Lux Designer #20",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/51fJlpawCKL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51dVk4Oy0EL._SX679_.jpg"],
        desc: `Luxury experience at home.`,
        specs: `<b>Material:</b> Teak Wood...`
    }
];

// --- 2. UI FUNCTIONS ---
function openPage(id) { 
    document.getElementById(id).classList.add('active'); 
    document.body.style.overflow = 'hidden'; 
}

function closePage(id) { 
    document.getElementById(id).classList.remove('active'); 
    document.body.style.overflow = 'auto'; 
}

function init() {
    const grid = document.getElementById('main-grid');
    if(!grid) return;
    grid.innerHTML = ''; 

    product.forEach((item) => {
        grid.innerHTML += `
            <div class="bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 group transition-all hover:shadow-2xl">
                <div class="relative overflow-hidden rounded-[2rem] mb-4 h-60 cursor-pointer" 
                     onclick="goToDetails(${item.id})"> 
                    <img src="${item.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <button onclick="event.stopPropagation(); toggleWish(${item.id})" 
                            class="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg z-10">
                        <i id="h-main-${item.id}" class="fa-regular fa-heart text-red-500 text-lg"></i>
                    </button>
                </div>
                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-800">${item.title}</h3>
                    <p class="text-indigo-600 font-black text-2xl mt-1">₹${item.price.toLocaleString()}</p>
                    <div class="flex gap-2 mt-5">
                        <button onclick="addToCart(${item.id})" class="flex-1 bg-slate-900 text-white py-3 rounded-2xl font-bold text-sm hover:bg-slate-700 transition">Add To Cart</button>
                        <button onclick="handleBooking('${item.title}')" class="flex-1 booking-btn text-white py-3 rounded-2xl font-bold text-sm shadow-md transition">Book Now</button>
                    </div>
                </div>
            </div>`;
    });
    update();
}

function goToDetails(id) {
    window.location.href = `chair-details.html?id=${id}`;
}

// --- 3. CART & WISHLIST LOGIC ---
function toggleWish(id) {
    const item = product.find(x => x.id === id);
    const idx = wish.findIndex(x => x.id === id);
    if (idx === -1) {
        wish.push(item);
    } else {
        wish.splice(idx, 1);
    }
    update();
}

function addToCart(id) {
    const item = product.find(x => x.id === id);
    const cartItem = cart.find(x => x.id === id);
    if (cartItem) { 
        cartItem.qty++; 
    } else { 
        cart.push({ ...item, qty: 1 }); 
    }
    update();
}

function changeQty(id, delta) {
    const item = cart.find(x => x.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
        update();
    }
}

function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    update();
}

function handleBooking(itemName) {
    window.location.href = `booking.html?item=${encodeURIComponent(itemName)}`;
}

// --- 4. GLOBAL UPDATE (Sync UI + Storage) ---
function update() {
    // Save to LocalStorage
    localStorage.setItem('furnitureCart', JSON.stringify(cart));
    localStorage.setItem('furnitureWishlist', JSON.stringify(wish));

    // Update Header Badges
    const cartCountElement = document.getElementById('cart-count');
    const wishCountElement = document.getElementById('wishlist-count');
    if(cartCountElement) cartCountElement.innerText = cart.reduce((a, b) => a + b.qty, 0);
    if(wishCountElement) wishCountElement.innerText = wish.length;

    // Update Wishlist Modal Content
    const wishBox = document.getElementById('wish-content');
    if(wishBox) {
        wishBox.innerHTML = wish.length ? wish.map(x => `
            <div class="bg-white p-5 rounded-[2rem] border-2 border-gray-50 flex flex-col md:flex-row gap-6 shadow-sm">
                <img src="${x.img}" class="w-full md:w-32 h-32 object-cover rounded-2xl">
                <div class="flex-1">
                    <div class="flex justify-between">
                        <h4 class="font-black text-xl text-slate-800">${x.title}</h4>
                        <button onclick="toggleWish(${x.id})" class="text-red-400"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                    <p class="text-indigo-600 font-bold text-lg mb-4">₹${x.price.toLocaleString()}</p>
                    <div class="flex gap-3">
                        <button onclick="addToCart(${x.id})" class="flex-1 bg-indigo-50 text-indigo-600 py-2 rounded-xl font-bold text-xs border border-indigo-100">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('') : '<div class="col-span-full py-20 text-center text-slate-400">Wishlist empty.</div>';
    }

    // Update Cart Modal Content
    const cartBox = document.getElementById('cart-content');
    let total = 0;
    if(cartBox) {
        cartBox.innerHTML = cart.length ? cart.map(x => {
            total += (x.price * x.qty);
            return `
                <div class="flex gap-6 p-4 bg-white rounded-3xl border border-gray-50">
                    <img src="${x.img}" class="w-24 h-24 object-cover rounded-2xl">
                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <h4 class="font-bold text-lg">${x.title}</h4>
                            <p class="text-indigo-600 font-black">₹${(x.price * x.qty).toLocaleString()}</p>
                        </div>
                        <div class="flex items-center gap-4 mt-3">
                            <div class="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-2xl">
                                <button onclick="changeQty(${x.id}, -1)">-</button>
                                <span class="font-bold">${x.qty}</span>
                                <button onclick="changeQty(${x.id}, 1)">+</button>
                            </div>
                            <button onclick="removeFromCart(${x.id})" class="text-red-500"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>`;
        }).join('') : '<div class="py-20 text-center text-slate-400">Cart empty.</div>';
        
        document.getElementById('grand-total').innerText = '₹' + total.toLocaleString();
    }

    // Heart Icon State Fix
    product.forEach((item) => {
        const icon = document.getElementById(`h-main-${item.id}`);
        if (icon) {
            const isWished = wish.some(x => x.id === item.id);
            icon.className = isWished ? "fa-solid fa-heart text-red-500 text-lg" : "fa-regular fa-heart text-red-500 text-lg";
        }
    });
}

document.addEventListener('DOMContentLoaded', init);