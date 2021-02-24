<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">
import { useDrift } from '@mineirosio/vue-drift-widget'
import { defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const drift  = useDrift()
    if(drift) {

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
