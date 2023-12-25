<script setup>
// 引入数据源
import { NAV_DATA } from './data'
</script>

# 🏳️‍🌈 其他端 / 博客社区

<Card v-for="{title, items} in NAV_DATA" :title="title" :items="items" />

<style lang="scss">
@import './index.scss';
</style>
