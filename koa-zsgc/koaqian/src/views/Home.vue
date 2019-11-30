<template>
    <div>
        <button @click='goadd()'>添加</button>
        <li v-for="(item,index) in look" :key='index'>{{item.id}}{{item.bei}}{{item.lei}}{{item.pai}}{{item.times}}
            <button @click='del(item.pai)'>删除</button>
            <button @click='goupdate(item)'>编辑</button>
        </li>
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
            look:[]
        }
    },
    computed:{

    },
    methods:{
        goadd(){
            this.$router.push({path:'/add'})
        },
        async del(pai){
            let res=await this.$http.get('/api/del?pai='+pai)
            console.log(res.data)
            let ind = this.look.findIndex(item=>item.pai == pai)
            this.look.splice(ind,1)
        },
        goupdate(item){
            this.$router.push({path:'/update',query:item})
        }
    },
    async created(){
        console.log('1')
        let res = await this.$http.get('/api/look')
        console.log(res)
        this.look=res.data.data
    },
    mounted(){
        
    }
}
</script>
<style scoped>

</style>