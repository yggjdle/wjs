<template>
    <a-layout class="layout">
        <a-layout-header>
            <!-- <div class="logoname">
                    <img src="@/assets/image/favicon.jpg" alt="" style="vertical-align: text-bottom" />
                    <span style="font-size: 18px; font-weight: 700; margin-left: 6px">
                        福建福州万卷书寄宿自习中心【官网】
                    </span>
                </div> -->
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                <a-menu-item key="1">nav 1</a-menu-item>
                <a-menu-item key="2">nav 2</a-menu-item>
                <a-menu-item key="3">nav 3</a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content style="padding: 0 50px">

            <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">Content</div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
    </a-layout>
</template>
<script setup>
import { ref, nextTick, onMounted } from 'vue';
</script>
<style scoped></style>
  