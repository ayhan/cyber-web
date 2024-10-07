import DashboardLayout from "@/components/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import VulnerabilityListingPage from "@/components/vulnerability/views/vulnerability-listing-page";

export default function Home() {
  return (
    <DashboardLayout>
      <Card>
        <CardContent>
          <VulnerabilityListingPage />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
