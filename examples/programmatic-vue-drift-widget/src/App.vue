<template>
  <img alt="Vue logo" src="./assets/logo.png" />
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
    // const driftConfig = inject<DriftWidgetPluginConfig>('driftConfig')
    const driftConfig = useDriftPluginConfig()

    const initDrift = (): void => {
      if(driftConfig) {
        driftConfig.enabled = true
      }
    }

    return { driftConfig, initDrift }
  }
})
</script>
