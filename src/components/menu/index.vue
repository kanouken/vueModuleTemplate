/** * 开发模式下启用 */

<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
    >
        <el-menu-item :key="index" :index="index+ ''" v-for="(m, index) in filterMenus">
            <router-link :to="m.path"> {{m.name}}</router-link>
        </el-menu-item>

        <el-submenu :key="index" :index="index + ''" v-for="(m, index) in filterSubMenus">

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
    </el-menu>
</template>

<script>
import {menus} from "cyberway-msf-frontend-web-payment/src/menu";

export default {
  name: "myMenu",
  computed: {
    filterMenus() {
      return this.menus && this.menus.filter(item => !item.children);
    },
    filterSubMenus() {
      return this.menus && this.menus.filter(item => item.children);
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
