import { useAtom } from 'jotai';
import React from 'react';
import { ActivityIndicator, Button, Pressable, Text, View } from 'react-native';

import { useAuth } from '@/hooks/useAuth';
import { idAtom, userAtom } from '@/store/users';

const Index = (): JSX.Element => {
  const { signOut } = useAuth();
  const [{ data, isPending, isError, isRefetching }] = useAtom(userAtom);
  const [id, setId] = useAtom(idAtom);
  if (isError) return <Text>Error</Text>;
  return (
    <View className="flex justify-center items-center h-full">
      {isPending || isRefetching ? (
        <ActivityIndicator />
      ) : (
        <>
          <Pressable
            className="bg-red-500 border border-red-200 rounded-lg flex justify-center items-center p-4"
            onPress={signOut}
          >
            <Text className="text-white">Sign out</Text>
          </Pressable>
          <Text>{data?.email}</Text>
          <Button title="Change user" onPress={() => setId(id + 1)} />
        </>
      )}
    </View>
  );
};

export default Index;
