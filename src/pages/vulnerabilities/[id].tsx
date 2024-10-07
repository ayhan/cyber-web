import DashboardLayout from "@/components/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";

import PageContainer from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";

import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import VulnerabilityForm from "@/components/vulnerability/vulnerability-form";
import VulnerabilityTable from "@/components/vulnerability/tables";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { query } = router;
  console.log("🔥 ~ router:", router);
  const {
    data: vulnerability,
    error,
    isLoading,
  } = useSWR(query.id ? `/api/vulnerability/${query.id}` : null);

  return (
    <DashboardLayout>
      <Card>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              {vulnerability && (
                <VulnerabilityForm vulnerability={vulnerability} />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
