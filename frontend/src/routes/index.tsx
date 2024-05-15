import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Home } from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Projetos from "../pages/Projetos";

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
        <Route path="/login" element={<Login/>} />        
        <Route path="/projetos" element={<Projetos/>} />        
        <Route path="/hello" element={<h1>Hello Word 👻</h1>} />        
        {/* {listaPedidosRoutes()} */}
        {/* <Route
          path="/perfil"
          element={
            <ProtectedLayout>
              <PerfilUsuario />
            </ProtectedLayout>
          }
        /> */}        
        <Route path="*" element={<h1>Pagina Não Encontrada</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};
