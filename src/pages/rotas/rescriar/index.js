function RespostaCriar() {
    return ( 
        <>
        <h1>Rota para a Criação de uma resposta a um Comentario</h1>
        <p><b>Verbo:</b>POST</p>
        <p><b>End Point:</b> /resposta/criar/{`{id}`}<br></br>
            Retorna um Json com a resposta criada :<br></br></p>

            <pre>
                <p>Body:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>
   {`{
	"content":"Fora bozo"
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
	"content": "Fora bozo",
	"comentario": "633af3fb65d1c554d8c5be1f",
	"resposta": [],
	"_id": "633af40865d1c554d8c5be23",
	"createdAt": "2022-10-03T14:39:04.709Z",
	"updatedAt": "2022-10-03T14:39:04.709Z",
	"__v": 0
}

`}

  </code>
            </pre>
            
        </>
    );
}

export default RespostaCriar;