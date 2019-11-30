<template>
    <div>
        <el-container>
            <el-header>
                <span>{{name}}</span>
                <span>{{role}}</span>
            </el-header>
            <el-container>
                <el-aside width="130px">
                    <li v-for="(item,index) in list" :key="index"
                    @click="handleclick(item.url)"
                    >
                        {{item.name}}
                    </li>
                </el-aside>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
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
            list:[],
            name:'',
            role:''
        }
    },
    computed:{

    },
    methods:{
        handleclick(url){
            this.$router.history.push(url)
        }
    },
    async created(){
        let obj = JSON.parse(window.localStorage.getItem('obj'))
        this.name = obj.name

        const res = await this.$http.get('/api/getuser?id='+obj.userid)
        console.log(res)
        this.role = res[0].name
        const data = await this.$http.get('/api/getlist?id='+obj.userid)
        console.log(data)
        this.list = data
    },
    mounted(){

    }
}
</script>
<style scoped>
aside{
    text-align: center;
}
aside li{
    width: 130px;
    height: 40px;
    line-height: 40px;
}
</style>