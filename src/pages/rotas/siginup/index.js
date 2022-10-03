function SignUp() {
    return ( 
        <>
        <h1>Rota para a criação de usuario</h1>
        <p><b>Verbo:</b>POST</p>
        <p><b>End Point:</b> /usuario/signup<br></br>
            Retorna um Json com os dados do usuario recem cadastrado:<br></br></p>

            <pre>

            <p>Body:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>
    {`{
	"nome": "Marcelo",
	"email": "marcelo@gmail.com",
	"password":"Senhaserura@123"
}`}
  </code>


              <p>Retorno:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>


{`{
	"nome": "Marcelo",
	"email": "marcelo@gmail.com",
	"receitas": [],
	"comentarios": [],
	"resposta": [],
	"emailConfirm": false,
	"profilePic": "https://toppng.com/uploads/preview/inst...",
	"_id": "63399eed644b58bf75958080",
	"__v": 0
}
`}

  </code>
            </pre>
            <p><b>Segurança:</b> A senha é armazenada com Hash 256 e SALT 10, <b>Ela não é retornada na resposta</b></p>
            <p>A senha deve contar pelo menos uma letra maiuscula, um caracter especial e um numero</p>

        </>
     );
}

export default SignUp;