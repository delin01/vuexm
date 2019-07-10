<template>
    <div class="citylist">
       <ul class="city">
           <li v-for="(item,index) in list" :key="index">
               <h3 v-if="index===0 || index!==0 && list[index-1].letter!==item.letter" :ref="item.letter">
                   {{item.letter}}
                </h3>
               <p  @click="changeName(item.name)">{{item.name}}</p>
            </li>
       </ul>
       <ol class="letters">
           <li v-for="item in letters" @click="go(item)">{{item}}</li>
       </ol>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
			letters:""
        }
    },
   
    created(){
        this.getLetters();
        this.$axios.get("/mz/gateway",{
			params:{
				k:Date.now()
			},
			headers:{
				"X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"154399058310458245367575"}`,
				"X-Host": "mall.film-ticket.city.list"
			}
		}).then((res)=>{
            var arr=res.data.data.cities.sort((a,b)=>{
              	return a.pinyin.localeCompare(b.pinyin)
            }).map((item)=>{
                return{
                    'letter':item.pinyin[0].toUpperCase(),
                    'name':item.name,
                }
            })
            this.list=arr;    
            console.log(this.list);
        })
    },
    // 	methods:{
	// 	 getLetters(){
	// 	 	var str="";
	// 	 	for(var i=65;i<91;i++){
	// 	 		if(String.fromCharCode(i)==='U' || String.fromCharCode(i)==='V' ||
	// 	 			String.fromCharCode(i)==='I' || String.fromCharCode(i)==='O'  )
	// 	 		 {	
	// 	 		 	continue;
	// 	 		 }
	// 	 		str+= String.fromCharCode(i);
	// 	 	}
	// 	 	this.letters=str;
	// 	 },
	// 	 go(letter){
	// 	 	var top = this.$refs[letter][0].offsetTop;
	// 	 	document.documentElement.scrollTop=top;
	// 	 }
    // },
    methods:{
        getLetters(){
            var str="";
            for(var i=65;i<91;i++){
                if(String.fromCharCode(i)==='U' || String.fromCharCode(i)==='V'||
                   String.fromCharCode(i)==='I' || String.fromCharCode(i)==='O'){
                       continue;
                   } 
            str+=String.fromCharCode(i);                
            }
            this.letters=str;
            console.log(this.letter);
        },
        go(letter){
            var top=this.$refs[letter][0].offsetTop;
            document.documentElement.scrollTop=top;
        },
         changeName(name){
			 sessionStorage.setItem("city",name);
			 this.$router.go(-1);
		 }
    }
}
</script>
<style scoped>
h3,div,span,html,body,li,ul,ol{
    margin:0;
    padding:0;
}
li{
    list-style:none;
}
   	h3{
		background: #ccc;
	}
	.city{
		margin-top: 3rem;
		
	}
    .city li{
        height:0.7rem;
    }
	.city p{
		height: 0.7rem;
		line-height: 0.7rem;
		border-bottom: 1px solid #ccc;
		
	}
	.letters{
		position: fixed;
		top:50%;
		right:0;
		transform: translateY(-50%);
	}
</style>
