/* eslint-disable no-undef */
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});


const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState();
  const [preOrder, setPreOrder] = useState([]);
  const [order, setOrder] = useState({
    combo: [],
    sanduiche: [],
    bebida: [],
    acompanhamento: [],
    sobremesa: [],
    cupom: '',
    valorTotal: 0,
    clienteId: '',
    entregador: '',
    retiradaLocal: false,
  });

  useEffect(() => {
    const dataUser = sessionStorage.getItem('@user');
    const tokenUser = sessionStorage.getItem('@token');

    const data = JSON.parse(dataUser as unknown as string);
    const tokenData = JSON.parse(tokenUser as unknown as string);

    if (data && tokenData) {
      setIsAuthenticate(true);
      setUser(data);
      setToken(tokenData);
    }
  }, [sessionStorage.getItem('@token')]);

  const logOut = () => {
    setIsAuthenticate(false);
    sessionStorage.removeItem('@user');
    sessionStorage.removeItem('@token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticate,
        setIsAuthenticate,
        logOut,
        token,
        preOrder,
        setPreOrder,
        order,
        setOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };