'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ClientRootLayout({ children }: Props) {
  return (
    <>
      {children}
    </>
  );
}
