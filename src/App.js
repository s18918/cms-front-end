import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;