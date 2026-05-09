/**
 * Firebase Service Module
 * Handles all Firebase operations: Authentication, Firestore, and Storage
 * Uses Firebase v10+ Modular SDK with async/await
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, deleteDoc, doc, getDoc, Timestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Firebase Configuration - Pass this from your config file
let app;
let auth;
let db;
let storage;

/**
 * Initialize Firebase Services
 * Call this function once when your app starts
 * @param {Object} firebaseConfig - Firebase configuration object
 * @returns {Object} Initialized Firebase services
 */
export function initializeFirebase(firebaseConfig) {
  try {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
      throw new Error('Invalid Firebase config: Missing required fields');
    }

    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);

    console.log('✅ Firebase initialized successfully');
    return { app, auth, db, storage };
  } catch (error) {
    console.error('❌ Firebase initialization error:', {
      code: error.code || 'INIT_ERROR',
      message: error.message,
    });
    throw error;
  }
}

/**
 * Validate Firebase initialization
 * @private
 */
function ensureInitialized() {
  if (!db || !auth) {
    throw new Error('Firebase not initialized. Call initializeFirebase() first.');
  }
}

// ==================== FIRESTORE OPERATIONS ====================

/**
 * Upload/Create a new furniture item to the 'products' collection
 * @param {Object} itemData - Furniture item details
 * @param {string} itemData.name - Product name (required)
 * @param {number} itemData.price - Product price (required)
 * @param {string} itemData.category - Product category (required)
 * @param {string} itemData.description - Product description (required)
 * @param {string} [itemData.imageUrl] - Product image URL (optional)
 * @param {number} [itemData.quantity] - Stock quantity (optional, default: 0)
 * @param {boolean} [itemData.inStock] - Stock status (optional, default: true)
 * @returns {Promise<Object>} Success object with documentId and data
 */
export async function uploadFurnitureItem(itemData) {
  try {
    ensureInitialized();

    // Validate required fields
    const requiredFields = ['name', 'price', 'category', 'description'];
    const missingFields = requiredFields.filter((field) => !itemData[field]);

    if (missingFields.length > 0) {
      throw new Error(
        `Missing required fields: ${missingFields.join(', ')}`
      );
    }

    // Validate data types
    if (typeof itemData.name !== 'string' || itemData.name.trim() === '') {
      throw new Error('Name must be a non-empty string');
    }

    if (typeof itemData.price !== 'number' || itemData.price <= 0) {
      throw new Error('Price must be a positive number');
    }

    if (typeof itemData.category !== 'string' || itemData.category.trim() === '') {
      throw new Error('Category must be a non-empty string');
    }

    if (typeof itemData.description !== 'string' || itemData.description.trim() === '') {
      throw new Error('Description must be a non-empty string');
    }

    // Prepare data for Firestore
    const furnitureData = {
      name: itemData.name.trim(),
      price: itemData.price,
      category: itemData.category.trim(),
      description: itemData.description.trim(),
      imageUrl: itemData.imageUrl || null,
      quantity: itemData.quantity || 0,
      inStock: itemData.inStock !== undefined ? itemData.inStock : true,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    // Add document to 'products' collection
    const productsCollection = collection(db, 'products');
    const docRef = await addDoc(productsCollection, furnitureData);

    console.log('✅ Furniture item uploaded successfully:', {
      documentId: docRef.id,
      itemName: itemData.name,
    });

    return {
      success: true,
      documentId: docRef.id,
      data: furnitureData,
      message: `Product "${itemData.name}" added successfully`,
    };
  } catch (error) {
    console.error('❌ Error uploading furniture item:', {
      code: error.code || 'UPLOAD_ERROR',
      message: error.message,
      itemName: itemData?.name || 'Unknown',
    });

    return {
      success: false,
      error: error.message,
      errorCode: error.code || 'UPLOAD_ERROR',
    };
  }
}

/**
 * Retrieve all furniture items from the 'products' collection
 * @returns {Promise<Object>} Success object with array of products
 */
export async function getFurnitureInventory() {
  try {
    ensureInitialized();

    const productsCollection = collection(db, 'products');
    const querySnapshot = await getDocs(productsCollection);

    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    console.log('✅ Furniture inventory retrieved successfully:', {
      count: products.length,
    });

    return {
      success: true,
      data: products,
      count: products.length,
      message: `Retrieved ${products.length} products`,
    };
  } catch (error) {
    console.error('❌ Error fetching furniture inventory:', {
      code: error.code || 'FETCH_ERROR',
      message: error.message,
    });

    return {
      success: false,
      error: error.message,
      errorCode: error.code || 'FETCH_ERROR',
      data: [],
      count: 0,
    };
  }
}

/**
 * Get a single furniture item by ID
 * @param {string} documentId - Document ID of the product
 * @returns {Promise<Object>} Success object with product data
 */
export async function getFurnitureItemById(documentId) {
  try {
    ensureInitialized();

    if (!documentId || typeof documentId !== 'string') {
      throw new Error('Invalid document ID');
    }

    const docRef = doc(db, 'products', documentId);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      throw new Error(`Product with ID "${documentId}" not found`);
    }

    console.log('✅ Furniture item retrieved successfully:', {
      documentId,
      itemName: docSnapshot.data().name,
    });

    return {
      success: true,
      id: docSnapshot.id,
      data: docSnapshot.data(),
      message: 'Product retrieved successfully',
    };
  } catch (error) {
    console.error('❌ Error fetching furniture item:', {
      code: error.code || 'FETCH_ITEM_ERROR',
      message: error.message,
      documentId,
    });

    return {
      success: false,
      error: error.message,
      errorCode: error.code || 'FETCH_ITEM_ERROR',
    };
  }
}

/**
 * Get furniture items by category
 * @param {string} category - Category name to filter by
 * @returns {Promise<Object>} Success object with filtered products
 */
export async function getFurnitureByCategory(category) {
  try {
    ensureInitialized();

    if (!category || typeof category !== 'string') {
      throw new Error('Invalid category');
    }

    const productsCollection = collection(db, 'products');
    const q = query(productsCollection, where('category', '==', category.trim()));
    const querySnapshot = await getDocs(q);

    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    console.log('✅ Furniture items filtered by category:', {
      category,
      count: products.length,
    });

    return {
      success: true,
      data: products,
      count: products.length,
      category,
      message: `Retrieved ${products.length} products in category "${category}"`,
    };
  } catch (error) {
    console.error('❌ Error fetching furniture by category:', {
      code: error.code || 'CATEGORY_FILTER_ERROR',
      message: error.message,
      category,
    });

    return {
      success: false,
      error: error.message,
      errorCode: error.code || 'CATEGORY_FILTER_ERROR',
      data: [],
      count: 0,
    };
  }
}

/**
 * Update a furniture item
 * @param {string} documentId - Document ID of the product
 * @param {Object} updateData - Fields to update
 * @returns {Promise<Object>} Success status
 */
export async function updateFurnitureItem(documentId, updateData) {
  try {
    ensureInitialized();

    if (!documentId || typeof documentId !== 'string') {
      throw new Error('Invalid document ID');
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      throw new Error('Update data cannot be empty');
    }

    const docRef = doc(db, 'products', documentId);

    // Add updatedAt timestamp
    const dataWithTimestamp = {
      ...updateData,
      updatedAt: Timestamp.now(),
    };

    await updateDoc(docRef, dataWithTimestamp);

    console.log('✅ Furniture item updated successfully:', {
      documentId,
      updatedFields: Object.keys(updateData),
    });

    return {
      success: true,
      documentId,
      message: 'Product updated successfully',
    };
  } catch (error) {
    console.error('❌ Error updating furniture item:', {
      code: error.code || 'UPDATE_ERROR',
      message: error.message,
      documentId,
    });

    return {
      success: false,
      error: error.message,
      errorCode: error.code || 'UPDATE_ERROR',
    };
  }
}

/**
 * Delete a furniture item
 * @param {string} documentId - Document ID of the product
 * @returns {Promise<Object>} Success status
 */
export async function deleteFurnitureItem(documentId) {
  try {
    ensureInitialized();

    if (!documentId || typeof documentId !== 'string') {
      throw new Error('Invalid document ID');
    }

    const docRef = doc(db, 'products', documentId);
    await deleteDoc(docRef);

    console.log('✅ Furniture item deleted successfully:', {
      documentId,
    });

    return {
      success: true,
      documentId,
      message: 'Product deleted successfully',
    };
  } catch (error) {
    console.error('❌ Error deleting furniture item:', {
      code: error.code || 'DELETE_ERROR',
      message: error.message,
      documentId,
    });

    return {
      success: false,
      error: error.message,
      errorCode: error.code || 'DELETE_ERROR',
    };
  }
}

// ==================== AUTHENTICATION FUNCTIONS ====================

/**
 * Get currently authenticated user
 * @returns {Object|null} Current user object or null
 */
export function getCurrentUser() {
  try {
    ensureInitialized();
    return auth.currentUser;
  } catch (error) {
    console.error('❌ Error getting current user:', {
      code: error.code || 'AUTH_ERROR',
      message: error.message,
    });
    return null;
  }
}

/**
 * Get auth service instance
 * @returns {Object} Firebase Auth instance
 */
export function getAuthService() {
  try {
    ensureInitialized();
    return auth;
  } catch (error) {
    console.error('❌ Error getting auth service:', {
      code: error.code || 'AUTH_ERROR',
      message: error.message,
    });
    return null;
  }
}

// ==================== STORAGE FUNCTIONS ====================

/**
 * Upload a product image to Storage
 * @param {File} imageFile - Image file to upload
 * @param {string} [folderPath] - Storage folder path (default: 'products')
 * @returns {Promise<Object>} Success object with download URL
 */
export async function uploadProductImage(imageFile, folderPath = 'products') {
  try {
    ensureInitialized();

    if (!imageFile) {
      throw new Error('Image file is required');
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(imageFile.type)) {
      throw new Error(
        'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed'
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (imageFile.size > maxSize) {
      throw new Error('File size exceeds 5MB limit');
    }

    // Create unique filename
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(2, 9);
    const fileName = `${folderPath}/${timestamp}-${randomId}-${imageFile.name}`;

    const storageRef = ref(storage, fileName);
    const snapshot = await uploadBytes(storageRef, imageFile);
    const downloadURL = await getDownloadURL(snapshot.ref);

    console.log('✅ Product image uploaded successfully:', {
      fileName,
      fileSize: imageFile.size,
      downloadURL,
    });

    return {
      success: true,
      downloadURL,
      fileName,
      message: 'Image uploaded successfully',
    };
  } catch (error) {
    console.error('❌ Error uploading product image:', {
      code: error.code || 'UPLOAD_IMAGE_ERROR',
      message: error.message,
      fileName: imageFile?.name || 'Unknown',
    });

    return {
      success: false,
      error: error.message,
      errorCode: error.code || 'UPLOAD_IMAGE_ERROR',
    };
  }
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Get Firebase services (after initialization)
 * @returns {Object} Object containing db, auth, and storage instances
 */
export function getFirebaseServices() {
  try {
    ensureInitialized();
    return { db, auth, storage };
  } catch (error) {
    console.error('❌ Error getting Firebase services:', {
      code: error.code || 'SERVICE_ERROR',
      message: error.message,
    });
    return null;
  }
}

/**
 * Check if Firebase is initialized
 * @returns {boolean} True if Firebase is initialized
 */
export function isFirebaseInitialized() {
  return app && auth && db && storage;
}

export default {
  initializeFirebase,
  uploadFurnitureItem,
  getFurnitureInventory,
  getFurnitureItemById,
  getFurnitureByCategory,
  updateFurnitureItem,
  deleteFurnitureItem,
  getCurrentUser,
  getAuthService,
  uploadProductImage,
  getFirebaseServices,
  isFirebaseInitialized,
};
