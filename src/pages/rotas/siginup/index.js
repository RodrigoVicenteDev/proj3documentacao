function SignUp() {
    return ( 
        <>
        <h1>Rota para a criação de usuario</h1>
        <p><b>End Point:</b> /usuario/signup<br></br>
            Retorna um Json com os dados do usuario recem cadastrado:<br></br></p>

            <pre>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"1300px"
  }}>


{`{
	"nome": "Rodrigo",
	"email": "dias@gmail.com",
	"receitas": [],
	"comentarios": [],
	"resposta": [],
	"emailConfirm": false,
	"profilePic": "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png",
	"_id": "6339020456558b173a46404a",
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