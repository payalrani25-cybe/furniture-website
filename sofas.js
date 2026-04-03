const sofa = [
    {
        id: 45,
        title: "Lux Designer Sofa #1",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/51CLg1PaVkL._SX300_SY300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/41APxHLzlHL.jpg","https://m.media-amazon.com/images/I/612bN2fWSjL.jpg","https://m.media-amazon.com/images/I/51kMg2lJvEL.jpg","https://m.media-amazon.com/images/I/51Fpe1c6jIL.jpg"],
        desc: "Experience ultimate comfort with our Lux Designer Sofa. Crafted with premium fabric and ergonomic support, this sofa is designed to be the centerpiece of your living room.",
        specs: "<b>Material:</b> Premium Fabric & Solid Wood Frame<br><b>Seating Capacity:</b> 3 Seater<br><b>Warranty:</b> 2 Years"
    },
    {
        id: 41,
        title: "Lux Designer Sofa #2",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/41yCA8ff4cL._SX300_SY300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/614riYFq3AL._SX679_.jpg","https://m.media-amazon.com/images/I/51R4Vk3nOSL._SX679_.jpg","https://m.media-amazon.com/images/I/51UZDZ-qX5L._SX679_.jpg"],
        desc: "A modern take on classic comfort, featuring high-resilience foam and stain-resistant upholstery.",
        specs: "<b>Material:</b> Velvet Touch Fabric<br><b>Dimensions:</b> 80 x 35 x 30 inches<br><b>Color:</b> Royal Blue"
    },
    {
        id: 42,
        title: "Lux Designer Sofa #3",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/51cD3B73OML._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/514d0SiTveL.jpg","https://m.media-amazon.com/images/I/51cD3B73OML._SX679_.jpg"],
        desc: "Sleek lines and minimalist design make this sofa perfect for modern apartments.",
        specs: "<b>Material:</b> Engineered Wood & Jute Fabric<br><b>Finish:</b> Matte"
    },
    {
        id: 43,
        title: "Lux Designer Sofa #4",
        price: 23500,
        img:  "https://m.media-amazon.com/images/I/41s7v8LMY0L._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61Dq53YKq0L._SX679_.jpg","https://m.media-amazon.com/images/I/61+ykky8ycL._SX679_.jpg"],
        desc: "Designed for relaxation, this sofa features extra-deep seating and plush back cushions.",
        specs: "<b>Filling:</b> High Density Foam<br><b>Frame:</b> Teak Wood"
    },
    {
        id: 44,
        title: "Lux Designer Sofa #5",
        price: 22000,
        img:"https://m.media-amazon.com/images/I/41rdO+U8qyL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/81EnGL4IN-L._SX679_.jpg","https://m.media-amazon.com/images/I/816amPlEpoL._SX679_.jpg"],
        desc: "Compact yet stylish, this designer piece fits perfectly in smaller study rooms or balconies.",
        specs: "<b>Style:</b> Contemporary<br><b>Assembly:</b> Pre-assembled"
    },
    {
        id: 48, // FIXED: Changed from 45 to 48 to avoid duplicate ID
        title: "Lux Designer Sofa #6",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/31cnHmJq-AL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61N5nignvOL._SX679_.jpg","https://m.media-amazon.com/images/I/61xmAtOuJgL._SX679_.jpg"],
        desc: "Premium leatherette finish that provides a luxury feel without the high maintenance.",
        specs: "<b>Material:</b> High-Grade Leatherette<br><b>Legs:</b> Chrome Finish"
    },
    {
        id: 46,
        title: "Lux Designer Sofa #7",
        price: 22000,
        img:  "https://m.media-amazon.com/images/I/210FkWPkSqL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61BlPQyo+gL._SX679_.jpg","https://m.media-amazon.com/images/I/61ZiJxg0vDL._SX679_.jpg"],
        desc: "Lightweight and easy to move, yet sturdy enough for everyday heavy use.",
        specs: "<b>Weight:</b> 45kg<br><b>Frame:</b> Iron & Wood"
    },
    {
        id: 47,
        title: "Lux Designer Sofa #8",
        price: 23500,
        img:  "https://m.media-amazon.com/images/I/41ioPeEHXjL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61omotWi0cL._SX679_.jpg","https://m.media-amazon.com/images/I/61IRvEVmLlL._SX679_.jpg"],
        desc: "Bold aesthetics and rich textures define the #8 designer sofa series.",
        specs: "<b>Texture:</b> Quilted<br><b>Durability:</b> High"
    }
];

// App State
let cart = JSON.parse(localStorage.getItem('lux_cart')) || [];
let wish = JSON.parse(localStorage.getItem('lux_wish')) || [];

// --- NAVIGATION ---
function openPage(id) { 
    document.getElementById(id).classList.add('active'); 
    document.body.style.overflow = 'hidden'; 
}

function closePage(id) { 
    document.getElementById(id).classList.remove('active'); 
    document.body.style.overflow = 'auto'; 
}

function goToDetails(id) {
    window.location.href = `product-details.html?id=${id}`;
}

// --- INITIALIZE GRID ---
function init() {
    const grid = document.getElementById('main-grid');
    if(!grid) return;
    grid.innerHTML = ''; 
    
    sofa.forEach((item) => {
        const isWished = wish.some(x => x.id === item.id);
        grid.innerHTML += `
            <div class="bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 group transition-all hover:shadow-2xl">
                <div class="relative overflow-hidden rounded-[2rem] mb-4 h-60 cursor-pointer" 
                     onclick="goToDetails(${item.id})"> 
                    <img src="${item.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    
                    <button onclick="event.stopPropagation(); toggleWish(${item.id})" 
                            class="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg z-10">
                        <i id="h-main-${item.id}" class="${isWished ? 'fa-solid' : 'fa-regular'} fa-heart text-red-500 text-lg"></i>
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

// --- CORE FUNCTIONS ---
function toggleWish(id) {
    const item = sofa.find(x => x.id === id);
    const idx = wish.findIndex(x => x.id === id);
    
    if (idx === -1) {
        wish.push(item);
    } else {
        wish.splice(idx, 1);
    }
    saveData();
    update();
}

function addToCart(id) {
    const item = sofa.find(x => x.id === id);
    const cartItem = cart.find(x => x.id === id);
    
    if (cartItem) { 
        cartItem.qty++; 
    } else { 
        cart.push({ ...item, qty: 1 }); 
    }
    saveData();
    update();
}

function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    saveData();
    update();
}

function changeQty(id, delta) {
    const item = cart.find(x => x.id === id);
    if(item) {
        item.qty += delta;
        if (item.qty <= 0) removeFromCart(id);
        saveData();
        update();
    }
}

// --- UPDATE UI ---
function update() {
    // Badges
    const wishBadge = document.getElementById('wish-badge');
    const cartBadge = document.getElementById('cart-badge');
    if(wishBadge) wishBadge.innerText = wish.length;
    if(cartBadge) cartBadge.innerText = cart.reduce((a, b) => a + b.qty, 0);

    // Wishlist UI
    const wishBox = document.getElementById('wish-content');
    if(wishBox) {
        wishBox.innerHTML = wish.length ? wish.map(x => `
            <div class="bg-white p-5 rounded-[2rem] border-2 border-gray-50 flex gap-6 items-center shadow-sm">
                <img src="${x.img}" class="w-20 h-20 object-cover rounded-2xl">
                <div class="flex-1">
                    <h4 class="font-bold text-slate-800">${x.title}</h4>
                    <p class="text-indigo-600 font-bold">₹${x.price.toLocaleString()}</p>
                </div>
                <button onclick="toggleWish(${x.id})" class="text-red-400 p-2"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `).join('') : '<div class="py-10 text-center text-slate-400">Wishlist is empty</div>';
    }

    // Cart UI
    const cartBox = document.getElementById('cart-content');
    if(cartBox) {
        cartBox.innerHTML = cart.length ? cart.map(x => `
            <div class="flex gap-4 p-4 bg-white rounded-3xl border border-gray-50">
                <img src="${x.img}" class="w-20 h-20 object-cover rounded-2xl">
                <div class="flex-1">
                    <h4 class="font-bold text-sm">${x.title}</h4>
                    <div class="flex justify-between items-center mt-2">
                        <div class="flex gap-3 bg-gray-100 px-3 py-1 rounded-lg text-xs">
                            <button onclick="changeQty(${x.id}, -1)">-</button>
                            <span>${x.qty}</span>
                            <button onclick="changeQty(${x.id}, 1)">+</button>
                        </div>
                        <p class="font-black text-indigo-600 text-sm">₹${(x.price * x.qty).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        `).join('') : '<div class="py-10 text-center text-slate-400">Cart is empty</div>';
    }

    // Update Grand Total if exists
    const grandTotal = document.getElementById('grand-total');
    if(grandTotal) {
        const total = cart.reduce((a, b) => a + (b.price * b.qty), 0);
        grandTotal.innerText = '₹' + total.toLocaleString();
    }

    // Refresh Heart Icons on Grid
    sofa.forEach((item) => {
        const icon = document.getElementById(`h-main-${item.id}`);
        if (icon) {
            const isWished = wish.some(x => x.id === item.id);
            icon.className = isWished ? "fa-solid fa-heart text-red-500 text-lg" : "fa-regular fa-heart text-red-500 text-lg";
        }
    });
}

function saveData() {
    localStorage.setItem('lux_cart', JSON.stringify(cart));
    localStorage.setItem('lux_wish', JSON.stringify(wish));
}

function handleBooking(name) {
    alert(`🎉 Congratulations! Your booking request for ${name} has been sent.`);
}

// Start App
document.addEventListener('DOMContentLoaded', init);