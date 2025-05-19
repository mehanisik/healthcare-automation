'use client';

import type { User } from '@supabase/supabase-js';
import { createClient } from '#/db/supabase/client';
import { createContext, useEffect, useMemo, useState } from 'react';

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const data = useMemo(() => ({ user, isLoading }), [user, isLoading]);

  return (
    <AuthContext value={data}>
      {children}
    </AuthContext>
  );
}
