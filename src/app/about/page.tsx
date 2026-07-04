import AboutTabs from "@/components/AboutTabs";
import Reveal from "@/components/Reveal";

const VALID = ["company", "team", "gallery", "clients"] as const;
type TabId = (typeof VALID)[number];

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const initialTab: TabId = VALID.includes(tab as TabId) ? (tab as TabId) : "company";

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-28">
      <Reveal>
        <div className="py-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--burgundy)]">Home › About Us</p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">About the Company</h1>
        </div>
      </Reveal>

      <AboutTabs initialTab={initialTab} />
    </div>
  );
}
