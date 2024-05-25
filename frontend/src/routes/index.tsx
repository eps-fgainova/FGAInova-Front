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

export const RoutesMain = () => {
  // const { user } = useAuth();

  // const listaPedidosRoutes = () => {
  //   switch (user.funcao) {
  //     case 'Cliente':
  //       return (
  //         <Route
  //
  //           path="/lista-pedidos"
  //           element={<ListaPedidosCliente />}
  //         />
  //       );
  //     case 'Funcionario':
  //       return (
  //         <Route
  //
  //           path="/lista-pedidos"
  //           element={<ListaPedidosFuncionario />}
  //         />
  //       );
  //     case 'Entregador':
  //       return <Route path="/lista-pedidos" />;
  //     default:
  //       return null;
  //   }
  // };

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
        {/* {listaPedidosRoutes()} */}
        <Route
          path="/perfil"
          element={
            <ProtectedLayout>
              <Perfil />
            </ProtectedLayout>
          }
        />

        <Route
          path="/criar-projetos"
          element={
            <ProtectedLayout>
              <h1>Criar-projetos🔥</h1>
            </ProtectedLayout>
          }
        />

        <Route
          path="/meus-projetos"
          element={
            <ProtectedLayout>
              <h1>Meus-projetos🔥</h1>
            </ProtectedLayout>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};
