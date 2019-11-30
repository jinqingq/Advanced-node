<template>
    <div>
        <el-input v-model="name" placeholder="姓名"></el-input>
        <br />
        <el-input v-model="pwd" placeholder="密码"></el-input>
        <br />
        <el-input v-model="gender" placeholder="性别"></el-input>
        <br />
        <el-input v-model="tel" placeholder="电话"></el-input>
        <br />
        <el-input v-model="email" placeholder="邮箱"></el-input>
        <br />
        <el-input v-model="states" placeholder="状态"></el-input>
        <br />
        <el-input v-model="times" placeholder="时间"></el-input>
        <br /><br />
        <el-button round @click='add()'>提交</el-button>
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
            pwd:'',
            gender:'',
            tel:'',
            email:'',
            states:'',
            times:''
        }
    },
    computed:{

    },
    methods:{
        async add(){
            const res = await this.$http.post('/api/add',{
                name:this.name,pwd:this.pwd,gender:this.gender,tel:this.tel,email:this.email,states:this.states,times:this.times
            })
            console.log(res)
            if(res.code == 1){
                this.$router.history.push('/home/user')
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
.el-input{
    width: 280px;
}
</style>