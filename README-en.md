🌍 **Language / Ngôn ngữ:** [🇺🇸 English](README-en.md) | [🇻🇳 Tiếng Việt](README.md) 
---

# 🐉 Dokkan News Tracker (Chrome Extension)

A lightweight Google Chrome extension that ensures you never miss the latest news from **Dokkan Battle**. The extension runs silently in the background and sends push notifications directly to your desktop whenever a new event drops!

## ✨ Key Features

*   **Real-time Updates:** Automatically fetches the latest news data from the web (English Version).
*   **Mini Dashboard:** A clean, visually appealing quick-view interface right on your browser toolbar.
*   **System Notifications (Push Notifications):** Displays Windows/Mac pop-up notifications as soon as a new article is available.
*   **Flexible Customization:** Allows users to set the background auto-check interval (from 1 minute to 3 hours) to optimize performance and avoid connection blocks.
*   **Optimized & Lightweight:** Processes JSON data blazingly fast with zero RAM bloat, smoothly bypassing CORS security barriers.

## 📂 File Structure

The project includes the following core files:
*   `manifest.json`: The root configuration file (using the latest Manifest V3 standard).
*   `background.js`: The background Service Worker handling the alarm clock and notification triggers.
*   `popup.html` & `popup.css`: The HTML structure and CSS styling for the Mini Dashboard.
*   `popup.js`: The script that handles data fetching from the server and renders it on the dashboard.
*   `icon.png`: The extension's icon.

## 🚀 Installation Guide

Since this extension is in its source code form (Unpacked), you will need to install it via Google Chrome's **Developer Mode** using the following steps:

1. Download all the source code files and place them into a single folder on your computer (e.g., `Dokkan_Extension`).
2. Open the Google Chrome browser.
3. Copy and paste this URL into the address bar to open the Extensions Management page: `chrome://extensions/`
4. In the top right corner, toggle on **Developer mode**.
5. Click the **Load unpacked** button that appears in the top left menu.
6. A folder selection window will appear; choose the `Dokkan_Extension` folder you created in Step 1.
7. Done! The extension has been added to your browser. Click the puzzle piece icon (Extensions) on the right side of the address bar and select **Pin** to keep the extension visible.

## 💡 How to Use

*   **View News:** Click the extension icon to open the news dashboard. You can click on any article to open it directly in a new tab for more details.
*   **Set Intervals:** Switch to the **Settings** tab in the interface to change the background auto-check interval (Recommended: 5 or 15 minutes).

---
*Developed with passion for Dokkan Battle!*
