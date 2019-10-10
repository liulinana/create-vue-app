import Vue from 'vue'
import {
    Page
} from 'view-design'

// iview基础模块
const components = {
    Page
};

const iviewModule = {
    ...components
    // 不能和html标签重复的组件，添加别名(除了Switch、Circle在使用中必须是iSwitch、iCircle,其他都可以不加"i")
    // iButton: Button,
    // iCircle: Circle,
    // iCol: Col,
    // iContent: Content,
    // iForm: Form,
    // iFooter: Footer,
    // iHeader: Header,
    // iInput: Input,
    // iMenu: Menu,
    // iOption: Option,
    // iProgress: Progress,
    // iSelect: Select,
    // iSwitch: Switch,
    // iTable: Table
};

// 循环注册全局组件
Object.keys(iviewModule).forEach(
    key => {
        // @ts-ignore
        Vue.component(key, iviewModule[key])
    }
)
