import React, { useState, useContext, useEffect } from "react";

const UserContext = React.createContext();
// const UserUpdateContext = React.createContext();


export function useUser() {
    return useContext(UserContext);
}




export function UserProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    // useEffect(() => {
    //     localStorage.setItem('user', JSON.stringify(user));
    // }, [user]);



    return (
        <UserContext.Provider value={{ user, setUser }}>

            {children}
        </UserContext.Provider>
    );
}