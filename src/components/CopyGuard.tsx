"use client";

import { useEffect } from "react";

export default function CopyGuard() {
  useEffect(() => {
    const block = (e: Event) => e.preventDefault();
    document.addEventListener("copy", block);
    document.addEventListener("contextmenu", block);
    document.addEventListener("selectstart", block);
    return () => {
      document.removeEventListener("copy", block);
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("selectstart", block);
    };
  }, []);
  return null;
}
