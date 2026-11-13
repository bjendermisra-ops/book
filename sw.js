/* Offline shell only; never cache, scrape or mirror third-party book content. */
const CACHE='bhakti-granthalaya-v1';
const CORE=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg'];
const PDFJS='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('bhakti-granthalaya-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 const appOrigin=url.origin===self.location.origin&&url.pathname.startsWith(new URL(self.registration.scope).pathname);
 const pdfLibrary=url.href.startsWith(PDFJS)&&(url.pathname.endsWith('pdf.min.js')||url.pathname.endsWith('pdf.worker.min.js'));
 if(!appOrigin&&!pdfLibrary)return;
 event.respondWith(caches.open(CACHE).then(async cache=>{
   const hit=await cache.match(req);
   const network=fetch(req).then(res=>{if(res.ok)cache.put(req,res.clone()).catch(()=>{});return res});
   if(hit){event.waitUntil(network.catch(()=>{}));return hit}
   try{return await network}catch(_){return new Response('Offline resource not cached',{status:503,statusText:'Offline'})}
 }));
});