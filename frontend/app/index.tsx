import { Redirect } from "expo-router";

export default function IndexRedirect() {
  return <Redirect href="/auth/test-auth" />;
}
