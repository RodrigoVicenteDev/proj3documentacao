function LogIn() {
    return ( 
        <>
        <h1>Rota para o LogIn de usuario</h1>
        <p><b>End Point:</b> /usuario/login<br></br>
            Retorna um Json com os dados do usuario recem logado com o Token:<br></br></p>

            <pre>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"1000px"
  }}>


{`{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC...",
	"user": {
		"_id": "6339020456558b173a46404a",
		"nome": "Rodrigo",
		"email": "dias@gmail.com",
		"receitas": [],
		"comentarios": [],
		"resposta": [],
		"emailConfirm": false,
		"profilePic": "https://toppng.com/uploads/pre...",
		"__v": 0
	}
}
`}

  </code>
            </pre>
            
        </>
     );
}

export default LogIn;