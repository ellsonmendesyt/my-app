import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector} from 'react-redux'

const Navbar = () => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
   const mylist = useSelector(store=>store.mylist);
                                                                                                                                                                                                                                                                                                                                                           
    return (
        <NavbarWrapper>
          <Link className='logo' to='/' ><i title='Voltar para Início' className="fa fa-home fa-2x " aria-hidden="true"></i></Link>

           

           <div className="lista" title='Minha Lista'>
           <Link to='/lista' ><i className="fa-lista fa fa-music " aria-hidden="true"></i></Link>
           <div className='count'>{mylist.length}</div>
           </div>
        </NavbarWrapper>
    )
}


const NavbarWrapper = styled.nav`
display:flex;
grid-template-columns: 1fr 4fr 1fr;
justify-content: space-between;
align-items:center;

box-sizing:border-box;
position:sticky;
top:0px;
width:100%;
background-color: #000;
opacity:0.97;
z-index: 999;
box-shadow: 0px 2px 5px rgba(23,0,0,0.2);

padding: 12px 30px;

@media (min-width:500px){
    padding: 10px 30px ;
}
@media (min-width:600px){
    padding: 10px 80px ;
}

@media (min-width:1200px){
    padding: 10px 180px ;
}


/* margin-bottom: 5px; */
background-color: #232f3e;
background-color: #131921;


.logo{
    /* margin-left:105px; */
    color:#fff;
    justify-self: start;
}



.lista{
    position: relative;
    cursor: pointer;
    .fa-lista{
        color:#fff;
        font-size: 26px;
        position:relative;

    
    }
    .count{
        background-color: royalblue;
        border-radius: 50%;
        padding: 3px;
        position: absolute;
        top:-10px;
        right:-20px;
        line-height:18px;
        text-align: center;
        color:#fff;
        font-size:12px;
        width:15px;
        height: 15px;
    }

}

`














export default Navbar
