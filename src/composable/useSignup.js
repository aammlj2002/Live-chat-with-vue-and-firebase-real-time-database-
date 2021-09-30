import { ref } from "vue";
import { auth } from "../firebase/config"

let error = ref(null);
let createAccount = async (name, email, password)=>{
    try{
        let res = await auth.createUserWithEmailAndPassword(email, password);
        if(!res){
            throw new Error ("could not create new user");
        }
        res.user.updateProfile({displayName:name});
        return res;
    }
    catch(err){
        error.value = err.message;
    }
}
let useSignup =()=>{
    return{error, createAccount};
}
export default useSignup;