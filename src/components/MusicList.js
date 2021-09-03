import React from 'react'
import Card from './Card';
import styled from 'styled-components'


const MusicList = ({musics}) => {



 

    return (
      <MusicListWrapper>
   
      {
          musics.length>0 ?musics.map((music)=>{
            return <Card add={false} key={music.id} music={music}/>
          }) 
          : <div><h4 className='nada'>Não há músicas</h4></div>
      }


    </MusicListWrapper>
    )
}





const MusicListWrapper = styled.div`
/* background-color:#131921; */
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

.nada{
  color:#fff;
  text-align:center;
  margin-top:30px;
}

`

export default MusicList
