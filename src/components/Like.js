import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToList } from '../redux/ducks/music';


const Like = ({music}) => {

 
    const dispatch = useDispatch();
    
    const mylist = useSelector(store=>store.mylist);

 

    const addToMyList = (music)=>{
        dispatch(addToList(music))
    }
    
 

   
    return (
        <div title='adicionar á lista'>
           <i className=" fa fa-star"
           onClick={()=>addToMyList(music)}
           style={ mylist.includes(music) ? { color:'yellow',marginRight:'20px'} : {marginRight:'20px'}}
           ></i>
        </div>
    )
}

export default Like


