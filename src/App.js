import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { fetchMusicThunk } from './redux/ducks/music';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


import Spinner from './components/Spinner'

import MusicList from './components/MusicList';
import Paginate from './components/Paginate'
import Layout from './components/Layout'

import styled from 'styled-components'





function App() {
  
  const dispatch = useDispatch();

  
  const musics = useSelector(store=>store.musics);
  const downloaded = useSelector(store=>store.downloaded);
  const mylist = useSelector(store=> store.mylist);



  useEffect(()=>{
    dispatch(fetchMusicThunk())
  },[]);
  


  return (
    <AppWrapper className="App">
     
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
            {downloaded===false? <Spinner/> : <Paginate musics={musics} downloaded={downloaded}/>}
            </Route>

            <Route path='/lista'>
            { <MusicList musics={mylist} />}
            </Route>
          </Switch>
        </Layout>
      </Router>
    </AppWrapper>
  );
}










const AppWrapper= styled.div`
display: flex;
flex-direction: column;

justify-content: center;
align-items: center;


.fa:hover{
    color:#1AD2FB;
}

position:relative;
`

export default App;



