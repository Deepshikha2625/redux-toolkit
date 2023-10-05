import {createSlice} from "@reduxjs/toolkit";
const user = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
          state.push(action.payload);
        
        },
        removeUsers(state,action){
      
          return [];
        },
        deleteUser(state,action){
          state.splice(action.payload,1)
        },
    }
});
export default user.reducer;
export const {addUser,removeUsers,deleteUser} = user.actions;