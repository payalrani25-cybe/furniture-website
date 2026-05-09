const product = [
    {
        id: 0,
        title: "Royal Almirah #1",
        price: 18500,
        img: "https://m.media-amazon.com/images/I/71KKO4XF7+L._AC_SL1500_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/71ydZ7-MW6L._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71JUIb0g8zL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71OciWR+p4L._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71pmIXu504L._AC_SL1500_.jpg"],
        desc: `Iss Royal Almirah ke saath apne bedroom ko ek premium aur organized look dein. Solid wood frame ke saath banaya gaya yeh almirah kaafi spacious hai aur kaafikapda aur accessories store kar sakta hai. Iska mirror door room ko bada dikhata hai aur iska finishing touch aapke room ki khubsoorti badh deta hai.`,
        specs: `<b>Material:</b> Solid Teak Wood (Sagwan)<br><b>Finish:</b> Polished Walnut Brown<br><b>Doors:</b> 3-Door with Full-Length Mirror<br><b>Dimensions:</b> H: 78" | W: 60" | D: 20"<br><b>Warranty:</b> 3 Years Manufacturer Warranty`
    },
    {
        id: 1,
        title: "Classic Almirah #2",
        price: 15200,
        img: "https://m.media-amazon.com/images/I/81xtr1gtR9L._AC_SL1500_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/81oNgOTeSIL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81RudcT7EPL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81bRQ7iGJQL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71G4iEfAJoL._AC_SL1500_.jpg"],
        desc: `Yeh Classic Almirah apni simple aur elegant design ke liye jaana jaata hai. Isme alag-alag shelves aur hanging space hai jo aapke kapdon ko perfectly organize rakhta hai. Durable material se bana yeh furniture saloon tak tika rehta hai.`,
        specs: `<b>Material:</b> Engineered Wood + Solid Frame<br><b>Finish:</b> Matte White<br><b>Doors:</b> 2-Door Sliding<br><b>Dimensions:</b> H: 72" | W: 48" | D: 18"<br><b>Warranty:</b> 2 Years Warranty`
    },
    {
        id: 2,
        title: "Luxury Almirah #3",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/71p0Ki8f78L._AC_SL1500_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/81ga9zvEd-L._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81XL2kW9VTL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81ubF9gtdIL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81f6m1giCuL._AC_SL1500_.jpg"],
        desc: `Hamare Luxury Almirah mein premium quality wood aur handcrafted design hai. Iska spacious interior ek family ki poori zaroorat ko pura karta hai. Gold-toned handles aur smooth hinge mechanism isko ek luxury experience banate hain.`,
        specs: `<b>Material:</b> Premium Sheesham Wood<br><b>Finish:</b> Honey Oak with Gold Handles<br><b>Doors:</b> 4-Door with Beveled Mirror<br><b>Dimensions:</b> H: 82" | W: 72" | D: 22"<br><b>Warranty:</b> 3 Years Warranty`
    },
    {
        id: 3,
        title: "Modern Almirah #4",
        price: 17800,
        img: "https://m.media-amazon.com/images/I/71kokQGU9+L._AC_SL1500_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/71PdZytUmUL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71PM5vlnaWL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71O8vVEaRGL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81WWDsxwDAL._AC_SL1500_.jpg"],
        desc: `Modern design ke saath yeh almirah contemporary bedroom ke liye perfect hai. Iska minimal look aur smart storage solution aapke room ko clutter-free rakhta hai. Smooth sliding doors aur soft-close mechanism isko specially design kiya gaya hai.`,
        specs: `<b>Material:</b> High-Grade MDF + Veneer<br><b>Finish:</b> Graphite Grey Matte<br><b>Doors:</b> 3-Door Hinged<br><b>Dimensions:</b> H: 76" | W: 54" | D: 20"<br><b>Warranty:</b> 2 Years Warranty`
    },
    {
        id: 4,
        title: "Designer Almirah #5",
        price: 25500,
        img: "https://m.media-amazon.com/images/I/81ch9-rYXdL._AC_SL1500_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/81Ij84A9ykL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/7148KvjcDzL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71EaSR3sLML._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71-KOhttqML._AC_SL1500_.jpg"],
        desc: `Yeh Designer Almirah apne exclusive design ke liye famous hai. Premium wood carvings aur handcrafted details isko ek artwork banate hain. Iske andar adjustable shelves, trouser rack aur dedicated jewellery storage hai.`,
        specs: `<b>Material:</b> Hand-carved Teak Wood<br><b>Finish:</b> Rich Mahogany Polish<br><b>Doors:</b> 5-Door with Decorative Carvings<br><b>Dimensions:</b> H: 84" | W: 84" | D: 24"<br><b>Warranty:</b> 5 Years Premium Warranty`
    },
    {
        id: 5,
        title: "Compact Almirah #6",
        price: 11500,
        img: "https://m.media-amazon.com/images/I/618kRrbAr2L._AC_SX425_PIbundle-3,TopRight,0,0_SH20_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/71VTmCXINUL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81UMSXb6uiL._AC_SX425_.jpg","https://m.media-amazon.com/images/I/81HxDIy+i1L._AC_SX425_.jpg","https://m.media-amazon.com/images/I/61hsqe2ZdPL._AC_SX425_.jpg"],
        desc: `Chhote kamre ke liye perfect, yeh Compact Almirah kam jagah mein zyada storage deta hai. Iska vertical design floor space bachata hai jabki andar kaafi space hota hai kapde aur accessories ke liye.`,
        specs: `<b>Material:</b> Engineered Wood<br><b>Finish:</b> Ivory White<br><b>Doors:</b> 2-Door Compact<br><b>Dimensions:</b> H: 72" | W: 36" | D: 16"<br><b>Warranty:</b> 1 Year Warranty`
    },
    {
        id: 6,
        title: "Steel Almirah #7",
        price: 9800,
        img: "https://m.media-amazon.com/images/I/811WJqqW7KL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/71QkJdw5ukL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg","https://m.media-amazon.com/images/I/81kAW9FyVrL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg","https://m.media-amazon.com/images/I/81g2y3K0XVL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg","https://m.media-amazon.com/images/I/81vS5wc3fxL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"],
        desc: `Heavy-duty steel se bana yeh almirah bahut mazboot aur tika hua hai. Isme anti-rust coating hai jo isko lambe samay tak naya dikhata rehta hai. Security lock system ke saath yeh aapke samaan ko safe rakhta hai.`,
        specs: `<b>Material:</b> Cold-Rolled Steel<br><b>Finish:</b> Powder-Coated Silver<br><b>Doors:</b> 2-Door with Lock<br><b>Dimensions:</b> H: 72" | W: 36" | D: 18"<br><b>Warranty:</b> 2 Years Warranty`
    },
    {
        id: 7,
        title: "Wooden Almirah #8",
        price: 19500,
        img: "https://m.media-amazon.com/images/I/7105kB033IL._AC_SX679_PIbundle-5,TopRight,0,0_SH20_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/71Qos1n2T1L._AC_SX679_.jpg","https://m.media-amazon.com/images/I/71YL7K39wBL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/71ZxMZWDsDL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/81WvoMFcvTL._AC_SX679_.jpg"],
        desc: `Pure wooden almirah jis mein natural wood ka texture dikh ta hai. Iska traditional design Indian homes ke liye perfect hai. Multiple compartments aur drawers ke saath yeh complete storage solution provide karta hai.`,
        specs: `<b>Material:</b> Natural Mango Wood<br><b>Finish:</b> Natural Wood Polish<br><b>Doors:</b> 3-Door Traditional<br><b>Dimensions:</b> H: 78" | W: 60" | D: 20"<br><b>Warranty:</b> 3 Years Warranty`
    },
    {
        id: 8,
        title: "Premium Almirah #9",
        price: 28000,
        img: "https://m.media-amazon.com/images/I/61nLgofy+wL._AC_SY879_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/61h4inAnDoL._AC_SY879_.jpg","https://m.media-amazon.com/images/I/61J1-b8DUYL._AC_SY879_.jpg","https://m.media-amazon.com/images/I/81-TkdprHsL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/51IdIdAXv0L._AC_SX679_.jpg"],
        desc: `Hamare Premium Almirah collection ka sabse behtareen piece. Italian design se inspired yeh almirah aapke bedroom mein luxury ka ahsas dilata hai. Isme built-in LED lights, glass shelves, aur velvet-lined drawers hain.`,
        specs: `<b>Material:</b> Italian Beech Wood<br><b>Finish:</b> Gloss White with Chrome Handles<br><b>Doors:</b> 6-Door with Glass Panel<br><b>Dimensions:</b> H: 90" | W: 96" | D: 26"<br><b>Warranty:</b> 5 Years Premium Warranty`
    },
];






// let cart = JSON.parse(localStorage.getItem('furnitureCart')) || [];
// let wish = JSON.parse(localStorage.getItem('furnitureWishlist')) || [];


// // UI Control Functions
// function openPage(id) {
//     document.getElementById(id).classList.add('active');
//     document.body.style.overflow = 'hidden';
// }


// function closePage(id) {
//     document.getElementById(id).classList.remove('active');
//     document.body.style.overflow = 'auto';
// }


// // Initialize Main Grid
// function init() {
//     const grid = document.getElementById('main-grid');
//     if(!grid) return;
//     grid.innerHTML = '';


//     product.forEach((item) => {
//         grid.innerHTML += `
//             <div class="bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 group transition-all hover:shadow-2xl">
//                 <div class="relative overflow-hidden rounded-[2rem] mb-4 h-60 cursor-pointer"
//                      onclick="goToDetails(${item.id})">
//                     <img src="${item.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                   
//                     <button onclick="event.stopPropagation(); toggleWish(${item.id})"
//                             class="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg z-10">
//                         <i id="h-main-${item.id}" class="fa-regular fa-heart text-red-500 text-lg"></i>
//                     </button>
//                 </div>
               
//                 <div class="px-2">
//                     <h3 class="text-xl font-bold text-slate-800">${item.title}</h3>
//                     <p class="text-indigo-600 font-black text-2xl mt-1">₹${item.price.toLocaleString()}</p>
//                     <div class="flex gap-2 mt-5">
//                         <button onclick="addToCart(${item.id})" class="flex-1 bg-slate-900 text-white py-3 rounded-2xl font-bold text-sm hover:bg-slate-700 transition">Add To Cart</button>
//                         <button onclick="handleBooking('${item.title}')" class="flex-1 booking-btn text-white py-3 rounded-2xl font-bold text-sm shadow-md transition">Book Now</button>
//                     </div>
//                 </div>
//             </div>`;
//     });
// }


// // Navigation
// function goToDetails(id) {
//     window.location.href = `almira-details.html?id=${id}`;
// }


// // Wishlist Logic
// function toggleWish(id) {
//     const item = product.find(x => x.id === id);
//     const idx = wish.findIndex(x => x.id === id);
//     if (idx === -1) {
//         wish.push(item);
//         if (window.showPatodiToast) showPatodiToast('Wishlist mein add ho gaya!', '❤️', '#ef4444');
//     } else {
//         wish.splice(idx, 1);
//         if (window.showPatodiToast) showPatodiToast('Wishlist se hata diya gaya.', '🗑️', '#94a3b8');
//     }
//     update();
// }


// // Cart Logic
// function addToCart(id) {
//     const item = product.find(x => x.id === id);
//     const cartItem = cart.find(x => x.id === id);
//     if (cartItem) {
//         cartItem.qty++;
//     } else {
//         cart.push({ ...item, qty: 1 });
//     }
//     if (window.showPatodiToast) showPatodiToast('Product cart mein add ho gaya!', '🛒', '#eab308');
//     update();
// }


// function changeQty(id, delta) {
//     const item = cart.find(x => x.id === id);
//     if (item) {
//         item.qty += delta;
//         if (item.qty <= 0) removeFromCart(id);
//         update();
//     }
// }


// function removeFromCart(id) {
//     cart = cart.filter(x => x.id !== id);
//     update();
// }


// function handleBooking(name) {
//   window.location.href = "booking.html";
// }

// // Global Update Function
// function update() {
//     // Save to localStorage
//     localStorage.setItem('furnitureCart', JSON.stringify(cart));
//     localStorage.setItem('furnitureWishlist', JSON.stringify(wish));

//     // 1. Update Badges
//     const wishBadge = document.getElementById('wishlist-count') || document.getElementById('wish-badge');
//     const cartBadge = document.getElementById('cart-count') || document.getElementById('cart-badge');
//     if (wishBadge) wishBadge.innerText = wish.length;
//     if (cartBadge) cartBadge.innerText = cart.reduce((a, b) => a + b.qty, 0);


//     // 2. Update Wishlist Content
//     const wishBox = document.getElementById('wish-content');
//     if(wishBox) {
//         wishBox.innerHTML = wish.length ? wish.map(x => `
//             <div class="bg-white p-5 rounded-[2rem] border-2 border-gray-50 flex flex-col md:flex-row gap-6 shadow-sm hover:border-indigo-100 transition">
//                 <img src="${x.img}" class="w-full md:w-32 h-32 object-cover rounded-2xl shadow-inner">
//                 <div class="flex-1">
//                     <div class="flex justify-between">
//                         <h4 class="font-black text-xl text-slate-800">${x.title}</h4>
//                         <button onclick="toggleWish(${x.id})" class="text-red-400 hover:text-red-600"><i class="fa-solid fa-trash-can"></i></button>
//                     </div>
//                     <p class="text-indigo-600 font-bold text-lg mb-4">₹${x.price.toLocaleString()}</p>
//                     <div class="flex gap-3">
//                         <button onclick="addToCart(${x.id})" class="flex-1 bg-indigo-50 text-indigo-600 py-2 rounded-xl font-bold text-xs border border-indigo-100">Move to Cart</button>
//                         <button onclick="handleBooking('${x.title}')" class="flex-1 booking-btn text-white py-2 rounded-xl font-bold text-xs">Direct Book</button>
//                     </div>
//                 </div>
//             </div>
//         `).join('') : '<div class="col-span-full py-20 text-center text-slate-400 font-medium">Wishlist khaali hai...</div>';
//     }


//     // 3. Update Cart Content
//     const cartBox = document.getElementById('cart-content');
//     let total = 0;
//     if(cartBox) {
//         cartBox.innerHTML = cart.length ? cart.map(x => {
//             total += (x.price * x.qty);
//             return `
//                 <div class="flex gap-6 p-4 bg-white rounded-3xl border border-gray-50 shadow-sm">
//                     <img src="${x.img}" class="w-24 h-24 object-cover rounded-2xl">
//                     <div class="flex-1">
//                         <div class="flex justify-between items-start">
//                             <h4 class="font-bold text-lg">${x.title}</h4>
//                             <p class="text-indigo-600 font-black">₹${(x.price * x.qty).toLocaleString()}</p>
//                         </div>
//                         <div class="flex items-center gap-4 mt-3">
//                             <div class="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-2xl">
//                                 <button onclick="changeQty(${x.id}, -1)" class="font-black">-</button>
//                                 <span class="font-bold">${x.qty}</span>
//                                 <button onclick="changeQty(${x.id}, 1)" class="font-black">+</button>
//                             </div>
//                             <button onclick="removeFromCart(${x.id})" class="text-slate-300 hover:text-red-500 transition"><i class="fa-solid fa-trash"></i></button>
//                         </div>
//                     </div>
//                 </div>`;
//         }).join('') : '<div class="py-20 text-center text-slate-400">Cart khaali hai.</div>';
       
//         document.getElementById('grand-total').innerText = '₹' + total.toLocaleString();
//     }


//     // 4. Fix Heart Icons on Main Grid
//     product.forEach((item) => {
//         const icon = document.getElementById(`h-main-${item.id}`);
//         if (icon) {
//             const isWished = wish.some(x => x.id === item.id);
//             icon.className = isWished ? "fa-solid fa-heart text-red-500 text-lg" : "fa-regular fa-heart text-red-500 text-lg";
//         }
//     });
// }


// // Start Application
// document.addEventListener('DOMContentLoaded', () => {
//     init();
//     update(); // Restore state on page load
// });







let cart = [];
let wish = [];


// UI Control Functions
function openPage(id) {
    document.getElementById(id).classList.add('active');
    document.body.style.overflow = 'hidden';
}


function closePage(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = 'auto';
}


// Initialize Main Grid
function init() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;
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
}


// Navigation
function goToDetails(id) {
    window.location.href = `chair-details.html?id=${id}`;
}


// Wishlist Logic
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


// Cart Logic
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
        if (item.qty <= 0) removeFromCart(id);
        update();
    }
}


function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    update();
}


function handleBooking(name) {
    window.location.href = "booking.html";
}

// Global Update Function
function update() {
    // 1. Update Badges
    document.getElementById('wish-badge').innerText = wish.length;
    document.getElementById('cart-badge').innerText = cart.reduce((a, b) => a + b.qty, 0);


    // 2. Update Wishlist Content
    const wishBox = document.getElementById('wish-content');
    if (wishBox) {
        wishBox.innerHTML = wish.length ? wish.map(x => `
            <div class="bg-white p-5 rounded-[2rem] border-2 border-gray-50 flex flex-col md:flex-row gap-6 shadow-sm hover:border-indigo-100 transition">
                <img src="${x.img}" class="w-full md:w-32 h-32 object-cover rounded-2xl shadow-inner">
                <div class="flex-1">
                    <div class="flex justify-between">
                        <h4 class="font-black text-xl text-slate-800">${x.title}</h4>
                        <button onclick="toggleWish(${x.id})" class="text-red-400 hover:text-red-600"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                    <p class="text-indigo-600 font-bold text-lg mb-4">₹${x.price.toLocaleString()}</p>
                    <div class="flex gap-3">
                        <button onclick="addToCart(${x.id})" class="flex-1 bg-indigo-50 text-indigo-600 py-2 rounded-xl font-bold text-xs border border-indigo-100">Move to Cart</button>
                        <button onclick="handleBooking('${x.title}')" class="flex-1 booking-btn text-white py-2 rounded-xl font-bold text-xs">Direct Book</button>
                    </div>
                </div>
            </div>
        `).join('') : '<div class="col-span-full py-20 text-center text-slate-400 font-medium">Wishlist khaali hai...</div>';
    }


    // 3. Update Cart Content
    const cartBox = document.getElementById('cart-content');
    let total = 0;
    if (cartBox) {
        cartBox.innerHTML = cart.length ? cart.map(x => {
            total += (x.price * x.qty);
            return `
                <div class="flex gap-6 p-4 bg-white rounded-3xl border border-gray-50 shadow-sm">
                    <img src="${x.img}" class="w-24 h-24 object-cover rounded-2xl">
                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <h4 class="font-bold text-lg">${x.title}</h4>
                            <p class="text-indigo-600 font-black">₹${(x.price * x.qty).toLocaleString()}</p>
                        </div>
                        <div class="flex items-center gap-4 mt-3">
                            <div class="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-2xl">
                                <button onclick="changeQty(${x.id}, -1)" class="font-black">-</button>
                                <span class="font-bold">${x.qty}</span>
                                <button onclick="changeQty(${x.id}, 1)" class="font-black">+</button>
                            </div>
                            <button onclick="removeFromCart(${x.id})" class="text-slate-300 hover:text-red-500 transition"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>`;
        }).join('') : '<div class="py-20 text-center text-slate-400">Cart khaali hai.</div>';

        document.getElementById('grand-total').innerText = '₹' + total.toLocaleString();
    }


    // 4. Fix Heart Icons on Main Grid
    product.forEach((item) => {
        const icon = document.getElementById(`h-main-${item.id}`);
        if (icon) {
            const isWished = wish.some(x => x.id === item.id);
            icon.className = isWished ? "fa-solid fa-heart text-red-500 text-lg" : "fa-regular fa-heart text-red-500 text-lg";
        }
    });
}


// Start Application
document.addEventListener('DOMContentLoaded', init);

