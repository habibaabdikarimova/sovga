import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";

export const useUpdateData = (keys, url, options)=>{
    return useQuery(keys,()=>instance.put(url).then((res)=> res?.data), {...options})
}