import Principal from '../principal';
import SchemaUsuario from '../Schemas/usuario';
import SchemaComentario from '../Schemas/comentario';
import SchemaReceita from '../Schemas/receita';
import SchemaResposta from '../Schemas/resposta';
import NavBar from '../../components/Navbar';
import SignUp from '../rotas/siginup';
import LogIn from '../rotas/login';
import UsuarioEditar from '../rotas/UsuarioEditar';
import UsuarioId from '../rotas/usuarioId';
import Usuariotodos from '../rotas/Usuariotodos';
import UsuarioLogado from '../rotas/usuariologado';
import ReceitasCriar from '../rotas/receitaCriar';
import ReceitasTodas from '../rotas/receitasTodas';
import ReceitasId from '../rotas/receitaId';
import ReceitaEditar from '../rotas/ReceitaEditar';
import ReceitasAddFav from '../rotas/ReceitaAddfav';
import ReceitaDelFav from '../rotas/ReceitasDellFav';
import { Routes, Route, Link } from "react-router-dom";

function HomePage() {
    return ( <>
    <h1> API Projeto 3 "Receitas" Documentação</h1>
    <div style={{display:"flex"}}>
    <div style={{marginRight:"30px" ,borderRight:"2px gray solid" ,paddingRight:"10px"}}>
     <NavBar/>
     </div>
     <div>
<Routes>

     <Route path="/" element={<Principal/>}/>
     <Route path="/schema/usuario" element={<SchemaUsuario/>}/>
     <Route path="/schema/comentario" element={<SchemaComentario/>}/>
     <Route path="/schema/receita" element={<SchemaReceita/>}/>
     <Route path="/schema/resposta" element={<SchemaResposta/>}/>
     <Route path="/rotas/usuario/signup" element={<SignUp/>}/>
     <Route path="/rotas/usuario/login" element={<LogIn/>}/>
     <Route path="/rotas/usuario/editar" element={<UsuarioEditar/>}/>
     <Route path="/rotas/usuario/id" element={<UsuarioId/>}/>
     <Route path="/rotas/usuario/todos" element={<Usuariotodos/>}/>
     <Route path="/rotas/usuario/logado" element={<UsuarioLogado/>}/>
     <Route path="/rotas/receita/criar" element={<ReceitasCriar/>}/>
     <Route path="/rotas/receita/todas" element={<ReceitasTodas/>}/>
     <Route path="/rotas/receita/buscar/id" element={<ReceitasId/>}/>
     <Route path="/rotas/receita/editar" element={<ReceitaEditar/>}/>
     <Route path="/rotas/receita/favoritos/adicionar" element={<ReceitasAddFav/>}/>
     <Route path="/rotas/receita/favoritos/excluir" element={<ReceitaDelFav/>}/>

</Routes>
</div>
</div>
    </> );
}

export default HomePage;