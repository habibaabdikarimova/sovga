import React, { useEffect, useRef } from 'react';
import { instance } from '../../utils/axios';
import c from './style.module.scss';
import {useForm} from 'react-hook-form'
// import { useGetData } from '../../utils/hooks/getData';


function Product() {
    const { register, handleSubmit, formState: {errors} } = useForm({mode: 'onBlur'});

    // const products = useGetData(['products'], "/products")
    // console.log(products);
    useEffect(()=>{
        instance.get('/products').then((data)=>{
            return console.log(data.data.data);
        })
    },[]) 
    const onSub = (data)=>{
       
        // instance.post('/products', data).then(res => console.log(res)).catch(err => console.log(err))
       console.log(data);
    }      

    return (
        <div className={c.Product}>
            Product
            <form action="" onSubmit={handleSubmit(onSub)}
            > 
                <input type="text" placeholder='gender' {...register('gender', {required: true})}/>
                {errors.gender && <span>This field is required</span>}
                <input type="text" placeholder='color' {...register('color', {required: true})} />
                <input type="text" placeholder='active' {...register('active', {required: true})} />
                <input type="text" placeholder='price' {...register('price', {required: true})} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Product
