import Vue from 'vue'
import {
    Button
} from 'element-ui'

const components = [
    Button
];

// 循环注册全局组件
components.forEach(
    key => {
        Vue.component(key.name, key)
    }
);
