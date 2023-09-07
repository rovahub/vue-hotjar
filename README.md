<p align="left">
  <img src="https://raw.githubusercontent.com/rovahub/vue-hotjar/master/images/hotjar.svg" alt="Hotjar logo">
</p>

[![](https://img.shields.io/npm/v/%40rovahub%2Fvue-hotjar/latest.svg?style=flat-square)](https://npmjs.com/package/%40rovahub%2Fvue-hotjar)
[![](https://img.shields.io/npm/dt/%40rovahub%2Fvue-hotjar.svg?style=flat-square)](https://npmjs.com/package/%40rovahub%2Fvue-hotjar)

# @rovahub/vue-hotjar

This Vue2 plugin injects a Hotjar into all of your vue instances

## Install

``` bash
# Npm
npm install @rovahub/vue-hotjar --save

# Yarn
yarn add @rovahub/vue-hotjar
```

## Quickstart

### Vue 2

Import the @rovahub/vue-hotjar in your main JavaScript file in src/ folder.

```bash
# src/main.js

import Vue from "vue";
import App from "./App.vue";
import HotjarPlugin from "@rovahub/vue-hotjar";

Vue.config.productionTip = false;

Vue.use(HotjarPlugin, {
  siteId: 111
});

new Vue({
  render: h => h(App)
}).$mount("#app");

```

### Nuxt JS

Create JS file in /plugins/ folder and add content to the plugin file.

```bash
# plugins/vue-hotjar.js

import Vue from 'vue';
import HotjarPlugin from "@rovahub/vue-hotjar";

Vue.use(HotjarPlugin, {
  siteId: 111
});
```

In your nuxt.config.js file, add the plugin to the plugins array:

```bash
# nuxt.config.js

module.exports = {
  // ...
  plugins: [
    { src: "~/plugins/vue-hotjar.js", mode: "client" }
  ],
  // ...
}
```

## Options

You can provide additional options to customize the Hotjar:

```bash
Vue.use(HotjarPlugin, {
    siteId: 111,
    debug: true;
    version: 6;
    nonce: 'rAnDoM';
});
```
## Methods

 Method                                  | Feature            
-----------------------------------------|--------------------
 this.$hotjar.identify(userId, userInfo) | Identify API       
 this.$hotjar.event(actionName)          | Events API         
 this.$hotjar.stateChange(newPage)       | Manual URL changes 
 this.$hotjar.isReady()                  | Hotjar isReady     


   
 
