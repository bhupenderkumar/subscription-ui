import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Subscribers from './pages/Subscribers';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription-plans" element={<Plans />} />
          <Route path="/subscribers" element={<Subscribers />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
