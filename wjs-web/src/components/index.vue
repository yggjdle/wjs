<template>
    <a-layout class="allcontainer">
        <a-layout>
            <a-layout-sider v-model:collapsed="collapsed" width="200" style="background: #fff; min-height: 100vh">
                <div class="logoname">
                    <img src="@/assets/image/favicon.jpg" alt="" style="vertical-align: text-bottom" />
                    <span style="font-size: 18px; font-weight: 700; margin-left: 6px">
                        {{ 福建福州万卷书寄宿自习中心官网 }}
                    </span>
                </div>
                <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
                    :style="{ height: 'calc(100vh - 64px)', borderRight: 0 }">
                    <a-menu-item key="sub0">
                        <line-chart-outlined />
                        <span>首页</span>
                    </a-menu-item>
                    <a-sub-menu key="sub1">
                        <template #title>
                            <span>
                                <user-outlined />
                                <span>subnav1</span>
                            </span>
                        </template>
                        <a-menu-item key="1">option1</a-menu-item>
                        <a-menu-item key="2">option2</a-menu-item>
                        <a-menu-item key="3">option3</a-menu-item>
                        <a-menu-item key="4">option4</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <template #title>
                            <span>
                                <laptop-outlined />
                                <span>subnav2</span>
                            </span>
                        </template>
                        <a-menu-item key="5">option5</a-menu-item>
                        <a-menu-item key="6">option6</a-menu-item>
                        <a-menu-item key="7">option7</a-menu-item>
                        <a-menu-item key="8">option8</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub3">
                        <template #title>
                            <span>
                                <notification-outlined />
                                <span>subnav3</span>
                            </span>
                        </template>
                        <a-menu-item key="9">option9</a-menu-item>
                        <a-menu-item key="10">option10</a-menu-item>
                        <a-menu-item key="11">option11</a-menu-item>
                        <a-menu-item key="12">option12</a-menu-item>
                    </a-sub-menu>
                    <div style="text-align: center; padding-top: 50px; font-size: 14px" v-if="!collapsed">
                        ©2023 Created by 东方财富网
                    </div>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header class="header">
                    <div style="display: flex; justify-content: space-between">
                        <div style="display: flex">
                            <div class="isExpand" @click="switchfold">
                                <span style="color: #fff; font-size: 18px" v-if="!collapsed">
                                    <menu-fold-outlined />
                                </span>
                                <span style="color: #fff; font-size: 18px" v-if="collapsed">
                                    <menu-unfold-outlined />
                                </span>
                            </div>
                            <a-menu v-model:selectedKeys="selectedKeys1" theme="dark" mode="horizontal" :style="{
                                lineHeight: '64px',
                                marginLeft: '20px',
                                height: '64px',
                            }">
                                <a-menu-item key="1">nav 1</a-menu-item>
                                <a-menu-item key="2">nav 2</a-menu-item>
                                <a-menu-item key="3">nav 3</a-menu-item>
                            </a-menu>
                        </div>
                        <div style="margin-right: 30px; cursor: pointer">
                            <a-dropdown>
                                <span style="color: #fff; font-weight: 600">
                                    <setting-outlined />
                                    用户名
                                </span>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>
                                            <div>退出登录</div>
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                        </div>
                    </div>
                </a-layout-header>
                <a-layout-content :style="{
                    margin: 0,
                    minHeight: '280px',
                }">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script setup>
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons-vue';
import { ref, nextTick, onMounted } from 'vue';
const selectedKeys1 = ref(['1']);
const selectedKeys2 = ref(['sub0']);
const collapsed = ref(false);
const openKeys = ref([]);
const projectName = ref('持续发布');
function switchfold() {
    collapsed.value = !collapsed.value;
    projectName.value = !collapsed.value ? '持续发布' : '';
}
</script>
<style >
::v-deep .allcontainer {
    box-sizing: border-box;
}

#components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.site-layout-background {
    background: #fff;
}

.logoname {
    width: 100%;
    height: 64px;
    color: #fff;
    line-height: 64px;
    text-align: center;
    background-color: #011428;


}

.logoname img {
    width: 20px;
    position: relative;
    top: 0px;
    vertical-align: text-bottom;
}

.isExpand {
    cursor: pointer;
}

.ant-layout-header {
    padding: 0 0 0 20px;
}
</style>
  