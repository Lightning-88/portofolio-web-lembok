import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen font-custom bg-stone-900 text-stone-100">
        <Navbar />
        <div className="max-w-screen-xl mx-auto pt-14 md:pt-0">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
