function safeLocalStorageCall(methodName) {
    return function(...args) {
        try {
            return window.localStorage[methodName].apply(window.localStorage, args);
        } catch {}
    };
}

const methodNames = ["setItem", "getItem"];

const localStorage = methodNames.reduce((acc, methodName) => {
    acc[methodName] = safeLocalStorageCall(methodName);
    return acc;
}, {});

export default localStorage;
