import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/hooks/useAuth";

export default function Layout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
}
