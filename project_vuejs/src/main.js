import { createApp } from 'vue'
import App from './App.vue'
import Myform from "@/components/Myform"
const app = createApp(App)
app.component(`Myform`,Myform)
app.mount('#app')
