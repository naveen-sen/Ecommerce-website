const initialState={
    user:null,
    isLoading:false,
    error:null,
    jwt:null
}
export const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case "REGISTER_REQUEST":{
            return {...state,isLoading:true}
        }
        case "REGISTER_SUCCESS":{
            return {...state,isLoading:false,jwt:action.payload,error:null}
        }
        case "REGISTER_FAILURE":{
            return {...state,isLoading:false,error:action.payload}
        }
        case "LOGIN_REQUEST":{
            return {...state,isLoading:true}
        }
        case "LOGIN_SUCCESS":{
            return {...state,isLoading:false,jwt:action.payload,error:null}
        }
        case "LOGIN_FAILURE":{
            return {...state,isLoading:false,error:action.payload}
        }
        case "GET_USER_REQUEST":{
            return {...state,isLoading:true}
        }
        case "GET_USER_SUCCESS":{
            return {...state,isLoading:false,user:action.payload,error:null}
        }
        case "LOGOUT":{
            return {...state,isLoading:false,jwt:null}
        }
        default:
            return state
    }

}