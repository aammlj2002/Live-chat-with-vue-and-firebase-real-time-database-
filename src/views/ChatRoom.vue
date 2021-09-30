<template>
    <div class="container">
        <Navbar/>
        <ChatWindow/>
        <NewCharForm/>
    </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewCharForm from '../components/NewCharForm'
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar'
import getUser from '../composable/getUser'
import { useRouter } from 'vue-router'
export default {
    components: {
        ChatWindow,
        NewCharForm,
        Navbar 
    },
    setup(){
        let router = useRouter();
        let {user}=getUser();
        watch(user,()=>{
            if(!user.value){
                router.push({name:'Home'});
            }
        })
    }
}
</script>

<style>

</style>