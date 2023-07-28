import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART ,BUY_TO_CART} from "./constaent"

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("ADD_TO_CART condition ", action)
            return [action.data, ...data]

            case REMOVE_FROM_CART:
                console.log("REMOVE_FROM_CART condition ", action);
                // data.length= data.length? data.length-1:[]
                const remainingItem = data.filter((item)=>item.id!==action.data);
                console.log('remaining iem',remainingItem)
                return [...remainingItem]

                case EMPTY_CART:
                    console.log("EMPTY CART condition ", action);
                    data =[]
                    return [...data]
                
                    // case BUY_TO_CART:
                    //     console.log("BUY_TO_CART condition ", action)
                    //     return [action.data, ...data]    
        default:
            return data
    }
}