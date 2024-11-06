import { useAtom } from 'jotai';

import { userAtom } from '@/store/auth';

const mockUser = {
  id: '123',
  name: 'John Doe',
};

export const useAuth = (): {
  user: typeof mockUser | null;
  signIn: () => void;
  signOut: () => void;
} => {
  const [user, setUser] = useAtom(userAtom);

  const signIn = (): void => {
    setUser(mockUser);
  };

  const signOut = (): void => {
    setUser(null);
  };

  return { user, signIn, signOut };
};
