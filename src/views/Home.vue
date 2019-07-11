<template>
  <div class="home">
    <router-view></router-view>
      <div id="nav">
         <router-link to="/home/index">首页</router-link>
         <router-link to="/home/mail">9.9包邮</router-link>
         <router-link to="/home/classify">分类</router-link>
         <router-link to="/home/enshrine">收藏</router-link>
         <router-link to="/home/my">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style>
html,body,div,a,span,a,h1,h2,h3,h4,h5,h6,ol,ul,li,p{
  padding:0;
  margin:0;
}
html,body{
  width:100%;
  height:100%;
}
img{
  display: block;
}
a{
  text-decoration: none;
  color:#8e8e93;
}
#nav{
  width:100%;
  height:1rem;
  display: flex;
  position:fixed;
  left:0;
  bottom:0;
}
#nav a{
  flex:1;
  display: block;
  text-align: center;
  font-size:0.26rem;
  line-height: 1rem;
}
.router-link-exact-active{
  color:#0089dc;
}

</style>
