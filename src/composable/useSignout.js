import { ref } from "vue";
import { auth } from "../firebase/config";

let useSignout = ()=>{
    let error = ref(null);
    let logout = async()=>{
        try{
            await auth.signOut();
        }
        catch(err){
            error.value = err.message;
            console.log(error.value);
        }
    }
    return {logout, error};
}

export default useSignout;