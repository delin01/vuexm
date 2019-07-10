<template>
    <div class="film" v-gd="vis" dis="210">

        <!-- 固定定位(吸顶)开始啦 -->
        <div class="myhander-f">
            <div class="myhander" v-show="vis.flag">
                电影
            </div> 
            <div class="nav-f" v-show="vis.flag">
            <router-link to="/list/film/nowPlaying">
                  <p>正在热映</p>
            </router-link>
            <router-link to="/list/film/comingSoon">
                 <p>马上上映</p>
            </router-link>
            </div>
        </div>
        <!-- 固定定位(吸顶)结束啦 -->

        <!-- 左上角地区定位显示 -->
        <div class="area-dw" @click="go">
            {{city}}
        </div>
        <!-- 左上角地区定位显示结束啦 -->

        <!-- 轮播图开始啦 -->
        <div class="banner">
            <mySwiper></mySwiper>
        </div>
        <!-- 轮播图结束啦 -->

        <!-- 正在热映，马上上映切换开始啦 -->
        <div class="nav">
            <router-link to="/list/film/nowPlaying">
                  <p>正在热映</p>
            </router-link>
            <router-link to="/list/film/comingSoon">
                 <p>马上上映</p>
            </router-link>
        </div>
        <!-- 正在热映，马上上映结束啦 -->
         <router-view/>
    </div>
</template>
<script>
import mySwiper from '../components/mySwiper'
export default {
    created(){
        this.city=sessionStorage.getItem("city")||"北京";
    },
    components:{
        mySwiper,
    },
    data(){
        return{
            vis:{
                flag:false,
            },
            city:'',
        }
    },
    methods:{
        go(){
            this.$router.push("/citylist");
        } 
    }
}
</script>

<style>
html,body,ul,ol,li,div,span,p{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
a{
  color:#191a1b;
}
img{
   display: block; 
}
.film{
         position: fixed;
         top:0;
         bottom:0.98rem;
         right:0;
         left:0;
         overflow: auto;
      }
.myhander{
    width:100%;
    height:0.88rem;
    font-size:0.36rem;
    color:#191a1b;
    text-align: center;
    line-height: 0.88rem;
    position:fixed;
    top:0;
    left:0;
    background-color: #fff;
}
.area-dw{
    position: absolute;
    left:0.2rem;
    top:0.2rem;
    opacity:0.5;
    width:1rem;
    height:0.6rem;
    background-color: #fff;
    border-radius:0.3rem;
    z-index:5;
    text-align: center;
    line-height: 0.6rem;
    color:#333;
    font-size:0.28rem;

}
.banner{
    width:7.5rem;
    height:4.2rem;
}
.banner img{
    width:100%;
    height:100%;
}
.nav{
    width:100%;
    height:1rem;
    background-color: #fff;
}
.nav-f{
    width:100%;
    height:1rem;
    background-color: #fff;
    position:fixed;
    top:0.88rem;
    left:0;
}
.nav-f p{
    width:50%;
    height:100%;
    font-size: 0.28rem;
    float:left;
    line-height: 1rem;
    text-align: center;
}
.router-link-exact-active {
    color:#ff5f16;
}
.nav p{
    width:50%;
    height:100%;
    font-size: 0.28rem;
    float:left;
    line-height: 1rem;
    text-align: center;
}

</style>

