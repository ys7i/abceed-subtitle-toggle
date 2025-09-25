# Abceed Subtitle Toggle

A Chrome extension that allows you to toggle subtitles visibility on Abceed movie learning pages using the 'S' key.

## Features

- Toggle subtitles with a simple keyboard shortcut ('S' key)
- Subtitles are covered with a gray overlay when hidden, so you can still see their presence and timing
- Works specifically with Abceed's movie-based English learning platform

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" button
4. Select the `abceed-subtitle-toggle` folder
5. The extension will be installed and ready to use

## Usage

1. Navigate to any Abceed movie learning page
2. Press the 'S' key to toggle subtitle visibility
3. When subtitles are hidden, they will appear as gray, blurred text blocks
4. Press 'S' again to restore normal subtitle visibility

## How it works

The extension targets the `.movie-subtitle-component` class and its child `<p>` elements, applying CSS styles to hide the text content while preserving the layout and timing information.

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that handles the subtitle toggling functionality
- `README.md` - This documentation

## Permissions

This extension only requires access to Abceed.com domains and does not collect or transmit any user data.