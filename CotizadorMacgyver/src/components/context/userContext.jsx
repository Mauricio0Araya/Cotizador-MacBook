import React, { createContext, useState } from 'react';

// Crea el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
