import React from 'react'
export const user = {

    email: "",
    password: "",
    isLoggedIn: false
}
export const logOut = () => {
    console.log("logged out...")
}

export const AppContext = React.createContext({
    user: user,
    logOut: logOut
}
);
