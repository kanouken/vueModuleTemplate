/**
*  展示菜单 local develop
*/
<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
    >

        <template v-for="(m, index) in menus">


            <el-menu-item :key="index" :index="index+''" v-if="m.children && m.children.length == 0">
                <router-link :to="m.path"> {{m.name}}</router-link>
            </el-menu-item>

            <el-submenu :key="index" :index="index + ''" v-if="m.children && m.children.length > 0">

                <template slot="title"> {{ m.name }}</template>
                <el-menu-item
                        :key="index"
                        :index="index + ''"
                        v-for="(subM, index) in m.children"
                >
                    <router-link :to="subM.path">{{
                        subM.name
                        }}
                    </router-link>
                </el-menu-item
                >
            </el-submenu>
        </template>

    </el-menu>
</template>

<script>
    import {menus} from "../../menu";

    export default {
        name: "myMenu",
        computed: {
            filterMenus() {
                return this.menus && this.menus.filter(item => item.children.length == 0);
            },
            filterSubMenus() {
                return this.menus && this.menus.filter(item => item.children.length > 0);
            }
        },
        data() {
            return {
                activeIndex: "1",
                menus: menus()
            };
        },
        methods: {
            handleSelect(key, keyPath) {

            }
        }
    };
</script>

<style scoped>
</style>
