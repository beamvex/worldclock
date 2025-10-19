# World Clock - Electron App

A beautiful Electron desktop application for tracking time across multiple time zones around the world.

## Features

- **Multiple Time Zones**: Display time for multiple cities simultaneously
- **Real-time Updates**: Clocks update every second
- **30+ Cities**: Pre-configured with major cities worldwide
- **Persistent Storage**: Your selected clocks are saved locally
- **Modern UI**: Beautiful gradient design with smooth animations
- **Add/Remove Clocks**: Easily customize which cities to track
- **TypeScript**: Fully typed for better development experience

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
# Build the project
npm run build

# Run the Electron app
npm start

# Build and run in one command
npm run dev

# Watch mode for development
npm run build:watch
```

## Project Structure

```
.
├── src/
│   ├── main.ts           # Electron main process
│   ├── preload.ts        # Preload script for security
│   ├── renderer.ts       # Renderer process logic
│   ├── index.html        # Main HTML interface
│   └── styles.css        # Application styles
├── dist/                 # Compiled output
├── esbuild.config.js     # Build configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Available Cities

The app includes 30+ major cities from around the world:

- **Americas**: New York, Los Angeles, Chicago, Toronto, Mexico City, São Paulo, Buenos Aires, Vancouver
- **Europe**: London, Paris, Berlin, Rome, Madrid, Amsterdam, Moscow, Istanbul
- **Asia**: Tokyo, Singapore, Hong Kong, Dubai, Mumbai, Bangkok, Seoul, Beijing, Shanghai
- **Oceania**: Sydney, Melbourne, Auckland
- **Africa**: Cairo, Johannesburg

## Features in Detail

### Add a Clock
1. Click the "+ Add Clock" button
2. Select a city from the dropdown
3. Click "Add Clock" to confirm

### Remove a Clock
- Click the "Remove" button on any clock card

### Data Persistence
- Your clock selections are automatically saved to localStorage
- They will be restored when you reopen the app

## Scripts

- `build`: Compile TypeScript to JavaScript
- `build:watch`: Watch mode for development
- `dev`: Build and run the Electron app
- `start`: Run the Electron app
- `package`: Build and package for your current platform
- `package:linux`: Package for Linux (AppImage)
- `package:win`: Package for Windows (portable .exe)
- `package:mac`: Package for macOS (.app in ZIP)
- `lint`: Check code for issues
- `format`: Format code with Prettier
- `type-check`: Run TypeScript type checker
- `clean`: Remove build artifacts

## Packaging as Executable

To create a single portable executable:

```bash
# Package for your current platform
npm run package

# Or package for specific platforms
npm run package:linux   # Creates AppImage (single executable)
npm run package:win     # Creates portable .exe (single executable)
npm run package:mac     # Creates .app in ZIP (single executable)
```

The executable will be in the `release/` directory.

### Output Formats

- **Linux**: AppImage - Single portable executable, no installation needed
- **Windows**: Portable .exe - Single executable, no installation needed
- **macOS**: .app in ZIP - Extract and run, no installation needed

## Technologies Used

- **Electron**: Cross-platform desktop application framework
- **TypeScript**: Type-safe JavaScript
- **ESBuild**: Fast JavaScript bundler
- **CSS3**: Modern styling with gradients and animations

## License

MIT
