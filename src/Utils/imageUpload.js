import { toast } from "react-toastify";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import axios from "axios";

export const imageUpload = async img => {

    const formData = new FormData()
    formData.append('image', img)
    
        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`, formData)
        // console.log(data);
        
        
    return data
    


}