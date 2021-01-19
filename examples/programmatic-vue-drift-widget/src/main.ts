import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import useDriftWidgetPlugin from '/drift/'

createApp(App)
  .use(
    useDriftWidgetPlugin({
      widgetId: import.meta.env.VITE_DRIFT_WIDGET_ID as string,
      enabled: false,
      loadScript: false,
    }),
  )
  .mount('#app')
