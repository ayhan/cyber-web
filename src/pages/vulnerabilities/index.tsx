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
import useVulnerability from "@/hooks/useVulnerability";

export default function Home() {
  const [open, setOpen] = useState(false);

  const { vulnerabilities } = useVulnerability();

  return (
    <DashboardLayout>
      <Card>
        <CardContent>
          <PageContainer>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3>{`Vulnerability (${vulnerabilities?.length})`}</h3>

                <Button onClick={() => setOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
                <Modal
                  isOpen={open}
                  onClose={() => setOpen(false)}
                  title="Upadate Or New"
                >
                  <VulnerabilityForm setOpenModal={setOpen} />
                </Modal>
              </div>
              <Separator />
              {vulnerabilities && (
                <VulnerabilityTable
                  data={vulnerabilities}
                  totalData={vulnerabilities?.length}
                />
              )}
            </div>
          </PageContainer>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
