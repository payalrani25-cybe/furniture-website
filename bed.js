let cart = JSON.parse(localStorage.getItem('furnitureCart')) || [];
let wish = JSON.parse(localStorage.getItem('furnitureWishlist')) || [];
 
 const product = [


    {
        id: 0,
        title: "Lux Designer #12",
        price: 23500,
        img:     "https://m.media-amazon.com/images/I/71zFCx97i-L._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71zFCx97i-L._SX679_.jpg","https://m.media-amazon.com/images/I/71UyDj4Qf3L._SX679_.jpg","https://m.media-amazon.com/images/I/71bp6OgK+kL._SX679_.jpg","https://m.media-amazon.com/images/I/81zsVRRPZcL._SX679_.jpg","https://m.media-amazon.com/images/I/81vnRiX+gkL._SX679_.jpg","https://m.media-amazon.com/images/I/71UpV+YkP2L._SX679_.jpg","https://m.media-amazon.com/images/I/716kfBSAg5L._SX679_.jpg"],
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
        img:     "https://m.media-amazon.com/images/I/61q7phn8NcL._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61q7phn8NcL._SX679_.jpg","https://m.media-amazon.com/images/I/51MgXlkWYAL._SX679_.jpg","https://m.media-amazon.com/images/I/41j5dYsyvFL._SX679_.jpg","https://m.media-amazon.com/images/I/41ITv4RVr8L._SX679_.jpg" ,"https://m.media-amazon.com/images/I/41dFJcUaLML._SX679_.jpg"],
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
        img:     "https://m.media-amazon.com/images/I/51YZrMxbZ6L._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51YZrMxbZ6L._SX679_.jpg","https://m.media-amazon.com/images/I/61OoWfy0j2L._SX679_.jpg","https://m.media-amazon.com/images/I/61giMdEonFL._SX679_.jpg","https://m.media-amazon.com/images/I/71sdmOoqbPL._SX679_.jpg"],
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
        img:     "https://m.media-amazon.com/images/I/51nnO7qK9iL.jpg",
        gallery:["https://m.media-amazon.com/images/I/51nnO7qK9iL.jpg","https://m.media-amazon.com/images/I/41vTa8fWiXL.jpg","https://m.media-amazon.com/images/I/41m+3CtkruL.jpg","https://m.media-amazon.com/images/I/41huiCSvG5L.jpg" ,"https://m.media-amazon.com/images/I/41-zXCwXJZL.jpg"],
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
        img:     "https://m.media-amazon.com/images/I/71pjsJK2EuL._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71pjsJK2EuL._SX679_.jpg","https://m.media-amazon.com/images/I/61Hj3xnmUEL._SX679_.jpg","https://m.media-amazon.com/images/I/711RRZib8+L._SX679_.jpg","https://m.media-amazon.com/images/I/71Xpp-xhAWL._SX679_.jpg"],
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
        img:     "https://m.media-amazon.com/images/I/81UCR5epmNL._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/81UCR5epmNL._SX679_.jpg","https://m.media-amazon.com/images/I/71AKoKJnFBL._SX679_.jpg","https://m.media-amazon.com/images/I/815CgqO5SXL._SX679_.jpg","https://m.media-amazon.com/images/I/61htv3jr5xL._SX679_.jpg"],
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
        img:     "https://m.media-amazon.com/images/I/81VRano5yVL._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/81VRano5yVL._SX679_.jpg","https://m.media-amazon.com/images/I/81N3l586ijL._SX679_.jpg","https://m.media-amazon.com/images/I/71Jp-MLOzxL._SX679_.jpg","https://m.media-amazon.com/images/I/91sqxYBj5HL._SX679_.jpg"],
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
        img: "https://m.media-amazon.com/images/I/71TL5AYV1IL._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71TL5AYV1IL._SX679_.jpg","https://m.media-amazon.com/images/I/51MZP6uW5IL._SX679_.jpg","https://m.media-amazon.com/images/I/51DJNQpeMML._SX679_.jpg", "https://m.media-amazon.com/images/I/513N4Py-9LL._SX679_.jpg","https://m.media-amazon.com/images/I/51rNbEiR5gL._SX679_.jpg"],
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
        img: "https://m.media-amazon.com/images/I/81675ENvcqL._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/81675ENvcqL._SX679_.jpg","https://m.media-amazon.com/images/I/51Q4ETiY-uL._SX679_.jpg","https://m.media-amazon.com/images/I/516JVqP50dL._SX679_.jpg" ,"https://m.media-amazon.com/images/I/51zG3R93k9L._SX679_.jpg", "https://m.media-amazon.com/images/I/51K6FH1v3oL._SX679_.jpg","https://m.media-amazon.com/images/I/51rmMwnKQKL._SX679_.jpg","https://m.media-amazon.com/images/I/71hdv6nCrRL._SX679_.jpg"],
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
        id: 9,
        title: "Lux Designer #20",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/71m-t4TYceL._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71m-t4TYceL._SX679_.jpg","https://m.media-amazon.com/images/I/71DcoG8Gd9L._SX679_.jpg","https://m.media-amazon.com/images/I/71m-t4TYceL._SX679_.jpg" ],
       desc: `Apne living room ko ek naya aur royal look dein hamare Lux Designer Sofa ke saath. Isme ultra-soft premium velvet fabric ka istemal kiya gaya hai jo dekhne mein behad khoobsurat aur baithne mein bahut comfortable hai. Iska ergonomic design aapki back ko perfect support deta hai, taaki aap ghanto tak bina thake relax kar sakein.`,


specs: `
    <b>Material:</b> Solid Teak Wood Frame (Mazboot Sagwan ki Lakdi)<br>
    <b>Fabric:</b> High-Quality Stain-Resistant Velvet<br>
    <b>Seating:</b> 3-Seater with High-Density Supersoft Foam<br>
    <b>Dimensions:</b> Length: 84" | Width: 35" | Height: 32"<br>
    <b>Warranty:</b> 2 Years Manufacturer Warranty against frame defects
`
   
    }
    ,
    {
        id: 10,
        title: "Lux Designer #20",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/71hI+XoAYPL._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71hI+XoAYPL._SX679_.jpg","https://m.media-amazon.com/images/I/61BIh5w+SYL._SX679_.jpg","https://m.media-amazon.com/images/I/713TENYBYbL._SX679_.jpg" ,"https://m.media-amazon.com/images/I/71-GJtY4f8L._SX679_.jpg"],
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
        id: 11,
        title: "Lux Designer #20",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/71TRYgvIj5L._SX679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71TRYgvIj5L._SX679_.jpg","https://m.media-amazon.com/images/I/61c7iurArjL._SX679_.jpg","https://m.media-amazon.com/images/I/616IZgSwG9L._SX679_.jpg" ,"https://m.media-amazon.com/images/I/61oo7JmT1gL._SX679_.jpg"],
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
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 0;
    const currentItem = product.find(p => p.id == productId);

    if (currentItem) {
        // Text aur Price bharna
        if(document.getElementById('p-title')) document.getElementById('p-title').innerText = currentItem.title;
        if(document.getElementById('p-price')) document.getElementById('p-price').innerText = "₹" + currentItem.price.toLocaleString();
        if(document.getElementById('p-desc')) document.getElementById('p-desc').innerHTML = currentItem.desc;
        if(document.getElementById('p-specs')) document.getElementById('p-specs').innerHTML = currentItem.specs;

        // MAIN IMAGE SET KARNA
        const mainImg = document.getElementById('main-img');
        if(mainImg) mainImg.src = currentItem.img;

        // Thumbnails gallery banana
        const container = document.getElementById('thumb-container');
        if(container) {
            container.innerHTML = '';
            currentItem.gallery.forEach((url, index) => {
                const img = document.createElement('img');
                img.src = url;
                img.className = `w-20 h-20 shrink-0 object-cover rounded-2xl cursor-pointer border-2 border-transparent hover:border-indigo-500 transition shadow-md`;
                if (index === 0) img.classList.add('border-indigo-600');
                
                img.onclick = () => {
                    if(mainImg) mainImg.src = url;
                    document.querySelectorAll('#thumb-container img').forEach(t => t.classList.remove('border-indigo-600'));
                    img.classList.add('border-indigo-600');
                };
                container.appendChild(img);
            });
        }
    }
    // Agar main grid hai toh usko bhi load karo
    init();
};

// --- 3. GRID & OTHER FUNCTIONS ---
function init() {
    const grid = document.getElementById('main-grid');
    if(!grid) return;
    grid.innerHTML = '';
    product.forEach((item) => {
        grid.innerHTML += `
            <div class="bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 group transition-all hover:shadow-2xl">
                <div class="relative overflow-hidden rounded-[2rem] mb-4 h-60 cursor-pointer" onclick="goToDetails(${item.id})">
                    <img src="${item.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                </div>
                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-800">${item.title}</h3>
                    <p class="text-indigo-600 font-black text-2xl mt-1">₹${item.price.toLocaleString()}</p>
                </div>
            </div>`;
    });
    update();
}

function goToDetails(id) {
    window.location.href = `bed-details.html?id=${id}`;
}

function update() {
    localStorage.setItem('furnitureCart', JSON.stringify(cart));
    localStorage.setItem('furnitureWishlist', JSON.stringify(wish));
}

function handleBooking(itemName) {
    const name = itemName || document.getElementById('p-title').innerText;
    window.location.href = `booking.html?item=${encodeURIComponent(name)}`;
}

document.addEventListener('DOMContentLoaded', init);