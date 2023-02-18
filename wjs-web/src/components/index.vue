<template>
    <a-layout class="layout">
        <a-layout-header>
            <div class="logoname">
                <img src="@/assets/image/favicon.jpg" alt="" style="vertical-align: text-bottom" />
                <span style="font-size: 18px; font-weight: 700; margin-left: 6px">
                    福建福州万卷书寄宿自习中心【官网】
                </span>
            </div>
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" class="menuClass"
                :style="{ lineHeight: '64px' }" @click="toPage">
                <a-menu-item key="/home">首页</a-menu-item>
                <a-menu-item key="/around">校园环境</a-menu-item>
                <a-menu-item key="/dom">宿舍环境</a-menu-item>
                <a-menu-item key="/concat">联系我们</a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content>

            <div :style="{ background: '#fff', minHeight: '880px' }"><router-view></router-view></div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            版权所有 ©2023 万卷书寄宿自习基地<br>
            <a target="_blank" href="https://beian.miit.gov.cn">备案号：闽ICP备2022000165号-1</a>
            <a target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35010402351326">
                <img src="../assets/image/beian.png">
                <p>闽公网安备 35010402351326号</p>
            </a>
        </a-layout-footer>
    </a-layout>
</template>
<script setup>
import { ref, nextTick, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const selectedKeys = ref(['/home']);
const router = useRouter();
const route = useRoute();
function toPage({ item, key, keyPath }) {
    // console.log({ item, key, keyPath });
    router.push(key);
}
// 监听路由变化时触发
watch(
    route,
    (to, from) => {
        // console.log('to', to, 'from', from);
        selectedKeys.value = [to.path];
        // openKeys.value = [`/${to.path.split('/')[1]}`];
        // console.log(openKeys.value);
    },
    {
        immediate: true,
    }
);

</script>
<style scoped>
.logoname {
    width: 400px;
    height: 64px;
    color: #2f3542;
    line-height: 64px;
    float: left;
    /* text-align: center; */
    background-color: #d5ebe1;

}

.logoname img {
    width: 20px;
    position: relative;
    top: 0px;
    vertical-align: text-bottom;
}

.menuClass {
    float: right;
}

.ant-layout-header {
    background: #d5ebe1;
}

[data-theme='dark'] .site-layout-content {
    background: #dea8a8;
}
</style>
  