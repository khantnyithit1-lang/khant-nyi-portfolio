KHANT NYI THIT — PORTFOLIO WEBSITE V1.1 — MINIMAL & SMOOTH
======================================
Personal Brand: Khant Nyi Thit | Freelancer
Professional Title: Digital Marketing & Creative Technology
Style: Dark + Cyber Orange #FF5A1F
Hosting target: Netlify static hosting

CONTENTS
--------
- index.html         Home / Hero with your original photo
- about.html         About Me, frontend and backend knowledge
- services.html      4 services, without Social Media Management
- portfolio.html     30 unique uploaded concept works; six-slide carousel is one artwork
- pricing.html       Website monthly plans + ads design prices
- contact.html       Contact details and Netlify Forms inquiry form
- privacy.html       Basic privacy notice
- thank-you.html     Form submission destination
- 404.html           Not found
- assets/style.css   Original Website CSS / mobile responsiveness
- assets/motion.css  New Minimal & Smooth animations (separate from original theme)
- assets/motion.js   Scroll reveal, swipe gallery and reduced-motion support
- assets/site.js     Menu, gallery filtering, full-image preview, auto-fill quotation
- assets/works.json  Structured list of portfolio artworks
- assets/works-data.js Browser data for image preview
- assets/images/    Optimized full-size webp images and original provided portrait
- assets/thumbs/    Optimized gallery thumbnails
- assets/originals-manifest.txt Mapping to original uploads
- netlify.toml       Static site and security headers config

1) PREVIEW LOCALLY
------------------
Extract the ZIP on your Mac. Open index.html in Chrome/Safari.
Gallery filters and previews use local HTML/CSS/JavaScript and do not require a server.
The contact form submits only after the site is published on Netlify.

2) DEPLOY TO NETLIFY (WITHOUT GITHUB)
-------------------------------------
Visit https://app.netlify.com/drop and sign in.
Extract the ZIP; drag and drop THE EXTRACTED FOLDER that contains index.html.
If Netlify offers a ZIP upload, the deployment ZIP has index.html at the ZIP root.
After publication, Netlify provides a .netlify.app URL.
Do not upload the ZIP inside another directory that hides index.html.

3) ACTIVATE AND VERIFY THE CONTACT FORM
---------------------------------------
The HTML includes Netlify Forms markup:
  name="project-inquiry" method="POST" data-netlify="true"
  hidden "form-name" and honeypot field
After deployment, open the Netlify site dashboard -> Forms and confirm
that the "project-inquiry" form is detected. Enable form detection and redeploy
if Netlify doesn't detect it. Submit a test inquiry on the LIVE website,
then verify that it appears under the site Forms submissions.
Configure Netlify's form notification settings if you want email alerts.
The form is NOT an email-sending frontend and does NOT collect inquiries
until it has been configured/tested on an actual Netlify deployment.
Netlify Free usage and Forms quota are subject to Netlify's current plan terms.

4) DEMO LINKS
-------------
Four links from user-provided GitHub Pages URLs are present exactly:
CRM: https://khantnyithit1-lang.github.io/khant-nyi-crm-demo/
OMS: https://khantnyithit1-lang.github.io/khant-nyi-oms-demo/
POS: https://khantnyithit1-lang.github.io/khant-nyi-pos-demo/
LMS: https://khantnyithit1-lang.github.io/khant-nyi-lms-demo/
AI Chatbot: Coming Soon (intentionally no dummy link)
Each project is labelled "Frontend Prototype" and includes a technical note
that explains the demo-only client-side simulation.
External demo reachability must be checked in your normal browser.

5) IMPORTANT PRICING AND SERVICE NOTES
--------------------------------------
Website subscription rates shown:
Starter: 50,000 Ks / month (150,000 Ks minimum for 3 months)
Business: 90,000 Ks / month (270,000 Ks minimum for 3 months)
Professional: 150,000 Ks / month (450,000 Ks minimum for 3 months)
No setup fee for agreed template-based scope; 3-month minimum term.
Design prices: 25,000 Ks single; 110,000 Ks for 5; 200,000 Ks for 10.
Custom Web Applications and AI: quote separately.

All contract provisions and ownership/handover terms must be agreed before
serving clients. Static frontend demos should not be sold as live
production-ready applications until a backend and security work are completed.

6) MODIFY WEBSITE
-----------------
Edit HTML pages directly for text and pricing. CSS is in assets/style.css.
Change a project's Demo URL in index.html and portfolio.html, if needed.
Design images are optimized .webp files stored in assets/images and thumbs.
The source manifest in assets/works.json and works-data.js labels the gallery.
If updating gallery titles/categories/order, keep the HTML and JS data in sync.

7) SAFETY
---------
The website contains no API keys, no passwords, no production database,
and no credentials. It links out to the 4 existing demo websites but does
not alter them. The uploaded portrait is your original reference photo,
not a newly generated face. Ads are presented as CONCEPT work.

8) ANIMATION UPGRADE — MINIMAL & SMOOTH (V1.1)
------------------------------------------------
- Soft staggered hero text/photo entrance on page load.
- Gentle scroll-based reveal of sections and cards (IntersectionObserver).
- Small hover motion for cards and buttons on desktop.
- Lightbox opening fade; touch-swipe left/right to change artworks or
  slide through the six-slide marketing carousel on mobile.
- Accessibility: prefers-reduced-motion disables visual animation.
- Progressive enhancement: content stays visible if JavaScript is unavailable.
- No CDN, motion framework, or additional paid hosting dependency required.
- All original content, original uploaded design images, pricing, contact forms,
  and GitHub Pages demo URLs are unchanged.

To adjust motion without touching the original design, edit only
assets/motion.css (timing/easing) and assets/motion.js (observer/swipe).


9) PORTRAIT REFRESH — V1.2
--------------------------
- Hero and About use your original unedited JPG photo (640x640); no AI portrait is used.
- The original unedited selfie remains in assets/images/khant-nyi-thit-portrait-original.webp.
- To revert to the original, replace khant-nyi-thit-portrait.webp with the original backup, then redeploy.
- assets/portrait-refresh.css changes only portrait sizing/positioning.
- All original website structure, motion effects, design gallery, pricing, demo links and contact forms are preserved.


MOTION UPGRADE V2 — VISIBLE MINIMAL & SMOOTH
===========================================
Entrance headline, portrait, staggered sections, progress bar, hover lift,
lightbox slide transitions, mobile swipe, and subtle internal-page transitions.
Motion respects prefers-reduced-motion. No site content or form code changed.
To check: refresh the Home page; then scroll to Services and Portfolio.
For a Netlify update, unzip and deploy the extracted folder containing index.html.
