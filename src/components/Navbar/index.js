import { Routes, Route, Link } from "react-router-dom";

function NavBar() {
    return ( <>
    <div style={{overflow: "scroll" ,height: "60%", paddingRight:"15px"}}>
   <Link to="/"><p>Principal</p></Link> 
    <p>Schemas</p>
<ul>
    <li><Link to="/schema/usuario">Usuario</Link></li>
    <li><Link to="/schema/comentario">Comentario</Link></li>
    <li><Link to="/schema/receita">Receita</Link></li>
    <li><Link to="/schema/resposta">Resposta</Link></li>
</ul>
<p>Rotas</p>
<p>Usuarios</p>
<ul>
    <li><Link to="/rotas/usuario/signup">SignUp</Link></li>
    <li><Link to="/rotas/usuario/login">LogIn</Link></li>
    <li><Link to="/rotas/usuario/editar">Editar</Link></li>
    <li><Link to="/rotas/usuario/id">Buscar por ID</Link></li>
    <li><Link to="/rotas/usuario/todos">Buscar por todos os usuarios</Link></li>
    <li><Link to="/rotas/usuario/logado">Buscar pelo usuario logado</Link></li>
    
</ul>

<p>Receitas</p>
<ul>
<li><Link to="/rotas/receita/criar">Criar</Link></li>
<li><Link to="/rotas/receita/todas">Busca de todas as receitas</Link></li>
<li><Link to="/rotas/receita/buscar/id">Busca de receita por ID</Link></li>
<li><Link to="/rotas/receita/editar">Editar</Link></li>
<li><Link to="/rotas/receita/favoritos/adicionar">Adicionar aos Favoritos</Link></li>
<li><Link to="/rotas/receita/favoritos/excluir">Deletar dos Favoritos</Link></li>

</ul>

<p>Comentarios</p>
<ul>
<li><Link to="/rotas/comentario/criar">Criar</Link></li>
<li><Link to="/rotas/comentario/editar">Editar</Link></li>
<li><Link to="/rotas/comentario/buscar">popular</Link></li>
</ul>

<p>Respostas</p>
<ul>
<li><Link to="/rotas/resposta/criar">Criar</Link></li>
<li><Link to="/rotas/resposta/editar">Editar</Link></li>
<li><Link to="/rotas/resposta/buscar">popular</Link></li>
</ul>

<Link to="/rotas/delete"><p>Rotas de Delete</p></Link>
<Link to="/rotas/upload"><p>Rota de UpLoad de imagens</p></Link>
</div>
    </> );
}

export default NavBar;