export interface VueHotjarOptions {
    siteId: number;
    debug?: boolean;
    version?: number;
    nonce?: string;
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
declare const _default: {
    install(Vue: any, options: VueHotjarOptions): void;
};
export default _default;
