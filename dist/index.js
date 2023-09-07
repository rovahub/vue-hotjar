"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __importDefault(require("@hotjar/browser"));
exports.default = {
    install: function (Vue, options) {
        if (!options.siteId) {
            throw new Error('Vue Hotjar plugin requires a "siteId" in options.');
        }
        var defaultOptions = {
            debug: false,
            version: 6,
        };
        var mergedOptions = __assign(__assign({}, defaultOptions), options);
        var siteId = mergedOptions.siteId, debug = mergedOptions.debug, version = mergedOptions.version, nonce = mergedOptions.nonce;
        browser_1.default.init(siteId, version, {
            debug: debug,
            nonce: nonce
        });
        var hotjar = {
            identify: function (userId, userInfo) { return browser_1.default.identify(userId, userInfo); },
            event: function (actionName) { return browser_1.default.event(actionName); },
            stateChange: function (relativePath) { return browser_1.default.stateChange(relativePath); },
            isReady: function () { return browser_1.default.isReady(); },
        };
        Vue.prototype.$hotjar = hotjar;
    }
};
