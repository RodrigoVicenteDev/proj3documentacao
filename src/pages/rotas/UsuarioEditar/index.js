function UsuarioEditar() {
    return ( 
        <>
        <h1>Rota para a edição de usuario</h1>
        <p><b>Verbo:</b>PUT</p>
        <p><b>End Point:</b> /usuario/editar<br></br>
            Retorna um Json com os dados do usuario recem editado:<br></br></p>

            <pre>

            <p>Body:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>

{`{
	"nome" :"Rodrigo Vicente"
}`}

  </code>
<p>Retorno:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>


{`{
	"_id": "6339020456558b173a46404a",
	"nome": "Rodrigo Vicente",
	"email": "dias@gmail.com",
	"receitas": [],
	"comentarios": [],
	"resposta": [],
	"emailConfirm": false,
	"profilePic": "https://toppng.com/uploads/preview/...",
	"__v": 0
}
`}

  </code>
            </pre>
            
        </>
     );
}

export default UsuarioEditar;