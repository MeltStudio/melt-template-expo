import { userSchema } from "@/schemas/users";
import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

// existing useQueryHook
export const idAtom = atom(1);

export const userAtom = atomWithQuery((get) => ({
  queryKey: ["users", get(idAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  },
  select: (data) => userSchema.parse(data),
}));
