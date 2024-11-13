'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents(): null {
  const pathname = usePathname();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchParamsString = searchParams.toString();
    const url = `${pathname}?${searchParamsString}`;
    console.log(url);
  }, [pathname, searchParams]);

  return null;
}
