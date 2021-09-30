import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatRoom from '../views/ChatRoom.vue'
import { auth } from '../firebase/config'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter(to, from, next){
            let user = auth.currentUser;
            if(!user){
                next();
            }
            else{
                next({name:"ChatRoom"})
            }
        }
    },
    {
        path:"/chatroom",
        name: "ChatRoom",
        component: ChatRoom,
        beforeEnter(to, from , next){
            let user = auth.currentUser;
            if(user){
                next();
            }
            else{
                next({name:'Home'});
            }
        }
    }
  ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
