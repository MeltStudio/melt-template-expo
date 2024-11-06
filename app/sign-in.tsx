import { router } from 'expo-router';
import React from 'react';
import { Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '@/hooks/useAuth';

const SignIn = (): JSX.Element => {
  const { signIn } = useAuth();
  const handleSignIn = (): void => {
    signIn();
    router.replace('/');
  };
  return (
    <SafeAreaView>
      <View>
        <Button title="Sign in" onPress={handleSignIn} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
