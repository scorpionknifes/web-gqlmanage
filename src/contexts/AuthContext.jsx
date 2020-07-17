import React, { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();

export default function AuthProvider(props) {
    
    const [auth, setAuth] = useState(false)

    return (
        <AuthContext.Provider value={{
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}