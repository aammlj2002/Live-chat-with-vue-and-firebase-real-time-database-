const { ref } = require("vue");
import { auth } from '../firebase/config';

let getUser = ()=>{
    let user = ref(auth.currentUser);
    auth.onAuthStateChanged((_user)=>{
        user.value = _user;
    })
    return {user};
}
export default getUser