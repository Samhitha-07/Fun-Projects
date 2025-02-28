import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ValentinePage from "./ValentinePage";
import YesPage from "./yes";
import NoPage from "./no";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValentinePage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/no" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
