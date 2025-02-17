'use client';

import { useSearchParams } from 'next/navigation';
import { Fragment, Suspense } from 'react';

function ChildrenWrapperInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  return <Fragment key={searchParams.get('q')}>{children}</Fragment>;
}

export default function ChildrenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChildrenWrapperInner>{children}</ChildrenWrapperInner>
    </Suspense>
  );
}