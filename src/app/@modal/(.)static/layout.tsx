import { PageModal } from "@/components/PageModal";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <PageModal>{children}</PageModal>;
};

export default Layout;
