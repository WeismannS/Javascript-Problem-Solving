const browser = () => {
    const nav = navigator.userAgent;
    const object = {
        opera: nav.includes("OPR"),
        Edge: nav.includes("Edg"),
        Safari: nav.includes("Mac"),
        GoogleBot: nav.includes("Googlebot"),
        Firefox: nav.includes("Firefox"),
        Chrome: (!!window.chrome && navigator.vendor == "Google Inc.")
    }
    for (let i in object) {
        if (object[i]) {
            return i
        }
    }
};
