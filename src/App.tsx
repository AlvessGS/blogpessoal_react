import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componets/footer/Footer';
import Navbar from './componets/navbar/Navbar';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import ListaTemas from './componets/temas/listatemas/ListaTemas';
import FormTema from './componets/temas/formtema/FormTema';
import DeletarTema from './componets/temas/deletartema/DeletarTema';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>  
    </>
  )
}

export default App