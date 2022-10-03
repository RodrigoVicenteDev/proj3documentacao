function ComentarioCriar() {
    return ( 
    
        <>
        <h1>Rota para a Criação de um Comentario</h1>
        <p><b>Verbo:</b>POST</p>
        <p><b>End Point:</b> /comentario/criar/{`{id}`}<br></br>
            Retorna um Json com o comentario criado <b>sem popular</b>:<br></br></p>

            <pre>
                <p>Body:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>
   {` {
	"content": "Esta receita esta muito gostos 2 a",
	"avaliacao": "5"
}`}
</code>
                <p>Retorno:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>


{`{
	"autor": "63399eed644b58bf75958080",
	"content": "Esta receita esta muito gostos 2 a",
	"receita": "633af3cc65d1c554d8c5be13",
	"resposta": [],
	"avaliacao": 5,
	"_id": "633af3fb65d1c554d8c5be1f",
	"createdAt": "2022-10-03T14:38:51.019Z",
	"updatedAt": "2022-10-03T14:38:51.019Z",
	"__v": 0
}

`}

  </code>
            </pre>
            
        </>
     );
}



export default ComentarioCriar;