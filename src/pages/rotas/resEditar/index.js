function RespostaEditar() {
    return ( 
        
        <>
        <h1>Rota para a edição de uma Resposta</h1>
        <p><b>Verbo:</b>PUT</p>
        <p><b>End Point:</b> /resposta/editar/{`{id}`}<br></br>
            Retorna um Json com a resposta editada:<br></br></p>

            <pre>
                <p>Body:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>
   {`{
	"content": "Não foi dessa vez"
}`}
</code>
                <p>Retorno:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>


{`{
	"_id": "633adfd637507bc93f653d04",
	"autor": "6339020456558b173a46404a",
	"content": "Não foi dessa vez",
	"resposta": [],
	"createdAt": "2022-10-03T13:12:54.109Z",
	"updatedAt": "2022-10-03T13:18:25.525Z",
	"__v": 0
}

`}

  </code>
            </pre>
            
        </>

     );
}

export default RespostaEditar;