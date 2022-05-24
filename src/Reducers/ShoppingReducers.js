import { TYPES } from "../Actions/ShoppingActions";

export const ShoppingInitialState={
    products:[
        {id:1,name:'Auricular',price:100},
        {id:2,name:'Mouse',price:200},
        {id:3,name:'Teclado',price:300},
        {id:4,name:'Camara Web',price:500},
        {id:5,name:'HHD',price:900},
        {id:6,name:'SSD',price:1000},

    ],
    cart:[]
};

export function ShoppingReducer(state,action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product=>product.id === action.payload);
            //console.log(newItem)
            let itemInCart = state.cart.find(item=>item.id === newItem.id);
            return itemInCart?{
                ...state,
                cart:state.cart.map(item=>(item.id === newItem.id?{...item, quantity:item.quantity+1}:
                    item
                ))
            }:{
                ...state,
                cart:[...state.cart, {...newItem,quantity:1}] 
            }

           
            //retorna el estado actual y luego
            //al cart:le suma el estado actual, mas el nuevo item
            
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            
            let itemToDelete = state.cart.find(item=> item.id === action.payload)
            return itemToDelete.quantity > 1?{
                ...state,
                cart:state.cart.map(item=>item.id === action.payload?{
                    ...item, quantity:item.quantity-1
                }:item)
            }:{
                ...state,
                cart:state.cart.filter(item=>item.id !== action.payload) //creo un nuevo CART filtrado por los id que no coincidan con el que quiero eliminar
            }
        }
         case TYPES.REMOVE_ALL_FROM_CART:{
             return {
                ...state,
                cart:state.cart.filter(item=>item.id !== action.payload) //creo un nuevo CART filtrado por los id que no coincidan con el que quiero eliminar
            }
        }
        case TYPES.CLEAR_CART:{
            return ShoppingInitialState;
        }
        case TYPES.TOTAL_COMPRA:{
            //aca iria la logica de la sumatorioa del price del carrito
        }   
            
        default:
            return state;
    }

}