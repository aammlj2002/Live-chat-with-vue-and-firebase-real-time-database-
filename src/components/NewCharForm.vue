<template>
    <form @submit.prevent>
        <textarea placeholder="text message and hit enter to send" v-model="message" @keypress.enter="sendMessage">

        </textarea>
        <button @click="sendMessage">send</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composable/getUser';
import { timestamp } from '../firebase/config';
import useCollection from "../composable/useCollection"
export default {
    setup(){
        let message = ref("");
        let {user} = getUser();
        let {error, addDoc} = useCollection("messages");
        let sendMessage = async()=>{
            if(message.value){
                let chat ={
                    message:message.value,
                    name:user.value.displayName,
                    created_at:timestamp()
                }
                // console.log(chat);
                await addDoc(chat);
                message.value="";
            }
        }
        return {message, sendMessage};
    }
}
</script>

<style scoped>
form {
    margin: 10px;
    display: flex;
    align-items: center;
}
textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
    resize: none;
}
</style>