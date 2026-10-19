# Mahadev Mobiles — Official Flagship Smartphone Showroom

Welcome to the web application for **Mahadev Mobiles** — trusted multi-brand showroom in Vapi City (Taluka Pardi, District Valsad, Gujarat) specializing in factory-sealed flagship smartphones, fair trade-in valuation, instant 0% No-Cost EMI, and walk-in data migration.

---

## 📱 Project Overview

- **Brand:** Mahadev Mobiles
- **Physical Locations:** Vapi City, Taluka Pardi, District Valsad, Gujarat
- **Contact Number:** +91 81601 87482 / 8160187482
- **Store Hours:** Mon – Sun, 10:00 AM – 10:00 PM
- **Tech Stack:** HTML5, Vanilla CSS, Vanilla JavaScript, Outfit & Plus Jakarta Sans typography.
- **Design Philosophy:** Grounded, human-designed modern retail. Authentic store guarantees, realistic copy, clean card elevation, responsive layouts, and zero robotic jargon.

---

## 🎨 Brand Identity & Custom Logo

The project features a brand identity created specifically for Mahadev Mobiles:
- **`assets/logo.jpg`**: High-resolution brand monogram combining brushed titanium and warm gold tones with a smartphone silhouette and amber accent on a clean dark backdrop.
- **`assets/logo.svg`**: Scalable vector companion optimized for retina displays with the typography signature `MAHADEV MOBILES — FLAGSHIP STORE • VAPI, GUJARAT`.

---

## 🚀 Key Modules & Interactive Features

### 1. Showroom Page (`index.html`)
- **Navigation Bar:** Clean brand header with store status badge (`Store Open • 10 AM to 10 PM`), direct navigation anchors, WhatsApp enquiry link (`+91 81601 87482`), and online checkout access.
- **Hero Section:** Clear headline and value proposition (GST invoice, instant 0% EMI, 20-min free data transfer in-store), verified retailer badge, and showroom spotlight card.
- **Interactive Pinned Story:** 3-step walk-through unboxing, valuation credit, and 20-min data migration with dynamic scroll scrubbing.
- **Smart Phone Finder:**
  - Interactive multi-criteria filter based on priority (Best Camera, Gaming, Battery Life, All) and budget.
  - Dynamic card rendering with camera and battery specs, 0% EMI breakdown, and instant WhatsApp inquiry / online reservation links.
- **Trade-In Valuation Calculator:**
  - 3-step dynamic estimation engine covering device model, condition assessment (Like new, Good, Worn), and original accessories bonus.
  - Calculates instant showroom quote with festival bonus and pre-populates a WhatsApp confirmation message to +91 81601 87482.
- **Showroom Locations & Store FAQ Accordion:** Showroom details for Vapi City and Pardi with Google Maps directions, direct calling, and store hours.

### 2. Secure Checkout Page (`checkout.html`)
- **Assurance Strip & Stepper:** Top status bar with GST invoice notice, store reference (`#MM-9842`), and 3-step progress indicator (Contact -> Delivery -> Payment).
- **Contact Information:** Full customer details with quick autofill options (Google, Apple, SMS OTP) and WhatsApp status opt-in.
- **Delivery & Store Pickup:** Choice between in-store pickup at Vapi City showroom (with free screen protector and data transfer) or same-day local delivery across Vapi, Pardi & Valsad. Includes an interactive branch switcher (`Vapi City` / `Pardi Branch`).
- **Multi-Rail Payment System:**
  - **UPI / QR Code:** High-contrast QR code SVG, VPA input, and instant ₹5,000 bank discount notification.
  - **Credit & Debit Cards:** Form fields with formatted card number, expiry, CVV, and 3D-Secure badge.
  - **0% No-Cost EMI:** Detailed breakdown across HDFC Bank, ICICI Bank, and Bajaj Finserv.
  - **Net Banking:** Selection menu for major scheduled Indian banks.
- **Order Summary:** Itemized cost breakdown (Showroom MRP, instant discount, exchange credit, and complimentary store welcome pack).
- **Customer Guarantees Card:** Realistic retail commitments (1-year brand warranty, open-box inspection before leaving, free 20-min data migration, secure trade-in data wipe).
- **Interactive Purchase Modal:** Order confirmation modal with customer name, reserved device details, and direct WhatsApp receipt link.

---

## 📂 File Structure

```text
e:\ONLINE SHOP\
├── assets\
│   ├── logo.jpg         # Luxury Metallic Brand Monogram
│   ├── logo-white.jpg   # Clean White Backdrop Brand Monogram
│   ├── logo-dark.jpg    # Dark Showroom Silhouette Asset
│   └── logo.svg         # Scalable Vector Brand Logo
├── css\
│   └── styles.css       # Clean Modern CSS (Tokens, Grid, Pinned Story, Animations)
├── js\
│   └── main.js          # Interactive JavaScript (Hours, Filters, Trade-in, Story Scrubber)
├── index.html           # Official Flagship Smartphone Showroom Page
├── checkout.html        # Secure Checkout & Order Details Page
├── styles.css           # Synchronized Root Design Tokens & Utilities
└── README.md            # Project Documentation
```

---

## 💻 How to Run Locally

Open `index.html` or `checkout.html` in any web browser, or launch a local HTTP server:

```powershell
# Using Python
python -m http.server 3000

# Or using npx
npx -y serve .
```

Open `http://localhost:3000` in your browser.
