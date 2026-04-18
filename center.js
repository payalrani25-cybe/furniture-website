let cart = JSON.parse(localStorage.getItem('furnitureCart')) || [];
let wish = JSON.parse(localStorage.getItem('furnitureWishlist')) || [];

    const products = [
    {
        id: 0,
        title: "Lux Designer #1",
        price: 3199,
        img: "https://m.media-amazon.com/images/I/71A5NFZXMeL._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51295+m2YsL._SX425_.jpg","https://m.media-amazon.com/images/I/7103T6QMPhL._SX425_.jpg","https://m.media-amazon.com/images/I/61O04EfM54L._SX425_.jpg","https://m.media-amazon.com/images/I/61O04EfM54L._SX425_.jpg"],
        desc: "【Chic Minimalist Furniture 】This coffee table is a sleek, contemporary piece that complements any kind of furniture in your home thanks to its smooth table top and traditional oval pattern design",
        specs: "Shoppee Coffee Table for Office, Dining, or Tea Room, Storage Shelf Center Table for Living Room, 2 Tier Simple Coffee Cocktail Table with Marble Desktop and Gold Metal Frame (Black & Grey)"
    },
    {
        id: 1,
        title: "Lux Designer #2",
        price: 6134,
        img: "https://m.media-amazon.com/images/I/71wFcGga1eL._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51A7MmWVHmL._SX425_.jpg","https://m.media-amazon.com/images/I/71+TNB59T7L._SX425_.jpg","https://m.media-amazon.com/images/I/51EHsGLtMJL._SX425_.jpg","https://m.media-amazon.com/images/I/71ZeA5ULqaL._SX425_.jpg"],
        desc: "Assembly Required | Made Of High Quality Solid Wood And Crafted In Ethnic Designs<Br>",
        specs: "Wooden Center Coffee Table with Storage | Solid Sheesham Wood Centre Table for Living Room, Drawing Room & Office | Honey Finish"
    },
      {
        id: 2,
        title: "Lux Designer #3",
        price: 3499,
        img: "https://m.media-amazon.com/images/I/61yvR1K19WL._SX425_.jpg",

        gallery:["https://m.media-amazon.com/images/I/51w0s4ROq1L._SX425_.jpg","https://m.media-amazon.com/images/I/615ySrhhyUL._SX425_.jpg","https://m.media-amazon.com/images/I/61IKMclhu3L._SX425_.jpg","https://m.media-amazon.com/images/I/61yIYVMBIfL._SX425_.jpg"],
        desc: "Premium powder-coated metal frame ensures excellent stability and long-lasting durability. The engineered marble top is scratch-resistant, heat-resistant, and easy to maintain.",
        specs:"Modern Oval Marble Top Coffee Table with Metal Frame & 2-Tier Storage Shelf – Luxury Center Table for Living Room, Contemporary Tea Table for Home & Office Décor White Gold"
    },
    {
        id: 3,
        title: "Lux Designer #4",
        price: 26999,
        img:  "https://m.media-amazon.com/images/I/7175-lU01fL._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/7175-lU01fL._SX425_.jpg","https://m.media-amazon.com/images/I/319pgMIYevL._SX425_.jpg","https://m.media-amazon.com/images/I/3152++h56zL._SX425_.jpg","https://m.media-amazon.com/images/I/212nuVT01uL._SX425_.jpg"],
        desc: "Elegant marble-finish tabletop adds a luxury look to any living space",
        specs: "Modern Marble Top Coffee Table with Solid Wooden Base & Matching Side Stool | Premium Living Room Center Table for Home Decor Wood Base & White Marble Top | Chestnut | Rectangular Luxury Coffee Table"
    },
      {
        id: 4,
        title: "Lux Designer #5",
        price:  5499,
        img:"https://m.media-amazon.com/images/I/61OXd4uBeOL._SX300_SY300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/410ZV0jCrjL._SX425_.jpg","https://m.media-amazon.com/images/I/51n7ANZPUxL._SX425_.jpg","https://m.media-amazon.com/images/I/51n7ANZPUxL._SX425_.jpg","https://m.media-amazon.com/images/I/31xkLNT4KGL._SX425_.jpg"],
        desc: "Product Dimensions: Length: 89 CM, Width: 46 CM, Height: 42 CM",
        specs: "Home Furniture Wooden Center Coffee Table for Living Room and Office | Center Table | Tea Table | Sofa Set Table | Natural Teak Finish"
    },
    {
        id: 5,
        title: "Lux Designer #6",
        price: 2949,
        img:     "https://m.media-amazon.com/images/I/71fwrknfwsL._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71fwrknfwsL._SX425_.jpg","https://m.media-amazon.com/images/I/613rvzafbWL._SX425_.jpg","https://m.media-amazon.com/images/I/5131rMyelyL._SX425_.jpg","https://m.media-amazon.com/images/I/51BGWOtopqL._SX425_.jpg"],
         desc: "VERSATILE USE: Ideal as a coffee table, side table, center table, or decorative accent table for living rooms, drawing rooms, or balconies. Living Room Furniture, Center Table For Drawing Room.",
        specs: "Square Nesting Table Set of 2 for Living Room, Room Decoration Item for Bedroom, Coffee & Side Table with Marble MDF White Top and Iron Base (Gold & Brown)"
    },
      {
        id: 6,
        title: "Lux Designer #7",
        price: 3609,
        img:  "https://m.media-amazon.com/images/I/51FW5Q7rxrL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71Yj9Unp-NL._SX425_.jpg","https://m.media-amazon.com/images/I/616ie3pB6aL._SX425_.jpg","https://m.media-amazon.com/images/I/71UqXJOp6UL._SX425_.jpg","https://m.media-amazon.com/images/I/51i9yVFj4vL._SX425_.jpg"],
        desc: "Set includes 1 center coffee table and 2 end tables",
        specs: "Round Coffee Table Set of 3, Modern Nesting Stacking Center Table with Sturdy Metal Frame and Marble Look for Living Room, Bedroom or Apartments (Gold White)"
    },
    {
        id: 7,
        title: "Lux Designer #8",
        price: 4499,
        img:  "https://m.media-amazon.com/images/I/51cqC8eqY-L._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/81T7OFIrIEL._SX425_.jpg","https://m.media-amazon.com/images/I/81BfJJ0cpEL._SX425_.jpg","https://m.media-amazon.com/images/I/71j5CKZo0uL._SX425_.jpg","https://m.media-amazon.com/images/I/71c41FTM0XL._SX425_.jpg"],
        desc: "STURDY GOLD METAL FRAME – Heavy-duty metal structure with a stylish gold finish ensures excellent durability and long-lasting stability.",
        specs: "Modern Rectangular Marble-Like Top Coffee Table with Metal Base for Living Room | Luxury Sofa Center & Tea Table for Home & Office | Easy DIY Assembly (90 x 48 x 48 cm) (Black White)"
    },
      {
        id: 8,
        title: "Lux Designer #9",
        price: 2799,
        img: "https://m.media-amazon.com/images/I/51D5p7Xne+L._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61sNvY9OfkL._SX425_.jpg","https://m.media-amazon.com/images/I/81K1etm1x9L._SX425_.jpg","https://m.media-amazon.com/images/I/41oGL8StlqL._SX425_.jpg"],
        desc: "Handmade Craftsmanship: 100% handmade by experienced artisans with expertise in the field. Each piece is a unique creation, reflecting meticulous attention to detail.",
        specs: "RIZIK STORE Metal Base Handmade Round Coffee/Nesting/Side/Center Table With Marble Finish Wooden White Top For Living Room/Drawing Room/Balcony Gold (Black & White)"
    },
    {
        id: 9,
        title: "Lux Designer #10",
        price: 16999,
        img: "https://m.media-amazon.com/images/I/51n2WGrbQIL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51EcZkaANjL._SX425_.jpg","https://m.media-amazon.com/images/I/41aAfH1B8tL._SX425_.jpg","https://m.media-amazon.com/images/I/61yzUV7J+nL._SX425_.jpg","https://m.media-amazon.com/images/I/41vvYiwjvbL._SX425_.jpg"],
        desc: "Easy to Clean & Maintain – Smooth tempered glass surface makes cleaning effortless and helps maintain a neat and sophisticated look in your living space.",
        specs: "Modern Glass Top Coffee Table with Wooden Base | Contemporary Center Table for Living Room | Tempered Glass Table | Wooden Coffee Table for Home & Office"
    },
  {
        id: 10,
        title: "Lux Designer #11",
        price: 3599,
        img:     "https://m.media-amazon.com/images/I/4131id8XL4L._SX300_SY300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61IUTvKRNEL._SX425_.jpg","https://m.media-amazon.com/images/I/61bFLiFvJ8L._SX425_.jpg","https://m.media-amazon.com/images/I/61tA+I+fVRL._SX425_.jpg","https://m.media-amazon.com/images/I/61OqLowvZTL._SX425_.jpg"],
        desc: "Product Dimension (In Cm) - Length 88.9 x Width 50.8 x Height 40.6 | Material: Solid Sheesham Wood | Style: Contemporary | Color: Walnut finish | Assembly Instructions: DIY ( Do it yourself)",
        specs: "REDWOOD Modern Solid Sheesham Wood Oval Shaped Wooden Table for Living Room | Solid Wood Center Table with Smooth Finish | Mini Coffee Table for Home, Office & Lounge | Walnut Finish (Glossy)"
    },
    {
        id: 11,
        title: "Lux Designer #12",
        price: 2754,
        img:     "https://m.media-amazon.com/images/I/41RO+Xf+3gL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61gRa9rGQcL._SX425_.jpg","https://m.media-amazon.com/images/I/61UO0B7jPBL._SX425_.jpg","https://m.media-amazon.com/images/I/613+hFUa5IL._SX425_.jpg","https://m.media-amazon.com/images/I/61u-28Z6lPL._SX425_.jpg"],
        desc: "Material - Made of engineered wood with a sleek laminate finish, providing durable use and easy maintenance.",
        specs: "MDF Coffee Table with Marble Finish, Modern Center Table for Living Room, Durable Engineered Wood, Stylish Tea Table with Storage, Multipurpose Furniture for Home Decor (DMPTM Marble)"
    },
      {
        id: 12,
        title: "Lux Designer #13",
        price: 3999,
        img:     "https://m.media-amazon.com/images/I/51QrekoeLBL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61dv2IQ6-OL._SX425_.jpg","https://m.media-amazon.com/images/I/81w+xWnre0L._SX425_.jpg","https://m.media-amazon.com/images/I/81mNjI1GVhL._SX425_.jpg","https://m.media-amazon.com/images/I/71b9z+rg1pL._SX425_.jpg"],
        desc: "Simple Style: Featuring clean, simple lines, this table has a minimalist style that will complement any decor without being overbearing.",
        specs:"HOME ELEMENTS Rectangular Coffee Table for Living Room Center Table with Open Minimalist Space Design Metal Frame Engineered Wood Marble Texture Look Top Easy Assembly DIY - 110x50x38 cm (White)"
    },
    {
        id: 13,
        title: "Lux Designer #14",
        price: 6785,
        img:     "https://m.media-amazon.com/images/I/61O1qj307fL._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71LRspF9yzL._SX425_.jpg","https://m.media-amazon.com/images/I/8165VyLVJIL._SX425_.jpg","https://m.media-amazon.com/images/I/71qvMkaX2DL._SL1500_.jpg","https://m.media-amazon.com/images/I/71l8dZnKfEL._SL1500_.jpg"],
        desc: "SPACIOUS TABLE SURFACE – Wide rectangular surface offers ample space for décor items, books, flower vases, snacks, and daily essentials.",
        specs: "Modern Rectangular Marble-Like Top Coffee Table with Metal Base for Living Room | Luxury Sofa Center & Tea Table for Home & Office | Easy DIY Assembly (90 x 48 x 48 cm) (Black)"
    },
      {
        id: 14,
        title: "Lux Designer #15",
        price: 7999,
        img:     "https://m.media-amazon.com/images/I/516RgZSqgbL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71nZFbzCI6L._SX425_.jpg","https://m.media-amazon.com/images/I/71gwgU8Yz3L._SX425_.jpg","https://m.media-amazon.com/images/I/71dlyzxkWUL._SX425_.jpg","https://m.media-amazon.com/images/I/81Cwr17vj5L._SX425_.jpg"],
        desc:"Dimensions (WxDxH) - 40x20x16 inches / 101.6x50.8x40.6 Cms; Net Weight - 19.48 Kgs",
        specs: "Ikiriya Solid Sheesham Wood Rectangle Center Coffee Table with Bottom Shelf for Living Room Bedroom Hall Teapoy Tea Tables for Home Office Wooden Furniture (Teak Finish)"
    },
    {
        id: 15,
        title: "Lux Designer #16",
        price: 4099,
        img:     "https://m.media-amazon.com/images/I/81nByGf0QAL._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61DiF4G521L._SX425_.jpg","https://m.media-amazon.com/images/I/81su5J8DBVL._SX425_.jpg","https://m.media-amazon.com/images/I/81A5fkmVkzL._SX425_.jpg","https://m.media-amazon.com/images/I/71RowWnP59L._SX425_.jpg"],
        desc:"VERSATILE USE: Perfect as a vanity stool, bedroom sitting pier, living room accent piece, or decorative side stool to complement your interior decor",
        specs:"Rectangular Modern Coffee Tables Modern Nightstand and Accent Tables Stacking Side Table Center Tables for Living Room Bed Room MDF Top Metal Table Hallway Table (Golden White)"
    },
      {
        id: 16,
        title: "Lux Designer #17",
        price: 3999,
        img:   "https://m.media-amazon.com/images/I/71xpo+Y1uBL._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/41jbaNvkyAL._SX425_.jpg","https://m.media-amazon.com/images/I/713JaYiV-GL._SX425_.jpg","https://m.media-amazon.com/images/I/71xpo+Y1uBL._SX425_.jpg","https://m.media-amazon.com/images/I/71HEynYNLsL._SX425_.jpg"],
        desc:"NICELY DESIGNED: simple and stylish, it will bring comfort to your bedroom, not only as furniture, but also as home decoration.",
        specs:"Brown Art SHOPPEE Coffee Table,Center Table Sofa Side Table Design Coffe Table Round Table,Modern Coffee Table Living Room Side Table for Living Room (Gold & Black)"
    },
    {
        id: 17,
        title: "Lux Designer #18",
        price: 8799,
        img:  "https://m.media-amazon.com/images/I/51gWlInkkWL._SX300_SY300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71n0AM2ISxL._SX425_.jpg","https://m.media-amazon.com/images/I/71SEu6-TxGL._SX425_.jpg","https://m.media-amazon.com/images/I/81WWD9G4M4L._SX425_.jpg","https://m.media-amazon.com/images/I/81SNJJg1R0L._SX425_.jpg"],
        desc: "Product Dimensions Length: 101.6 cm Width: 50.8 cm Height: 46.9 cm Perfect size coffee table suitable for living rooms, lounges, and seating areas.",
        specs: "Solid Sheesham Wood Coffee Table for Living Room | Wooden Rectangle Coffee/Tea Table with Storage |Center Table with Storage Teapoye for Home, Living Room, Balcony (Honey Finish)"
    },
      {
        id: 18,
        title: "Lux Designer #19",
        price: 4749,
        img: "https://m.media-amazon.com/images/I/41S-NVsb4eL._SX300_SY300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/81Ib+QWFSbL._SX425_.jpg","https://m.media-amazon.com/images/I/51LMbd43ODL._SX425_.jpg","https://m.media-amazon.com/images/I/61MOA+i8j2L._SX425_.jpg"],
        desc: "Product Dimension(In Cm):- Length 88.9 x Width 50.8 x Height 40.6| Is Assembly Required - Yes ( DIY - Do It yourself )",
        specs: "Sheesham Wood Coffee Table Set for Living Room | Nesting Center Table Set of 2 with Oval Top and Tapered Legs | Modern Wooden Tea Table with Space Saving Design | Mid Century Style Furniture | Brown"
    },
    {
        id: 19,
        title: "Lux Designer #20",
        price: 1695,
        img: "https://m.media-amazon.com/images/I/51KuF3o+ZiL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/6128HIYXtCL._SX425_.jpg","https://m.media-amazon.com/images/I/819zveDxtIL._SX425_.jpg","https://m.media-amazon.com/images/I/81Np0If+XwL._SX425_.jpg","https://m.media-amazon.com/images/I/81tH3hAslmL._SY606_.jpg"],
        specs: "Art Solid Sheesham Wood Rectangle Coffee Table for Living Room | Tea Centre Table for Hall | Teapoy Center Table for Drawing Room with 1 Drawer & Shelf Storage | Rosewood, Natural Finish"
    },
    
];


function init() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    // FIXED: Changed 'product' to 'products'
    products.forEach((item) => {
        grid.innerHTML += `
            <div class="bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 group transition-all hover:shadow-2xl">
                <div class="relative overflow-hidden rounded-[2rem] mb-4 h-60 cursor-pointer" onclick="goToDetails(${item.id})">
                    <img src="${item.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                </div>
                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-800">${item.title}</h3>
                    <div class="flex justify-between items-center mt-2">
                        <p class="text-indigo-600 font-black text-2xl">₹${item.price.toLocaleString()}</p>
                        <button onclick="addToCart(${item.id})" class="text-gray-400 hover:text-yellow-500"><i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>`;
    });
    updateUI();
}

// Fixed the naming inside this function too
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    
    // Only run detail logic if we are on a detail page
    if (productId !== null) {
        const currentItem = products.find(p => p.id == productId);

        if (currentItem) {
            if(document.getElementById('p-title')) document.getElementById('p-title').innerText = currentItem.title;
            if(document.getElementById('p-price')) document.getElementById('p-price').innerText = "₹" + currentItem.price.toLocaleString();
            
            const mainImg = document.getElementById('main-img');
            if(mainImg) mainImg.src = currentItem.img;

            const container = document.getElementById('thumb-container');
            if(container && currentItem.gallery) {
                container.innerHTML = '';
                currentItem.gallery.forEach((url, index) => {
                    const img = document.createElement('img');
                    img.src = url;
                    img.className = `w-20 h-20 shrink-0 object-cover rounded-2xl cursor-pointer border-2 border-transparent hover:border-indigo-500 transition shadow-md`;
                    img.onclick = () => {
                        if(mainImg) mainImg.src = url;
                    };
                    container.appendChild(img);
                });
            }
        }
    }
    init();
};

function updateUI() {
    localStorage.setItem('furnitureCart', JSON.stringify(cart));
    localStorage.setItem('furnitureWishlist', JSON.stringify(wish));
    
    // Update the badges in the header
    const cartCount = document.getElementById('cart-count');
    const wishCount = document.getElementById('wishlist-count');
    if(cartCount) cartCount.innerText = cart.length;
    if(wishCount) wishCount.innerText = wish.length;
}

function goToDetails(id) {
    window.location.href = `center-details.html?id=${id}`;
}

// Added these to make the buttons work
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateUI();
}

function openPage(id) {
    document.getElementById(id).classList.add('active');
}

function closePage(id) {
    document.getElementById(id).classList.remove('active');
}