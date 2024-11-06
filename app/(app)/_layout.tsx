import { Redirect, Stack } from 'expo-router';
import React from 'react';

import { useAuth } from '@/hooks/useAuth';

const Layout = (): JSX.Element => {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
};

export default Layout;
