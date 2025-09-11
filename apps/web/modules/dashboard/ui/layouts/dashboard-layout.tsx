import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { OrganisationGuard } from "@/modules/auth/ui/components/organisation-guard";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";
import React from "react";

export const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <AuthGuard>
      <OrganisationGuard>
        <SidebarProvider defaultOpen={defaultOpen}>
          <DashboardSidebar />
          <main className="flex flex-col flex-1">{children}</main>
        </SidebarProvider>
      </OrganisationGuard>
    </AuthGuard>
  );
};
