import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <DashboardLayout>{children}</DashboardLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
