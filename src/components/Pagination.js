import { div } from 'prelude-ls';
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Card from './Card';

const Pagination = () => {

    const musics = useSelector(store=>store.musics);
    const downloaded = useSelector(store=>store.downloaded);

    const [currentPage,setCurrentPage]=useState(1)
    const [itemsPerPage,setItemPerPage]=useState(12)    
    const pages=[];
 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        
    const currentItems = musics.slice(indexOfFirstItem,indexOfLastItem);


    for(let i=1;i<Math.ceil(musics.length/itemsPerPage);i++){
        pages.push(i);
    }
    
     const handleClick= (e)=>{
        setCurrentPage(Number(e.target.id));
     }

    
 
    return(
        <>
     <PaginationWrapper>
         {
            pages.map((page)=>{
                return <li className={`page-number {currentPage== page? "active": null}`} id={page} key={page}
                onClick={handleClick}
                >{page}</li>
            })
         }
     </PaginationWrapper>

     {
         currentItems.map((item)=>{
             return <Card key={item.id} music={item}/>
         })
     }
     </>
     
    )

   
}

const PaginationWrapper= styled.ul`
color:#fff;
display:flex;
flex-direction: row;
list-style: none;
position:fixed;
z-index:444;


.page-number{
    outline: 1px solid #333;
    padding: 0px 5px;
    background-color: rgba(0,0,0,0.7);
    /* background-color: royalblue; */
    height: 25px;
    width: 20px;
    cursor: pointer;
    /* margin: 10px auto; */
    line-height: 25px;
  
}

.active{
    background-color: red;
}

`
export default Pagination

//className = {currentPage== pageNumber? "active": null}