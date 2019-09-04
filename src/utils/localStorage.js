function safeLocalStorageMethod(methodName) {
    return function(...args) {
        try {
            return window.localStorage[methodName].apply(window.localStorage, args);
        } catch {}
    };
}

const methodNames = ["setItem", "getItem", "removeItem"];

const localStorage = methodNames.reduce((acc, methodName) => {
    acc[methodName] = safeLocalStorageMethod(methodName);
    return acc;
}, {});

export default localStorage;
