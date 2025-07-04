# M3U8 Parser and Video Gallery

A web application that provides two main features:
1. **M3U8 Parser** - Parse M3U8 playlist files to extract stream URLs
2. **Video Gallery** - Browse and view videos from Bunny.net CDN

## Features

- Parse M3U8 files from URL or local file upload
- Password-protected video gallery
- Responsive design with modern UI
- Video streaming with embedded player
- Copy stream URLs and embed links

## Configuration

### Initial Setup

1. Copy the configuration template:
   ```bash
   cp config.template.js config.js
   ```

2. Edit `config.js` with your specific values:
   - **Bunny.net Library ID**: Your Bunny.net video library ID
   - **Bunny.net API Key**: Your Bunny.net API access key
   - **Hostname**: Your Bunny.net CDN hostname
   - **Password Hash**: SHA-256 hash of your gallery password

### Configuration Options

The `config.js` file contains the following sections:

#### Bunny.net API Configuration
```javascript
bunny: {
    libraryId: 'YOUR_LIBRARY_ID_HERE',
    apiKey: 'YOUR_API_KEY_HERE',
    hostname: 'YOUR_HOSTNAME_HERE'
}
```

#### Security Configuration
```javascript
security: {
    // Generate using: echo -n "your_password" | sha256sum
    passwordHash: 'YOUR_PASSWORD_HASH_HERE'
}
```

#### UI Configuration
```javascript
ui: {
    defaultMode: 'm3u8',      // 'm3u8' or 'gallery'
    language: 'cs',           // Language code
    theme: {
        primaryColor: '#4f46e5',
        accentColor: '#10b981'
    }
}
```

#### Feature Toggles
```javascript
features: {
    m3u8Parser: true,
    videoGallery: true,
    passwordProtection: true
}
```

### Generating Password Hash

To generate a SHA-256 hash for your password:

**Linux/macOS:**
```bash
echo -n "your_password" | sha256sum
```

**Online tool:** Use any SHA-256 generator (make sure it doesn't log your password)

## Security Notes

- The `config.js` file is excluded from version control via `.gitignore`
- Always use strong passwords for gallery access
- Keep your Bunny.net API keys secure
- Consider using environment variables for production deployments

## Usage

1. Open `index.html` in a web browser
2. Use the mode switcher to choose between M3U8 Parser and Video Gallery
3. For M3U8 parsing: Enter a URL or upload a .m3u8 file
4. For Video Gallery: Enter the password when prompted

## Browser Compatibility

- Modern browsers with ES6+ support
- CORS policy may affect M3U8 URL parsing (use file upload as fallback)

## Dependencies

- Tailwind CSS (CDN)
- Alpine.js (CDN)
- Google Fonts (Inter)

No build process required - runs directly in the browser.