function ReceitasCriar() {
    return ( 

        <>
        <h1>Rota para a Criação de uma Receita</h1>
        <p><b>Verbo:</b>POST</p>
        <p><b>End Point:</b> /receita/criar<br></br>
            Retorna um Json com a receita criada e ja vinculado ao autor da mesma <b>sem popular</b>:<br></br></p>

            <pre>
                <p>Body:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"1300px"
  }}>
   {` {
	"nome": "Quiabo a mineira",
	"tempo": "20",
	"feito": "1",
	"dificuldade": "facil",
	"porcoes": "5",
	"ingredientes": [
		"ingrediente1",
		"ingrediente2"
	],
	"preparo": [
		"Passo 1", "passo 2"
	]
}`}
</code>
                <p>Retorno:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>


{`{
	"autor": "6339020456558b173a46404a",
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
	"_id": "6339ac5b6a2380e59cf5b60a",
	"__v": 0

`}

  </code>
            </pre>
            
        </>
     );
}

export default ReceitasCriar;