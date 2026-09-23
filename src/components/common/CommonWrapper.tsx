import { ReactNode } from "react";

interface CommonWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function CommonWrapper({
  children,
  className = "",
}: CommonWrapperProps) {
  return (
    <main
      className={`mx-auto min-h-screen w-full max-w-2xl px-4 py-5 sm:px-6 ${className}`}
    >
      {children}
    </main>
  );
}