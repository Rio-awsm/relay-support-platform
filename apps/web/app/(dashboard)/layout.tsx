import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { OrganisationGuard } from "@/modules/auth/ui/components/organisation-guard";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <OrganisationGuard>{children}</OrganisationGuard>
    </AuthGuard>
  );
};

export default DashboardLayout;
