"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useUpdateSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setSearchParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState(null, '', newUrl)
  }

  const removeSearchParam = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState(null, '', newUrl)
    console.log(key);
  }

  return { setSearchParam, removeSearchParam };
}