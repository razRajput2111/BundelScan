import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import { Home, Package } from "./pages/index";
import BundleScan from "./components/BundleScan/BundleScan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<BundleScan />} />
          <Route path="/package/*" element={<Package />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
