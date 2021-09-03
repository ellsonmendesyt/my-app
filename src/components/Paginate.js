import React,{useState} from 'react'
import Card from './Card';
import styled from 'styled-components'
import ReactPaginate from 'react-paginate';

import '../paginate.css';



const Paginate = ({musics}) => {

  
  //filtrar buscas
  const [opcao,setOpcao]=React.useState('');
  const [busca,setBusca]=React.useState('');
  const [resultadoBusca,setResultadoBusca]=React.useState([]);

  //opcoes para o select
  const options =[
    {label:'cantor', value:'cantor'},
    {label:'musica', value:'musica'}
  ];

 //grava o termo procurado
const handleSearch=(e)=>{
  setBusca(e.target.value);

  //quando nao busca nada mostra as musicas
  if(busca ===''){
    setResultadoBusca(musics);
  }else{
    const filteredMusics= musics.filter((music)=>{ //quando busca, mostra pelo criterio

      //tratar os tres casos 
      if(opcao==='cantor'){
        return music.artist.name.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
      }else{
        return music.title.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
      }

      // return music.title.toLowerCase().includes(busca.toLowerCase());
     // return music.title.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
    })
    setResultadoBusca(filteredMusics);
  }
}





  //paginação
  const [pageNumber,setPageNumber]= useState(0);
  const musicsPerPage=6;
  const pagesVisited = pageNumber* musicsPerPage; 
     
 
  const displayMusics = resultadoBusca.slice(pagesVisited, pagesVisited+musicsPerPage).map((music)=>{
    return <Card add={true} key={music.id} music={music}/>
  });

React.useEffect(()=>{
 setResultadoBusca(musics);
},[musics])


//  React.useEffect(()=>{
//    console.log(resultadoBusca)
//  },[resultadoBusca])



  const pageCount = Math.ceil(musics.length / musicsPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected)
  }

  ///tratar as opcoes
  const handleOption=(e)=>{
     setOpcao(e.target.value);
  }

  //nao podemos ver a mudança na funcao de setter, vemos no efeito ('mike')
  React.useEffect(()=>{
    console.log(opcao);
  },[opcao])


    return (
    <>
      <BuscadorWrapper className="buscador">
        <div className="search-bar">
                
              <select className='search-filter'  onChange={handleOption} >
                  {
                    options.map((option, i)=>(
                      <option key={i} className='opt' value={option.value}>{option.label}</option>
                    ))
                  }
              </select>
                

            {/* BARRA DE BUSCA */}
              <input 
              className='search-field'
              type="text" 
              placeholder='Buscar ...' 
              onChange={handleSearch}
                /> 

              <div className="search-icon" >
                <i className="fa fa-search"></i>
            </div>
          </div>
      </BuscadorWrapper>


      <PaginateWrapper>
        {/* BARRA DE BUSCA */}
      {
           displayMusics
         
      }
      <div className="custom">
          <ReactPaginate 
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
            className="custom"

          />
      </div>

    </PaginateWrapper>
    </>
   
    )
}














// ESTILIZAÇÃO

const BuscadorWrapper= styled.div`
 text-align:center;
 color:white;
 margin: 15px auto;
 position:fixed;
 top:-10px;
 z-index:999;


 .search-bar{
    display:flex;
    width: 100%;

    .search-filter{
        
        
        appearance: none;
        outline: 0;
        border: 0;
        box-shadow: none;
        /* Personalize */
        flex: 1;
        padding: 10px 10px;
        border:none;
        color: #333;
        font-size: 17px;
        
    
        cursor: pointer;
        background-color: #febd69;
        border-top-left-radius:8px;
        border-bottom-left-radius:8px;

            &::after{
                background-color: orange !important;
            }
    }
    .search-icon{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #febd69;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 5px 25px;
        .fa{
            color:#333;
            font-size:20px;
        }
    }
 
    .search-field{
        border:none;
        width:100%;
        padding: 0px 10px;
        &:focus{
            outline: none;
        }
        &::-webkit-input-placeholder{
            color:#999;
        }
    }

}

`


const PaginateWrapper = styled.div`


background-color:#232F3E;
width:100%;
display:grid;
//mobile mostra 1 coluna
grid-template-columns: 1fr ;
align-items: center;
justify-items: center;

//em tables mostra duas colunas
@media (min-width:800px){
  grid-template-columns: 1fr 1fr;
  width:80%;

}
//tem telas grandes mostra 3 coluns
@media (min-width:1000px){
  grid-template-columns: 1fr 1fr 1fr;
  width:100%;
}

margin-bottom:70px;

.custom{
  position: absolute;
  bottom:0px;
 
  width:300px;
  left:0;
  right:0;
  margin:0px auto;
}




`

export default Paginate
