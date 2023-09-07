import Vue from 'vue';
import Hotjar from '@hotjar/browser';

export interface VueHotjarOptions {
    siteId: number,
    debug?: boolean,
    version?: number,
    nonce?: string
}

declare module 'vue/types/vue' {
    interface Vue {
        $hotjar: VueHotjarPlugin;
    }
}

export interface UserInfo {
    [key: string]: string | number | Date | boolean;
}

export interface VueHotjarPlugin {
    identify: (userId: string, userInfo: UserInfo) => boolean;
    event: (actionName: string) => boolean;
    stateChange: (relativePath: string) => boolean;
    isReady: () => boolean;
}

export default {
    install(Vue: any, options: VueHotjarOptions) {
        if (!options.siteId) {
            throw new Error('Vue Hotjar plugin requires a "siteId" in options.');
        }
        const defaultOptions = {
            debug: false,
            version: 6,
        };

        const mergedOptions = {...defaultOptions, ...options};

        const {siteId, debug, version, nonce} = mergedOptions;

        Hotjar.init(siteId, version, {
            debug,
            nonce
        });
        const hotjar: VueHotjarPlugin = {
            identify: (userId: string, userInfo: UserInfo) => Hotjar.identify(userId, userInfo),
            event: (actionName: string) => Hotjar.event(actionName),
            stateChange: (relativePath: string) => Hotjar.stateChange(relativePath),
            isReady: () => Hotjar.isReady(),
        };
        Vue.prototype.$hotjar = hotjar;
    }
};
