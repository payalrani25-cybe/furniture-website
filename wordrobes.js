let cart = JSON.parse(localStorage.getItem('furnitureCart')) || [];
let wish = JSON.parse(localStorage.getItem('furnitureWishlist')) || [];

const product = [


    {
        id: 0,
        title: "Lux Designer #12",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/811WJqqW7KL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/71QkJdw5ukL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg", "https://m.media-amazon.com/images/I/81kAW9FyVrL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg", "https://m.media-amazon.com/images/I/81g2y3K0XVL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg", "https://m.media-amazon.com/images/I/81vS5wc3fxL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath. Isme ultra-soft premium velvet fabric ka istemal kiya gaya hai jo dekhne mein behad khoobsurat aur baithne mein bahut comfortable hai. Iska ergonomic design aapki back ko perfect support deta hai, taaki aap ghanto tak bina thake relax kar sakein.`,


        specs: `
    <b>Material:</b> Solid Teak Wood Frame (Mazboot Sagwan ki Lakdi)<br>
    <b>Fabric:</b> High-Quality Stain-Resistant Velvet<br>
    <b>Seating:</b> 3-Seater with High-Density Supersoft Foam<br>
    <b>Dimensions:</b> Length: 84" | Width: 35" | Height: 32"<br>
    <b>Warranty:</b> 2 Years Manufacturer Warranty against frame defects
`
    },
    {
        id: 1,
        title: "Lux Designer #13",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/7105kB033IL._AC_SX679_PIbundle-5,TopRight,0,0_SH20_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/71Qos1n2T1L._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/71YL7K39wBL._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/71ZxMZWDsDL._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/81WvoMFcvTL._AC_SX679_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath. Isme ultra-soft premium velvet fabric ka istemal kiya gaya hai jo dekhne mein behad khoobsurat aur baithne mein bahut comfortable hai. Iska ergonomic design aapki back ko perfect support deta hai, taaki aap ghanto tak bina thake relax kar sakein.`,


        specs: `
    <b>Material:</b> Solid Teak Wood Frame (Mazboot Sagwan ki Lakdi)<br>
    <b>Fabric:</b> High-Quality Stain-Resistant Velvet<br>
    <b>Seating:</b> 3-Seater with High-Density Supersoft Foam<br>
    <b>Dimensions:</b> Length: 84" | Width: 35" | Height: 32"<br>
    <b>Warranty:</b> 2 Years Manufacturer Warranty against frame defects
`
    },
    {
        id: 2,
        title: "Lux Designer #14",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/61nLgofy+wL._AC_SY879_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/61h4inAnDoL._AC_SY879_.jpg", "https://m.media-amazon.com/images/I/61J1-b8DUYL._AC_SY879_.jpg", "https://m.media-amazon.com/images/I/81-TkdprHsL._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/51IdIdAXv0L._AC_SX679_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath. Isme ultra-soft premium velvet fabric ka istemal kiya gaya hai jo dekhne mein behad khoobsurat aur baithne mein bahut comfortable hai. Iska ergonomic design aapki back ko perfect support deta hai, taaki aap ghanto tak bina thake relax kar sakein.`,


        specs: `
    <b>Material:</b> Solid Teak Wood Frame (Mazboot Sagwan ki Lakdi)<br>
    <b>Fabric:</b> High-Quality Stain-Resistant Velvet<br>
    <b>Seating:</b> 3-Seater with High-Density Supersoft Foam<br>
    <b>Dimensions:</b> Length: 84" | Width: 35" | Height: 32"<br>
    <b>Warranty:</b> 2 Years Manufacturer Warranty against frame defects
`
    },
    {
        id: 3,
        title: "Lux Designer #15",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/618kRrbAr2L._AC_SX425_PIbundle-3,TopRight,0,0_SH20_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/71VTmCXINUL._AC_SX425_.jpg", "https://m.media-amazon.com/images/I/81UMSXb6uiL._AC_SX425_.jpg", "https://m.media-amazon.com/images/I/81HxDIy+i1L._AC_SX425_.jpg", "https://m.media-amazon.com/images/I/61hsqe2ZdPL._AC_SX425_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath. Isme ultra-soft premium velvet fabric ka istemal kiya gaya hai jo dekhne mein behad khoobsurat aur baithne mein bahut comfortable hai. Iska ergonomic design aapki back ko perfect support deta hai, taaki aap ghanto tak bina thake relax kar sakein.`,


        specs: `
    <b>Material:</b> Solid Teak Wood Frame (Mazboot Sagwan ki Lakdi)<br>
    <b>Fabric:</b> High-Quality Stain-Resistant Velvet<br>
    <b>Seating:</b> 3-Seater with High-Density Supersoft Foam<br>
    <b>Dimensions:</b> Length: 84" | Width: 35" | Height: 32"<br>
    <b>Warranty:</b> 2 Years Manufacturer Warranty against frame defects
`
    },
    {
        id: 4,
        title: "Lux Designer #16",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/71KKO4XF7+L._AC_SL1500_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/71ydZ7-MW6L._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/71JUIb0g8zL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/71OciWR+p4L._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/71pmIXu504L._AC_SL1500_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath. Isme ultra-soft premium velvet fabric ka istemal kiya gaya hai jo dekhne mein behad khoobsurat aur baithne mein bahut comfortable hai. Iska ergonomic design aapki back ko perfect support deta hai, taaki aap ghanto tak bina thake relax kar sakein.`,


        specs: `
    <b>Material:</b> Solid Teak Wood Frame (Mazboot Sagwan ki Lakdi)<br>
    <b>Fabric:</b> High-Quality Stain-Resistant Velvet<br>
    <b>Seating:</b> 3-Seater with High-Density Supersoft Foam<br>
    <b>Dimensions:</b> Length: 84" | Width: 35" | Height: 32"<br>
    <b>Warranty:</b> 2 Years Manufacturer Warranty against frame defects
`
    },
    {
        id: 5,
        title: "Lux Designer #17",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/81xtr1gtR9L._AC_SL1500_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/81oNgOTeSIL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/81RudcT7EPL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/81bRQ7iGJQL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/71G4iEfAJoL._AC_SL1500_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath. Isme ultra-soft premium velvet fabric ka istemal kiya gaya hai jo dekhne mein behad khoobsurat aur baithne mein bahut comfortable hai. Iska ergonomic design aapki back ko perfect support deta hai, taaki aap ghanto tak bina thake relax kar sakein.`,


        specs: `
    <b>Material:</b> Solid Teak Wood Frame (Mazboot Sagwan ki Lakdi)<br>
    <b>Fabric:</b> High-Quality Stain-Resistant Velvet<br>
    <b>Seating:</b> 3-Seater with High-Density Supersoft Foam<br>
    <b>Dimensions:</b> Length: 84" | Width: 35" | Height: 32"<br>
    <b>Warranty:</b> 2 Years Manufacturer Warranty against frame defects
`
    },
    {
        id: 6,
        title: "Lux Designer #18",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/71p0Ki8f78L._AC_SL1500_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/81ga9zvEd-L._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/81XL2kW9VTL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/81ubF9gtdIL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/81f6m1giCuL._AC_SL1500_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath. Isme ultra-soft premium velvet fabric ka istemal kiya gaya hai jo dekhne mein behad khoobsurat aur baithne mein bahut comfortable hai. Iska ergonomic design aapki back ko perfect support deta hai, taaki aap ghanto tak bina thake relax kar sakein.`,


        specs: `
    <b>Material:</b> Solid Teak Wood Frame (Mazboot Sagwan ki Lakdi)<br>
    <b>Fabric:</b> High-Quality Stain-Resistant Velvet<br>
    <b>Seating:</b> 3-Seater with High-Density Supersoft Foam<br>
    <b>Dimensions:</b> Length: 84" | Width: 35" | Height: 32"<br>
    <b>Warranty:</b> 2 Years Manufacturer Warranty against frame defects
`
    },
    {
        id: 7,
        title: "Lux Designer #19",
        price: 22000,
        img: "https://m.media-amazon.com/images/I/71kokQGU9+L._AC_SL1500_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/71PdZytUmUL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/71PM5vlnaWL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/71O8vVEaRGL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/81WWDsxwDAL._AC_SL1500_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath. Isme ultra-soft premium velvet fabric ka istemal kiya gaya hai jo dekhne mein behad khoobsurat aur baithne mein bahut comfortable hai. Iska ergonomic design aapki back ko perfect support deta hai, taaki aap ghanto tak bina thake relax kar sakein.`,


        specs: `
    <b>Material:</b> Solid Teak Wood Frame (Mazboot Sagwan ki Lakdi)<br>
    <b>Fabric:</b> High-Quality Stain-Resistant Velvet<br>
    <b>Seating:</b> 3-Seater with High-Density Supersoft Foam<br>
    <b>Dimensions:</b> Length: 84" | Width: 35" | Height: 32"<br>
    <b>Warranty:</b> 2 Years Manufacturer Warranty against frame defects
`
    },
    {
        id: 8,
        title: "Lux Designer #20",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/81ch9-rYXdL._AC_SL1500_.jpg",
        gallery: ["https://m.media-amazon.com/images/I/81Ij84A9ykL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/7148KvjcDzL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/71EaSR3sLML._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/71-KOhttqML._AC_SL1500_.jpg"],
        desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath. Isme ultra-soft premium velvet fabric ka istemal kiya gaya hai jo dekhne mein behad khoobsurat aur baithne mein bahut comfortable hai. Iska ergonomic design aapki back ko perfect support deta hai, taaki aap ghanto tak bina thake relax kar sakein.`,


        specs: `
    <b>Material:</b> Solid Teak Wood Frame (Mazboot Sagwan ki Lakdi)<br>
    <b>Fabric:</b> High-Quality Stain-Resistant Velvet<br>
    <b>Seating:</b> 3-Seater with High-Density Supersoft Foam<br>
    <b>Dimensions:</b> Length: 84" | Width: 35" | Height: 32"<br>
    <b>Warranty:</b> 2 Years Manufacturer Warranty against frame defects
`


    },


];






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
    window.location.href = `wordrobes-details.html?id=${id}`;
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





