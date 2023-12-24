import DefaultTheme from 'vitepress/theme'
import './vars.scss'
import Card from './components/Card/MNavLinks.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // 注册全局组件
        app.component('Card', Card)
    }
}