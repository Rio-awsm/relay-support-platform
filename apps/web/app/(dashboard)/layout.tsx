import { DashboardLayout } from "@/modules/dashboard/ui/layouts/dashboard-layout";
import React from "react";

const DashboardPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardLayout;
