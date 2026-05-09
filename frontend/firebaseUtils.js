/**
 * Firebase Utility Functions
 * Handles Authentication, Firestore Database, and Storage operations
 * Uses Modular SDK (v10+) with comprehensive error handling
 */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
  deleteDoc,
  Timestamp,
} from 'firebase/firestore';

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

import { auth, db, storage } from './firebaseConfig.js';

// ==================== AUTHENTICATION FUNCTIONS ====================

/**
 * Sign up a new user with email and password
 * @param {string} email - User email
 * @param {string} password - User password (min 6 characters)
 * @returns {Promise<Object>} User object with uid and email
 */
export async function signUp(email, password) {
  try {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return {
      success: true,
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      message: 'User registered successfully',
    };
  } catch (error) {
    console.error('Sign up error:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Sign in a user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} User object with uid and email
 */
export async function login(email, password) {
  try {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    return {
      success: true,
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      message: 'Login successful',
    };
  } catch (error) {
    console.error('Login error:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Sign out the current user
 * @returns {Promise<Object>} Success status
 */
export async function logout() {
  try {
    await signOut(auth);
    return {
      success: true,
      message: 'Logged out successfully',
    };
  } catch (error) {
    console.error('Logout error:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Enable persistent login (user stays logged in after page refresh)
 * @returns {Promise<void>}
 */
export async function enablePersistence() {
  try {
    await setPersistence(auth, browserLocalPersistence);
    console.log('Persistence enabled');
  } catch (error) {
    console.error('Persistence error:', error.message);
  }
}

/**
 * Listen to auth state changes
 * @param {Function} callback - Function to call when auth state changes
 * @returns {Function} Unsubscribe function
 */
export function onAuthChange(callback) {
  try {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        callback({
          isLoggedIn: true,
          uid: user.uid,
          email: user.email,
        });
      } else {
        callback({
          isLoggedIn: false,
          uid: null,
          email: null,
        });
      }
    });
  } catch (error) {
    console.error('Auth state change listener error:', error.message);
  }
}

// ==================== FIRESTORE FUNCTIONS ====================

/**
 * Fetch all products from the 'products' collection
 * @returns {Promise<Array>} Array of product objects with id and data
 */
export async function getAllProducts() {
  try {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);

    const products = [];
    snapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return {
      success: true,
      data: products,
      count: products.length,
    };
  } catch (error) {
    console.error('Error fetching products:', error.message);
    return {
      success: false,
      error: error.message,
      data: [],
    };
  }
}

/**
 * Fetch products with filters
 * @param {string} field - Field to filter by (e.g., 'category')
 * @param {string} value - Filter value (e.g., 'chair')
 * @returns {Promise<Array>} Array of filtered product objects
 */
export async function getProductsByCategory(field, value) {
  try {
    if (!field || !value) {
      throw new Error('Field and value are required');
    }

    const productsRef = collection(db, 'products');
    const q = query(productsRef, where(field, '==', value));
    const snapshot = await getDocs(q);

    const products = [];
    snapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return {
      success: true,
      data: products,
      count: products.length,
    };
  } catch (error) {
    console.error('Error fetching filtered products:', error.message);
    return {
      success: false,
      error: error.message,
      data: [],
    };
  }
}

/**
 * Fetch a single product by ID
 * @param {string} productId - Product document ID
 * @returns {Promise<Object>} Product object with data
 */
export async function getProductById(productId) {
  try {
    if (!productId) {
      throw new Error('Product ID is required');
    }

    const productRef = doc(db, 'products', productId);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      throw new Error('Product not found');
    }

    return {
      success: true,
      id: snapshot.id,
      data: snapshot.data(),
    };
  } catch (error) {
    console.error('Error fetching product:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Add a new item to the 'cart' collection
 * @param {string} userId - User ID
 * @param {Object} cartItem - Cart item object { productId, quantity, price, name, imageUrl }
 * @returns {Promise<Object>} Cart item with generated ID
 */
export async function addToCart(userId, cartItem) {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    if (
      !cartItem.productId ||
      !cartItem.quantity ||
      !cartItem.price ||
      !cartItem.name
    ) {
      throw new Error('Product ID, quantity, price, and name are required');
    }

    const cartRef = collection(db, 'cart');
    const newCartItem = {
      ...cartItem,
      userId,
      addedAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    const docRef = await addDoc(cartRef, newCartItem);

    return {
      success: true,
      cartItemId: docRef.id,
      message: 'Item added to cart successfully',
    };
  } catch (error) {
    console.error('Error adding to cart:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Fetch cart items for a user
 * @param {string} userId - User ID
 * @returns {Promise<Array>} Array of cart items
 */
export async function getUserCart(userId) {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const cartRef = collection(db, 'cart');
    const q = query(cartRef, where('userId', '==', userId));
    const snapshot = await getDocs(q);

    const cartItems = [];
    snapshot.forEach((doc) => {
      cartItems.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return {
      success: true,
      data: cartItems,
      count: cartItems.length,
    };
  } catch (error) {
    console.error('Error fetching cart:', error.message);
    return {
      success: false,
      error: error.message,
      data: [],
    };
  }
}

/**
 * Update a cart item
 * @param {string} cartItemId - Cart item document ID
 * @param {Object} updates - Fields to update { quantity, price, etc }
 * @returns {Promise<Object>} Success status
 */
export async function updateCartItem(cartItemId, updates) {
  try {
    if (!cartItemId) {
      throw new Error('Cart item ID is required');
    }

    const cartItemRef = doc(db, 'cart', cartItemId);
    await updateDoc(cartItemRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    });

    return {
      success: true,
      message: 'Cart item updated successfully',
    };
  } catch (error) {
    console.error('Error updating cart item:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Remove an item from cart
 * @param {string} cartItemId - Cart item document ID
 * @returns {Promise<Object>} Success status
 */
export async function removeFromCart(cartItemId) {
  try {
    if (!cartItemId) {
      throw new Error('Cart item ID is required');
    }

    const cartItemRef = doc(db, 'cart', cartItemId);
    await deleteDoc(cartItemRef);

    return {
      success: true,
      message: 'Item removed from cart successfully',
    };
  } catch (error) {
    console.error('Error removing from cart:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

// ==================== STORAGE FUNCTIONS ====================

/**
 * Upload a product image to Firebase Storage
 * @param {File} imageFile - Image file to upload
 * @param {string} folderPath - Storage folder path (e.g., 'products' or 'products/chairs')
 * @returns {Promise<Object>} Success status with download URL
 */
export async function uploadProductImage(imageFile, folderPath = 'products') {
  try {
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
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (imageFile.size > maxSize) {
      throw new Error('File size exceeds 5MB limit');
    }

    // Create a unique filename
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(2, 9);
    const fileName = `${folderPath}/${timestamp}-${randomId}-${imageFile.name}`;

    const storageRef = ref(storage, fileName);
    const snapshot = await uploadBytes(storageRef, imageFile);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return {
      success: true,
      downloadURL,
      fileName,
      message: 'Image uploaded successfully',
    };
  } catch (error) {
    console.error('Error uploading image:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Delete an image from Firebase Storage
 * @param {string} fileName - Storage file path
 * @returns {Promise<Object>} Success status
 */
export async function deleteProductImage(fileName) {
  try {
    if (!fileName) {
      throw new Error('File name is required');
    }

    const fileRef = ref(storage, fileName);
    await deleteObject(fileRef);

    return {
      success: true,
      message: 'Image deleted successfully',
    };
  } catch (error) {
    console.error('Error deleting image:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Get download URL for an existing storage file
 * @param {string} fileName - Storage file path
 * @returns {Promise<Object>} Success status with download URL
 */
export async function getImageDownloadURL(fileName) {
  try {
    if (!fileName) {
      throw new Error('File name is required');
    }

    const fileRef = ref(storage, fileName);
    const downloadURL = await getDownloadURL(fileRef);

    return {
      success: true,
      downloadURL,
    };
  } catch (error) {
    console.error('Error getting image URL:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}
