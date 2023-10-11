'use client';
import { sessionState, setA } from './Session';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function WithAuth(Component) {
  return function WithAuth(props) {
    const session = sessionState;
    useEffect(() => {
      if (!session) {
        redirect('/n');
      }
    }, []);
    if (!session) {
      return null;
    }
    return <Component {...props} />;
  };
}
