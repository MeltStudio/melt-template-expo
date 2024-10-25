import { View, Text, Button, ActivityIndicator, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useAtom } from "jotai";
import { idAtom, userAtom } from "@/store/users";

export default function Index() {
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
}
