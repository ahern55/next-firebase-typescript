import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    if (!saved) {
      return defaultValue;
    }
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  } else {
    return defaultValue;
  }
}

export default function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
