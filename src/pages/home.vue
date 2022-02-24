<template>
    <main class="main">

      <ul class="nav flex">
        <li @click="jump('legacy')">legacy</li>
        <li @click="jump('first3D')">first3D</li>
        <li @click="jump('test')">test</li>
      </ul>

      <section class="section">
        <router-view></router-view>
      </section>

    </main>
</template>

<script>
  export default {
    name: "home",
    data(){
      return{

      }
    },
    methods:{
      // 跳转
      jump(url){
        this.$router.push(url);
      },
    },
  }
</script>

<style scoped>
  .main{
    position: fixed;
    z-index: 1;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;
  }
  .flex{
    display: flex;
  }
  .nav{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    z-index: 2;
    background: #fff;
  }
  .nav li{
    margin: 10px 30px;
    cursor: pointer;
  }
  .section{
    width:100%;
    height:calc(100% - 90px );
  }
</style>
