import React from 'react'
import { createContext } from 'react';
export const authDataContext =createContext();
// export const authDataContext = createContext({ serverUrl: "http://localhost:8000" });


function AuthContext({children}){
    let serverUrl="http://localhost:8000";

    let value={ serverUrl };
  return (
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
  );
}

export default AuthContext;
