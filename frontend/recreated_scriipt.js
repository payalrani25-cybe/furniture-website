// 1. Firebase Imports (Vite style)
// recreated_scriipt.js ke top par ye likhein
import { db } from './firebaseConfig.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. UI Logic (Sidebar & Theme)
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const container = document.querySelector('.container');
const themeToggler = document.querySelector('.theme-toggler');
const menuBtnMobile = document.querySelector('#menu_bar_mobile');

const toggleSidebar = (show) => {
    if (show) {
        sideMenu.classList.remove('collapsed');
        container.classList.remove('collapsed');
    } else {
        sideMenu.classList.add('collapsed');
        container.classList.add('collapsed');
    }
};

if (menuBtn) menuBtn.addEventListener('click', () => toggleSidebar(true));
if (menuBtnMobile) menuBtnMobile.addEventListener('click', () => toggleSidebar(true));
if (closeBtn) closeBtn.addEventListener('click', () => toggleSidebar(false));

// Theme Logic
const applyTheme = (isDark) => {
    const root = document.documentElement;
    if (isDark) {
        root.style.setProperty('--clr-color-background', '#181a1e');
        root.style.setProperty('--clr-white', '#202528');
        root.style.setProperty('--clr-dark', '#edeffd');
    } else {
        root.style.setProperty('--clr-color-background', '#f6f6f9');
        root.style.setProperty('--clr-white', '#fff');
        root.style.setProperty('--clr-dark', '#363949');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme === 'dark');

// 3. Firebase: Add Product Logic
const addProductBtn = document.querySelector('.item.add_products');

if (addProductBtn) {
    addProductBtn.addEventListener('click', async () => {
        // User se data lena
        const name = prompt("Enter Furniture Name (e.g. Luxury Sofa):");
        const price = prompt("Enter Price (Number only):");
        const qty = prompt("Enter Quantity (Number only):");
        const desc = prompt("Enter Description:");
        const category = prompt("Enter Category (bed, sofa, table, etc.):").toLowerCase();

        // Validation: Name aur Price hona zaroori hai
        if (name && price && !isNaN(price)) {
            try {
                const docRef = await addDoc(collection(db, "products"), {
                    Name: name,            // Matches your Firestore screenshot
                    price: Number(price),  // Storing as Number
                    Quantity: Number(qty), // Storing as Number
                    description: desc,
                    category: category,    // This helps in filtering on front-end
                    createdAt: serverTimestamp()
                });
                
                alert("✅ Product Added! ID: " + docRef.id);
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.error("Firebase Error:", error);
                alert("❌ Error: " + error.message);
            }
        } else {
            alert("Please enter a valid Name and Price.");
        }
    });
}