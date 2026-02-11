import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";

// Pages
import { Home, Package } from "./pages/index";
import BundleScope from "./components/BundleScope/BundleScope";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<BundleScope />} />
          <Route path="/package/*" element={<Package />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
