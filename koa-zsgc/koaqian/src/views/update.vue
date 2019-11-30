<template>
    <div>
        <ul>
            <li>修改</li>
            <li>ID：<input v-model="id"/></li>
            <li>备注：<input v-model="bei"/></li>
            <li>类型：<input v-model="lei"/></li>
            <li>排序：<input v-model="pai"/></li>
            <li>时间：<input v-model="times"/></li>
            <button @click="update()">提交</button>
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
            id:'',
            bei:'',
            lei:'',
            pai:'',
            times:''
        }
    },
    computed:{

    },
    methods:{
        async update(){
            let {id,bei,lei,pai,times}=this
            let res = await this.$http.post('/api/update',{id,bei,lei,pai,times})
            console.log(res.data)
            if(res.data.code == 1){
                console.log('修改成功')
            }else{
                console.log('修改失败')
            }

            this.$router.push('/home')
        }
    },
    created(){
        console.log(this.$route.query)
        this.id=this.$route.query.id
        this.bei=this.$route.query.bei
        this.lei=this.$route.query.lei
        this.pai=this.$route.query.pai
        this.times=this.$route.query.times
    },
    mounted(){

    }
}
</script>
<style scoped>

</style>