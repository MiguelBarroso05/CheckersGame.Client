import axios from 'axios';
import React from 'react'
import { createContext, useState, ReactNode, useEffect } from "react";
import User from '../Types/user';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  user: User | null
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const getuserData = async (token: string) => {
    if (token && token?.length > 0) {
       await axios.get('http://localhost:5296/api/user/me', { headers: { Authorization: `Bearer ${token}` } }).then(res => setUser(res.data)).catch(err => console.log(err));
    }
    }
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    if (token) {
      getuserData(token)
    }
  }, []);

  const login = (token: string) => {
  localStorage.setItem("token", token);
    setIsLoggedIn(true);
    getuserData(token)
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate('/')
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};



export default AuthContext