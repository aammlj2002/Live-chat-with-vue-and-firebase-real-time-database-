<template>
    <div class="welcome container">
        <div v-if="showLoginForm">
            <Login @enterChatroom="enterChatroom"/>
            <p>Not a member? <span @click="showLoginForm=!showLoginForm">create an account?</span></p>
        </div>
        <div v-else>
            <Signup @enterChatroom="enterChatroom"/>
            <p>Already menber? <span @click="showLoginForm=!showLoginForm">Login account?</span></p>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from "vue-router"
import Login from '../components/Login'
import Signup from '../components/Signup'
export default {
    components: {
        Login,
        Signup 
    },
    setup(){
        let showLoginForm = ref(true);
        let router = useRouter();
        let enterChatroom = ()=>{
            router.push({name:'ChatRoom'});
        }
        return {showLoginForm, enterChatroom};
    }
}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
/* form styles */
.welcome form {
    width: 300px;
    margin: 20px auto;
}
/* .welcome label {
    display: block;
    margin: 20px 0 10px;
} */
.welcome input {
    max-width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
    display: block;
}
.welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button {
    margin: 20px auto;
}
</style>