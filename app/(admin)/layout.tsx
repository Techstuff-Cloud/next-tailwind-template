'use client';
import * as React from 'react';
import AdminLayout from '@/components/AdminLayout';
import { getAndSetToken } from '@/lib/firebase/getAndSetToken';
import { useEffect } from 'react';
import { auth } from '@/lib/firebase/firebase';

export default function ADminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const addTokenToCookies = async (token: string) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token),
      });

      if (!response.ok) {
        throw new Error('Failed to add token to cookies');
      }
    } catch (error) {
      console.error('Error adding token to cookies:', error);
    }
  };

  auth.onAuthStateChanged(async (user) => {
    const token = await user?.getIdToken();
    console.log('token', token);
    addTokenToCookies(token as string);
  });

  return <AdminLayout>{children}</AdminLayout>;
}
