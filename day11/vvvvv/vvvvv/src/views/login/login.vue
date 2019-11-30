<template>
    <div>
        <el-input class='ipt' v-model="name" placeholder="请输入姓名"></el-input>
        <br /><br />
        <el-input class='ipt' v-model="pwd" placeholder="请输入密码"></el-input>
        <br /><br />
        <el-button round @click='login()'>登录</el-button>
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
            name:'',
            pwd:''
        }
    },
    computed:{

    },
    methods:{
        async login(){
            const res = await this.$http.post('/api/login',{
                name:this.name,
                pwd:this.pwd
            })
            console.log(res)
            if(res.data.code == 1){
                window.localStorage.token = res.data.token
                window.localStorage.setItem('obj',JSON.stringify({userid:res.data.userid,name:this.name}))
                console.log(this.$router)
                this.$router.history.push('/home')
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
.ipt{
    width: 280px;

}
</style>