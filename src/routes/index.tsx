import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Home } from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Projetos from "../pages/Projetos";
import Newsletter from "../pages/Newsletter";
import NotFound from "../pages/NotFound";
import Sobre from "../pages/Sobre";
import { ProtectedLayout } from "../components/ ProtectedLayout";
import Perfil from "../pages/Perfil";
import NovoProjeto from "../pages/NovoProjeto";
import ProjetoView from "../pages/ProjetoView";

export const RoutesMain = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />

        <Route path="/projetos" element={<Projetos />} />

        <Route path="/sobre" element={<Sobre />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/projeto/:id" element={<ProjetoView />} />
        <Route
          path="/perfil"
          element={
            <ProtectedLayout>
              <Perfil />
            </ProtectedLayout>
          }
        />

        {/* Rotas de Projeto  */}
        <Route
          path="/criar-projetos"
          element={
            <ProtectedLayout>
              <NovoProjeto />
            </ProtectedLayout>
          }
        />

        <Route
          path="/projeto/editar/:id"
          element={
            <ProtectedLayout>
              <NovoProjeto />
            </ProtectedLayout>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};
