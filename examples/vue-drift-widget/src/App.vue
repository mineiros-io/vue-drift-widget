<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import { useDrift } from '/drift/index'
import { defineComponent} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
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
