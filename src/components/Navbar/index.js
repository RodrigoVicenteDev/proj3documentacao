import { Routes, Route, Link } from "react-router-dom";

function NavBar() {
    return ( <>
   <Link to="/"><p>Principal</p></Link> 
    <p>Schemas</p>
<ul>
    <li><Link to="/schema/usuario">Usuario</Link></li>
    <li><Link to="/schema/comentario">Comentario</Link></li>
    <li><Link to="/schema/receita">Receita</Link></li>
    <li><Link to="/schema/resposta">Resposta</Link></li>
</ul>
<p>Rotas</p>

    </> );
}

export default NavBar;