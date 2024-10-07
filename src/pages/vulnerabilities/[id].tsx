import DashboardLayout from "@/components/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";

import VulnerabilityForm from "@/components/vulnerability/vulnerability-form";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { query } = router;

  const { data: vulnerability } = useSWR(
    query.id ? `/api/vulnerability/${query.id}` : null
  );

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
