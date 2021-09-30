<template>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="name" v-model="name">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <div class="error" v-if="error">{{error}}</div>
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from "../composable/useSignup"
export default {
    setup(props, context){
        let name=ref("");
        let email=ref("");
        let password=ref("");
        let {error, createAccount} = useSignup();
        let signUp = async ()=>{
            let res = await createAccount(name.value, email.value, password.value);
            if(res){
                //thing to do if create account success
                context.emit("enterChatroom");
            }
        }

        return {name, email, password, error, signUp};
    }
}
</script>

<style>
</style>