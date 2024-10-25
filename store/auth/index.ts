import { atom } from "jotai";

const mockUser = {
  id: "123",
  name: "John Doe",
};

export const userAtom = atom<typeof mockUser | null>(null);
