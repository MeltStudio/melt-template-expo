import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";

const mockUser = {
  id: "123",
  name: "John Doe",
};

export const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);

  const signIn = () => {
    setUser(mockUser);
  };

  const signOut = () => {
    setUser(null);
  };

  return { user, signIn, signOut };
};
