# vue-drift-widget

A cheap (~ 3kb) [https://vuejs.org/](Vue 3) plugin for the [https://www.drift.com/](drift.com) widget.

## Features

- **✅ Strongly Typed API:** Full typescript support and strongly typed drift API
- **✅ Tiny:** < 3kb minified & compressed>

## Installation

To install the latest version:

```sh
npm install --save @mineirosio/vue-drift-widget
```

```sh
yarn add @mineirosio/vue-drift-widget
```

## Usage

To load the drift widget in your app,
load the plugin and set your widget id.

**`main.ts`**:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { createDriftPlugin } from '@mineirosio/vue-drift-widget'

const driftID = 'XXXXXX'

createApp(App)
  .use(
    createDriftPlugin({
      widgetId: driftId,
    }),
  )
  .mount('#app')
```

The config is a reactive object that will be injected into the app in the plugins
install method. This allows us to dynamically enable and disable the widget,
which is helpful when you e.g., need to handle GDPR consents.

**`main.ts`**:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { createDriftPlugin } from '@mineirosio/vue-drift-widget'

const driftID = 'XXXXXX'

createApp(App)
  .use(
    createDriftPlugin({
      widgetId: driftId,
      enabled: false // Don't enable the widget per default
    }),
  )
  .mount('#app')
```

**`App.vue`**:

```ts
<template>
  <div>
    drift configuration {{ driftConfig }}
  </div>
  <button @click="initDrift()" :disabled="driftConfig.enabled">Initalize Drift</button>
</template>

<script lang="ts">
import { defineComponent, inject} from 'vue'
import { useDriftPluginConfig } from '/drift/index'

export default defineComponent({
  name: 'App',
  setup() {
    const driftConfig = useDriftPluginConfig() // this is a wrapper around inject()

    const initDrift = (): void => {
      if(driftConfig) {
        driftConfig.enabled = true
      }
    }

    return { driftConfig, initDrift }
  }
})
</script>
```

For full examples please find [https://github.com/mineiros-io/vue-drift-widget/tree/main/examples](/examples).

### Interact with Drifts API

This plugin currently supports most of the API endpoints provided by the widget.
For further information on how to interact with the widget, please read the [https://devdocs.drift.com/docs/widget-start](documentation).

```ts
<template>
  <p>drift.com example</p>
</template>

<script lang="ts">
import { useDrift } from '/drift/index'
import { defineComponent} from 'vue'

export default defineComponent({
  setup() {
    const drift  = useDrift()
    if(drift) {

      // api and payload are stronly typed
      drift.on('ready', (api, payload) => {
        api.openChat();
        console.log(api);
        console.log(payload);
      })

      drift.on('message', (data) => {
        console.log(data);
      })
    }
  }
})
</script>
```
