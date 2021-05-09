import {createSlice} from "@reduxjs/toolkit";
// initial state of the app
const initialState={
    //when the app start keep everything empty
    name:"",
    email:"",
    photo:""
};

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        // when the user login in
        setUserLoginDetails:(state,action)=>{
            // remember these details
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.photo=action.payload.photo;
        },
        // when the user SignOut
        setSignOutState:state=>{
            // set state to null
            state.name=null;
            state.email=null;
            state.photo=null;
        },
   },
});
export const { setUserLoginDetails,setSignOutState}=userSlice.actions;
export const selectUserName=state=> state.user.name;
export const selectUserEmail=state=> state.user.email;
export const selectUserPhoto=state=> state.user.photo;
export default userSlice.reducer;