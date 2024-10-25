import { View, Button } from "react-native";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function SignIn() {
  const { signIn } = useAuth();
  const handleSignIn = () => {
    signIn();
    router.replace("/");
  };
  return (
    <SafeAreaView>
      <View>
        <Button title="Sign in" onPress={handleSignIn} />
      </View>
    </SafeAreaView>
  );
}
