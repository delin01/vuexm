<template>
    <div>
        <div class="detail-banner">
            <div class="dw" @click="go">
                <img src="../assets/dw.png">
            </div>
        <img :src="film.poster" />
        </div>
       <div class="detail-main">
           <span>{{film.name}}</span>
           <div>
               {{film.category}}
           </div>
           <div>
               {{film.nation}}|
               {{film.runtime}}
           </div>
           <p>{{film.synopsis}}</p>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            film:{},
        }
    },
    created(){
        this.getFilm();
    },
    methods:{
        getDataById(){
            var id=this.$route.params.id;
            return this.$axios.get("/mz/gateway?filmId="+id,{
            'headers':{
               "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"1562055281206158430250"}`,
               "X-Host": `mall.film-ticket.film.info`
            }});
        },
        async getFilm(){
          var film=await this.getDataById();
          console.log(this.getDataById());
          this.film=film.data.data.film;
        },
        go(){
            this.$router.go(-1);
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
img{
   display: block; 
}
.detail-banner{
    width:100%;
    height:4.22rem;
    position:relative;
}
.detail-banner .dw{
    width:0.6rem;
    height:0.6rem;
    position:absolute;
    left:0;
    top:0;
}
.detail-banner img{
    width:100%;
    height: 100%;
}
.detail-main{
    width:100%;
    height:3.5rem;
    padding: 0.24rem 0.3rem 0.3rem 0.3rem;
    color:#797d82;
    font-size: 0.24rem;
    text-align: left;
}
.detail-main span{
    font-size: 0.36rem;
    color:#191a1b;
    display:block;
    height: 0.48rem;
    line-height: 0.48rem;
}
.detail-main div:nth-child(2),.detail-main div:nth-child(3){
    margin-top:0.08rem;
}
.detail-main p{
    height:0.68rem;
    overflow: hidden;
    margin-top:0.24rem;
    overflow: hidden;
}
</style>
