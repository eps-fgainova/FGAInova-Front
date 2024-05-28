/* eslint-disable no-undef */
import React, { createContext, useContext, useEffect, useState } from 'react';

// Defina a interface AuthContextType
interface User {
  _id: string | undefined;
  id?: string;
  name?: string;
  // Outros campos do usuário, conforme necessário
}

interface Order {
  combo: string[];
  sanduiche: string[];
  bebida: string[];
  acompanhamento: string[];
  sobremesa: string[];
  cupom: string;
  valorTotal: number;
  clienteId: string;
  entregador: string;
  retiradaLocal: boolean;
}

interface AuthContextType {
  isAuthenticate: boolean;
  setIsAuthenticate: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  token: string | undefined;
  preOrder: unknown[]; // Ajuste o tipo conforme necessário
  setPreOrder: React.Dispatch<React.SetStateAction<unknown[]>>;
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
  logOut: () => void;
}

// Inicialize o contexto com um valor vazio e tipado corretamente
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    _id: undefined,
    id: undefined,
    name: undefined,
  });
  const [token, setToken] = useState<string | undefined>(undefined);
  const [preOrder, setPreOrder] = useState<unknown[]>([]);
  const [order, setOrder] = useState<Order>({
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

function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth, type AuthContextType };
