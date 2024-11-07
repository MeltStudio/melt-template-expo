import { Feather } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AcresGradient from '@/assets/images/acres-gradient.svg';
import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';
import { ThemedText } from '@/components/ThemedText';
import { useAuth } from '@/hooks/useAuth';

const SignIn = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const handleSignIn = (): void => {
    signIn();
    router.replace('/');
  };
  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        colors={['#0A517F', '#000201']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.7, y: 0 }}
        className="flex-1"
      >
        <View className="flex-1 justify-center items-center gap-10">
          <AcresGradient />
          <ThemedText type="defaultSemiBold" className="text-white text-3xl">
            Login
          </ThemedText>
        </View>
      </LinearGradient>
      <View className="flex-1 bg-white">
        <View
          className="absolute -top-24 inset-x-0 mx-4 bg-white justify-center items-center px-4 py-8 rounded-lg shadow-lg gap-6"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View className="gap-4  w-full">
            <ThemedText type="defaultSemiBold" className="text-left text-lg">
              Username*
            </ThemedText>
            <TextInput
              leftIcon={<Feather name="user" size={24} color="gray" />}
              placeholder="Username"
            />
          </View>
          <View className="gap-4 w-full">
            <ThemedText type="defaultSemiBold" className="text-left text-lg">
              Password*
            </ThemedText>
            <TextInput
              placeholder="Password"
              leftIcon={<Feather name="lock" size={24} color="gray" />}
              rightIcon={
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Feather
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={24}
                    color="gray"
                  />
                </Pressable>
              }
              secureTextEntry={!showPassword}
            />
          </View>
          <View className="w-full">
            <Button
              onPress={handleSignIn}
              align="center"
              variant="primary"
              className="py-4 my-4 shadow-lg w-full"
            >
              <ThemedText
                type="defaultSemiBold"
                className="text-center text-white "
              >
                Continue
              </ThemedText>
            </Button>
            <View className="flex-row items-center gap-4 w-full">
              <Checkbox />
              <ThemedText type="default" className="text-gray-600 text-md ">
                Use Face ID for Login
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
