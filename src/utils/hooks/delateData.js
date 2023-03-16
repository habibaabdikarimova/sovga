import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";

export const useDelateData = (keys, url, options)=>{
    return useQuery(keys,()=>instance.delete(url).then((res)=> res?.data), {...options})
}