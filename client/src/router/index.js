import VueRouter from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
// import Me from "@/components/Me.vue";

// 路由懒加载, 得结合 babel-plugin-syntax-dynamic-import 插件使用
const home = () => import("@/page/home.vue");
const videolist = () => import("@/page/videolist.vue");
const userlist = () => import("@/page/userlist.vue");

const router = new VueRouter({
    routes: [
        { path: "/", redirect: { name: "home" } },
        {
            path: "/home",
            name: "home",
            component: home
        },
        {
            path: "/videolist",
            name: "videolist",
            component: videolist
        },
        {
            path: "/userlist",
            name: "userlist",
            component: userlist
        }
    ]
});

export default router;
