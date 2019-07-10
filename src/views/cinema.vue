<template>
    <div class="cinema">
        <div class="head">
            <div class="headSon">
                 <header>
                    影院
                </header>
                <div class="nav">
                  <ul class="cinema-list-tag">
                      <li @click="area">{{name}}</li>
                  </ul>
                </div>
            </div>  
        </div>

        <ul v-show="abc" class="areaList">
             <li v-for="(item,index) in diming" :key="index" @click="yingyuan(item,index)">
                          {{item}}
            </li>
        </ul>

        <ul class="cinemaList">
            <li v-for="(item,index) in arr" :key="index">
                <p class="mc">{{item.name}}</p>
                <span class="dz">{{item.address}}</span>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    created(){
        this.$axios.get("/mz/gateway?cityId=110100&ticketFlag=1&k=5267440",{
            "headers":{
                "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"1562055281206158430250"}`,
                "X-Host": `mall.film-ticket.cinema.list`
            }
        }).then((res)=>{
           this.list=res.data.data.cinemas;
           var set=new Set([]);
           this.list.forEach((item)=>{
               set.add(item.districtName);
           });
           this.diming=[...set];
           this.diming.unshift("全城");
           this.arr=this.list;
        });
        
    },
    data(){
        return{
            list:[],
            abc:false,
            diming:[],
            arr:[],
            name:"全城"
        }
    },
    methods:{
        area(){
            return this.abc=!this.abc;
        },
        yingyuan(Name,index){
            if(index===0){
                this.arr=this.list;
            }else{
                this.arr=this.list.filter((item)=>{
                return item.districtName===Name;
                })
            };
            this.name=this.diming[index];
            this.abc=false;
            console.log(this.arr);
        }

    }
}
</script>


<style scoped>
    html,body,li,div,header,ul,ol,span,p,h2,h3,h4,h5,h6{
        margin:0;
        padding:0;
        color:#191a1b;
        box-sizing: border-box;
    }
    header{
        width:100%;
        height:0.88rem;
        background-color: #fff;
        text-align: center;
        line-height: 0.88rem;
        font-size:0.36rem;
        
    }
    .head{
        width:100%;
        height:1.94rem;
    }
    .headSon{
        width:100%;
        height:1.94rem;
        position:fixed;
        top:0;
        left:0;
    }
    .nav{
        height:1rem;
        color:#191a1b;
        border-bottom:0.01rem solid #ccc; 
        border-top:0.01rem solid #ccc; 
    }
    .nav .cinema-list-tag{
        width:100%;
        height:1rem;
    }
    .nav .cinema-list-tag li{
        width:2.5rem;
        height:1rem;
        font-size:0.28rem;
        text-align: center;
        line-height: 1rem;
    }
    .areaList{
        width:100%;
        height:4.7rem;
        background-color: #fff;
        position:fixed;
        left:0;
        top:1.84rem;
    }
    .areaList li{
        width:1.82rem;
        height:0.9rem;
        float: left;
    }
    .cinemaList{
        width:100%;
    }
    .cinemaList>li{
        width:100%;
        height:1.5rem;
        padding:0.3rem;
        text-align: left;
    }
    .cinemaList li .mc{
        font-size: 16px;
        color:#191a1b;
    }
    .cinemaList li .dz{
        font-size:0.24rem;
        color:#797d82;
        margin-top:0.1rem; 
    }
</style>
