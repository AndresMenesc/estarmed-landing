type Props = Record<string, string | number | boolean | undefined>;

const ENABLED =
  process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true" &&
  typeof window !== "undefined";

function consented(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem("estarmed_cookie_consent") === "accepted";
  } catch {
    return false;
  }
}

/** Fire only after cookie consent and when analytics env is enabled. */
export function track(event: string, props: Props = {}) {
  if (!ENABLED || !consented()) return;
  const ga = process.env.NEXT_PUBLIC_GA4_ID;
  // @ts-expect-error gtag optional
  if (ga && typeof window.gtag === "function") {
    // @ts-expect-error gtag
    window.gtag("event", event, props);
  }
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, props);
  }
}

export function loadAnalyticsScripts() {
  if (!ENABLED || !consented()) return;
  const ga = process.env.NEXT_PUBLIC_GA4_ID;
  if (!ga || document.getElementById("ga4-estarmed")) return;
  const s = document.createElement("script");
  s.id = "ga4-estarmed";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${ga}`;
  document.head.appendChild(s);
  const inline = document.createElement("script");
  inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}',{anonymize_ip:true});`;
  document.head.appendChild(inline);
}
