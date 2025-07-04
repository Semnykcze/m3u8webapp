// Configuration Template for M3U8 Parser and Video Gallery Application
// Copy this file to config.js and update the values for your environment

const CONFIG = {
    // Bunny.net API Configuration
    bunny: {
        libraryId: 'YOUR_LIBRARY_ID_HERE',
        apiKey: 'YOUR_API_KEY_HERE',
        hostname: 'YOUR_HOSTNAME_HERE'
    },

    // Security Configuration
    security: {
        // SHA-256 hash of the gallery password
        // You can generate this using: echo -n "your_password" | sha256sum
        passwordHash: 'YOUR_PASSWORD_HASH_HERE'
    },

    // UI Configuration
    ui: {
        // Default mode when the app loads ('m3u8' or 'gallery')
        defaultMode: 'm3u8',
        
        // Language settings
        language: 'cs',
        
        // Theme settings
        theme: {
            primaryColor: '#4f46e5', // Indigo
            accentColor: '#10b981'   // Emerald
        }
    },

    // Application settings
    app: {
        title: 'M3U8 Parser a Video Galerie',
        
        // Features to enable/disable
        features: {
            m3u8Parser: true,
            videoGallery: true,
            passwordProtection: true
        },
        
        // API endpoints
        endpoints: {
            bunnyVideos: 'https://video.bunnycdn.com/library',
            mediaDelivery: 'https://iframe.mediadelivery.net/embed'
        }
    },

    // Development settings
    development: {
        debug: false,
        
        // Mock data for testing (when API is not available)
        useMockData: false
    }
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}