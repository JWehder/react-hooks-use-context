import React, { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    return <UserContext.Proider value= {{ user, setUser }}>{ children }</UserContext.Proider>
}

export { UserProvider, UserContext }