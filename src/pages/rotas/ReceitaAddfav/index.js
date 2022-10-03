function ReceitasAddFav() {
    return ( 
        <>
        <h1>Rota para adicionar uma receita aos favoritos do usuario</h1>
        <p><b>Verbo:</b>PUT</p>
        <p><b>End Point:</b> /receita/favoritos/adicionar/{`{id}`}<br></br>
            Adiciona uma receita a lista de favotirtos do usuario logado e +1
             like na receita, retorna a receita favoritada<br></br></p>

            <pre>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>


{`
	{
        "_id": "6339a7ec4da3b67793c68d03",
        "autor": "6339020456558b173a46404a",
        "imagemurl": "https://img.elo7.com.br/product/zoom/258B7CB/a...",
        "nome": "quiabo com manjericao",
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
        "__v": 0,
        "favoritos": 1
    }
	
`}

  </code>
            </pre>
            
        </>
     );
}

export default ReceitasAddFav;