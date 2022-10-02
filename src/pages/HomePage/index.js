import Principal from '../principal';
import SchemaUsuario from '../Schemas/usuario';
import SchemaComentario from '../Schemas/comentario';
import SchemaReceita from '../Schemas/receita';
import SchemaResposta from '../Schemas/resposta';
import NavBar from '../../components/Navbar';
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
</Routes>
</div>
</div>
    </> );
}

export default HomePage;