// ============================================================
// 🌐 API CONFIGURATION — Production Ready
// Change BACKEND_URL below after deploying backend on Render
// ============================================================

const BACKEND_URL = 'https://furniture-backend-xxxx.onrender.com'; // ← Render URL yahan dalein

// Export for use across all files
if (typeof window !== 'undefined') {
    window.BACKEND_URL = BACKEND_URL;
}
