import { Redirect } from "expo-router";
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return null;
  }

  return <Redirect href="/auth/login" />;
}
