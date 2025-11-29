import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen bg-fixed font-custom bg-stone-900 bg-[image:repeating-linear-gradient(45deg,_var(--color-stone-800)_0,var(--color-stone-800)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] text-stone-100">
        <Navbar />
        <div className="container mx-auto pt-14 md:pt-0">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
