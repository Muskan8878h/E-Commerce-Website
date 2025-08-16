import React,{ createContext,useState,useEffect,useContext} from 'react'
import { authDataContext } from './authContext';
import axios from 'axios';
import { linkWithCredential } from 'firebase/auth';

export const userDataContext =createContext();
const UserContext = ({children}) => {
    let {userData,setUserData}=useState("");
    let {serverUrl}=useContext(authDataContext);

    
    const getCurrectUser=async()=>{
        try{
            let result=await axios.post(serverUrl+"/api/user/getcurrectuser",
              {}, {withCredentials:true}
            )
            setUserData(result.data);
            console.log(result.data);
        }
        catch(error){
          setUserData(null);
          console.log(error);
        }
    }
    useEffect(()=>{
      getCurrectUser();
    })


    let value={userData,setUserData,getCurrectUser};
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
