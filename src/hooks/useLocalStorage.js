import React, { useState } from 'react';


function getSavedValue(key,initial){

    const savedValue =JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue; //se tiver algo retorna

   //verifica se o valor inicial é uma funcao
   if(intitial instanceof Function ) return initial();

    return initial; //se nao, retorna o valor inicial
}

export default function useLocalStorage(initial){

    const [value,setValue]= useState(()=>{ return getSavedValue(key, initial)})

    return [value,setValue];
}

/*
 const [name,setName]=useLocalStorage('name',''); or useLocalstorage('name', ()=>'')

///salva toda vez q o valor mudar
useEffect(()=>{
 localStorage.setItem(key, JSON.stringify(value))
},[value])


 */