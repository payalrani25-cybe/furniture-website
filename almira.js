
let cart = JSON.parse(localStorage.getItem('furnitureCart')) || [];
let wish = JSON.parse(localStorage.getItem('furnitureWishlist')) || [];
    const products = [
    {
        id: 0,
        title: "Lux Designer #1",
        price: 9790,
        img: "https://m.media-amazon.com/images/I/41foHy75WzL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61zLq59l5GL._SX425_.jpg","https://m.media-amazon.com/images/I/713a5RN6IoL._SX425_.jpg","https://m.media-amazon.com/images/I/61nuJnYmAWL._SX425_.jpg","https://m.media-amazon.com/images/I/61tTZ9aXj3L._SX425_.jpg"],
        desc: "Two door wardrobe with mirror and stylish handles",
        specs: "Nilkamal Massif 2 Door Wooden Wardrobe with Mirror for Bedroom | Almirah with 1 Hanging Rod & 3 Shelves | Clothes Cupboard | Engineered Wood | Legno Oak"
    },
    {
        id: 1,
        title: "Lux Designer #2",
        price: 23500,
        img: "https://m.media-amazon.com/images/I/41gcx81XHwL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51onvTP4UUL._SX425_.jpg","https://m.media-amazon.com/images/I/414CZTbjp2L._SX425_.jpg","https://m.media-amazon.com/images/I/41Z+M74ZheL._SX425_.jpg","https://m.media-amazon.com/images/I/51ZZgFyHRzL._SX425_.jpg"],
        desc: "Secure Locking Facility - The secure lock ensures that valuables are safely stored and protected.",
        specs: "GODREJ INTERIO StorEase 2-Door Steel Almirah Locker Unit, 1-Year Warranty, 1 Locker, 3 Shelves"
    },
      {
        id: 2,
        title: "Lux Designer #3",
        price: 40090,
        img: "https://m.media-amazon.com/images/I/612tC3ErszL._SX425_.jpg",

        gallery:["https://m.media-amazon.com/images/I/51DnCdXc7tL._SX425_.jpg","https://m.media-amazon.com/images/I/61ZdD5aNDVL._SX425_.jpg","https://m.media-amazon.com/images/I/61IKMclhu3L._SX425_.jpg",""],
        desc: "Integrated Mirror: The Integrated Mirror adds elegance and functionality, offering a seamless dressing experience.",
        specs: "GODREJ INTERIO Almirah Slimline 3-Door Steel Almirah, Cupboard for Clothes (Russet), 1-Year Warranty, 7 Shelves, 1 Locker, Star Design Mirror"
    },
    {
        id: 3,
        title: "Lux Designer #4",
        price: 19599,
        img:  "https://m.media-amazon.com/images/I/41YOEDVRytL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71rruam6uqL._SX425_.jpg","https://m.media-amazon.com/images/I/51BRQu3dufL._SX425_.jpg","https://m.media-amazon.com/images/I/61GMZtDcMuL._SX425_.jpg","https://m.media-amazon.com/images/I/41wlVY+UXpL._SX425_.jpg"],
        desc: "The furniture with which you furnish your home reflects your style and sensibilities. The sleek design adds style points to your bedroom.",
        specs: "Laxmi KAPAT Metal Wardrobe | 2 Door Large Almirah Cupboard with Locking System | (Powder Coated Blue 78 X 36 X 19 Inch)"
    },
      {
        id: 4,
        title: "Lux Designer #5",
        price:  19390,
        img:"https://m.media-amazon.com/images/I/61MyTpBEn0L._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51ACYL1SjjL._SX425_.jpg","https://m.media-amazon.com/images/I/51TNt--WRpL._SX425_.jpg","https://m.media-amazon.com/images/I/51Dw7rDU1QL._SX425_.jpg","https://m.media-amazon.com/images/I/51AqkU2O0dL._SX425_.jpg"],
        desc: "Crafted from high-quality engineered wood for enhanced durability and long-lasting use",
        specs: "Nilkamal Joyce Neo 4 Door Wooden Wardrobe for Bedroom | Almirah with 13 Shelves | Clothes Cupboard | Engineered Wood | Walnut"
    },
    {
        id: 5,
        title: "Lux Designer #6",
        price: 19599,
        img:     "https://m.media-amazon.com/images/I/31cnHmJq-AL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71GctOKzFuL._SX425_.jpg","https://m.media-amazon.com/images/I/61N5nignvOL._SX425_.jpg","https://m.media-amazon.com/images/I/61xmAtOuJgL._SX425_.jpg","https://m.media-amazon.com/images/I/414UCGGH2GL._SL1500_.jpg"],
         desc: "Assembly Required: Ready to use product no assembly required",
        specs: "Laxmi KAPAT Metal Wardrobe | 2 Door Large Almirah Cupboard with Locking System | (Powder Coated - Brown 78 X 36 X 19 Inch)"
    },
      {
        id: 6,
        title: "Lux Designer #7",
        price: 27390,
        img:  "https://m.media-amazon.com/images/I/41ebeWSTCRL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61cYQB1ClfL._SX425_.jpg","https://m.media-amazon.com/images/I/61LBgCw4PRL._SX425_.jpg","https://m.media-amazon.com/images/I/419XeoYsnlL._SX425_.jpg","https://m.media-amazon.com/images/I/61ElNCp1QZL._SX425_.jpg"],
        desc: "Playful charm, bright and cheerful:",
        specs: "GODREJ INTERIO Kids 2-Door Steel Almirah (Jungle Scene Digital Print in Sky Gray), 1-Year Warranty, 1 Drawer, 6 Shelves"
    },
    {
        id: 7,
        title: "Lux Designer #8",
        price: 21999,
        img:  "https://m.media-amazon.com/images/I/515DxlPzOVL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71hKxwZJ9uL._SX425_.jpg","https://m.media-amazon.com/images/I/61a+yK-FFSL._SX425_.jpg","https://m.media-amazon.com/images/I/81DCTIlUDQL._SX425_.jpg","https://m.media-amazon.com/images/I/81Tfw+6vkuL._SX425_.jpg"],
        desc: "Product Dimension: Length (120.3 Cm or 47.3 Inches) Breadth (44.8 Cm or 17.6 Inches) Height (170.8 Cm or 67.2 Inches)",
        specs: "BLUEWUD Andrie Engineered Wood 3 Door Wardrobe/Clothes Storage Rack Organizer Almirah Cupboard, 7 Shelves & 1 Drawer with Lock for Bedroom Home Furniture (with Mirror, Wenge & White)"
    },
      {
        id: 8,
        title: "Lux Designer #9",
        price: 24890,
        img: "https://m.media-amazon.com/images/I/61tJPWKtEOL._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51BkE88U91L._SX425_.jpg","","https://m.media-amazon.com/images/I/61-kRjQ3wqL._SX425_.jpg","https://m.media-amazon.com/images/I/41rT9Z4ZMvL._SL1500_.jpg"],
        desc: "Lock away your worries: Rest easy knowing your essentials are secure. With a reliable door lock, this almirah keeps your valuables safe, giving you peace of mind with every use.",
        specs: "GODREJ INTERIO Slimline 2-Door Steel Almirah with Plain Mirror (Blue Fusion), 1-Year Warranty, 4 Shelves"
    },
    {
        id: 9,
        title: "Lux Designer #10",
        price: 26500,
        img: "https://m.media-amazon.com/images/I/51Uy2pCpGEL._SY679_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61ZVk9q0XML._SX425_.jpg","https://m.media-amazon.com/images/I/61fvQ5k0z0L._SX425_.jpg","https://m.media-amazon.com/images/I/51APvspfRWL._SY679_.jpg","https://m.media-amazon.com/images/I/61wjjVB6sjL._SY679_.jpg"],
        desc: "FUNCTIONAL WINDOW: Integrated transparent panel allows visibility of contents whilst maintaining a clean, contemporary aesthetic",
        specs: "Pink Steel Almirah with Mirror, 2 Door Wardrobe with Lock, White Frame Storage Cabinet"
    },
  {
        id: 10,
        title: "Lux Designer #11",
        price: 9999,
        img:     "https://m.media-amazon.com/images/I/415wQqsyBIL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71KJP6KNV8L._SX425_.jpg","https://m.media-amazon.com/images/I/71V3fExDDpL._SX425_.jpg","https://m.media-amazon.com/images/I/61BKDXygLYL._SX425_.jpg","https://m.media-amazon.com/images/I/51kMg2lJvEL._SX425_.jpg"],
        desc: "Color : Powder coated (Brown Door / Akash Grey Body)",
        specs: "Laxmi KAPAT Metal Wardrobe | 2 Door Large Almirah Cupboard with Locking System | (Powder Coated - Brown 78 X 36 X 19 Inch)"
    },
    {
        id: 11,
        title: "Lux Designer #12",
        price: 23500,
        img:     "https://m.media-amazon.com/images/I/412hQj0VNjL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51EWuz4CIWL._SX425_.jpg","https://m.media-amazon.com/images/I/61dMKPYcaAL._SX425_.jpg","https://m.media-amazon.com/images/I/61vuroHvX2L._SX425_.jpg","https://m.media-amazon.com/images/I/718FLGrcsjL._SL1500_.jpg"],
        desc: "Stylish two-door wooden wardrobe with a mirror",
        specs: "Nilkamal Riva 2 Door Wooden Wardrobe With Mirror for Bedroom | Almirah with 1 Hanging Rod, 3 Shelves & 1 Lockable Drawer | Clothes Cupboard | Engineered Wood | New Wenge"
    },
      {
        id: 12,
        title: "Lux Designer #13",
        price: 15999,
        img:     "https://m.media-amazon.com/images/I/510U8CUs6-L._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51tAkghbLmL._SX425_.jpg","https://m.media-amazon.com/images/I/61TjLwDpVYL._SX425_.jpg","https://m.media-amazon.com/images/I/61t95N+1CXL._SX425_.jpg","https://m.media-amazon.com/images/I/51u6ySTqtwL._SL1500_.jpg"],
        desc: "Product Dimensions: Length 31 in (78.74 cm), Width 23 in (58.42 cm), Height 70 in (177.8 cm), offering a spacious yet space-efficient design ideal for bedrooms and kids’ rooms.",
        specs: "Engineered Wood Wardrobe Closet for Bedroom/Kids Room || Engineeredd Wood Wardrobe with Multiple Storage Space || Free Standing || (White & Pink)"
    },
    {
        id: 13,
        title: "Lux Designer #14",
        price: 23500,
        img:     "https://m.media-amazon.com/images/I/71gldF6irWL._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61+DVFf+8hL._SX425_.jpg","https://m.media-amazon.com/images/I/81NlEMfQRRL._SX425_.jpg","https://m.media-amazon.com/images/I/71aqKSbpB-L._SX425_.jpg","https://m.media-amazon.com/images/I/81LGg3NSc1L._SX425_.jpg"],
        desc: "PRODUCT SIZE : Bedroom Wardrobe 180cms(H)x120cms(W)x40cms(D), Compact design with a depth of 40cm, a spacious width of 120cm, and a tall height of 180cm, creating a functional and stylish dressing area.",
        specs: "VIKI Wardrobe | Wooden Almirah for Clothes,Door for Bedroom, 3 Door Wardrobe with Drawer, Mirror & Hanging Space (Dark Wenge - 40D x 120W x 180H) | 1 Year Warranty | Free Assembly"
    },
      {
        id: 14,
        title: "Lux Designer #15",
        price: 7899,
        img:     "https://m.media-amazon.com/images/I/41BFI05YziL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51QoJkqWmbL._SY679_.jpg","https://m.media-amazon.com/images/I/51U8Xo3VqQL._SX425_.jpg","https://m.media-amazon.com/images/I/61MorOZAcAL._SX425_.jpg","https://m.media-amazon.com/images/I/51uxzvoknRL._SX425_.jpg"],
        desc:"MAINTENANCE】wardrobe for baby clothes are waterproof, dirt resistant, and cleanable. almira for kids only need to wipe it with a wet cloth for daily cleaning",
        specs: "YASONIC Plastic Wardrobe for Kids Clothes – Durable, Easy to Use Anti-Skid & Non-Slip Effective Professional Collapsible Wardrobe, Plastic Cupboard for Kids, Foldable Almirah (Pink, 1+3 Tier)"
    },
    {
        id: 15,
        title: "Lux Designer #16",
        price: 16990,
        img:     "https://m.media-amazon.com/images/I/717g234lL9L._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61UpvD+sETL._SX425_.jpg","https://m.media-amazon.com/images/I/81O39pgwwaL._SX425_.jpg","https://m.media-amazon.com/images/I/71lQozwxpTL._SX425_.jpg","https://m.media-amazon.com/images/I/61VwRbaKeVL._SX425_.jpg"],
        desc: "Product Dimensions : Length - 45.7 cm (18 Inch), Width - 91.5 cm (36 in), Height - 198.6 cm (78 in) - Color (Grey) With 1 document and Main Door Locker.",
        specs: "Steel Berow 2 Door Almirah for Clothes | 1-Year Warranty with 5 Shelves Multipurpose Almirah for Bedroom Cabinet | Wardrobe Rack Closest 1 Door Hanging & Letter Box Storage Metal Bero (40 in, Grey)"
    },
      {
        id: 16,
        title: "Lux Designer #17",
        price: 9398,
        img:     "https://m.media-amazon.com/images/I/61pLcPtqSAL._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/51hIHp6w3lL._SX425_.jpg","https://m.media-amazon.com/images/I/51tT1kM4IAL._SX425_.jpg","https://m.media-amazon.com/images/I/5130AuXm6oL._SX425_.jpg","https://m.media-amazon.com/images/I/51ZWbUGhO9L._SX425_.jpg"],
        desc:"✔ Collapsible & Foldable Design – Easy to assemble and fold, perfect portable plastic wardrobe for home, hostel, or rental use",
        specs: "Collapsible Plastic Wardrobe for Unisex | 5-Tier Multi-Layer Storage Cabinet with Doors & Drawers | Portable Clothes Organizer for Bedroom, Kids Room, Nursery, Home Closet - White"
    },
    {
        id: 17,
        title: "Lux Designer #18",
        price: 10790,
        img:     "https://m.media-amazon.com/images/I/71CbDXThP2L._SX425_.jpg",
        gallery:["https://m.media-amazon.com/images/I/71jDDd0ubtL._SX425_.jpg","https://m.media-amazon.com/images/I/71r9v0djmlL._SX425_.jpg","https://m.media-amazon.com/images/I/71zwksqfXnL._SX425_.jpg","https://m.media-amazon.com/images/I/616j3-TxF6L._SX425_.jpg"],
        desc: "Product Dimensions : Length - 40.6 cm (16 Inch), Width - 86.3 cm (34 in), Height - 198.6 cm (78 in) - Color (Grey) With 1 document and Main Door Locker.",
        specs: "Steel Wardrobe with Mirror | 1 Year Warranty | Steel Almirah for Clothes | 2 Door Storage Cupboard berow, 1 Hanging Space & 5 Lockers with 2 Set of Keys | Durable Metal Berow for Home (Grey)"
    },
      {
        id: 18,
        title: "Lux Designer #19",
        price: 12600,
        img: "https://m.media-amazon.com/images/I/41us4013COL._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/61um8RJgu6L._SX425_.jpg","https://m.media-amazon.com/images/I/61RrQyNeszL._SX425_.jpg","https://m.media-amazon.com/images/I/51Ni8-kngYL._SX425_.jpg","https://m.media-amazon.com/images/I/51Ni8-kngYL._SX425_.jpg"],
        desc: "Colour & Dimensions: Coffee Brown, 52.5D x 90W x 187.5H Centimeters, offering ample storage space while fitting seamlessly into your home setup.",
        specs: "CASPIAN Engineered Wood 2 Door Wardrobe (Coffee Brown) | Pre-Assembled Furniture with Mirror | Cupboard/Almirah for Bedroom Clothes Storage Organizer with 5 Shelves & 2 Drawers"
    },
    {
        id: 19,
        title: "Lux Designer #20",
        price: 1695,
        img: "https://m.media-amazon.com/images/I/41XdDZJdD4L._SY300_SX300_QL70_FMwebp_.jpg",
        gallery:["https://m.media-amazon.com/images/I/81OeViPFlBL._SX425_.jpg","https://m.media-amazon.com/images/I/811oYqbN75L._SX425_.jpg","https://m.media-amazon.com/images/I/71BbZE0pPzL._SX425_.jpg","https://m.media-amazon.com/images/I/71lu6zlcqtL._SX425_.jpg"],
        specs: "AYSIS Plastic Rack For Storage,Foldable Wardrobe For Clothes,Collapsible Wardrobe,Kitchen Cupboard,Storage Wardrobe,Cupboard For Clothes Plastic(Grey,6-Shelf-3-Door),44 Centimeters,32 Cm,158 Cm"
    },
    
];

function init() {
    // 1. Check if we are on the Main Shop Page
    const grid = document.getElementById('main-grid');
    if (grid) {
        grid.innerHTML = '';
        products.forEach((item) => {
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
    }

    // 2. Check if we are on the Details Page
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    
    if (productId !== null) {
        const currentItem = products.find(p => p.id == productId);
        if (currentItem) {
            if(document.getElementById('p-title')) document.getElementById('p-title').innerText = currentItem.title;
            if(document.getElementById('p-price')) document.getElementById('p-price').innerText = "₹" + currentItem.price.toLocaleString();
            if(document.getElementById('p-desc')) document.getElementById('p-desc').innerHTML = currentItem.desc;
            if(document.getElementById('p-specs')) document.getElementById('p-specs').innerHTML = currentItem.specs;

            const mainImg = document.getElementById('main-img');
            if(mainImg) mainImg.src = currentItem.img;

            const container = document.getElementById('thumb-container');
            if(container) {
                container.innerHTML = '';
                currentItem.gallery.forEach((url, index) => {
                    if(!url) return; // Skip empty URLs
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
    }
}

function goToDetails(id) {
    window.location.href = `almira-details.html?id=${id}`;
}

function handleBooking(itemName) {
    const name = itemName || document.getElementById('p-title').innerText;
    window.location.href = `booking.html?item=${encodeURIComponent(name)}`;
}

// Sirf ek baar event listener use karein
document.addEventListener('DOMContentLoaded', init);