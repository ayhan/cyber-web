import DashboardLayout from "@/components/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";

import VulnerabilityForm from "@/components/vulnerability/vulnerability-form";
import useSWR from "swr";
import { useRouter } from "next/router";

import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const cookies = parseCookies({ req });

  const accessToken = cookies.access_token;

  if (!accessToken) {
    res.writeHead(302, { Location: "/login" });
    res.end();
    return { props: {} };
  }

  return {
    props: {},
  };
};
export default function Home() {
  const router = useRouter();
  const { query } = router;

  const { data: vulnerability } = useSWR(
    query.id ? `/api/vulnerability/${query.id}` : null
  );

  return (
    <DashboardLayout>
      <Card className="h-screen">
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start justify-center">
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
