<template>
  <div id="app">
    <my-menu></my-menu>
  <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from "./components/menu/index";
export default {
  name: "app",
  components: {
      MyMenu
  }
};
</script>

<style lang="scss">

</style>
