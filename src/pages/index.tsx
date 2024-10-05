import ThemeToggle from "@/components/theme-toggle";
import DashboardLayout from "@/components/dashboard-layout";

export default function Home() {
  return (
    <DashboardLayout>
      <main className="flex justify-center items-center h-screen">
        <ThemeToggle />
        <h1>Dashboard</h1>
      </main>
    </DashboardLayout>
  );
}
