<template>
    <div class="chat-window">
        <div class="messages" ref="msgBox">
            <div class="single" v-for="message in formatedMessages" :key="message.id">
                <div class="name">{{message.name}}</div>
                <div class="message">{{message.message}}</div>
                <span class="created-at">{{message.created_at}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { db } from '../firebase/config'
import { formatDistanceToNow } from "date-fns"
import { onUpdated } from '@vue/runtime-core'
export default {
    setup(){
        let messages = ref([]);
        let msgBox = ref(null);
        let formatedMessages = computed(()=>{
            return messages.value.map((msg)=>{
                let fotmatTime =  formatDistanceToNow(msg.created_at.toDate());
                return {...msg, created_at:fotmatTime}
            })
        })
        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            let result = [];
            snap.docs.forEach((doc)=>{
                let document = {id:doc.id, ...doc.data()};
                doc.data().created_at && result.push(document);
            })
            messages.value = result;
        })

        //auto scrolling feature
        onUpdated(()=>{
            msgBox.value.scrollTop = msgBox.value.scrollHeight; 
            // put scroll heigth => scrolltop after message are fetched
        });
        return {messages, formatedMessages, msgBox};
    }
}
</script>

<style>
.chat-window {
    background: #fafafa;
    padding: 30px 20px;
}
.single {
    margin: 18px 0;
}
.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name {
    font-weight: bold;
    margin-right: 6px;
    display: inline-block;
}
.message{
    background: #e4e4e4;
    border-radius: 20px;
    display: inline-block;
    padding: 15px;
}
.messages {
    max-height: 250px;
    overflow: auto;
}
</style>