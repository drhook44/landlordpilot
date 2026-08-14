'use client';

import { useState, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signIn = async (email, password) => {
    setLoading(true);
    // Simulate API delay
    await new Promise(r => setTimeout(r, 800));
    // Demo login — any email/password works
    setUser({ email, name: email.split('@')[0].replace(/\./g, ' ').replace(/\b\w/g, l => l.toUpperCase()) });
    setLoading(false);
    router.push('/dashboard');
  };

  const signUp = async (name, email, password) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setUser({ email, name });
    setLoading(false);
    router.push('/onboarding');
  };

  const signOut = () => {
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}