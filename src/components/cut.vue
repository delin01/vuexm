<template>
    <div class="nowPlaying">
        <ul 
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
                 <li v-for="(item,index) in list" :key="index" @click="getDetail(item.filmId)">
                  <div class="gg">
                      <img :src="item.poster">
                  </div>
                  <div class="main">
                      <span class="name">{{item.name}}</span>
                      <div class="pj">观众评分<span>{{item.grade}}</span></div>
                      <p>主演: {{item.director}}</p>
                      <p>{{item.nation}}|{{item.runtime}}</p>
                      <p>{{item.premiereAt*1000|formatTime}}</p>
                  </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
export default {
   created(){
       this.$router.push("/list/film/nowPlaying");
   },
   data(){
       return{
           type:'',
           list:[],
           loading:false,//可以发送请求   true不可以发送请求
           abc:1,
       }
   },
   methods:{
       loadMore(){
           this.abc++;
           this.getData();
       },
       getDetail(id){
           this.$router.push("/detail/"+id);
       },
       getData(){
           if(this.abc>21){
               return;
           }

           var type=this.type==='nowPlaying' ? 1 : 2;
            this.loading=true;
            this.$axios.get(`/mz/gateway?`,{
                    params:{
                         cityId:110100,
                         pageNum:this.abc,
                         pageSize:10,
                         type,
                         k:Date.now(),
                    },
               headers:{
               "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"1562055281206158430250"}`,
               "X-Host": `mall.film-ticket.film.list`
            }
        }).then((res)=>{
          this.list=this.list.concat(res.data.data.films);
          this.loading=false;
        })
       },
       resetList(){
           this.loading=false;
           this.abc=1;
           this.list=[];
       }
   },
   watch:{
       $route:{
           handler(newV){
               this.type=newV.params.type;
               this.resetList(); //当路由切换时，先设置值后调用getData()发送请求，过否则先发送请求的话this.abc就是2了;
               this.getData();
           },
           deep:true,
           immediate:true
       }
   },
   beforeDestroy(){
   },
   destroyed(){
   }

}
</script>
<style>

ul{
    width: 7.2rem;
    margin-left:0.3rem;
    list-style:none;
}
ul li{
    width:100%;
    height:2.48rem;
    padding: 0.3rem 0.3rem 0.3rem 0;
}
li .gg{
    float:left;
}
li .gg img{
    width:1.22rem;
    height:1.82rem;
    float: left;
}
.main{
    width: 4.6rem;
    padding: 0 0.2rem;  
    float:left;
    text-align: left;
    color:#797d82;
    font-style: 0.28rem;
}
.main .name{
    color:#191a1b;
    font-size: 0.32rem;
}
.main .pj{
    margin-top:0.08rem;
}
.main .pj span{
    color:#ff5f16;
}
</style>
