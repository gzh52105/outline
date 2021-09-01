<template>
    <el-container style="height:100vh">
        <el-header style="height:80px;background-color:rgb(67, 74, 80)">
            
            <el-row>
                <el-col :span="6">
                    <div class="logo">
                        <i class="el-icon-bangzhu"></i>
                        XXX后台管理系统
                    </div>
                </el-col>
                <el-col :span="18" style="text-align:right">
                    {{userInfo.username}}<el-button type="text">退出</el-button>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                    style="height:100%"
                >
                <template v-for="item in menu">
                    <el-submenu index="1" :key="item.path" v-if="item.children">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{item.text}}</span>
                        </template>
                        <el-menu-item :index="'/manage'+item.path+it.path" v-for="it in item.children" :key="it.path">{{it.text}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item :key="item.path" :index="'/manage'+item.path" v-else>
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.text}}</span>
                    </el-menu-item>
                </template>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import Vue from "vue";
import { Menu, MenuItem, Submenu, MenuItemGroup } from "element-ui";
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);

export default {
  name: "Manage",
  data() {
    return {
      menu: [
        {
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home"
        },
        {
          path: "/goods",
          text: "商品管理",
          icon: "el-icon-s-shop",
          children: [
            {
              path: "/list",
              text: "商品列表"
            },
            {
              path: "/add",
              text: "添加商品"
            }
          ]
        },
        {
          path: "/user",
          text: "用户管理",
          icon: "el-icon-user"
        },
        {
          path: "/order",
          text: "订单管理",
          icon: "el-icon-s-order"
        }
      ]
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    }
  }
};
</script>
<style scoped>
.el-header {
  color: #fff;
  line-height: 80px;
  height: 80px;
}
.logo i {
  font-size: 38px;
  vertical-align: middle;
  color: rgb(255, 208, 75);
}
</style>

