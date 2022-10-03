function ReceitasTodas() {
    return ( 

        <>
        <h1>Rota para buscar todas as receitas</h1>
        <p><b>Verbo:</b>GET</p>
        <p><b>End Point:</b> /receita/todas<br></br>
            Retorna um Json com todas as receitas, populando o autor por nome :<br></br></p>

            <pre>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>


{`[
	{
		"_id": "6339a7ec4da3b67793c68d03",
		"autor": {
			"_id": "6339020456558b173a46404a",
			"nome": "Rodrigo Vicente"
		},
		"imagemurl": "https://img.elo7.com.br/product/zoom/258B7CB/a...",
		"nome": "Frango a passarinho",
		"tempo": 20,
		"feito": 1,
		"dificuldade": "facil",
		"porcoes": 5,
		"ingredientes": [
			"ingrediente1",
			"ingrediente2"
		],
		"preparo": [
			"Passo 1",
			"passo 2"
		],
		"comentarios": [],
		"__v": 0
	},
	{
		"_id": "6339ac5b6a2380e59cf5b60a",
		"autor": {
			"_id": "6339020456558b173a46404a",
			"nome": "Rodrigo Vicente"
		},
		"imagemurl": "https://img.elo7.com.br/product/zoom/258B7CB/a...",
		"nome": "Quiabo a mineira",
		"tempo": 20,
		"feito": 1,
		"dificuldade": "facil",
		"porcoes": 5,
		"ingredientes": [
			"ingrediente1",
			"ingrediente2"
		],
		"preparo": [
			"Passo 1",
			"passo 2"
		],
		"comentarios": [],
		"__v": 0
	}
]
`}

  </code>
            </pre>
            
        </>
     );
}

export default ReceitasTodas;