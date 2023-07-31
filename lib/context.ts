import { createContext } from "react";

interface UserContextProps {
  user: null | {
    photoURL?: string;
  };
  username: null | string;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  username: null,
});
