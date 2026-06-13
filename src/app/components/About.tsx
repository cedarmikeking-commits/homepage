import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-28 xl:px-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Text column */}
        <div className="lg:col-span-3">
          <p className="text-sm uppercase tracking-[0.2em] text-[#1aa39a]">
            About the Alliance
          </p>
          <div className="mt-8 space-y-5 text-justify leading-relaxed text-[#0d1117]/70">
            <p>
              The Shenzhen Accord Alliance of China High-level Vocational
              Colleges and Universities (referred to as "the Alliance") was
              initiated by twenty-eight vocational colleges and universities in
              China, and was established in Shenzhen, Guangdong Province, China,
              in September 2023.
            </p>
            <p>
              The Alliance aims to develop global partnerships among relevant
              stakeholders, including educational institutions and the private
              sectors worldwide, to build a global system for the cultivation,
              training, and development of skilled talents, to make it possible
              for multinational enterprises to recruit local talents, who, at the
              same time, have chance to work in other countries.
            </p>
            <p>
              The main purpose of the Alliance is to stipulate a set of
              internationally recognized vocational education standards, to
              facilitate the internationally shared learning programs and
              resources based on the common standards, as well as international
              mutual recognition of vocational education curriculum and
              credentials at work fields where the demand for skilled talents is
              relatively strong across the world.
            </p>
          </div>
        </div>

        {/* Image column */}
        <div className="overflow-hidden rounded-2xl shadow-xl lg:col-span-2">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1686213011418-e0caa4aef2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="A group of graduates in caps and gowns celebrating together"
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}