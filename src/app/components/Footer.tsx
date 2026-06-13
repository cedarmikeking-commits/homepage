export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#f5f6f8] px-6 py-14 text-[#1e3a5f] md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-semibold text-[#1d4ed8]">Contact Us</h2>

        <div className="mt-6 grid gap-x-12 gap-y-3 text-sm text-[#0d1117]/70 sm:grid-cols-2 sm:max-w-2xl">
          <p>Email: szaa@mail.szpu.edu.cn</p>
          <p>Fax: (+86) 0755-26019155</p>
          <p>Tel: (+86) 0755-26019155</p>
          <p>Postcode: 518055</p>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#0d1117]/70">
          Address: 6th Floor, Tongde Building, Liuxiandong Campus, Shenzhen
          Polytechnic University, Shenzhen, Guangdong Province, People's Republic
          of China
        </p>
      </div>
    </footer>
  );
}
