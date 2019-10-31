import Vue from 'vue'
import {
    Tabs
} from 'element-ui'

const components = [
    Tabs
];

// 循环注册全局组件
components.forEach(
    key => {
        Vue.component(key.name, key)
    }
);
