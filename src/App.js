import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import PlatformListing from "./pages/PlatformListing";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />
        <Route exact path="/add-products" element={<AddProduct/>} />
        <Route exact path="/platform-listing" element={<PlatformListing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
