<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="error" v-if="error">{{error}}</div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composable/useLogin'
export default {
    setup(props, context){
        let email = ref("");
        let password = ref("");
        let {error, signIn} = useLogin();
        let login = async ()=>{
            let res = await signIn(email.value, password.value);
            if(res){
                //things to do if login success
                context.emit("enterChatroom");
            }
        }

        return {email, password, error, login};
    }
}
</script>

<style>

</style>