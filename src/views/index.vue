<template>
    <div class="index">
        <div>首页</div>
    </div>
</template>

<script>
export default {
    created(){
        this.$axios.get(`/syg/api/category/product/model-detail-by-model-id?entityId=4&modelId=1&source=3&userId=669231`).then((res)=>{
            console.log(res);
        })
    }
}
</script>


<style scoped>
  
</style>

