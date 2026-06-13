import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Inquery } from "./components/Inquery";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#f5f6f8]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquery" element={<Inquery />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
