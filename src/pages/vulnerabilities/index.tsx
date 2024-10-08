import DashboardLayout from "@/components/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";

import PageContainer from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";

import { Modal } from "@/components/ui/modal";
import { useEffect, useState } from "react";
import VulnerabilityForm from "@/components/vulnerability/vulnerability-form";
import useVulnerability from "@/hooks/useVulnerability";
import { useRouter } from "next/router";

import { DataTable } from "@/components/ui/table/data-table";
import { DataTableFilterBox } from "@/components/ui/table/data-table-filter-box";
import { DataTableResetFilter } from "@/components/ui/table/data-table-reset-filter";
import { DataTableSearch } from "@/components/ui/table/data-table-search";
import { columns } from "@/components/vulnerability/tables/columns";
import {
  SEVERITY_OPTIONS,
  useVulnerabilityTableFilters,
} from "@/components/vulnerability/tables/use-vulnerability-table-filters";

const VulnerabilitiesTable = () => {
  const {
    severityFilter,
    setSeverityFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery,
  } = useVulnerabilityTableFilters();

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { vulnerabilities, setVulnerabilityParams, vulnerabilityIsLoading } =
    useVulnerability();

  useEffect(() => {
    setVulnerabilityParams("?" + router.asPath.split("?")[1]);
  }, [router.asPath]);

  return (
    <DashboardLayout>
      <Card>
        <CardContent>
          <PageContainer>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3>{`Vulnerability (${vulnerabilities?.pagination.totalItems})`}</h3>

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

              <div className="space-y-4 ">
                <div className="flex flex-wrap items-center gap-4">
                  <DataTableSearch
                    searchKey="name"
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setPage={setPage}
                  />
                  <DataTableFilterBox
                    filterKey="severity"
                    title="Severity"
                    options={SEVERITY_OPTIONS}
                    setFilterValue={setSeverityFilter}
                    filterValue={severityFilter}
                  />
                  <DataTableResetFilter
                    isFilterActive={isAnyFilterActive}
                    onReset={resetFilters}
                  />
                </div>
                {vulnerabilities && (
                  <DataTable
                    isLoading={vulnerabilityIsLoading}
                    columns={columns}
                    data={vulnerabilities.vulnerabilities}
                    totalItems={vulnerabilities.pagination.totalItems}
                  />
                )}
              </div>
            </div>
          </PageContainer>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default VulnerabilitiesTable;
