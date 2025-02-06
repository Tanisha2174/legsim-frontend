"use client";

import { ClientPortalSidebar } from "@/components/client-portal/sidebar";


export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FFF7EB]">
      <ClientPortalSidebar />
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
}