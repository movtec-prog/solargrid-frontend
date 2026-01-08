import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Importaremos as outras páginas depois

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* As rotas de Governança e Ferramentas virão aqui */}
      </Routes>
    </Router>
  );
}

export default App;