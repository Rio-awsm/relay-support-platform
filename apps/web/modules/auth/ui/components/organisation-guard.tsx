"use client";

import { OrgSelectView } from "@/modules/auth/ui/views/org-select-view";
import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "../layouts/auth-layout";

export const OrganisationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectView />
      </AuthLayout>
    );
  }

  return <>{children}</>;
};
