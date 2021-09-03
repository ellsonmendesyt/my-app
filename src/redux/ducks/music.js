import axios from 'axios'

// ACTIONS


const FETCH_MUSIC_REQUEST= 'deez/music/fetch_music_request';
const FETCH_MUSIC_SUCCESS= 'deez/music/fetch_music_succes';
const FETCH_MUSIC_FAILURE= 'deez/music/fetch_music_failure';
const DOWNLOAD_COMPLETE = 'deez/music/download_complete'

const ADD_TO_LIST = 'deez/music/add_to_list';
const REMOVE_FROM_LIST = 'deez/music/remove_from_list';




// INITIAL STATE
const initialState={
    numOfMusics:0,
 
    musics:[],
    mylist:[],
    error:'',
    loading: true,
    downloaded:false,
    
}




///action cretors


export const fetchMusicSuccess=(musics)=>{
    return{
        type:FETCH_MUSIC_SUCCESS,
        payload:musics
    }
}



export const fetchMusicFailure = (error)=>{
    return{
        type:FETCH_MUSIC_FAILURE,
        payload:error
    }
}

export const fetchMusicRequest = ()=>{
    return{
        type:FETCH_MUSIC_REQUEST,
      
    }
}

export const downloadComplete = ()=>{
    return{ type:DOWNLOAD_COMPLETE}
}

export const addToList=(music)=>{
    return{
        type:ADD_TO_LIST,
        payload:music
    }
}
export const removeFromList=(music)=>{
    return{
        type:REMOVE_FROM_LIST,
        payload:music
    }
}



export default function reducer (state=initialState, action){
    switch(action.type){
        case FETCH_MUSIC_REQUEST:
            return{
                ...state,
                musics:[],
                loading:true,
                error:''
            }
     
        case FETCH_MUSIC_SUCCESS:
            return{
                ...state,
                    musics:action.payload,
                    error:'',
                    loading:false,
                    numOfMusics: action.payload.length
            }
        case FETCH_MUSIC_FAILURE:
            return{
                ...state,
                musics:[],
                error: action.payload.error,
                loading:false
            }
            
        case ADD_TO_LIST:
            return{
                ...state,
                // mylist:[...state.mylist, action.payload]
                mylist:[...state.mylist.filter(music=>music.id !== action.payload.id), action.payload]
                
            }
        case REMOVE_FROM_LIST:  
            return{
                ...state,
                mylist:state.mylist.filter(music=>{ return music !==action.payload})
                
            }
        case DOWNLOAD_COMPLETE:
            return{
                ...state,
                downloaded:true,
            }
       

        default: return state
    }
}

//dispatch actions from inside actions with thunks
export const fetchMusicThunk = ()=>{
    return (dispatch)=>{
        
         ///pagination&index=0&limit=10
        var options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/playlist/1001939451',
            headers: {
              'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
              'x-rapidapi-key': 'bbf32784a9msh9fce2a6fb68e65cp1b9eb6jsn44e8c4d6e8ac'
            }
          };
          
          dispatch(fetchMusicRequest())
          axios.request(options)
          
          //loading
    
          
      .then(res=>{
   
          let musics =res.data.tracks.data;
          
         
          dispatch(fetchMusicSuccess(musics));
       
          dispatch(downloadComplete())
      })
      .catch(error=>{
          
          dispatch(fetchMusicFailure(error.message))
      })
    }
}



