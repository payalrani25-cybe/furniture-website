const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const MONGO_URI = 'mongodb://localhost:27017/furniture_shop';
const DATA_PATH = path.join(__dirname, 'data.json');

// ✅ ORIGINAL IMAGES FROM scr.js / original category files
const products = [
    // ===== SOFAS (original Amazon images) =====
    { id: "s1", title: "Lux Velvet 3-Seater Sofa", price: 25000, img: "https://m.media-amazon.com/images/I/61P3aL0IufL._SX679_.jpg", category: "sofas", desc: "Hand-crafted with premium velvet and high-density foam. Perfect centerpiece for modern living rooms.", specs: "Material: Premium Velvet | Frame: Teak Wood | 3 Seater | Warranty: 5 Years", gallery: ["https://m.media-amazon.com/images/I/61P3aL0IufL._SX679_.jpg","https://m.media-amazon.com/images/I/61trhAAf-GL._SX679_.jpg"], stock: 5, rating: 4.8 },
    { id: "s2", title: "L-Shape Corner Sofa", price: 38000, img: "https://m.media-amazon.com/images/I/71oWedXfU7L._SX679_.jpg", category: "sofas", desc: "Spacious L-shape design perfect for large living rooms. Upholstered in durable leatherette.", specs: "Material: Leatherette | Shape: L-Corner | 7 Seater | Warranty: 3 Years", gallery: ["https://m.media-amazon.com/images/I/71oWedXfU7L._SX679_.jpg"], stock: 3, rating: 4.7 },
    { id: "s3", title: "Royal Wooden Sofa Set", price: 55000, img: "https://m.media-amazon.com/images/I/61D11arO-eL._SX679_.jpg", category: "sofas", desc: "Elegant sheesham wood sofa set with premium cushioned seats. Traditional yet timeless.", specs: "Material: Sheesham Wood | Set: 3+1+1 | High Density Cushion | Warranty: 5 Years", gallery: ["https://m.media-amazon.com/images/I/61D11arO-eL._SX679_.jpg"], stock: 4, rating: 4.9 },
    { id: "s4", title: "Sleek 2-Seater Love Seat", price: 18000, img: "https://m.media-amazon.com/images/I/71uEzCvkUJL._SX679_.jpg", category: "sofas", desc: "Compact and stylish love seat for cozy spaces. Available in multiple colors.", specs: "Material: Fabric | Size: 2 Seater | Color: Grey | Warranty: 2 Years", gallery: ["https://m.media-amazon.com/images/I/71uEzCvkUJL._SX679_.jpg"], stock: 8, rating: 4.5 },
    { id: "s5", title: "Premium Recliner Sofa", price: 32000, img: "https://m.media-amazon.com/images/I/71JqkIVCkJL._SX679_.jpg", category: "sofas", desc: "Premium recliner sofa with push-back mechanism. Adjustable headrest for ultimate relaxation.", specs: "Material: Faux Leather | Type: Recliner | Mechanism: Push-Back | Warranty: 3 Years", gallery: ["https://m.media-amazon.com/images/I/71JqkIVCkJL._SX679_.jpg"], stock: 6, rating: 4.8 },
    { id: "s6", title: "Sofa Cum Bed", price: 22000, img: "https://m.media-amazon.com/images/I/71LX3vT7lxL._SX679_.jpg", category: "sofas", desc: "Multifunctional sofa that converts into a stylish bed. Ideal for studio apartments.", specs: "Material: Velvet | Feature: Converts to Bed | Size: Double | Warranty: 2 Years", gallery: ["https://m.media-amazon.com/images/I/71LX3vT7lxL._SX679_.jpg"], stock: 5, rating: 4.6 },

    // ===== BEDS (original images) =====
    { id: "b1", title: "King Size Storage Bed", price: 45000, img: "https://images.woodenstreet.de/image/cache/data/bed-with-storage/brixton-sheesham-wood-bed-with-storage-drawers-king-size-honey-finish/new-logo/New+Looks+/3-750x650.jpg", category: "beds", desc: "Sleep like royalty. Solid Sheesham wood frame with hydraulic storage drawers.", specs: "Material: Sheesham Wood | Size: King | Storage: Hydraulic | Finish: Honey Oak", gallery: ["https://images.woodenstreet.de/image/cache/data/bed-with-storage/brixton-sheesham-wood-bed-with-storage-drawers-king-size-honey-finish/new-logo/New+Looks+/3-750x650.jpg"], stock: 3, rating: 4.9 },
    { id: "b2", title: "Queen Upholstered Bed", price: 32000, img: "https://m.media-amazon.com/images/I/71f1YxQV7-L._SX679_.jpg", category: "beds", desc: "Premium fabric-upholstered queen bed with cushioned headboard.", specs: "Material: MDF + Fabric | Size: Queen | Headboard: Padded | Warranty: 3 Years", gallery: ["https://m.media-amazon.com/images/I/71f1YxQV7-L._SX679_.jpg"], stock: 5, rating: 4.8 },
    { id: "b3", title: "Solid Wood Diwan Bed", price: 28000, img: "https://images.woodenstreet.de/image/cache/data/diwan-beds/heritage-sheesham-wood-diwan-bed-without-storage-natural-finish/new1/1-750x650.jpg", category: "beds", desc: "Traditional Indian diwan-style bed. Perfect for reading and lounging.", specs: "Material: Teak Wood | Style: Diwan | Size: Single | Warranty: 5 Years", gallery: ["https://images.woodenstreet.de/image/cache/data/diwan-beds/heritage-sheesham-wood-diwan-bed-without-storage-natural-finish/new1/1-750x650.jpg"], stock: 4, rating: 4.7 },
    { id: "b4", title: "Double Box Storage Bed", price: 18500, img: "https://m.media-amazon.com/images/I/71zFCx97i-L._SX679_.jpg", category: "beds", desc: "Space-saving double bed with box-type storage underneath.", specs: "Material: Engineered Wood | Size: Double | Storage: Box Type | Warranty: 2 Years", gallery: ["https://m.media-amazon.com/images/I/71zFCx97i-L._SX679_.jpg"], stock: 7, rating: 4.5 },
    { id: "b5", title: "Kids Bunk Bed", price: 22000, img: "https://m.media-amazon.com/images/I/61+5c09WZRL._SX679_.jpg", category: "beds", desc: "Safe and fun bunk bed for kids. Includes safety railings on the top bunk.", specs: "Material: Metal + MDF | Type: Bunk | Safety Rails: Yes | Warranty: 2 Years", gallery: ["https://m.media-amazon.com/images/I/61+5c09WZRL._SX679_.jpg"], stock: 6, rating: 4.6 },
    { id: "b6", title: "Luxury Hydraulic Bed", price: 58000, img: "https://m.media-amazon.com/images/I/41sBXYxCiaL._SX679_.jpg", category: "beds", desc: "The ultimate luxury hydraulic bed. Gas-lift mechanism for easy storage.", specs: "Material: Solid Wood | Size: King | Mechanism: Hydraulic Gas Lift | Warranty: 5 Years", gallery: ["https://m.media-amazon.com/images/I/41sBXYxCiaL._SX679_.jpg"], stock: 2, rating: 5.0 },

    // ===== CHAIRS (original images) =====
    { id: "c1", title: "Ergonomic Office Chair", price: 8500, img: "https://m.media-amazon.com/images/I/71Fst8vBv+L._AC_UF894,1000_QL80_.jpg", category: "chairs", desc: "Designed for long working hours. Lumbar support and breathable mesh back.", specs: "Material: Mesh & Steel | Type: Office | Height: Adjustable | Warranty: 2 Years", gallery: ["https://m.media-amazon.com/images/I/71Fst8vBv+L._AC_UF894,1000_QL80_.jpg"], stock: 12, rating: 4.7 },
    { id: "c2", title: "Wooden Armchair Premium", price: 12000, img: "https://m.media-amazon.com/images/I/71H1fIHU5tL._AC_UF894,1000_QL80_.jpg", category: "chairs", desc: "Handcrafted solid wood armchair with premium cushion seating.", specs: "Material: Teak Wood | Cushion: High Density | Armrests: Yes | Warranty: 5 Years", gallery: ["https://m.media-amazon.com/images/I/71H1fIHU5tL._AC_UF894,1000_QL80_.jpg"], stock: 8, rating: 4.8 },
    { id: "c3", title: "Accent Velvet Chair", price: 7500, img: "https://m.media-amazon.com/images/I/71mzXg6HQXL._AC_UF894,1000_QL80_.jpg", category: "chairs", desc: "Glamorous accent chair in luxurious velvet. Adds elegance to any corner.", specs: "Material: Velvet & Metal | Style: Accent | Colors: Multiple | Warranty: 1 Year", gallery: ["https://m.media-amazon.com/images/I/71mzXg6HQXL._AC_UF894,1000_QL80_.jpg"], stock: 10, rating: 4.6 },
    { id: "c4", title: "Gaming Chair Pro", price: 14000, img: "https://m.media-amazon.com/images/I/51gCqpK3ekL._AC_UF894,1000_QL80_.jpg", category: "chairs", desc: "Racing-style gaming chair with adjustable lumbar and neck pillow.", specs: "Material: PU Leather | Type: Gaming | Recline: 180° | Warranty: 2 Years", gallery: ["https://m.media-amazon.com/images/I/51gCqpK3ekL._AC_UF894,1000_QL80_.jpg"], stock: 9, rating: 4.7 },
    { id: "c5", title: "Dining Chair Set of 4", price: 9500, img: "https://m.media-amazon.com/images/I/81FRH0KW-EL._AC_UF894,1000_QL80_.jpg", category: "chairs", desc: "Set of 4 modern dining chairs. Sturdy metal legs and padded fabric seat.", specs: "Material: Fabric & Metal | Quantity: 4 | Type: Dining | Warranty: 1 Year", gallery: ["https://m.media-amazon.com/images/I/81FRH0KW-EL._AC_UF894,1000_QL80_.jpg"], stock: 6, rating: 4.5 },
    { id: "c6", title: "Classic Rocking Chair", price: 11000, img: "https://m.media-amazon.com/images/I/614A3b1nXEL._AC_UF894,1000_QL80_.jpg", category: "chairs", desc: "Classic rocking chair for relaxation. Solid wood with comfortable cushioned seat.", specs: "Material: Solid Wood | Type: Rocking | Cushion: Included | Warranty: 3 Years", gallery: ["https://m.media-amazon.com/images/I/614A3b1nXEL._AC_UF894,1000_QL80_.jpg"], stock: 5, rating: 4.8 },

    // ===== ALMIRA - original images from scr.js =====
    { id: "a1", title: "Lux Designer Wardrobe #1", price: 22000, img: "https://m.media-amazon.com/images/I/61askwFumbL._SX679_.jpg", category: "almira", desc: "Elevate your bedroom with our Everlast 3-Door Wardrobe. Crafted from high-grade termite-resistant engineered wood.", specs: "Material: High-Density Engineered Wood | Doors: 3 | Shelves: 5 | Mirror: Yes | Warranty: 3 Years", gallery: ["https://m.media-amazon.com/images/I/61Z9nPSjX+L._SX679_.jpg","https://m.media-amazon.com/images/I/61lKdDR5HDL._SY879_.jpg"], stock: 4, rating: 4.8 },
    { id: "a2", title: "Lux Designer Wardrobe #2", price: 23500, img: "https://m.media-amazon.com/images/I/417vZtUatWL._SY300_SX300_QL70_FMwebp_.jpg", category: "almira", desc: "Premium wardrobe with modern design and ample storage. Perfect for master bedroom.", specs: "Material: High-Density Engineered Wood | Doors: 3 | Shelves: 5 | Mirror: Yes | Warranty: 3 Years", gallery: ["https://m.media-amazon.com/images/I/81PpRynnHuL._SX679_.jpg","https://m.media-amazon.com/images/I/71rEHGNZ-aL._SX679_.jpg"], stock: 3, rating: 4.7 },
    { id: "a3", title: "Lux Designer Wardrobe #3", price: 22000, img: "https://m.media-amazon.com/images/I/717sLF9vv4L._SX679_.jpg", category: "almira", desc: "Sleek modern wardrobe with dedicated hanging rods and secure internal locker.", specs: "Material: High-Density Engineered Wood | Doors: 3 | Shelves: 5 | Warranty: 3 Years", gallery: ["https://m.media-amazon.com/images/I/51SyjZlkKAL._SX679_.jpg","https://m.media-amazon.com/images/I/7178mh9vkuL._SX679_.jpg"], stock: 5, rating: 4.6 },
    { id: "a4", title: "Lux Designer Wardrobe #4", price: 23500, img: "https://m.media-amazon.com/images/I/61pLcPtqSAL._SX679_.jpg", category: "almira", desc: "Large 4-door wardrobe with full-length mirror and premium matte finish.", specs: "Material: Engineered Wood | Doors: 4 | Mirror: Full-length | Warranty: 3 Years", gallery: ["https://m.media-amazon.com/images/I/5130AuXm6oL._SX679_.jpg","https://m.media-amazon.com/images/I/51tT1kM4IAL._SX679_.jpg"], stock: 4, rating: 4.9 },
    { id: "a5", title: "Lux Designer Wardrobe #5", price: 22000, img: "https://m.media-amazon.com/images/I/41rdO+U8qyL._SY300_SX300_QL70_FMwebp_.jpg", category: "almira", desc: "Spacious wardrobe with ergonomic brushed-metal handles and soft-close hinges.", specs: "Material: Engineered Wood | Doors: 3 | Soft-Close: Yes | Warranty: 3 Years", gallery: ["https://m.media-amazon.com/images/I/81EnGL4IN-L._SX679_.jpg","https://m.media-amazon.com/images/I/816amPlEpoL._SX679_.jpg"], stock: 6, rating: 4.7 },

    // ===== TABLES =====
    { id: "t1", title: "6-Seater Dining Table Set", price: 32000, img: "https://images.woodenstreet.de/image/cache/data/dining-table-sets/6-seater-dining-table-set/harry-6-seater-sheesham-wood-dining-table-set-honey-finish/new1/1-750x650.jpg", category: "table", desc: "Complete 6-seater dining set in solid Sheesham wood. Perfect for family dinners.", specs: "Material: Sheesham Wood | Capacity: 6 | Chairs: Included | Warranty: 5 Years", gallery: ["https://images.woodenstreet.de/image/cache/data/dining-table-sets/6-seater-dining-table-set/harry-6-seater-sheesham-wood-dining-table-set-honey-finish/new1/1-750x650.jpg"], stock: 4, rating: 4.9 },
    { id: "t2", title: "Center Coffee Table", price: 8000, img: "https://m.media-amazon.com/images/I/71kYZ0L2k-L._SX679_.jpg", category: "table", desc: "Modern coffee table with lower shelf for storage. Glass top with sturdy metal frame.", specs: "Material: Glass & Metal | Type: Coffee | Shelf: Yes | Warranty: 2 Years", gallery: ["https://m.media-amazon.com/images/I/71kYZ0L2k-L._SX679_.jpg"], stock: 10, rating: 4.6 },
    { id: "t3", title: "Office Study Desk", price: 9500, img: "https://m.media-amazon.com/images/I/71wM0e4sGxL._SX679_.jpg", category: "table", desc: "Spacious study desk with dedicated drawer and cable management.", specs: "Material: Engineered Wood | Drawer: 1 | Size: 120cm | Warranty: 2 Years", gallery: ["https://m.media-amazon.com/images/I/71wM0e4sGxL._SX679_.jpg"], stock: 7, rating: 4.7 },
    { id: "t4", title: "4-Seater Folding Dining Table", price: 14000, img: "https://m.media-amazon.com/images/I/71JaEJbIMhL._SX679_.jpg", category: "table", desc: "Smart folding dining table for 4. Saves space when not in use.", specs: "Material: MDF + Teak Finish | Capacity: 4 | Foldable: Yes | Warranty: 2 Years", gallery: ["https://m.media-amazon.com/images/I/71JaEJbIMhL._SX679_.jpg"], stock: 8, rating: 4.6 }
];

const seedDB = async () => {
    const hashedAdminPassword = await bcrypt.hash('admin123', 10);
    const data = {
        products,
        users: [
            { id: "u1", name: "Admin", email: "admin@furniture.com", password: hashedAdminPassword, role: "admin", cart: [], wishlist: [] }
        ],
        orders: []
    };

    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    console.log(`✅ JSON DB seeded with ${products.length} products (original images restored)`);

    try {
        await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 3000 });
        const Product = require('./models/Product');
        const User = require('./models/User');
        await Product.deleteMany({});
        await Product.insertMany(products);
        await User.deleteMany({ email: 'admin@furniture.com' });
        await User.create({ name: "Admin", email: "admin@furniture.com", password: hashedAdminPassword, role: "admin" });
        console.log('✅ MongoDB seeded!');
        mongoose.connection.close();
    } catch (err) {
        console.log('📁 Skipping MongoDB (not available). JSON is being used.');
    }
};

seedDB();
