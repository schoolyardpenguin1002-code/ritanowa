import { FloatingPhoneButton } from "@/components/FloatingPhoneButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex min-h-[50vh] flex-1 flex-col">{children}</main>
      <Footer />
      <FloatingPhoneButton />
    </>
  );
}
