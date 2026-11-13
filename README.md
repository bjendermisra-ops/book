# Bhakti Granthalaya • Sri Sri Radha Krishna Chandra Mandir

Mobile-first, accessible digital library for the temple app (English / हिंदी / मराठी UI).

## Status
- Books: curated catalogue linking to **official VedaBase reading pages**. The original book texts and PDFs are **not republished** in this repository.
- PDF reader: opens a **locally selected / authorized PDF** inside the browser using PDF.js; users' selected files are not uploaded to this GitHub repository.
- Full book content: add only with explicit publisher approval, verified original edition and documented provenance.

## Usage
Open `index.html` or enable GitHub Pages (Settings → Pages → Deploy from branch → main / root). In Sketchware WebView, open the GitHub Pages URL. Enable JavaScript and DOM storage; leave external official sources in a browser tab.

## Copyright and verification
Bhaktivedanta Book Trust terms: https://bbt.org/permissions
Source catalogue: https://bbt.org/books
Authorised VedaBase reader: https://vedabase.io/en/library/

**Do not upload copyrighted book scans or complete translations/purports to this repository without the appropriate written publication rights.** A free download or public website does not by itself grant republishing rights.

Before adding each licensed edition, record: title, language, edition/year, publisher, source URL, permission reference, content checksum, proofreader, proof date, and version. Exact text should be compared page-by-page and manually checked before publishing. Never use AI paraphrases as book text.

## App features
- Responsive book browsing; categories, search and saved favourites
- Individual official online reading links for 27 titles (including titles retold by another author labelled correctly)
- Local-PDF reading with canvas pagination, jump-to-page, zoom, reading progress
- Hindi, English, Marathi interface (book texts remain the source language)
- Accessible keyboard and mobile touch targets
- Theme preferences and reader state saved locally
- Offline app-shell cache; source websites need Internet

## Deployment notes
- Public repo + GitHub Pages creates a publicly accessible site; do not expose unlicensed PDFs.
- Local PDF data is used only inside the browser; not persisted in GitHub.
- Offline requires first loading the app shell on HTTPS; PDF.js CDN and online source pages require Internet on first use.
- Never claim that a text is exact / 100% verified without recorded publisher source and proof checks.

Built for devotional reading and responsible content publishing.
