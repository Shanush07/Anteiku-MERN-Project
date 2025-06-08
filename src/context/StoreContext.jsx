import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
    setCartItems((prev) => {
        const updatedCart = { ...prev };
        if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
        } else {
        delete updatedCart[itemId];
        }
        return updatedCart;
    });
    };

    const removeEntirelyFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    };



    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        removeEntirelyFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider