function ComentarioEditar() {
    return (

        <>
        <h1>Rota para a edição de um Comentario</h1>
        <p><b>Verbo:</b>PUT</p>
        <p><b>End Point:</b> /comentario/editar/{`{id}`}<br></br>
            Retorna um Json com o comentario editado:<br></br></p>

            <pre>
                <p>Body:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>
   {`{
	"content":"não é tão boas assim"
}`}
</code>
                <p>Retorno:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>


{`{
	"_id": "6339c5f3bad2cb7fdf4806d6",
	"autor": "6339020456558b173a46404a",
	"content": "não é tão boas assim",
	"resposta": [],
	"avaliacao": 5,
	"createdAt": "2022-10-02T17:10:11.914Z",
	"updatedAt": "2022-10-02T20:15:31.948Z",
	"__v": 0
}

`}

  </code>
            </pre>
            
        </>

      );
}

export default ComentarioEditar;