import { FETCH } from "./action-type"



const intialState={
    moviesList:[]
}


export const moviesReducer=(state=intialState,action)=>{
    switch (action.type) {
    case FETCH: return{
        ...state, 
        moviesList: action.payload
    }
        default:return state 
            
    }
}