import { Link } from "react-router";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const links: { label: string; to: string }[] = [
  { label: "IVEL", to: "/" },
  { label: "Fields", to: "/" },
  { label: "Members", to: "/" },
  { label: "Inquery", to: "/inquery" },
  { label: "About", to: "/about" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f6f8] px-6 py-2 shadow-md shadow-black/5 md:px-10">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" aria-label="Go to home" className="cursor-pointer">
          <Logo showTagline={false} className="md:hidden" />
          <Logo className="hidden md:flex" />
        </Link>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-9 text-sm text-[#0d1117]/60 lg:flex">
          {links.map((link, i) => (
            <Link
              key={`${link.label}-${i}`}
              to={link.to}
              className="transition-colors hover:text-[#0d1117]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="https://www.szasso.top/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-xl bg-[#1aa39a] px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#178a82]"
          >
            Join In Us
          </a>
        </div>
      </div>
    </nav>
  );
}