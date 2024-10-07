import DashboardLayout from "@/components/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import PageContainer from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import VulnerabilityForm from "@/components/vulnerability/vulnerability-form";

export default function Home() {
  const [open, setOpen] = useState(false);

  const vulnerabilities: any[] = [
    {
      id: 24,
      name: "SQL Injection",
      description:
        "A code injection technique that exploits a security vulnerability in an application.",
      severity: "High",
      cvss: "7.5",
      cve: "CVE-2021-XXXX",
      status: "open",
    },
    {
      id: 24,
      name: "SQL Injection",
      description:
        "A code injection technique that exploits a security vulnerability in an application.",
      severity: "High",
      cvss: "7.5",
      cve: "CVE-2021-XXXX",
      status: "open",
    },
    {
      id: 24,
      name: "SQL Injection",
      description:
        "A code injection technique that exploits a security vulnerability in an application.",
      severity: "High",
      cvss: "7.5",
      cve: "CVE-2021-XXXX",
      status: "open",
    },
  ];

  return (
    <DashboardLayout>
      <Card>
        <CardContent>
          <PageContainer>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3>{`Vulnerability (${vulnerabilities.length})`}</h3>

                <Button onClick={() => setOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
                <Modal
                  isOpen={open}
                  onClose={() => setOpen(false)}
                  title="Upadate Or New"
                >
                  <VulnerabilityForm />
                </Modal>
              </div>
              <Separator />
              <VulnerabilityTable
                data={vulnerabilities}
                totalData={vulnerabilities.length}
              />
            </div>
          </PageContainer>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
