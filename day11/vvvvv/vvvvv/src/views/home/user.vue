<template>
import { parse } from 'path';
    <div>
        <el-button size="mini" type="danger" @click="add()">添加</el-button>
        <table>
            <tr>
                <th v-for="(item,index) in lists" :key="index">{{item.prop}}</th>
            </tr>
            <tr  v-for="(item,index) in list" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>{{item.tel}}</td>
                <td>{{item.email}}</td>
                <td>{{item.states}}</td>
                <td>{{item.times}}</td>
                <td>
                    <button @click='updata(item)'>操作</button>
                    <button>删除</button>
                </td>
            </tr>
        </table>
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
            lists:[
                {label:'Name',prop:'name'},
                {label:'Gender',prop:'gender'},
                {label:'Tel',prop:'tel'},
                {label:'Email',prop:'email'},
                {label:'Statea',prop:'states'},
                {label:'Times',prop:'times'},
            ]
      }
    },
    computed:{

    },
    methods:{
        add(){
            this.$router.history.push('/home/development')
        },
        updata(item){
            this.$router.history.push('/home/behavior')
        }
    },
    async created(){
        const res = await this.$http.get('/api/list')
        this.list = res
    },
    mounted(){

    }
}
</script>
<style scoped>

</style>