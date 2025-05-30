# QR Code Generator (Node.js CLI)

A simple CLI app that takes a URL input and generates:
- A PNG QR code
- A `.txt` file with the URL

## Tech Stack
- Node.js
- inquirer
- qr-image

## How to Use
1. Clone the repo
2. Run `npm install`
3. Run: `node generateQRCode.js`
4. Enter any URL when prompted

## Output
- `qr_img.png`: The generated QR code
- `qr_img.txt`: The original URL
