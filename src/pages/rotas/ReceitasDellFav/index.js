function ReceitaDelFav() {
    return (  
        <>
        <h1>Rota para Excluir uma receita dos favoritos do usuario</h1>
        <p><b>Verbo:</b>PUT</p>
        <p><b>End Point:</b> /receita/favoritos/excluir/{`{id}`}<br></br>
            Deleta uma receita da lista de favotirtos do usuario logado e -1
             like na receita, retorna a receita desfavoritada<br></br></p>

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
        "favoritos": 0
    }
	
`}

  </code>
            </pre>
            
        </>
    );
}

export default ReceitaDelFav;