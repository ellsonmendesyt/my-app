import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromList } from '../redux/ducks/music';


const UnLike = ({music}) => {

  
    const dispatch = useDispatch();
    

  

    const tirarDaLista = (music)=>{
        dispatch(removeFromList(music))
    }
    


   
    return (
        <div>
           <i className="fa fa-trash-o"onClick={()=>tirarDaLista(music)}></i>
        </div>
    )
}

export default UnLike


