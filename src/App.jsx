import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TablePage from "./pages/TablePage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <Router>
      <nav className="bg-white border-b shadow px-6 py-4 flex justify-between items-center">
        <span className="text-primary text-xl font-bold">Memes</span>
        <div className="space-x-4">
          <Link to="/" className="text-muted hover:text-primary transition">
            Таблиця
          </Link>
          <Link to="/list" className="text-muted hover:text-primary transition">
            Картки
          </Link>
        </div>
      </nav>

      <main className="bg-bg min-h-screen p-6">
        <Routes>
          <Route path="/" element={<TablePage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
