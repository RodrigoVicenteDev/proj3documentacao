function Usuariotodos() {
    return ( <>
    <h1>Rota para a Busca de Todos os usuarios</h1>
        <p><b>Verbo:</b>GET</p>
        <p><b>End Point:</b> /usuario/todos<br></br>
            Retorna um Json com os dados de todos os usuarios em uma array:<br></br></p>

            <pre>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>


{`[
	{
		"_id": "6339020456558b173a46404a",
		"nome": "Rodrigo Vicente",
		"email": "dias@gmail.com",
		"receitas": [],
		"comentarios": [],
		"resposta": [],
		"passwordHash": "$2b$10$oOCajCQHW02JEE9md4rGp.CtxySsW7HBMWeDMN1cpPVwlIo9JeIIi",
		"emailConfirm": false,
		"profilePic": "https://toppng.com/uploads/preview/instagram-defaul...",
		"__v": 0
	},
	{
		"_id": "63399eed644b58bf75958080",
		"nome": "Marcelo",
		"email": "marcelo@gmail.com",
		"receitas": [],
		"comentarios": [],
		"resposta": [],
		"passwordHash": "$2b$10$6VGC6M2YxlNdKtwTDbY8ueQEvQdSPIVDbqRmdaNaPtQXSUR8KUp/C",
		"emailConfirm": false,
		"profilePic": "https://toppng.com/uploads/preview/instagram-default-pro...",
		"__v": 0
	}
]
`}

  </code>
            </pre>
            
    </> );
}

export default Usuariotodos;