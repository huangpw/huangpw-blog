# 服务端 / Git

<script setup>
// 引入数据源
import { NAV_DATA } from './data'
</script>

<Card v-for="{title, items} in NAV_DATA" :title="title" :items="items" />
