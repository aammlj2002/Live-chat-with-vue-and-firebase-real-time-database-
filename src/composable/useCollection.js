import { ref } from "vue";
import { db } from "../firebase/config";

let useCollection =(collection)=>{
    let error = ref(null);
    let addDoc = async(doc)=>{
        try{
            await db.collection(collection).add(doc);
        }
        catch(err){
            error.value = "Something went wrong";
            console.log(err.message);
        }
    }

    return {error, addDoc};
}
export default useCollection;