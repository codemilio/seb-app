import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type AuthContextType = {
    currentUser: UserData | null
    loading: boolean
    login: (email: string, password: string) =>  Promise<void>
    logout: () => void
}

type AuthProviderProps = {
    children: ReactNode
}

export type UserBasicData = {
    name: string
    tell: string 
    gender: 'MASCULINE' | 'FEMININE' | 'OTHER'
}

export type UserData = UserBasicData & {
    email: string
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (user) {
        const userDoc = await firestore().collection('users').doc(user.uid).get()
        const userData = userDoc.data() as UserBasicData
        setCurrentUser({ ...userData, email: user.email! })
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
        const response = await auth().signInWithEmailAndPassword(email, password);
        const uid = response.user.uid;

        const userDoc = await firestore().collection('users').doc(uid).get();
        const userData = userDoc.data() as UserBasicData
        setCurrentUser({ ...userData, email });
      } catch (error) {
        console.error(error);
      }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
