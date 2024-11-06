import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';
import type { z } from 'zod';

import { userSchema } from '@/schemas/users';

// existing useQueryHook
export const idAtom = atom(1);

export const userAtom = atomWithQuery((get) => ({
  queryKey: ['users', get(idAtom)],
  queryFn: async ({
    queryKey: [, id],
  }): Promise<z.infer<typeof userSchema>> => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id as number}`
    );
    return res.json() as Promise<z.infer<typeof userSchema>>;
  },
  select: (data): z.infer<typeof userSchema> => userSchema.parse(data),
}));
