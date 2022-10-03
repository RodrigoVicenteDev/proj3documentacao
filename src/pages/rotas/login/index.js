function LogIn() {
    return ( 
        <>
        <h1>Rota para o LogIn de usuario</h1>
        <p><b>Verbo:</b>POST</p>
        <p><b>End Point:</b> /usuario/login<br></br>
            Retorna um Json com os dados do usuario recem logado com o Token:<br></br></p>

            <pre>

            <p>Body:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>

    {`{
	"email": "dias@gmail.com",
	"password": "Senhaserura@123"
}`}
</code>




              <p>Retorno:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
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