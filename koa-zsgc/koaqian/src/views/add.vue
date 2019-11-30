<template>
    <div>
        <ul>
            <li>添加</li>
            <li>备注：<input v-model="bei"/></li>
            <li>类型：<input v-model="lei"/></li>
            <li>排序：<input v-model="pai"/></li>
            <li>时间：<input v-model="times"/></li>
            <button @click="add()">提交</button>
        </ul>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            bei:'',
            lei:'',
            pai:'',
            times:''
        }
    },
    computed:{

    },
    methods:{
        async add(){
            let{bei,lei,pai,times}=this
            let res = await this.$http.post('/api/add',{bei,lei,pai,times})
            if(res.data.code == 1){
                this.$router.push({path:'/home'})
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped>

</style>