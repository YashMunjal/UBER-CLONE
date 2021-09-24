import {createSlice } from "@reduxjs/toolkit"

const initialState ={
    origin: null,
    destination:null,
    travelTimeDestination:null
}


export const navSlice=createSlice({
            name:'nav',
            initialState,
            reducer:{
                setOrigin:(state,action)=>{
                    state.origin=action.payload;
                },
                setDestination:(state,action)=>{
                    state.destination=action.payload;
                },
                setTravelTimeDestination:(state,action)=>{
                    state.travelTimeDestination=action.payload;
                }
            }
})

export const {setOrigin,setDestination,setTravelTimeDestination}=navSlice.actions;


//Selectors 

export const selectOrigin =(state)=>state.nav.origin
export const selectDestination =(state)=>state.nav.destination
export const selectTravelTimeInformation =(state)=>state.nav.travelTimeDestination

export default navSlice.reducer;




