import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { BelowFold } from "@/components/landing/below-fold";
import { SiteFooter } from "@/components/landing/site-footer";
import { DemoModalProvider } from "@/components/landing/demo-modal";
import { CookieBanner } from "@/components/landing/cookie-banner";

export default function Home() {
  return (
    <DemoModalProvider>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <BelowFold />
      </main>
      <SiteFooter />
      <CookieBanner />
    </DemoModalProvider>
  );
}
