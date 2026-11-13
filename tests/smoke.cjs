// Static smoke checks: no publisher-owned book body text is part of this repository.
const fs=require('node:fs'),assert=require('node:assert/strict'),vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8'),js=fs.readFileSync('app.js','utf8');
for(const id of ['bookGrid','search','filters','bookDialog','pdfPicker','reader','pdfCanvas','prevPage','nextPage','readerSave'])assert(html.includes('id="'+id+'"'),'Missing UI element: '+id);
const head=js.slice(0,js.indexOf('const CATEGORY='));assert(head.includes('const BOOKS='),'Book metadata unavailable');
const books=vm.runInNewContext(head+';BOOKS');
assert.equal(books.length,27,'Expected 27 individually sourced books');
assert.equal(new Set(books.map(x=>x.id)).size,27,'Book IDs must be unique');
for(const b of books){assert(b.url.startsWith('https://vedabase.io/en/library/'),b.id+' not linked to official VedaBase');assert(b.title.length>3,b.id+' missing title');assert(b.slug.length>1,b.id+' missing source slug')}
assert(fs.existsSync('sw.js')&&fs.existsSync('manifest.webmanifest'),'Missing PWA files');
JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));
console.log('✓ HTML wiring, 27 official sources, unique IDs, PWA assets, manifest');