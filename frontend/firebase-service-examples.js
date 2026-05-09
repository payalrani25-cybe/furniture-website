/**
 * Firebase Service Usage Examples
 * Complete implementation guide for the furniture e-commerce website
 */

import firebaseService, {
  initializeFirebase,
  uploadFurnitureItem,
  getFurnitureInventory,
  getFurnitureItemById,
  getFurnitureByCategory,
  updateFurnitureItem,
  deleteFurnitureItem,
  uploadProductImage,
} from './firebase-service.js';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

// ==================== INITIALIZATION ====================

/**
 * Initialize Firebase on app startup
 */
export async function initApp() {
  try {
    // Initialize Firebase
    initializeFirebase(firebaseConfig);

    // Check if Firebase is properly initialized
    if (firebaseService.isFirebaseInitialized()) {
      console.log('✅ App ready - Firebase initialized');
      return true;
    }
  } catch (error) {
    console.error('❌ App initialization failed:', error);
    return false;
  }
}

// ==================== UPLOAD FURNITURE EXAMPLES ====================

/**
 * Example 1: Upload a single furniture item
 */
export async function exampleUploadChair() {
  const chairData = {
    name: 'Modern Office Chair',
    price: 299.99,
    category: 'chair',
    description: 'Ergonomic office chair with lumbar support',
    quantity: 50,
    inStock: true,
  };

  const result = await uploadFurnitureItem(chairData);

  if (result.success) {
    console.log('Chair uploaded with ID:', result.documentId);
    // Use result.documentId for further operations
    return result.documentId;
  } else {
    console.error('Upload failed:', result.error);
    return null;
  }
}

/**
 * Example 2: Upload furniture with image URL
 */
export async function exampleUploadSofaWithImage(imageUrl) {
  const sofaData = {
    name: 'Luxury Sectional Sofa',
    price: 1299.99,
    category: 'sofa',
    description: 'Premium leather sectional sofa with reclining feature',
    imageUrl, // Optional field
    quantity: 15,
    inStock: true,
  };

  const result = await uploadFurnitureItem(sofaData);
  if (result.success) {
    console.log('✅ Sofa uploaded:', result.documentId);
  }
  return result;
}

/**
 * Example 3: Batch upload multiple items
 */
export async function exampleBatchUpload() {
  const items = [
    {
      name: 'Wooden Dining Table',
      price: 599.99,
      category: 'table',
      description: 'Solid oak dining table seats 6',
      quantity: 20,
    },
    {
      name: 'Bookshelf Unit',
      price: 199.99,
      category: 'shelf',
      description: 'Tall wooden bookshelf with 5 shelves',
      quantity: 30,
    },
    {
      name: 'Bedside Nightstand',
      price: 129.99,
      category: 'bedroom',
      description: 'Modern bedside table with drawer',
      quantity: 40,
    },
  ];

  const results = [];
  for (const item of items) {
    const result = await uploadFurnitureItem(item);
    results.push(result);
    console.log(
      `${result.success ? '✅' : '❌'} ${item.name}: ${result.message || result.error}`
    );
  }

  return results;
}

// ==================== FETCH INVENTORY EXAMPLES ====================

/**
 * Example 4: Get all furniture items
 */
export async function exampleGetAllFurniture() {
  const result = await getFurnitureInventory();

  if (result.success) {
    console.log(`✅ Retrieved ${result.count} products`);

    // Display products in a table format
    console.table(
      result.data.map((item) => ({
        id: item.id,
        name: item.name,
        price: `$${item.price}`,
        category: item.category,
        stock: item.quantity,
      }))
    );

    return result.data;
  } else {
    console.error('❌ Failed to fetch inventory:', result.error);
    return [];
  }
}

/**
 * Example 5: Get furniture by category
 */
export async function exampleGetChairs() {
  const result = await getFurnitureByCategory('chair');

  if (result.success) {
    console.log(`✅ Found ${result.count} chairs`);
    result.data.forEach((chair) => {
      console.log(`  - ${chair.name}: $${chair.price}`);
    });
    return result.data;
  } else {
    console.error('❌ Error:', result.error);
    return [];
  }
}

/**
 * Example 6: Get single item by ID
 */
export async function exampleGetProductDetails(documentId) {
  const result = await getFurnitureItemById(documentId);

  if (result.success) {
    console.log('✅ Product Details:');
    console.log(JSON.stringify(result.data, null, 2));
    return result.data;
  } else {
    console.error('❌ Error:', result.error);
    return null;
  }
}

// ==================== UPDATE FURNITURE EXAMPLES ====================

/**
 * Example 7: Update product price and stock
 */
export async function exampleUpdateProductPrice(documentId, newPrice) {
  const result = await updateFurnitureItem(documentId, {
    price: newPrice,
  });

  if (result.success) {
    console.log('✅ Price updated to $' + newPrice);
  } else {
    console.error('❌ Update failed:', result.error);
  }
  return result;
}

/**
 * Example 8: Update stock quantity
 */
export async function exampleUpdateStock(documentId, newQuantity) {
  const result = await updateFurnitureItem(documentId, {
    quantity: newQuantity,
    inStock: newQuantity > 0,
  });

  if (result.success) {
    console.log(
      `✅ Stock updated to ${newQuantity} (inStock: ${newQuantity > 0})`
    );
  }
  return result;
}

// ==================== DELETE FURNITURE EXAMPLES ====================

/**
 * Example 9: Delete a product
 */
export async function exampleDeleteProduct(documentId) {
  const result = await deleteFurnitureItem(documentId);

  if (result.success) {
    console.log('✅ Product deleted successfully');
  } else {
    console.error('❌ Delete failed:', result.error);
  }
  return result;
}

// ==================== IMAGE UPLOAD EXAMPLES ====================

/**
 * Example 10: Upload product image
 */
export async function exampleUploadImage(imageFile) {
  const result = await uploadProductImage(imageFile, 'products/chairs');

  if (result.success) {
    console.log('✅ Image uploaded:', result.downloadURL);
    return result.downloadURL;
  } else {
    console.error('❌ Image upload failed:', result.error);
    return null;
  }
}

/**
 * Example 11: Upload image and save furniture item
 */
export async function exampleUploadFurnitureWithImage(itemData, imageFile) {
  // Step 1: Upload image
  const imageResult = await uploadProductImage(imageFile);

  if (!imageResult.success) {
    console.error('❌ Image upload failed:', imageResult.error);
    return null;
  }

  // Step 2: Add furniture item with image URL
  const furnitureData = {
    ...itemData,
    imageUrl: imageResult.downloadURL,
  };

  const uploadResult = await uploadFurnitureItem(furnitureData);

  if (uploadResult.success) {
    console.log('✅ Furniture item created with image');
    return {
      documentId: uploadResult.documentId,
      imageUrl: imageResult.downloadURL,
    };
  }

  return null;
}

// ==================== REAL-WORLD SCENARIO EXAMPLES ====================

/**
 * Example 12: Initialize app and load dashboard
 */
export async function initializeDashboard() {
  console.log('🚀 Initializing furniture dashboard...');

  // Initialize Firebase
  const initialized = await initApp();
  if (!initialized) {
    console.error('Failed to initialize Firebase');
    return;
  }

  // Load all products
  const inventory = await getFurnitureInventory();
  if (inventory.success) {
    console.log(`📦 Dashboard loaded with ${inventory.count} products`);

    // Group by category
    const byCategory = {};
    inventory.data.forEach((item) => {
      if (!byCategory[item.category]) {
        byCategory[item.category] = [];
      }
      byCategory[item.category].push(item);
    });

    console.log('\n📊 Inventory by Category:');
    Object.entries(byCategory).forEach(([category, items]) => {
      console.log(
        `  ${category.toUpperCase()}: ${items.length} items ($${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)} total value)`
      );
    });
  }
}

/**
 * Example 13: Product management workflow
 */
export async function exampleProductManagementWorkflow() {
  console.log('📝 Running product management workflow...\n');

  // Step 1: Create new product
  console.log('1️⃣ Creating new product...');
  const newProduct = {
    name: 'Premium Leather Armchair',
    price: 799.99,
    category: 'chair',
    description: 'Handcrafted leather armchair with oak frame',
    quantity: 5,
    inStock: true,
  };

  const createResult = await uploadFurnitureItem(newProduct);
  if (!createResult.success) {
    console.error('Failed to create product');
    return;
  }
  const productId = createResult.documentId;
  console.log(`✅ Product created: ${productId}\n`);

  // Step 2: Retrieve product details
  console.log('2️⃣ Retrieving product details...');
  const getResult = await getFurnitureItemById(productId);
  if (getResult.success) {
    console.log('✅ Product retrieved:', getResult.data.name);
    console.log(`   Price: $${getResult.data.price}`);
    console.log(`   Stock: ${getResult.data.quantity}\n`);
  }

  // Step 3: Update product price
  console.log('3️⃣ Updating product price...');
  const updateResult = await updateFurnitureItem(productId, {
    price: 749.99,
  });
  if (updateResult.success) {
    console.log('✅ Price updated to $749.99\n');
  }

  // Step 4: Get all products in category
  console.log('4️⃣ Fetching all chairs...');
  const categoryResult = await getFurnitureByCategory('chair');
  if (categoryResult.success) {
    console.log(`✅ Found ${categoryResult.count} chairs in inventory\n`);
  }

  // Step 5: Delete product (uncomment to enable)
  // console.log('5️⃣ Deleting product...');
  // const deleteResult = await deleteFurnitureItem(productId);
  // if (deleteResult.success) {
  //   console.log('✅ Product deleted\n');
  // }

  console.log('✅ Workflow completed!');
}

// ==================== ERROR HANDLING EXAMPLES ====================

/**
 * Example 14: Handling specific Firebase errors
 */
export async function exampleErrorHandling() {
  console.log('🔍 Demonstrating error handling...\n');

  // Test 1: Missing required fields
  console.log('Test 1: Missing required fields');
  const result1 = await uploadFurnitureItem({
    name: 'Chair',
    // Missing: price, category, description
  });
  console.log('Error:', result1.error);
  console.log('Error Code:', result1.errorCode, '\n');

  // Test 2: Invalid price
  console.log('Test 2: Invalid price');
  const result2 = await uploadFurnitureItem({
    name: 'Chair',
    price: -100, // Invalid: negative price
    category: 'chair',
    description: 'Test',
  });
  console.log('Error:', result2.error);
  console.log('Error Code:', result2.errorCode, '\n');

  // Test 3: Invalid document ID
  console.log('Test 3: Invalid document ID');
  const result3 = await getFurnitureItemById('invalid-id-that-doesnt-exist');
  console.log('Error:', result3.error);
  console.log('Error Code:', result3.errorCode, '\n');
}

// ==================== HTML INTEGRATION EXAMPLES ====================

/**
 * Example HTML Integration
 * Shows how to use the service module in HTML/JavaScript
 */
export function getHtmlExamples() {
  return `
<!-- Example 1: Display Products -->
<div id="productsList" class="products-grid"></div>

<script type="module">
  import { getFurnitureInventory, uploadFurnitureItem } from './firebase-service.js';
  import { initApp } from './firebase-service-examples.js';

  // Initialize on page load
  await initApp();

  // Load and display products
  async function loadProducts() {
    const result = await getFurnitureInventory();
    if (result.success) {
      const html = result.data.map(product => \`
        <div class="product-card">
          <img src="\${product.imageUrl || 'placeholder.jpg'}" alt="\${product.name}">
          <h3>\${product.name}</h3>
          <p class="price">$\${product.price}</p>
          <p class="description">\${product.description}</p>
          <button onclick="addToCart('\${product.id}')">Add to Cart</button>
        </div>
      \`).join('');
      document.getElementById('productsList').innerHTML = html;
    }
  }

  loadProducts();
</script>

<!-- Example 2: Add Product Form -->
<form id="addProductForm">
  <input type="text" id="productName" placeholder="Product Name" required>
  <input type="number" id="productPrice" placeholder="Price" step="0.01" required>
  <select id="productCategory" required>
    <option value="">Select Category</option>
    <option value="chair">Chair</option>
    <option value="sofa">Sofa</option>
    <option value="table">Table</option>
    <option value="bed">Bed</option>
  </select>
  <textarea id="productDescription" placeholder="Description" required></textarea>
  <input type="number" id="productQuantity" placeholder="Quantity" value="1">
  <button type="submit">Add Product</button>
</form>

<script type="module">
  import { uploadFurnitureItem } from './firebase-service.js';

  document.getElementById('addProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const itemData = {
      name: document.getElementById('productName').value,
      price: parseFloat(document.getElementById('productPrice').value),
      category: document.getElementById('productCategory').value,
      description: document.getElementById('productDescription').value,
      quantity: parseInt(document.getElementById('productQuantity').value),
    };

    const result = await uploadFurnitureItem(itemData);
    if (result.success) {
      alert('Product added successfully!');
      e.target.reset();
    } else {
      alert('Error: ' + result.error);
    }
  });
</script>
  `;
}

// Export all examples
export default {
  initApp,
  exampleUploadChair,
  exampleUploadSofaWithImage,
  exampleBatchUpload,
  exampleGetAllFurniture,
  exampleGetChairs,
  exampleGetProductDetails,
  exampleUpdateProductPrice,
  exampleUpdateStock,
  exampleDeleteProduct,
  exampleUploadImage,
  exampleUploadFurnitureWithImage,
  initializeDashboard,
  exampleProductManagementWorkflow,
  exampleErrorHandling,
  getHtmlExamples,
};
