import Vue from 'vue'
Vue.directive("gd",(el,binding)=>{  ///el当前事件对象，binding是film绑定v-gd的属性
    var dis=Number(el.getAttribute("dis")); //获取标签属性属性值210
    el.addEventListener("scroll",()=>{ //添加滚动事件
        var st=el.scrollTop;//获取当前屏幕滚动数值
        if(st>dis){
            // 当前滚动大于传参过来的数值后，设置属性值为真
            binding.value.flag=true;
        }else{
            // 否则为假
            binding.value.flag=false;
        }
    })
})
Vue.filter("formatTime",(Value)=>{
    var d=new Date(Value);
    return d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日";
})