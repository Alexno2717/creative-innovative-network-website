import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import CreativeCorner from "./pages/CreativeCorner";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/creative-corner" element={<CreativeCorner />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
