
import './App.css';
import Header from './layouts/Header/Header.js';
import Footer from './layouts/Footer/Footer.js';
import Home from './pages/home/Home.js'
import Cart from './pages/Cart/Cart.js'
import Catalog from './pages/Catalog/Catalog.js'
import SinglePage from './pages/Catalog/SinglePage.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/car" element={<SinglePage />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;
