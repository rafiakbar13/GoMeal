// components/Header.tsx
import React, { ReactNode } from "react";

interface HeaderProps {
  title: string;
  className?: string;
  children?: ReactNode;
}

const Heading: React.FC<HeaderProps> = ({ title, className, children }) => (
  <h1 className={`text-3xl font-bold ${className}`}>
    {title}
    {children}
  </h1>
);

export default Heading;
