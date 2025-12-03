import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-stone-100 bg-stone-900 font-custom">
        <Navbar />
        <div className="w-full min-h-dvh">
          <div className="container mx-auto pt-8 md:pt-0">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
