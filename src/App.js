import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchAnimals from "./components/SearchAnimals";
import MaterialUiSearch from "./components/MaterialUiSearch";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchAnimals />} />
          <Route path="/mui" element={<MaterialUiSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
