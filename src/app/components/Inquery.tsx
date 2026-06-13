import { useState } from "react";
import {
  Search,
  Layers,
  Award,
  GraduationCap,
  Zap,
  FileText,
} from "lucide-react";

const types = [
  { id: "all", label: "All Types", icon: Layers },
  { id: "ivel", label: "IVEL Certificate", icon: Award },
  { id: "diploma", label: "Diploma", icon: GraduationCap },
  { id: "acl", label: "Action Capability Level Certificate", icon: Zap },
] as const;

type ExampleType = "ivel" | "diploma" | "acl";

const examples: { code: string; name: string; type: ExampleType }[] = [
  { code: "SZA-2024-LC-001234", name: "Zhang Wei", type: "ivel" },
  { code: "SZA-2024-DIP-005678", name: "Li Ming", type: "diploma" },
  { code: "SZA-2023-LC-009876", name: "Wang Fang", type: "ivel" },
  { code: "SZA-2022-DIP-003456", name: "Chen Jie", type: "diploma" },
  { code: "SZA-2021-LC-007890", name: "Liu Yang", type: "ivel" },
  { code: "SZA-2024-ACL-002301", name: "Sun Hao", type: "acl" },
  { code: "SZA-2023-ACL-000812", name: "Zhao Ling", type: "acl" },
];

const typeStyles: Record<ExampleType, { icon: typeof Award; color: string }> = {
  ivel: { icon: Award, color: "#1aa39a" },
  diploma: { icon: FileText, color: "#1d4ed8" },
  acl: { icon: Zap, color: "#9333ea" },
};

export function Inquery() {
  const [activeType, setActiveType] = useState<string>("diploma");
  const [query, setQuery] = useState("");

  return (
    <section className="px-6 py-20 md:px-16 lg:px-28 xl:px-40">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0d1117] md:text-4xl">
            Search for Certificate
          </h1>
          <p className="mt-3 text-[#0d1117]/60">
            Enter the certificate number to retrieve certificate details and
            verification status
          </p>
        </div>

        {/* Type filter pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {types.map((t) => {
            const Icon = t.icon;
            const active = activeType === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveType(t.id)}
                className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-[#1d4ed8] bg-[#1d4ed8] text-white"
                    : "border-black/10 bg-white text-[#0d1117]/70 hover:bg-black/[0.03]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#0d1117]/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter certificate number (e.g., SZA-2024-LC-001234)"
              className="w-full rounded-xl border border-[#1d4ed8]/40 py-3.5 pl-12 pr-4 text-[#0d1117] outline-none transition-colors placeholder:text-[#0d1117]/40 focus:border-[#1d4ed8]"
            />
          </div>
          <button className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#1d4ed8]/80 px-6 py-3.5 font-medium text-white transition-colors hover:bg-[#1d4ed8]">
            <Search className="h-5 w-5" />
            Search Certificate
          </button>
        </div>

        {/* Examples */}
        <div className="mt-12">
          <p className="text-center text-[#0d1117]/60">
            Try these example certificate numbers:
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((ex) => {
              const { icon: Icon, color } = typeStyles[ex.type];
              return (
                <button
                  key={ex.code}
                  onClick={() => setQuery(ex.code)}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-black/5 bg-[#f5f6f8] px-4 py-3 text-sm transition-colors hover:bg-black/[0.04]"
                >
                  <Icon className="h-4 w-4 shrink-0" style={{ color }} />
                  <span className="font-medium" style={{ color }}>
                    {ex.code}
                  </span>
                  <span className="text-[#0d1117]/50">· {ex.name}</span>
                </button>
              );
            })}
          </div>
          <p className="mt-5 text-center text-sm text-[#0d1117]/40">
            Click any example to auto-fill the search field
          </p>
        </div>
      </div>
    </section>
  );
}
