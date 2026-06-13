import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const languages = [
  { code: "EN", label: "English" },
  { code: "CN", label: "Chinese" },
] as const;

type LangCode = (typeof languages)[number]["code"];

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<LangCode>("EN");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#0d1117] shadow-sm transition-colors hover:bg-black/[0.02]"
      >
        {current}
        <ChevronDown
          className={`h-4 w-4 text-[#0d1117]/50 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-xl border border-black/10 bg-white py-1 shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrent(lang.code);
                setOpen(false);
              }}
              className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-sm text-[#0d1117] transition-colors hover:bg-black/[0.04]"
            >
              <span>
                {lang.code} · {lang.label}
              </span>
              {current === lang.code && (
                <Check className="h-4 w-4 text-[#1d4ed8]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}