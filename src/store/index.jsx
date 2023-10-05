import { configureStore } from "@reduxjs/toolkit";
import  user  from "./slices/userSlices";

const store = configureStore({
    reducer :{
        users:user
    }
});
export default store;