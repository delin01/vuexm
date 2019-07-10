<template>
    <div> 
         <router-view/>      
      <ul class="nav-bar">
             <li>
                 <router-link to='/list/film'> 
                 <span>电影</span> 
                 </router-link>             
            </li>
          
            <li>
              <router-link to='/list/cinema'>
              <span>影院</span> 
              </router-link>
            </li>
            <li>
                <router-link to='/list/odds'>
                <span>特惠</span> 
                </router-link>
            </li>
            <li>
              <router-link to='/list/my'>
                <span>我的</span> 
              </router-link>              
            </li>
      </ul> 
    </div>
</template>


<style scoped>

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
.nav-bar{
    height:1rem;
    width:100%;
    background-color: #fff;
    position:fixed;
    bottom:0;
}
.nav-bar li{
    float: left;
    text-align: center;
    width:25%;
    height: 100%;
    line-height: 1rem;
    font-size: 0.28rem;
    color:#797d82;
}
.router-link-active{
    width:100%;
    height:100%;
    display:block;
    color:#ff5f16;
}
</style>
