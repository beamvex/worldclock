# World Clock - Tauri App

A beautiful Tauri desktop application for tracking time across multiple time zones around the world.

## Features

- **Multiple Time Zones**: Display time for multiple cities simultaneously
- **Real-time Updates**: Clocks update every second
- **150+ Cities**: Pre-configured with major cities worldwide
- **Persistent Storage**: Your selected clocks are saved locally
- **Modern UI**: Beautiful gradient design with smooth animations
- **Add/Remove Clocks**: Easily customize which cities to track
- **Time Conversion**: Convert a specific local time across all displayed zones
- **Size Options**: Small, medium, and large clock card sizes
- **Color-coded Cards**: Cards change color based on time of day (night/morning/work hours/evening)

## Getting Started

### Prerequisites

- [Rust](https://www.rust-lang.org/tools/install) (latest stable)
- System dependencies for Tauri:
  - **Linux**: `libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf libgtk-3-dev`
  - **macOS**: Xcode Command Line Tools
  - **Windows**: Microsoft Visual Studio C++ Build Tools, WebView2

### Development

```bash
# Run in development mode
cargo tauri dev

# Build for production
cargo tauri build
```

## Project Structure

```
.
├── src/
│   ├── index.html        # Main HTML interface
│   ├── renderer.js       # Frontend logic (clocks, UI interactions)
│   └── styles.css        # Application styles
├── src-tauri/
│   ├── Cargo.toml        # Rust dependencies
│   ├── tauri.conf.json   # Tauri configuration
│   ├── build.rs          # Tauri build script
│   └── src/
│       ├── main.rs       # Application entry point
│       └── lib.rs        # Rust backend (window state commands)
└── README.md
```

## Available Cities

The app includes 150+ major cities from around the world:

- **Americas**: New York, Los Angeles, Chicago, Toronto, Mexico City, São Paulo, Buenos Aires, Vancouver, and many more
- **Europe**: London, Paris, Berlin, Rome, Madrid, Amsterdam, Moscow, Istanbul, and many more
- **Asia**: Tokyo, Singapore, Hong Kong, Dubai, Mumbai, Bangkok, Seoul, Beijing, Shanghai, and many more
- **Oceania**: Sydney, Melbourne, Auckland, Perth, Brisbane, and more
- **Africa**: Cairo, Johannesburg, Nairobi, Lagos, Cape Town, and more
- **Middle East**: Dubai, Riyadh, Tehran, Tel Aviv, and more

## Features in Detail

### Add a Clock
1. Click the "+ Add Clock" button
2. Select a city from the dropdown
3. Click "Add Clock" to confirm

### Remove a Clock
- Click the "Remove" button on any clock card

### Time Conversion
- Use the time picker in the top bar to select a specific hour and minute
- Click "Convert" to see what time it would be in all displayed zones
- Click "Clear" to return to live time

### Size Options
- Use the "Size" dropdown to switch between Small, Medium, and Large card sizes

### Data Persistence
- Your clock selections are automatically saved to localStorage
- They will be restored when you reopen the app

## Building Executables

```bash
# Build for your current platform
cargo tauri build
```

The executable will be in the `src-tauri/target/release/bundle/` directory.

### Output Formats

- **Linux**: `.deb` package and AppImage
- **Windows**: `.msi` installer and `.exe`
- **macOS**: `.dmg` and `.app` bundle

## Technologies Used

- **Tauri 2**: Lightweight, secure desktop application framework (Rust backend + WebView frontend)
- **Rust**: Backend logic and window state management
- **HTML/CSS/JavaScript**: Frontend UI
- **CSS3**: Modern styling with gradients, animations, and backdrop filters

## License

MIT
