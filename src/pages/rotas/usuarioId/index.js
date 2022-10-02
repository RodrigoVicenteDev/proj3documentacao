function UsuarioId() {
    return ( 
        <>
        <h1>Rota para a Busca de usuario por ID</h1>
        <p><b>Verbo:</b>GET</p>
        <p><b>End Point:</b> /usuario/{`{id}`}<br></br>
            Retorna um Json com os dados do usuario solicitado:<br></br></p>

            <pre>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"1300px"
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

export default UsuarioId;