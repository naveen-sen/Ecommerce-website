import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./actionType"

const initialState = {
    payments:[],
    currentPayment:null,
    error:null,
    loading:false,
}


export const paymentReducer = (state = initialState,action)=>{
    switch(action.type){
        case CREATE_PAYMENT_REQUEST:
            return {...state,loading:true,error:null}
        case CREATE_PAYMENT_SUCCESS:
            return {...state,loading:false,currentPayment:action.payload,payments:[...state.payments,action.payload],error:null}
        case CREATE_PAYMENT_FAILURE:
            return {...state,loading:false,error:action.payload}
        case UPDATE_PAYMENT_REQUEST:
            return {...state,loading:true,error:null}
        case UPDATE_PAYMENT_SUCCESS:
            return {...state,loading:false,
                currentPayment: action.payload,
        payments: state.payments.map(payment => 
        payment.id === action.payload.id ? action.payload : payment),
        error:null
            }
        case UPDATE_PAYMENT_FAILURE:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}