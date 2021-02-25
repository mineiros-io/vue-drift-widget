[<img src="https://raw.githubusercontent.com/mineiros-io/brand/3bffd30e8bdbbde32c143e2650b2faa55f1df3ea/mineiros-primary-logo.svg" width="400"/>][homepage]

# vue-drift-widget

A cheap (~ 3kb) [Vue 3] plugin for the [drift.com] widget.

## Features

- **✅ Strongly-typed API:** Full typescript support and strongly typed drift API
- **✅ Tiny:** < 3kb minified & compressed>

## Requirements

- **Vue.js** >= 3.0.0
- **Drift.com account** to receive a drift widget id.

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
      enabled: false, // Don't enable the widget per default
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

### Interact with Drifts API

This plugin currently supports most of the API endpoints provided by the widget.
For further information on how to interact with the widget, please read the [https://devdocs.drift.com/docs/widget-start][drift-docs].

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

### Examples

For a fully functional example please find [example]

<!-- References -->

[homepage]: https://mineiros.io/?ref=terraform-aws-iam-role
[example]: https://github.com/mineiros-io/vue-drift-widget/tree/main/examples/vue-drift-widget
[vue 3]: https://vuejs.org
[drift.com]: https://www.drift.com
[drift-docs]: https://devdocs.drift.com/docs/widget-start
