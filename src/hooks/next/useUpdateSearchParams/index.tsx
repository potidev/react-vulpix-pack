"use client";

import { useSearchParams } from "next/navigation";

export const useUpdateSearchParams = () => {
  const searchParams = useSearchParams();

  const setSearchParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState(null, '', newUrl)
  }


  const setSearchParams = (paramsList: { key: string, value: string }[]) => {
    const params = new URLSearchParams(window.location.search);

    paramsList.forEach(({ key, value }) => {
      params.set(key, value);
    });

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', newUrl);
  };


  const removeSearchParam = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState(null, '', newUrl)
    console.log(key);
  }


  const removeSearchParams = (keys: string[]) => {
    const params = new URLSearchParams(window.location.search);

    keys.forEach(key => {
      params.delete(key);
    });

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', newUrl);
    console.log(keys);
  };

  return { setSearchParam, setSearchParams, removeSearchParam, removeSearchParams };
}