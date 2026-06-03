import { FloatingPhoneButton } from "@/components/FloatingPhoneButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex min-h-[50vh] w-full min-w-0 max-w-[100vw] flex-1 flex-col overflow-x-clip pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        {children}
      </main>
      <Footer />
      <FloatingPhoneButton />
    </>
  );
}
