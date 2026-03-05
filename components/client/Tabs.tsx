'use client';

import { ReactNode } from 'react'

export default function Tabs({ children }: { children: ReactNode }) {

  return (
    <>
      <div className="tabs tabs-lift">
        {children}
      </div>

    </>
  );

}