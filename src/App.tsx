import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guitar from './pages/Guitar';
import Vocal from './pages/Vocal';
import Saxophone from './pages/Saxophone';
import Teachers from './pages/Teachers';
import Prices from './pages/Prices';
import Contacts from './pages/Contacts';
import TrialLesson from './pages/TrialLesson';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-900 text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guitar" element={<Guitar />} />
            <Route path="/vocal" element={<Vocal />} />
            <Route path="/saxophone" element={<Saxophone />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/trial" element={<TrialLesson />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
