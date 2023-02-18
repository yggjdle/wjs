import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
// antd vue全局完整注册
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Icons from '@ant-design/icons-vue';
const app = createApp(App);
Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key]);
});
app.use(Antd).use(router).mount('#app');

