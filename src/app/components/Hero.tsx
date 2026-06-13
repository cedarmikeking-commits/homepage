import { useState } from "react";
import { Check, Handshake } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LoginModal } from "./LoginModal";

const features = [
  "100+ Members",
  "34+ Work Fields",
  "IVEL 1-4 Level",
];

export function Hero() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden">
      {/* Background image */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1758270705290-62b6294dd044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Diverse group of vocational students collaborating around a laptop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlays for contrast — light, brand-tinted */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/60 via-[#1e3a5f]/25 to-transparent backdrop-blur-xs" />

      <div className="relative z-10 flex h-full flex-col justify-center px-6 py-20 md:px-16 lg:px-28 xl:px-40">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white backdrop-blur">
          <Handshake className="h-3.5 w-3.5 text-[#1aa39a]" />
          SZAA
        </span>

        <h1 className="max-w-4xl min-h-[9rem] text-4xl font-bold leading-[1.08] tracking-tight text-white md:min-h-[12rem] md:text-5xl lg:min-h-[16rem] lg:text-6xl xl:text-7xl">
          Become Skilled,
          <br />
          Connected &amp;
          <br />
          Globally Recognized
        </h1>

        <p className="mt-6 flex min-h-[3rem] max-w-xl items-start text-sm uppercase tracking-wide text-white/75 md:text-base">
          An organization for international mutual recognition
          of vocational education
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <button
            onClick={() => setLoginOpen(true)}
            className="cursor-pointer rounded-full bg-[#1aa39a] px-7 py-5 font-medium text-white transition-transform hover:scale-[1.03]"
          >
            Start Your Recognition
          </button>
          <button className="cursor-pointer rounded-full border border-white/20 bg-white/5 px-7 py-5 font-medium text-white backdrop-blur transition-colors hover:bg-white/10">
            Learn More
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-7">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-white/80"
            >
              <Check className="h-4 w-4 text-[#1aa39a]" />
              {feature}
            </div>
          ))}
        </div>
      </div>

      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
    </section>
  );
}