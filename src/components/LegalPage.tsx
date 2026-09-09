import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";

interface LegalPageProps {
  title: string;
  children: ReactNode;
}

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <article className="bg-[#fbfdfc] py-16 sm:py-20">
      <div className="w-full px-[72px]">
        <p className="text-xs font-bold uppercase tracking-wider text-[#008060]">
          {siteConfig.name}
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 7 September 2026</p>
        <div className="mt-10 space-y-5 text-sm leading-relaxed text-slate-700">
          {children}
        </div>
      </div>
    </article>
  );
}
