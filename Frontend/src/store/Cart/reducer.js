import { removeCartItem } from "./action"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./actionType"

const initialState={
    cart:null,
    loading:false,
    error:null,
    cartItems:[]
}
export const cartReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_CART_REQUEST:{
            return {...state,loading:true,error:null}
        }
        case GET_CART_SUCCESS:{
            return {...state,loading:false,cart:action.payload,cartItems:action.payload.cartItems}
        }
        case GET_CART_FAILURE:{
            return {...state,loading:false,error:action.payload}
        }

        case ADD_ITEM_TO_CART_REQUEST:
            return {...state,loading:true,error:null};

        case ADD_ITEM_TO_CART_SUCCESS:
            return {...state,loading:false,
                cartItems:[...state.cartItems,action.payload.cartItems]
            }

        case ADD_ITEM_TO_CART_FAILURE:
            return {...state,loading:false,error:action.payload}

        case REMOVE_CART_ITEM_REQUEST:
            return {...state,loading:true,error:null}
        
        case REMOVE_CART_ITEM_SUCCESS:
            return {...state,
                deleteCartItem:action.payload,
                loading:false
            }
        
        case REMOVE_CART_ITEM_FAILURE:
            return {...state,loading:false,error:action.payload}

        case UPDATE_CART_ITEM_REQUEST:
            return {...state,loading:true,error:null}
        
        case UPDATE_CART_ITEM_SUCCESS:
            return {...state,loading:false,
                updateCartItem:action.payload,
            }
        
        case UPDATE_CART_ITEM_FAILURE:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }


}