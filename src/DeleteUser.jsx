import React from "react";
import { useDispatch } from "react-redux";

import {removeUsers} from "./store/slices/userSlices"
const DeleteUser = () => {
  const dispatch = useDispatch()
    return (
        
      <><button onClick={()=> dispatch(removeUsers())}>
        
        Delete Users
        </button></>
    );
  };
  export default DeleteUser;
  